import { Brain } from "lucide-react"
import "./TopBar.css"
import { Plus } from "lucide-react"

export default function TopBar() {
  return (
    <>
      <nav className="navigation-bar">
        <div className="nav-logo">
          <Brain />
          <span>Personal</span>
        </div>
        <div className="nav-tool">
          <button>Dashboard</button>
          <button className="nav-tag">
            <Plus />
            <div>Log Dashboard</div>
          </button>
          <button>Decision</button>
          <button>Insight</button>
        </div>
      </nav >
    </>
  )
}
