import "./RecentDecision.css"
import "../../styles/button.css"
import "../../styles/text.css"
import "../../styles/space.css"
import { Brain } from "lucide-react"

export default function RecentDecision() {
  return <>
    <div className="recent-decision">
      <div className="recent-top-information">
        <p>Recent Decision</p>
        <a>View All</a>
      </div>
      <div className="recent-table-information">
        <div className="recent-table-empty-information space-x">
          <Brain size={48} className="brain-icon" />
          <p className="less-important">No decisions logged yet</p>
          <button className="navigation-button">Log your first decision</button>
        </div>
      </div>
    </div>
  </>
}
