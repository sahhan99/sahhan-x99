import { useState } from 'react';
import { model } from './geminiService'; // تأكد من تسمية ملف الخدمة بـ geminiService.ts

function App() {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: string, text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // رمز السيادة المطلوب للعبور
  const SOVEREIGN_KEY = "38355561";

  const handleLogin = () => {
    if (password === SOVEREIGN_KEY) {
      setIsAuthorized(true);
    } else {
      alert("⚠️ رمز السيادة غير صحيح. الوصول مرفوض.");
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    const userMessage = { role: 'user', text: input };
    setChatHistory([...chatHistory, userMessage]);
    
    try {
      const result = await model.generateContent(input);
      const response = await result.response;
      const sahhanResponse = { role: 'sahhan', text: response.text() };
      setChatHistory(prev => [...prev, sahhanResponse]);
    } catch (error) {
      console.error("خطأ في الاتصال بالنواة:", error);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  // شاشة تسجيل الدخول (نافذة كلمة السر)
  if (!isAuthorized) {
    return (
      <div className="login-container" style={styles.container}>
        <div style={styles.loginBox}>
          <h1 style={styles.goldText}>بروتوكول سحّان X99</h1>
          <p style={{ color: '#888' }}>أدخل رمز السيادة للولوج إلى الـ 116 عنصراً</p>
          <input 
            type="password" 
            placeholder="رمـز الـعـبـور" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>تفعيل الارتباط</button>
        </div>
      </div>
    );
  }

  // واجهة استنطاق النواة (بعد تسجيل الدخول)
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.goldText}>النواة الفكرية | القائد بن مسفر</h2>
      </header>
      
      <div style={styles.chatBox}>
        {chatHistory.map((msg, index) => (
          <div key={index} style={msg.role === 'user' ? styles.userMsg : styles.sahhanMsg}>
            <strong>{msg.role === 'user' ? 'ابن مسفر: ' : 'سحّان: '}</strong>
            {msg.text}
          </div>
        ))}
        {isLoading && <p style={{color: '#FFD700'}}>جاري استنطاق النواة...</p>}
      </div>

      <div style={styles.inputArea}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="أرسل أمراً للنواة السيادية..."
          style={styles.chatInput}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>إرسال</button>
      </div>
    </div>
  );
}

// أنماط التصميم (Nano Banana Theme)
const styles: any = {
  container: {
    backgroundColor: '#050505',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'Cairo, sans-serif'
  },
  loginBox: {
    padding: '40px',
    border: '1px solid #FFD700',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#0a0a0a',
    boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
  },
  goldText: { color: '#FFD700', fontFamily: 'Orbitron, sans-serif' },
  input: {
    padding: '12px',
    marginTop: '20px',
    width: '100%',
    backgroundColor: '#111',
    border: '1px solid #444',
    color: '#FFD700',
    textAlign: 'center',
    fontSize: '1.2rem'
  },
  button: {
    marginTop: '20px',
    padding: '12px 30px',
    backgroundColor: '#FFD700',
    color: '#000',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%'
  },
  header: { width: '100%', padding: '10px', textAlign: 'center', borderBottom: '1px solid #222' },
  chatBox: {
    flex: 1,
    width: '90%',
    maxWidth: '800px',
    overflowY: 'auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column'
  },
  userMsg: { alignSelf: 'flex-end', backgroundColor: '#222', padding: '10px', borderRadius: '10px', marginBottom: '10px', color: '#fff' },
  sahhanMsg: { alignSelf: 'flex-start', borderLeft: '3px solid #FFD700', padding: '10px', marginBottom: '10px', color: '#FFD700' },
  inputArea: { width: '100%', padding: '20px', display: 'flex', justifyContent: 'center', backgroundColor: '#0a0a0a' },
  chatInput: { width: '70%', padding: '12px', backgroundColor: '#111', border: '1px solid #FFD700', color: '#fff' },
  sendButton: { padding: '12px 20px', backgroundColor: '#FFD700', border: 'none', fontWeight: 'bold', cursor: 'pointer' }
};

export default App;
