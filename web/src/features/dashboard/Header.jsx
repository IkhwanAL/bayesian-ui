import "./Header.css"
import "../../styles/button.css"
import "../../styles/text.css"
import "../../styles/space.css"

export default function Header() {
  return <>
    <div className="header">
      <div className="space-x">
        <h2>My Judgement Calibration</h2>
        <span className="less-important">Track Decision, measure accuracy and identify blind spot</span>
      </div>
      <div id="container-button">
        <button className="navigation-button">Log New Decision</button>
      </div>
    </div>
  </>
}
