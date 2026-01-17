import { useState } from 'react'

function App() {
  const [accessCode, setAccessCode] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  const verify = () => {
    if (accessCode === '38355561') {
      setIsLogged(true)
    } else {
      alert("⚠️ رمز الوصول غير صحيح")
    }
  }

  if (!isLogged) {
    return (
      <div style={{ background: '#050505', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', align-items: 'center' }}>
        <h2 style={{ color: '#FFD700', fontFamily: 'Orbitron' }}>SAHHAN ACCESS CONTROL</h2>
        <input 
          type="password" 
          value={accessCode} 
          onChange={(e) => setAccessCode(e.target.value)}
          style={{ padding: '10px', background: '#111', border: '1px solid #FFD700', color: '#fff', textAlign: 'center' }}
          placeholder="إدخال رمز السيادة"
        />
        <button onClick={verify} style={{ marginTop: '10px', background: '#FFD700', color: '#000', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' }}>دخول</button>
      </div>
    )
  }

  return (
    <div style={{ color: '#FFD700', padding: '20px' }}>
      <h1>🛡️ تم تفعيل العهد الجديد</h1>
      <p>الـ 116 عنصراً جاهزة لاستنطاق Gemini 3 Flash.</p>
    </div>
  )
}

export default App
