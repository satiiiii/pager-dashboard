import { useState } from 'react'
import IconLock from './IconLock'
import IconUser from './IconUser'

export default function LoginScreen({ onLogin }) {
  const [usuario, setUsuario] = useState('')
  const [senha,   setSenha]   = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (usuario.trim() && senha.trim()) {
      onLogin({ usuario })
    }
  }

  return (
    <div className="auth-bg">
      <div className="auth-card">
        {/* Ícone central */}
        <div className="auth-icon-wrap">
          <IconLock size={56} color="#FFB800" />
        </div>

        <h1 className="auth-title">Pager Balcão</h1>
        <p className="auth-subtitle">Faça login para continuar</p>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Usuário */}
          <div className="input-group">
            <span className="input-icon"><IconUser size={18} /></span>
            <input
              className="auth-input"
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={e => setUsuario(e.target.value)}
              autoFocus
            />
          </div>

          {/* Senha */}
          <div className="input-group">
            <span className="input-icon"><IconLock size={18} /></span>
            <input
              className="auth-input"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-primary btn-full">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  )
}
