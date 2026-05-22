import { useState } from 'react'
import { MQTT_CONFIG, TOPIC_COMANDO } from '../config'

export default function ConfiguracoesPage() {
  const [broker,   setBroker]   = useState(MQTT_CONFIG.brokerUrl)
  const [usuario,  setUsuario]  = useState(MQTT_CONFIG.username)
  const [senha,    setSenha]    = useState(MQTT_CONFIG.password)
  const [topico,   setTopico]   = useState(TOPIC_COMANDO)
  const [duracao,  setDuracao]  = useState('1500')
  const [saved,    setSaved]    = useState(false)

  function handleSalvar(e) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="page-content">
      <div className="page-head">
        <div>
          <h3 className="page-title">Configurações</h3>
          <p className="page-sub">Ajuste a conexão MQTT e o comportamento do pager</p>
        </div>
      </div>

      <form onSubmit={handleSalvar} className="config-form">
        <div className="config-section">
          <h4 className="config-section-title">Conexão MQTT</h4>

          <div className="config-row">
            <label className="config-label">Broker URL</label>
            <input className="config-input" value={broker} onChange={e => setBroker(e.target.value)} placeholder="wss://cluster.hivemq.cloud:8884/mqtt" />
          </div>

          <div className="config-row">
            <label className="config-label">Usuário</label>
            <input className="config-input" value={usuario} onChange={e => setUsuario(e.target.value)} placeholder="seu_usuario" />
          </div>

          <div className="config-row">
            <label className="config-label">Senha</label>
            <input className="config-input" type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="••••••••" />
          </div>

          <div className="config-row">
            <label className="config-label">Tópico</label>
            <input className="config-input" value={topico} onChange={e => setTopico(e.target.value)} placeholder="faculdade/pager/comando" />
          </div>
        </div>

        <div className="config-section">
          <h4 className="config-section-title">Hardware</h4>

          <div className="config-row">
            <label className="config-label">Duração do alerta (ms)</label>
            <input className="config-input" type="number" value={duracao} onChange={e => setDuracao(e.target.value)} min="500" max="10000" step="100" />
          </div>
        </div>

        <button type="submit" className={`btn-primary btn-salvar ${saved ? 'btn-saved' : ''}`}>
          {saved ? '✓ SALVO!' : 'SALVAR'}
        </button>
      </form>
    </div>
  )
}