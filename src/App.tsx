import React, { useState } from 'react';
import './App.css';

function App() {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // مفتاح الولوج الخاص بك
    if (accessCode === '38355561') {
      setIsAuthenticated(true);
    } else {
      alert("⚠️ مفتاح السيادة غير صحيح");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="login-screen">
        <h1 className="glitch">SAHHAN SYSTEM X99</h1>
        <p>نظام السيادة بانتظار مفتاح الولوج...</p>
        <input 
          type="password" 
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          placeholder="أدخل الرمز هنا"
          className="security-input"
          autoFocus
        />
        <button onClick={handleLogin} className="cyber-btn">تفعيل النواة</button>
      </div>
    );
  }

  return (
    <div className="main-interface">
      <h2>🛡️ تم تفعيل بروتوكول سحّان</h2>
      <p>النواة الفكرية متصلة الآن بالـ 116 عنصراً.</p>
    </div>
  );
}

export default App;
