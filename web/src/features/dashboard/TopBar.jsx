import "./TopBar.css"

export default function TopBar() {
  return (
    <>
      <nav className="navigation-bar">
        <div className="nav-logo">
          <div>Logo</div>
          <span>Personal</span>
        </div>
        <div className="nav-tool">
          <div>Dashboard</div>
          <div> + Log Dashboard</div>
          <div>Decision</div>
          <div>Insight</div>
        </div>
      </nav>
    </>
  )
}
