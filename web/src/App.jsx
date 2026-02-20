import Dashboard from './features/dashboard'
import LogADecision from './features/log-a-decision'
import NotFound from './NotFound'
import { useRouter } from './router'
import TopBar from './TopBar'

function App() {
  const { path } = useRouter()

  let current = <NotFound />
  if (path == "/") current = <Dashboard />
  if (path == "/new-log") current = <LogADecision />

  return <>
    <TopBar />
    {current}
  </>
}

export default App
