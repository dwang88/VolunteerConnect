import { Link } from "react-router-dom";
import longlogo from '../src/logolong.png';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title"><img src={longlogo} style={{height: "4rem", marginTop: "4px"}}/></Link>
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