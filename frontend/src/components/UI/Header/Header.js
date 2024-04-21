import './Header.css';

export default function Header(){
    return(
        <div>
        <header className='header'>
          <nav className="nav">
            <div className="nav__logo">
              <a href="index.html">Concord.</a>
            </div>
            <ul className="nav__links" id="nav-links">
              <li className="link">
                <a href="#">Home</a>
              </li>
              <li className="link">
                <a href="#about">About</a>
              </li>
              <li className="link">
                <a href="#stats">Statistics</a>
              </li>
              <li className="link">
                <a href="">Pricing</a>
              </li>
              <li className="loginlink">
                <a href="Landing%20Page/login.html">Login</a>
              </li>
            </ul>
            <div className="nav__menu__btn" id="menu-btn">
              <span>
                <i className="ri-menu-line" />
              </span>
            </div>
          </nav>
        </header>
        </div>
        
    );
}