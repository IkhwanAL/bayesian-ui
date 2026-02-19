import { AlertTriangle } from "lucide-react"
import "./HighlightCard.css"
import { Target, CheckCircle2 } from "lucide-react"
import { TrendingUp } from "lucide-react"

export default function HighlightCard() {
  return <>
    <div className="card-grid">
      <div className="card">
        <div>
          <Target className="target-icon" />
          <h6>Total Decision</h6>
          <p>0</p>
        </div>
      </div>
      <div className="card">
        <div>
          <CheckCircle2 className="check-icon" />
          <h6>Success Rate</h6>
          <p>0</p>
        </div>
      </div>
      <div className="card">
        <div>
          <AlertTriangle className="warning-icon" />
          <h6>Overconfidence</h6>
          <p>-</p>
        </div>
      </div>
      <div className="card">
        <div>
          <TrendingUp className="trending-icon" />
          <h6>Pending Review</h6>
          <p>0</p>
        </div>
      </div>
    </div>
  </>
}
