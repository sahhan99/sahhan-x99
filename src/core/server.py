#!/usr/bin/env python3
# Minimal core HTTP server to accept POST /api/command and call the Google Generative API.
# Usage:
#   export GOOGLE_API_KEY="YOUR_API_KEY"
#   python3 src/core/server.py

import os
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

API_KEY = os.environ.get("GOOGLE_API_KEY") or os.environ.get("GROQ_API_KEY")
if not API_KEY:
    app.logger.warning("No GOOGLE_API_KEY / GROQ_API_KEY found in environment. The server will return an error until it's set.")

GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

@app.route("/api/command", methods=["POST"])
def command():
    if not API_KEY:
        return jsonify({"error": "Server misconfigured: API key missing"}), 500

    payload = request.get_json(silent=True) or {}
    cmd = payload.get("command") or payload.get("prompt") or ""
    if not cmd:
        return jsonify({"error": "Missing 'command' field in JSON body"}), 400

    try:
        url = f"{GEMINI_URL}?key={API_KEY}"
        headers = {"Content-Type": "application/json"}
        # Basic request shape used elsewhere in repo examples
        body = {
            "contents": [{"parts": [{"text": cmd}]}]
        }

        resp = requests.post(url, headers=headers, json=body, timeout=30)
        resp.raise_for_status()
        data = resp.json()

        # Extract text safely
        text = None
        try:
            text = data["candidates"][0]["content"][0]["parts"][0]["text"]
        except Exception:
            # Fallback: try alternative path used in some examples
            try:
                text = data["candidates"][0]["content"][0]["parts"][0]["text"]
            except Exception:
                # Last resort: stringify entire response
                text = str(data)

        return jsonify({"reply": text})
    except requests.RequestException as e:
        app.logger.exception("Request to Google Generative API failed")
        return jsonify({"error": "Failed to reach generative API", "details": str(e)}), 502
    except Exception as e:
        app.logger.exception("Unexpected error")
        return jsonify({"error": "Unexpected server error", "details": str(e)}), 500

if __name__ == "__main__":
    # Bind to 0.0.0.0 so other devices on LAN can reach it
    app.run(host="0.0.0.0", port=8080, debug=False)