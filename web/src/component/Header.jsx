import "./Header.css"
import "../styles/button.css"
import "../styles/text.css"
import "../styles/space.css"

export default function Header({ headerInfo = "", otherInfo = "", children }) {
  return <>
    <div className="header">
      <div className="space-x">
        <h2>{headerInfo}</h2>
        <span className="less-important">{otherInfo}</span>
      </div>
      {children}
    </div>
  </>
}
