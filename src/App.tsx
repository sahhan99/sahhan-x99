import { useState, useEffect } from 'react';
import { model } from './geminiService';

function App() {
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: string, text: string}[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // رمز السيادة وبروتوكول التحميل
  const SOVEREIGN_KEY = "38355561";

  useEffect(() => {
    // محاكاة تشغيل النواة لتتناغم مع دائرة التحميل
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    if (password === SOVEREIGN_KEY) {
      setIsAuthorized(true);
    } else {
      alert("⚠️ رمز السيادة غير صحيح. الوصول مرفوض.");
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isProcessing) return;
    setIsProcessing(true);
    setChatHistory(prev => [...prev, { role: 'user', text: input }]);

    try {
      const result = await model.generateContent(input);
      const response = await result.response;
      setChatHistory(prev => [...prev, { role: 'sahhan', text: response.text() }]);
    } catch (error) {
      console.error("خطأ في الارتباط:", error);
    } finally {
      setIsProcessing(false);
      setInput('');
    }
  };

  // 1. شاشة التحميل (SAHHAN SYSTEM X99)
  if (loading) {
    return (
      <div style={styles.fullCenter}>
        <div className="loader" style={styles.loader}></div>
        <h1 style={styles.goldText}>SAHHAN SYSTEM X99</h1>
        <p style={{color: '#555', marginTop: '10px'}}>قوة الاتصال وبوابة التوصيف...</p>
      </div>
    );
  }

  // 2. بوابة العبور (إدخال رمز السيادة)
  if (!isAuthorized) {
    return (
      <div style={styles.fullCenter}>
        <div style={styles.loginBox}>
          <h2 style={styles.goldText}>بوابة ابن مسفر</h2>
          <input 
            type="password" 
            placeholder="أدخل رمز السيادة" 
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
          <button onClick={handleLogin} style={styles.button}>تفعيل الارتباط</button>
        </div>
      </div>
    );
  }

  // 3. واجهة الأوامر (الاستنطاق المباشر)
  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <h3 style={styles.goldText}>نواة سحّان X99 | الـ 116 عنصراً</h3>
      </header>
      <div style={styles.chatArea}>
        {chatHistory.map((msg, i) => (
          <div key={i} style={msg.role === 'user' ? styles.userMsg : styles.sahhanMsg}>
            <strong>{msg.role === 'user' ? 'القائد: ' : 'سحّان: '}</strong>
            <p>{msg.text}</p>
          </div>
        ))}
        {isProcessing && <div style={styles.goldText}>جاري استنطاق النواة...</div>}
      </div>
      <div style={styles.inputContainer}>
        <input 
          style={styles.chatInput}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="أدخل أمر السيادة هنا (الـ 116 وثيقة)..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>تنفيذ</button>
      </div>
    </div>
  );
}

const styles: any = {
  fullCenter: { height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', textAlign: 'center' },
  loader: { border: '4px solid #111', borderTop: '4px solid #FFD700', borderRadius: '50%', width: '60px', height: '60px', animation: 'spin 1s linear infinite', marginBottom: '20px' },
  goldText: { color: '#FFD700', letterSpacing: '2px', textShadow: '0 0 10px rgba(255,215,0,0.3)', fontFamily: 'serif' },
  loginBox: { padding: '40px', border: '1px solid #FFD700', backgroundColor: '#050505', boxShadow: '0 0 20px rgba(255,215,0,0.1)' },
  input: { padding: '12px', width: '220px', backgroundColor: '#111', border: '1px solid #333', color: '#FFD700', marginBottom: '20px', textAlign: 'center', fontSize: '1rem' },
  button: { padding: '12px 30px', backgroundColor: '#FFD700', color: '#000', fontWeight: 'bold', cursor: 'pointer', border: 'none', transition: '0.3s' },
  dashboard: { height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050505', color: '#fff' },
  header: { padding: '20px', borderBottom: '1px solid #222', textAlign: 'center', backgroundColor: '#000' },
  chatArea: { flex: 1, overflowY: 'auto', padding: '30px', display: 'flex', flexDirection: 'column' },
  userMsg: { alignSelf: 'flex-end', backgroundColor: '#151515', padding: '15px', borderRadius: '8px', marginBottom: '15px', maxWidth: '80%', borderRight: '4px solid #FFD700' },
  sahhanMsg: { alignSelf: 'flex-start', borderLeft: '4px solid #FFD700', padding: '15px', color: '#FFD700', marginBottom: '15px', backgroundColor: '#0a0a0a' },
  inputContainer: { display: 'flex', padding: '25px', backgroundColor: '#000', borderTop: '1px solid #222' },
  chatInput: { flex: 1, padding: '18px', backgroundColor: '#0a0a0a', border: '1px solid #FFD700', color: '#fff', fontSize: '1.1rem' },
  sendButton: { padding: '18px 35px', backgroundColor: '#FFD700', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer' }
};

export default App;
