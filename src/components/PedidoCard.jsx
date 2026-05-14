const STATUS_STYLES = {
  'Aguardando': { bg: 'rgba(255,184,0,0.15)', color: '#FFB800',  label: 'Aguardando' },
  'Pronto':     { bg: 'rgba(34,197,94,0.15)',  color: '#22c55e', label: 'Pronto'     },
  'Acionado':   { bg: 'rgba(168,85,247,0.2)',  color: '#a855f7', label: 'Acionado'   },
  'Entregue':   { bg: 'rgba(156,163,175,0.2)', color: '#9ca3af', label: 'Entregue'   },
}

export default function PedidoCard({ pedido, onAcionar, onDesligar, mqttConnected }) {
  const s = STATUS_STYLES[pedido.status] ?? STATUS_STYLES['Aguardando']

  return (
    <div className="pedido-card">
      <div className="pedido-header">
        <div>
          <div className="pedido-label">Número</div>
          <div className="pedido-numero">#{pedido.numero}</div>
        </div>
        <div className="pedido-status-badge" style={{ background: s.bg, color: s.color }}>
          {s.label}
        </div>
      </div>

      {pedido.descricao && (
        <p className="pedido-descricao">{pedido.descricao}</p>
      )}

      <div className="pedido-actions">
        <button
          className="btn-primary btn-acionar"
          onClick={() => onAcionar(pedido)}
          disabled={!mqttConnected}
          title={!mqttConnected ? 'Conecte ao MQTT primeiro' : ''}
        >
          ACIONAR
        </button>
        <button
          className="btn-ghost btn-desligar"
          onClick={() => onDesligar(pedido)}
          disabled={!mqttConnected}
        >
          DESLIGAR
        </button>
      </div>
    </div>
  )
}
