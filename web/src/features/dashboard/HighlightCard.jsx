import { AlertTriangle } from "lucide-react"
import "./HighlightCard.css"
import "../../styles/text.css"
import { Target, CheckCircle2 } from "lucide-react"
import { TrendingUp } from "lucide-react"

export default function HighlightCard() {
  return <>
    <div className="card-grid">
      <div className="card">
        <div>
          <div className="card-icon">
            <Target className="target-icon" />
            <h6>Total Decision</h6>
          </div>
          <h2>0</h2>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="card-icon">
            <CheckCircle2 className="check-icon" />
            <h6>Success Rate</h6>
          </div>
          <h2>0</h2>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="card-icon">
            <AlertTriangle className="warning-icon" />
            <h6>Overconfidence</h6>
          </div>
          <h2>-</h2>
          <p className="less-important text-small">Well Calibrated</p>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="card-icon">
            <TrendingUp className="trending-icon" />
            <h6>Pending Review</h6>
          </div>
          <h2>0</h2>
        </div>
      </div>
    </div>
  </>
}
