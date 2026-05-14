import { useState } from 'react'
import { useMQTT } from './hooks/useMQTT'

import LoginScreen      from './components/LoginScreen'
import BalcaoScreen     from './components/BalcaoScreen'
import Sidebar          from './components/Sidebar'
import Topbar           from './components/Topbar'
import PedidosPage      from './components/PedidosPage'
import ConfiguracoesPage from './components/ConfiguracoesPage'

// screen: 'login' | 'balcao' | 'dashboard'
export default function App() {
  const [screen,   setScreen]   = useState('login')
  const [usuario,  setUsuario]  = useState('')
  const [balcao,   setBalcao]   = useState('')
  const [page,     setPage]     = useState('pedidos')

  const { status, connect, disconnect, publish } = useMQTT()

  function handleLogin({ usuario }) {
    setUsuario(usuario)
    setScreen('balcao')
  }

  function handleBalcao({ balcao, nome }) {
    setBalcao(nome || `Balcão ${balcao}`)
    setScreen('dashboard')
    connect() // conecta MQTT ao entrar no dashboard
  }

  // ── Telas de autenticação ──────────────────────────────────────────────────
  if (screen === 'login') {
    return <LoginScreen onLogin={handleLogin} />
  }

  if (screen === 'balcao') {
    return <BalcaoScreen usuario={usuario} onConfirm={handleBalcao} />
  }

  // ── Dashboard ─────────────────────────────────────────────────────────────
  const PAGE_TITLES = {
    pedidos:       'Pedidos',
    configuracoes: 'Configurações',
  }

  return (
    <div className="dashboard">
      <Sidebar
        activePage={page}
        onNavigate={setPage}
        balcao={balcao}
      />

      <div className="dashboard-main">
        <Topbar
          pageTitle={PAGE_TITLES[page]}
          mqttStatus={status}
          onConnect={connect}
          onDisconnect={disconnect}
          usuario={usuario}
        />

        {page === 'pedidos' && (
          <PedidosPage
            publish={publish}
            mqttConnected={status === 'connected'}
          />
        )}

        {page === 'configuracoes' && (
          <ConfiguracoesPage />
        )}
      </div>
    </div>
  )
}
