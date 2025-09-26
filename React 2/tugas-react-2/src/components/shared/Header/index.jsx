import { Link } from "react-router";
import "./style.css";

export default function Header(){
    return(
        <>
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom container">
        {/* Logo */}
        <a href="#home" className="d-flex align-items-center mb-2 mb-md-0 text-decoration-none">
          <i className="fa-solid fa-book fa-2xl me-2" style={{ color: "#366aadff" }}></i>
          <span className="fs-4 fw-bold">BookStore</span>
        </a>

        {/* Nav */}
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-3">Home</Link></li>
          <li><Link to="/books" className="nav-link px-3">Book</Link></li>
          <li><Link to="/teams" className="nav-link px-3">Team</Link></li>
          <li><Link to="/contactUs" className="nav-link px-3">Contact</Link></li>
        </ul>

        {/* Action Buttons */}
        <div className="text-end">
          <Link to="/login">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          </Link>
          <Link to="/register">
          <button type="button" className="btn btn-primary">Register</button>
          </Link>
        </div>
      </header>
        </>
    )
}