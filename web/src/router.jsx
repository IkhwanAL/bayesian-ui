import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const RouterContext = createContext()

// Create A Router To Remember What Path is the current URL Path
// This Function rely on window event listener
// so it does not need to watch value with use effect
// just need to render it one time only, for creating event listener
export function RouterProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname)

  // Run Only One time
  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)

    // Add Event After Render Complete
    window.addEventListener("popstate", onPopState)

    // Prepare to destroy event if the component destroy
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  const navigate = (to) => {
    if (path == to) return
    window.history.pushState({}, "", to)
    setPath(to)
  }

  return <RouterContext.Provider value={{ path, navigate }} >
    {children}
  </ RouterContext.Provider>
}

export function useRouter() {
  return useContext(RouterContext)
}
