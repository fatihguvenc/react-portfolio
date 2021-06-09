import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          enoca.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Hakkımda
              </Link>
            </li>
            <li className="nav-item">
              <Link to="yaptigim-isler" className="nav-link">
                Yaptığım İşler
              </Link>
            </li>
            <li className="nav-item">
              <Link to="yorumlar" className="nav-link">
                Yorumlar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="iletisim" className="nav-link">
                  İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
