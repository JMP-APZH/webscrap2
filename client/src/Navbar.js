import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav text-center p-8">
      <Link to="/" className="site-title">
        Project Prices Observer
      </Link>
      <ul>
        {/* <CustomLink to="/pricing">Pricing</CustomLink> */}
        <CustomLink to="/dairy">Dairy</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}