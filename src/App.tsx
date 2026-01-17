import { useState, useEffect, useRef } from 'react';
import { sendMessageToGemini } from './geminiService';
import './App.css'; // سنقوم بإنشاء الستايل لاحقاً

function App() {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<{ role: string, text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  // مرجع للصوت
  const synth = window.speechSynthesis;

  const speak = (text: string) => {
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.lang = 'ar-SA'; // نطق عربي
    utterThis.pitch = 0.8; // نبرة عميقة
    utterThis.rate = 1;
    synth.speak(utterThis);
  };

  const handleLogin = () => {
    if (accessCode === '38355561') {
      setIsAuthenticated(true);
      speak("العهد الجديد.. أهلاً بك يا بن مسفر في بروتوكول سحّان.");
      // رسالة ترحيبية آلية
      setMessages([{ role: 'ai', text: 'نظام سحّان X99 متصل. الـ 116 عنصراً جاهزة للأمر.' }]);
    } else {
      alert("⚠️ مفتاح السيادة غير صحيح! محاولة دخول غير مصرح بها.");
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    const response = await sendMessageToGemini(userMessage);
    
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setLoading(false);
    
    // قراءة الرد صوتياً (اختياري - يمكن إيقافه إذا كان النص طويلاً)
    // speak(response.substring(0, 100)); 
  };

  if (!isAuthenticated) {
    return (
      <div className="login-screen nano-banana-theme">
        <h1 className="glitch">SAHHAN X99</h1>
        <p>أدخل مفتاح السيادة للولوج</p>
        <input 
          type="password" 
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          placeholder="ACCESS KEY"
          className="security-input"
        />
        <button onClick={handleLogin} className="cyber-btn">VERIFY</button>
      </div>
    );
  }

  return (
    <div className="main-interface nano-banana-theme">
      <header className="sahhan-header">
        <h2>PROTOCOLE SAHHAN <span className="status-dot"></span></h2>
        <div className="stats">116 ELEMENTS ACTIVE</div>
      </header>

      <div className="chat-area">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            <div className="message-content">{msg.text}</div>
          </div>
        ))}
        {loading && <div className="loading">جاري معالجة البيانات...</div>}
      </div>

      <div className="input-area">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="أصدر أوامرك للنظام..."
        />
        <button onClick={handleSend}>إرسال</button>
      </div>
    </div>
  );
}

export default App;
