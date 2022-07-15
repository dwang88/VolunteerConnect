import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Volunteer Connect</Link>
            <ul className="pages">
                <li><CustomLink to="/volunteer">Volunteer</CustomLink></li>
                <li><CustomLink to="/internships">Internships</CustomLink></li>
            </ul>
            <ul className="actions">
                <li className="signup"><CustomLink to="/signUp" style={{color: "#fff" }}>Sign Up</CustomLink></li>
                <li><CustomLink to="/login">Login</CustomLink></li>
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