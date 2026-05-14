export default function ConexaoModal({ onConnect }) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <p className="modal-text">
          Você não está conectado ao broker MQTT.<br />
          Conecte para acionar os pagers.
        </p>
        <button className="btn-primary" onClick={onConnect}>
          IR AO PAINEL
        </button>
      </div>
    </div>
  )
}
