export default function Sidebar({ activePage, onNavigate, balcao }) {
  const navItems = [
    { id: 'pedidos',       label: 'PEDIDOS'       },
    { id: 'configuracoes', label: 'CONFIGURAÇÕES' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">🔔</span>
        <div>
          <div className="sidebar-title">Pager</div>
          <div className="sidebar-sub">{balcao}</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-item ${activePage === item.id ? 'sidebar-item--active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
