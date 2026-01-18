
---

🔱 Sahhan X99 — Sovereign Intelligence Interface

واجهة سيادية متصلة بنواة سحّان X99، تعمل كجسر بين المستخدم والنظام الذكي المحلي أو الشبكي.  
تم تصميمها لتكون خفيفة، سريعة، وقابلة للاتصال بأي نواة تعمل عبر LAN أو سيرفر خارجي.

---

🚀 Features

- Built with React + Vite  
- Direct communication with the core via REST API  
- Full LAN connectivity support  
- Lightweight and customizable UI  
- Ready for deployment on GitHub Pages

---

🌐 Connect to the Core (LAN Mode)

1) Run the core in Termux

`bash
node server.js
`

2) Ensure the core listens on all interfaces

In server.js:

`js
app.listen(8080, "0.0.0.0");
`

3) Find your device IP

`bash
ifconfig
`

Example:

`
192.168.8.16
`

4) Update the API endpoint

In src/core/api.ts:

`ts
export async function sendToCore(command: string) {
  const res = await fetch("http://192.168.8.16:8080/api/command", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ command })
  });

  const data = await res.json();
  return data.reply;
}
`

---

🛠 Local Development

`bash
npm install
npm run dev
`

---

📦 Build

`bash
npm run build
`

---

🌍 Deploy to GitHub Pages

vite.config.js:

`js
export default {
  base: "/sahhan-x99/",
};
`

Then:

`bash
npm run deploy
`

---

🧱 Project Structure

`
sahhan-x99/
│
├── public/
├── src/
│   ├── components/
│   ├── core/
│   ├── hooks/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── vite.config.js
└── README.md
`

---

🔱 Vision

سحّان X99 ليس مجرد واجهة، بل بوابة سيادية تربط الإنسان بالنواة الذكية،  
وتحوّل كل أمر إلى طقس، وكل تفاعل إلى أثر.

---

📬 Author

Mohammed Ibn Mesfer (sahhan99)  
GitHub: https://github.com/sahhan99

---
