import { useState, useEffect } from 'react';
import { model } from './geminiService';

type ChatMessage = {
  role: 'user' | 'sahhan';
  text: string;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const SOVEREIGN_KEY = '38355561';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    if (password === SOVEREIGN_KEY) {
      setIsAuthorized(true);
    } else {
      alert('⚠️ رمز السيادة غير صحيح.');
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isProcessing) return;

    setIsProcessing(true);
    setChatHistory(prev => [...prev, { role: 'user', text: input }]);

    try {
      const result = await model.generateContent(input);
      const text =
        result?.response?.text?.() ??
        result?.text?.() ??
        '⚠️ لم يتمكن النظام من استخراج الرد.';

      setChatHistory(prev => [...prev, { role: 'sahhan', text }]);
    } catch (error) {
      console.error('خطأ في الاتصال:', error);
      setChatHistory(prev => [
        ...prev,
        { role: 'sahhan', text: '⚠️ حدث خطأ أثناء الاتصال بالنواة.' }
      ]);
    } finally {
      setIsProcessing(false);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  if (loading) {
    return (
      <div style={styles.fullCenter}>
        <div style={styles.loader}></div>
        <h1 style={styles.goldText}>SAHHAN SYSTEM X99</h1>
        <p style={{ color: '#555', marginTop: '10px' }}>جاري التهيئة...</p>
      </div>
    );
  }

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
            onChange={e => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleLogin} style={styles.button}>
            تفعيل الارتباط
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <h3 style={styles.goldText}>نواة سحّان X99 | الـ 116 عنصراً</h3>
      </header>
      <div style={styles.chatArea}>
        {chatHistory.map((msg, i) => (
          <div
            key={i}
            style={msg.role === 'user' ? styles.userMsg : styles.sahhanMsg}
          >
            <strong>{msg.role === 'user' ? 'القائد:' : 'سحّان:'}</strong>
            <p>{msg.text}</p>
          </div>
        ))}
        {isProcessing && (
          <div style={styles.goldText}>جاري استنطاق النواة...</div>
        )}
      </div>
      <div style={styles.inputContainer}>
        <input
          style={styles.chatInput}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="أدخل أمر السيادة هنا..."
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          تنفيذ
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  fullCenter: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    textAlign: 'center'
  },
  loader: {
    border: '4px solid #111',
    borderTop: '4px solid #FFD700',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
    marginBottom: '20px'
  },
  goldText: {
    color: '#FFD700',
    letterSpacing: '2px',
    textShadow: '0 0 10px rgba(255,215,0,0.3)',
    fontFamily: 'serif'
  },
  loginBox: {
    padding: '40px',
    border: '1px solid #FFD700',
    backgroundColor: '#050505',
    boxShadow: '0 0 20px rgba(255,215,0,0.1)',
    borderRadius: '8px'
  },
  input: {
    padding: '12px',
    width: '220px',
    backgroundColor: '#111',
    border: '1px solid #FFD700',
    color: '#FFD700',
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '1rem',
    borderRadius: '4px'
  },
  button: {
    padding: '12px 30px',
    backgroundColor: '#FFD700',
    color: '#000',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px'
  },
  dashboard: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#050505',
    color: '#fff'
  },
  header: {
    padding: '20px',
    borderBottom: '1px solid #222',
    textAlign: 'center',
    backgroundColor: '#000'
  },
  chatArea: {
    flex: 1,
    overflowY: 'auto',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  userMsg: {
    alignSelf: 'flex-end',
    backgroundColor: '#151515',
    color: '#FFD700',
    padding: '15px',
    borderRadius: '8px',
    maxWidth: '60%'
  },
  sahhanMsg: {
    alignSelf: 'flex-start',
    borderLeft: '4px solid #FFD700',
    padding: '15px',
    backgroundColor: '#111',
    color: '#FFD700',
    borderRadius: '8px',
    maxWidth: '60%'
  },
  inputContainer: {
    display: 'flex',
    padding: '25px',
    backgroundColor: '#000',
    borderTop: '1px solid #222'
  },
  chatInput: {
    flex: 1,
    padding: '18px',
    backgroundColor: '#0a0a0a',
    border: '1px solid #FFD700',
    color: '#FFD700',
    borderRadius: '4px'
  },
  sendButton: {
    padding: '18px 35px',
    backgroundColor: '#FFD700',
    color: '#000',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default App;
