import "./HighlightCard.css"

export default function HighlightCard() {
  return <>
    <div className="card-grid">
      <div className="card">
        <div>
          <div>Logo</div>
          <h6>Total Decision</h6>
          <p>0</p>
        </div>
      </div>
      <div className="card">
        <div>
          <div>Logo</div>
          <h6>Success Rate</h6>
          <p>0</p>
        </div>
      </div>
      <div className="card">
        <div>
          <div>Logo</div>
          <h6>Overconfidence</h6>
          <p>-</p>
        </div>
      </div>
      <div className="card">
        <div>
          <div>Logo</div>
          <h6>Pending Review</h6>
          <p>0</p>
        </div>
      </div>
    </div>
  </>
}
