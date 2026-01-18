<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>سحّان X99 — الواجهة السيادية</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    :root {
      --bg: #050509;
      --bg-alt: #0b0b12;
      --accent: #f5c451;
      --accent-soft: rgba(245, 196, 81, 0.12);
      --accent-strong: rgba(245, 196, 81, 0.3);
      --text: #f5f5f5;
      --muted: #9b9bb5;
      --danger: #ff4b6b;
      --success: #4ade80;
      --border: #1f1f2b;
      --radius-lg: 18px;
      --radius-md: 12px;
      --radius-sm: 8px;
      --shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.65);
      --font-main: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: var(--font-main);
      background: radial-gradient(circle at top, #151521 0, #050509 55%, #000 100%);
      color: var(--text);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }

    .shell {
      width: 100%;
      max-width: 1120px;
      background: linear-gradient(145deg, rgba(15, 15, 25, 0.96), rgba(5, 5, 12, 0.98));
      border-radius: 28px;
      border: 1px solid rgba(245, 196, 81, 0.18);
      box-shadow: var(--shadow-soft);
      padding: 22px 22px 18px;
      position: relative;
      overflow: hidden;
    }

    .shell::before {
      content: "";
      position: absolute;
      inset: -40%;
      background:
        radial-gradient(circle at 10% 0%, rgba(245, 196, 81, 0.08) 0, transparent 55%),
        radial-gradient(circle at 90% 0%, rgba(120, 119, 198, 0.12) 0, transparent 55%);
      opacity: 0.9;
      pointer-events: none;
    }

    .shell-inner {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
      gap: 18px;
    }

    @media (max-width: 880px) {
      .shell-inner {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
      gap: 12px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .brand-mark {
      width: 34px;
      height: 34px;
      border-radius: 999px;
      border: 1px solid rgba(245, 196, 81, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle at 30% 0%, #f5c451 0, #8b6b2b 40%, #1b1405 100%);
      box-shadow: 0 0 22px rgba(245, 196, 81, 0.55);
      font-size: 20px;
    }

    .brand-text-main {
      font-weight: 600;
      letter-spacing: 0.06em;
      font-size: 14px;
      text-transform: uppercase;
      color: #f9e7b0;
    }

    .brand-text-sub {
      font-size: 11px;
      color: var(--muted);
    }

    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(148, 163, 184, 0.4);
      font-size: 11px;
      color: var(--muted);
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: var(--success);
      box-shadow: 0 0 10px rgba(74, 222, 128, 0.9);
    }

    .status-label {
      font-weight: 500;
      color: #e5e7eb;
    }

    .status-sub {
      opacity: 0.7;
    }

    .panel {
      background: radial-gradient(circle at top left, rgba(245, 196, 81, 0.08) 0, transparent 55%), rgba(10, 10, 18, 0.96);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(148, 163, 184, 0.35);
      padding: 14px 14px 12px;
      position: relative;
      overflow: hidden;
    }

    .panel::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(245, 196, 81, 0.08), transparent 40%, transparent 60%, rgba(120, 119, 198, 0.08));
      opacity: 0.7;
      pointer-events: none;
    }

    .panel-inner {
      position: relative;
      z-index: 1;
    }

    .panel-title {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #e5e7eb;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .panel-title span {
      font-size: 11px;
      font-weight: 400;
      color: var(--muted);
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      margin-top: 4px;
    }

    @media (max-width: 880px) {
      .metrics-grid {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    .metric {
      background: radial-gradient(circle at top, rgba(15, 23, 42, 0.9) 0, rgba(15, 23, 42, 0.98) 55%, #020617 100%);
      border-radius: var(--radius-md);
      border: 1px solid rgba(30, 64, 175, 0.6);
      padding: 8px 9px 7px;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .metric-label {
      font-size: 11px;
      color: var(--muted);
    }

    .metric-value {
      font-size: 13px;
      font-weight: 500;
      color: #e5e7eb;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .metric-pill {
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(148, 163, 184, 0.5);
      color: #cbd5f5;
    }

    .metric-badge-green {
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 999px;
      background: rgba(22, 163, 74, 0.12);
      border: 1px solid rgba(34, 197, 94, 0.7);
      color: #bbf7d0;
    }

    .metric-badge-gold {
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 999px;
      background: rgba(245, 196, 81, 0.12);
      border: 1px solid rgba(245, 196, 81, 0.7);
      color: #fef3c7;
    }

    .metric-sub {
      font-size: 10px;
      color: #6b7280;
    }

    .console {
      margin-top: 10px;
      background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.9) 0, #020617 60%);
      border-radius: var(--radius-md);
      border: 1px solid rgba(30, 64, 175, 0.7);
      padding: 8px 9px;
      font-family: var(--font-mono);
      font-size: 11px;
      color: #e5e7eb;
      max-height: 180px;
      overflow-y: auto;
      white-space: pre-wrap;
    }

    .console-line {
      display: flex;
      gap: 6px;
      align-items: flex-start;
    }

    .console-prefix {
      color: #4b5563;
      user-select: none;
    }

    .console-text {
      flex: 1;
    }

    .console-highlight {
      color: #facc15;
    }

    .console-success {
      color: #4ade80;
    }

    .console-error {
      color: #fb7185;
    }

    .console-muted {
      color: #9ca3af;
    }

    .chat-panel {
      display: flex;
      flex-direction: column;
      gap: 8px;
      height: 100%;
    }

    .chat-log {
      flex: 1;
      min-height: 150px;
      max-height: 260px;
      background: radial-gradient(circle at top, rgba(15, 23, 42, 0.9) 0, #020617 60%);
      border-radius: var(--radius-md);
      border: 1px solid rgba(30, 64, 175, 0.7);
      padding: 8px 9px;
      overflow-y: auto;
      font-size: 12px;
    }

    .chat-message {
      margin-bottom: 6px;
      padding: 6px 7px;
      border-radius: 9px;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(30, 64, 175, 0.7);
    }

    .chat-message.system {
      border-color: rgba(245, 196, 81, 0.7);
      background: radial-gradient(circle at top left, rgba(245, 196, 81, 0.08) 0, rgba(15, 23, 42, 0.96) 55%);
    }

    .chat-message-label {
      font-size: 10px;
      color: #9ca3af;
      margin-bottom: 2px;
    }

    .chat-message-text {
      font-size: 12px;
      color: #e5e7eb;
    }

    .chat-input-row {
      display: flex;
      gap: 8px;
      margin-top: 4px;
    }

    .chat-input {
      flex: 1;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.6);
      background: rgba(15, 23, 42, 0.96);
      padding: 8px 12px;
      color: #e5e7eb;
      font-size: 12px;
      font-family: var(--font-main);
      outline: none;
      transition: border 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
    }

    .chat-input::placeholder {
      color: #6b7280;
    }

    .chat-input:focus {
      border-color: rgba(245, 196, 81, 0.9);
      box-shadow: 0 0 0 1px rgba(245, 196, 81, 0.5);
      background: rgba(15, 23, 42, 0.98);
    }

    .chat-send-btn {
      border-radius: 999px;
      border: 1px solid rgba(245, 196, 81, 0.9);
      background: radial-gradient(circle at 30% 0%, #facc15 0, #f59e0b 40%, #854d0e 100%);
      color: #111827;
      font-size: 12px;
      font-weight: 600;
      padding: 0 14px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
      box-shadow: 0 10px 25px rgba(245, 158, 11, 0.45);
      transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
    }

    .chat-send-btn:hover {
      transform: translateY(-1px);
      filter: brightness(1.05);
      box-shadow: 0 14px 30px rgba(245, 158, 11, 0.6);
    }

    .chat-send-btn:active {
      transform: translateY(0);
      box-shadow: 0 6px 16px rgba(245, 158, 11, 0.5);
    }

    .chat-send-btn[disabled] {
      opacity: 0.6;
      cursor: default;
      box-shadow: none;
      transform: none;
    }

    .footer {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      font-size: 10px;
      color: var(--muted);
    }

    .footer-left {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .footer-pill {
      padding: 3px 7px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.5);
      background: rgba(15, 23, 42, 0.9);
      font-size: 10px;
      color: #e5e7eb;
    }

    .footer-right {
      text-align: left;
      direction: ltr;
      font-family: var(--font-mono);
      font-size: 10px;
      color: #6b7280;
    }

    .link {
      color: #facc15;
      text-decoration: none;
    }

    .link:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="shell">
    <div class="header">
      <div class="brand">
        <div class="brand-mark">𐌔</div>
        <div>
          <div class="brand-text-main">SAHHAN X99</div>
          <div class="brand-text-sub">Sovereign Intelligence Interface</div>
        </div>
      </div>
      <div class="status-pill" id="status-pill">
        <div class="status-dot" id="status-dot"></div>
        <div>
          <div class="status-label" id="status-label">متصل بالنواة</div>
          <div class="status-sub" id="status-sub">LAN: في انتظار أول أمر…</div>
        </div>
      </div>
    </div>

    <div class="shell-inner">
      <!-- لوحة الحالة / القبو -->
      <div class="panel">
        <div class="panel-inner">
          <div class="panel-title">
            لوحة التحكم السيادية
            <span>Core Telemetry</span>
          </div>

          <div class="metrics-grid">
            <div class="metric">
              <div class="metric-label">حالة القبو السحابي</div>
              <div class="metric-value">
                <span class="metric-badge-green" id="vault-status">نشط</span>
                <span class="metric-sub" id="vault-sub">جاهز لاستقبال الأوامر</span>
              </div>
            </div>

            <div class="metric">
              <div class="metric-label">بروتوكول التشفير</div>
              <div class="metric-value">
                AES-256 CTR
                <span class="metric-pill">الستر المطلق</span>
              </div>
              <div class="metric-sub">طبقة التشفير من مسؤولية النواة</div>
            </div>

            <div class="metric">
              <div class="metric-label">نقطة الاتصال</div>
              <div class="metric-value">
                <span id="endpoint-label">http://192.168.8.16:8080</span>
              </div>
              <div class="metric-sub">يمكن تعديلها من الكود أو من الإعدادات لاحقًا</div>
            </div>

            <div class="metric">
              <div class="metric-label">جلسة سحّان</div>
              <div class="metric-value">
                <span class="metric-badge-gold" id="session-id">X99-LOCAL-LAN</span>
              </div>
              <div class="metric-sub">الواجهة متصلة بوضع LAN سيادي</div>
            </div>
          </div>

          <div class="console" id="console">
            <div class="console-line">
              <span class="console-prefix">›</span>
              <span class="console-text console-muted">
                سحّان X99 جاهز. اكتب أمرك في الحقل على اليمين واضغط "إرسال إلى النواة".
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- لوحة التفاعل / الأوامر -->
      <div class="panel">
        <div class="panel-inner chat-panel">
          <div class="panel-title">
            قناة الأوامر
            <span>Command Channel</span>
          </div>

          <div class="chat-log" id="chat-log">
            <div class="chat-message system">
              <div class="chat-message-label">النظام</div>
              <div class="chat-message-text">
                🐺 نظام سحّان X99 في وضع الاستقبال.  
                هذه القناة مخصصة للأوامر السيادية المرسلة إلى النواة.
              </div>
            </div>
          </div>

          <div class="chat-input-row">
            <input
              id="command-input"
              class="chat-input"
              type="text"
              placeholder="اكتب أمرك هنا… مثال: استخرج ملخصًا من آخر جلسة"
            />
            <button id="send-btn" class="chat-send-btn">
              <span>إرسال إلى النواة</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-left">
        <div class="footer-pill">سحّان X99 — واجهة سيادية</div>
        <span>كل أمر يُسجَّل، وكل تفاعل يُؤثِّر.</span>
      </div>
      <div class="footer-right">
        github.com/sahhan99/sahhan-x99
      </div>
    </div>
  </div>

  <script>
    // === إعدادات الاتصال بالنواة عبر LAN ===
    // عدّل هذا العنوان ليتطابق مع IP جهازك ومنفذ النواة
    const CORE_ENDPOINT = "http://192.168.8.16:8080/api/command";

    const statusDot = document.getElementById("status-dot");
    const statusLabel = document.getElementById("status-label");
    const statusSub = document.getElementById("status-sub");
    const consoleEl = document.getElementById("console");
    const chatLog = document.getElementById("chat-log");
    const inputEl = document.getElementById("command-input");
    const sendBtn = document.getElementById("send-btn");
    const endpointLabel = document.getElementById("endpoint-label");

    endpointLabel.textContent = CORE_ENDPOINT.replace("/api/command", "");

    function appendConsoleLine(text, type = "info") {
      const line = document.createElement("div");
      line.className = "console-line";

      const prefix = document.createElement("span");
      prefix.className = "console-prefix";
      prefix.textContent = type === "error" ? "!" : type === "success" ? "✓" : "›";

      const body = document.createElement("span");
      body.className = "console-text";
      if (type === "error") body.classList.add("console-error");
      if (type === "success") body.classList.add("console-success");
      if (type === "muted") body.classList.add("console-muted");
      body.textContent = text;

      line.appendChild(prefix);
      line.appendChild(body);
      consoleEl.appendChild(line);
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }

    function appendChatMessage(text, role = "user") {
      const msg = document.createElement("div");
      msg.className = "chat-message" + (role === "system" ? " system" : "");
      const label = document.createElement("div");
      label.className = "chat-message-label";
      label.textContent = role === "user" ? "أنت" : "النواة";

      const body = document.createElement("div");
      body.className = "chat-message-text";
      body.textContent = text;

      msg.appendChild(label);
      msg.appendChild(body);
      chatLog.appendChild(msg);
      chatLog.scrollTop = chatLog.scrollHeight;
    }

    async function sendCommand() {
      const command = inputEl.value.trim();
      if (!command) return;

      appendChatMessage(command, "user");
      inputEl.value = "";
      inputEl.focus();

      sendBtn.disabled = true;
      sendBtn.textContent = "جارٍ الإرسال…";

      appendConsoleLine("إرسال الأمر إلى النواة عبر " + CORE_ENDPOINT, "muted");

      try {
        const res = await fetch(CORE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ command })
        });

        if (!res.ok) {
          throw new Error("HTTP " + res.status);
        }

        const data = await res.json();
        const reply = data.reply || "[لا يوجد رد من النواة]";

        appendChatMessage(reply, "system");
        appendConsoleLine("تم استلام رد من النواة.", "success");

        statusDot.style.background = "#4ade80";
        statusLabel.textContent = "متصل بالنواة";
        statusSub.textContent = "آخر تفاعل ناجح قبل لحظات.";
      } catch (err) {
        appendConsoleLine("تعذر الاتصال بالنواة: " + err.message, "error");
        statusDot.style.background = "#fb7185";
        statusLabel.textContent = "تعذر الاتصال";
        statusSub.textContent = "تحقق من تشغيل النواة و IP/المنفذ.";
      } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = "إرسال إلى النواة";
      }
    }

    sendBtn.addEventListener("click", sendCommand);
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendCommand();
      }
    });

    appendConsoleLine("تم تحميل واجهة سحّان X99 بنجاح.", "success");
    appendConsoleLine("نقطة الاتصال الحالية: " + CORE_ENDPOINT, "muted");
  </script>
</body>
</html>
