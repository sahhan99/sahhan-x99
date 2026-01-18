export async function sendToCore(command: string) {
  const res = await fetch("http://127.0.0.1:8080/api/command", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ command })
  });

  const data = await res.json();
  return data.reply;
}
