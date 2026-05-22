import { useState } from 'react'
import { useMQTT } from './hooks/useMQTT'

import LoginScreen       from './components/LoginScreen'
import Sidebar           from './components/Sidebar'
import Topbar            from './components/Topbar'
import PedidosPage       from './components/PedidosPage'
import ConfiguracoesPage from './components/ConfiguracoesPage'

export default function App() {
  const [screen,  setScreen]  = useState('login')
  const [usuario, setUsuario] = useState('')
  const [page,    setPage]    = useState('pedidos')

  const { status, connect, disconnect, publish } = useMQTT()

  function handleLogin({ usuario }) {
    setUsuario(usuario)
    setScreen('dashboard')
    connect()
  }

  if (screen === 'login') {
    return <LoginScreen onLogin={handleLogin} />
  }

  const PAGE_TITLES = {
    pedidos:       'Pedidos',
    configuracoes: 'Configurações',
  }

  return (
    <div className="dashboard">
      <Sidebar
        activePage={page}
        onNavigate={setPage}
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