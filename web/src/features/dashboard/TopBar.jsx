import { Brain } from "lucide-react"
import "./TopBar.css"
import { Plus } from "lucide-react"

export default function TopBar() {
  // The Navigation bar is not is not acceptable yet to mobile
  // Will handle it in the future if mobile is needed
  // for now current situtation is okay
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
