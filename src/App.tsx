import { useState } from 'react';
import { sendMessageToGemini } from './geminiService';
import './App.css';

function App() {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<{ role: string, text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  const synth = window.speechSynthesis;

  const speak = (text: string) => {
    if (synth.speaking) return;
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.lang = 'ar-SA';
    utterThis.rate = 1;
    synth.speak(utterThis);
  };

  const handleLogin = () => {
    if (accessCode === '38355561') {
      setIsAuthenticated(true);
      speak("تم تأكيد الهوية. أهلاً بك يا بن مسفر.");
      setMessages([{ role: 'ai', text: 'نظام سحّان X99 متصل. الـ 116 عنصراً جاهزة.' }]);
    } else {
      alert("⚠️ رمز السيادة خاطئ!");
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const response = await sendMessageToGemini(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="login-screen nano-banana-theme">
        <h1 className="glitch">SAHHAN X99</h1>
        <input type="password" value={accessCode} onChange={(e) => setAccessCode(e.target.value)} placeholder="ACCESS KEY" className="security-input" />
        <button onClick={handleLogin} className="cyber-btn">VERIFY</button>
      </div>
    );
  }

  return (
    <div className="main-interface nano-banana-theme">
      <header className="sahhan-header">
        <h2>PROTOCOLE SAHHAN <span className="status-dot"></span></h2>
      </header>
      <div className="chat-area">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>{msg.text}</div>
        ))}
        {loading && <div className="loading">جاري المعالجة...</div>}
      </div>
      <div className="input-area">
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="أدخل الأمر..." />
        <button onClick={handleSend}>إرسال</button>
      </div>
    </div>
  );
}

export default App;
