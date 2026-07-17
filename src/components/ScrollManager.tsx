import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * BrowserRouter doesn't touch scroll position on navigation. Without this,
 * every route change keeps the previous page's scroll offset, and #hash
 * links (e.g. to="/#lead-form" from another page) never scroll into view.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
