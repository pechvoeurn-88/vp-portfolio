
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#home" className="logo">
        V<span>.</span>Pech
      </a>

      {/* Navigation links */}
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </div>

      {/* Contact button */}
      <a href="#contact" className="talk-btn">
        Let's Talk <span>↗</span>
      </a>
    </nav>
  );
}

export default Navbar;
