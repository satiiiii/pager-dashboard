import { useState } from 'react'
import PedidoCard from './PedidoCard'

const PEDIDOS_INICIAIS = [
  { id: 1, numero: '001', status: 'Aguardando', descricao: 'X-Burguer + Fritas' },
  { id: 2, numero: '002', status: 'Pronto',     descricao: 'Combo Especial'     },
  { id: 3, numero: '003', status: 'Aguardando', descricao: 'Açaí 500ml'         },
  { id: 4, numero: '004', status: 'Acionado',   descricao: 'Refrigerante + Pastel' },
  { id: 5, numero: '005', status: 'Aguardando', descricao: 'Marmitex Grande'    },
  { id: 6, numero: '006', status: 'Entregue',   descricao: 'Suco Natural'       },
]

export default function PedidosPage({ publish, mqttConnected }) {
  const [pedidos, setPedidos] = useState(PEDIDOS_INICIAIS)
  const [novoPedido, setNovoPedido] = useState('')

  function atualizarStatus(id, novoStatus) {
    setPedidos(p => p.map(x => x.id === id ? { ...x, status: novoStatus } : x))
  }

  function handleAcionar(pedido) {
    publish('ACIONAR')
    atualizarStatus(pedido.id, 'Acionado')
  }

  function handleDesligar(pedido) {
    publish('DESLIGAR')
    atualizarStatus(pedido.id, 'Aguardando')
  }

  function adicionarPedido(e) {
    e.preventDefault()
    if (!novoPedido.trim()) return
    const numero = String(pedidos.length + 1).padStart(3, '0')
    setPedidos(p => [...p, { id: Date.now(), numero, status: 'Aguardando', descricao: novoPedido.trim() }])
    setNovoPedido('')
  }

  return (
    <div className="page-content">
      <div className="page-head">
        <div>
          <h3 className="page-title">Pedidos</h3>
          <p className="page-sub">{pedidos.length} pedido(s) no momento</p>
        </div>

        <form onSubmit={adicionarPedido} className="novo-pedido-form">
          <input className="novo-pedido-input" placeholder="Descrição do pedido…" value={novoPedido} onChange={e => setNovoPedido(e.target.value)} />
          <button type="submit" className="btn-primary">+ Adicionar</button>
        </form>
      </div>

      <div className="pedidos-grid">
        {pedidos.map(pedido => (
          <PedidoCard
            key={pedido.id}
            pedido={pedido}
            onAcionar={handleAcionar}
            onDesligar={handleDesligar}
            mqttConnected={mqttConnected}
          />
        ))}
      </div>
    </div>
  )
}