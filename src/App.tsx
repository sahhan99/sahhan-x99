// src/App.tsx (تعديل جزء الـ Return)
if (!isAuthenticated) {
    return (
      <div className="login-screen nano-banana-theme">
        <h1 className="glitch">SAHHAN SYSTEM X99</h1>
        <p style={{color: '#FFD700', marginBottom: '20px'}}>نظام السيادة جاهز.. أدخل مفتاح الولوج</p>
        <input 
          type="password" 
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          placeholder="ENTER MASTER KEY"
          className="security-input"
          style={{display: 'block', margin: '0 auto'}}
        />
        <button onClick={handleLogin} className="cyber-btn">ACTIVATE CORE</button>
      </div>
    );
  }
