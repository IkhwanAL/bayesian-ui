import { Brain } from "lucide-react"
import "./TopBar.css"
import { Plus } from "lucide-react"
import { useRouter } from "./router"

export default function TopBar() {
  const { navigate } = useRouter()

  const handleRedirectRoute = (route) => {
    return (_) => {
      navigate(route)
    }
  }

  return (
    <>
      <nav className="navigation-bar">
        <div className="nav-logo">
          <Brain />
          <span>Personal</span>
        </div>
        <div className="nav-tool">
          <button onClick={handleRedirectRoute("/")}>Dashboard</button>
          <button className="nav-tag" onClick={handleRedirectRoute("/new-log")}>
            <Plus />
            <div>Log New Decision</div>
          </button>
          <button>Decision</button>
          <button>Insight</button>
        </div>
      </nav >
    </>
  )
}
