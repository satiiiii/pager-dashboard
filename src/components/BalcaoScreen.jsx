import { useState } from 'react'
import IconUser from './IconUser'
import IconLock from './IconLock'

export default function BalcaoScreen({ usuario, onConfirm }) {
  const [balcao, setBalcao] = useState('')
  const [nome,   setNome]   = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (balcao.trim()) {
      onConfirm({ balcao: balcao.trim(), nome: nome.trim() || `Balcão ${balcao}` })
    }
  }

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-icon-wrap">
          <IconUser size={56} color="#FFB800" />
        </div>

        <h1 className="auth-title">Seu Balcão</h1>
        <p className="auth-subtitle">Olá, <strong>{usuario}</strong>. Qual balcão você está?</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <span className="input-icon"><IconLock size={18} /></span>
            <input
              className="auth-input"
              type="text"
              placeholder="Número do balcão"
              value={balcao}
              onChange={e => setBalcao(e.target.value)}
              autoFocus
            />
          </div>

          <div className="input-group">
            <span className="input-icon"><IconUser size={18} /></span>
            <input
              className="auth-input"
              type="text"
              placeholder="Nome do balcão (opcional)"
              value={nome}
              onChange={e => setNome(e.target.value)}
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
