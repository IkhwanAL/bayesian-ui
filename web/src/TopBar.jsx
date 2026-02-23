import { Brain } from "lucide-react"
import "./TopBar.css"
import { Plus } from "lucide-react"
import { useRouter } from "./router"
import { TrendingUp } from "lucide-react"
import { List } from "lucide-react"

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
          <button className="nav-tag" onClick={handleRedirectRoute("/")}>
            <TrendingUp />
            <div>Dashboard</div>
          </button>
          <button className="nav-tag" onClick={handleRedirectRoute("/new-log")}>
            <Plus />
            <div>Log New Decision</div>
          </button>
          <button className="nav-tag" onClick={handleRedirectRoute("/")}>
            <List />
            <div>Decision</div>
          </button>
          <button className="nav-tag" onClick={handleRedirectRoute("/")}>
            <Brain />
            <div>Insight</div>
          </button>
        </div>
      </nav >
    </>
  )
}
