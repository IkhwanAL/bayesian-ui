import { ArrowRight } from "lucide-react";
import Header from "../../component/Header";
import HighlightCard from "./HighlightCard";
import RecentDecision from "./RecentDecision";
import { useRouter } from "../../router";

export default function Dashboard() {
  const { navigate } = useRouter()

  const header = "My Judgement Calibration"
  const info = "Track Decision, measure accuracy and identify blind spot"

  return (
    <>
      <Header headerInfo={header} otherInfo={info}>
        <div id="container-button">
          <button className="navigation-button" onClick={() => navigate("/new-log")}><div>Log New Decision</div><ArrowRight /></button>
        </div>
      </Header>
      <HighlightCard />
      <RecentDecision />
    </>
  )
}
