import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Volunteer Connect</Link>
            <ul className="pages">
                <CustomLink to="/volunteer">volunteer</CustomLink>
                <CustomLink to="/internships">internships</CustomLink>
            </ul>
            <ul className="actions">
                <CustomLink to="/signUp">Sign Up</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}