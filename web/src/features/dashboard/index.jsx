import Header from "./Header";
import HighlightCard from "./HighlightCard";
import RecentDecision from "./RecentDecision";
import TopBar from "./TopBar";

export default function Dashboard() {
  return (
    <>
      <TopBar />
      <Header />
      <HighlightCard />
      <RecentDecision />
    </>
  )
}
