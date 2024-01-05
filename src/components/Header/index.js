import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <h1 className="head-details-nav">Modelyn Torff</h1>
      <div className="bgiDetails">
        <ul className="nav-menu">
          <a href="#about">
            <li className="nav-menu-item">About</li>
          </a>
          <a href="#projectPage">
            <li className="nav-menu-item">Projects</li>
          </a>
          <a href="#address">
            <li className="nav-menu-item">Contacts</li>
          </a>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
