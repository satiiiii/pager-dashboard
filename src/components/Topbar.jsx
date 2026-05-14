const STATUS_MAP = {
  connected:    { label: 'Conectado',   color: '#22c55e' },
  connecting:   { label: 'Conectando…', color: '#FFB800' },
  disconnected: { label: 'Desconectado',color: '#6b7280' },
  error:        { label: 'Erro',        color: '#ef4444' },
}

export default function Topbar({ pageTitle, mqttStatus, onConnect, onDisconnect, usuario }) {
  const s = STATUS_MAP[mqttStatus] ?? STATUS_MAP.disconnected
  const isConnected = mqttStatus === 'connected'

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h2 className="topbar-title">{pageTitle}</h2>
      </div>

      <div className="topbar-right">
        {/* Status MQTT */}
        <div className="mqtt-status">
          <span className="mqtt-dot" style={{ background: s.color }} />
          <span className="mqtt-label" style={{ color: s.color }}>{s.label}</span>
        </div>

        {/* Botão conectar/desconectar */}
        <button
          className={`btn-sm ${isConnected ? 'btn-sm--ghost' : 'btn-sm--primary'}`}
          onClick={isConnected ? onDisconnect : onConnect}
          disabled={mqttStatus === 'connecting'}
        >
          {mqttStatus === 'connecting' ? '…' : isConnected ? 'Desconectar' : 'Conectar'}
        </button>

        <div className="topbar-user">
          <span className="topbar-user-dot">👤</span>
          <span>{usuario}</span>
        </div>
      </div>
    </header>
  )
}
