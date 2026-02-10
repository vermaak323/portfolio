import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li>Home</li>
        <li>Works</li>
        <li>About</li>
        <li>Contact</li>
        <li className="hire">Hire Me</li>
      </ul>
    </nav>
  );
}
