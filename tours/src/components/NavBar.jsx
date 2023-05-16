import Logo from "../assets/images/logo.svg";
import PageLinks from './PageLinks'
import SocialLinks from "./SocialLinks";


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo logo" alt="Tours" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* NAV LINKS */}
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        {/* NAV ICONS */}
        {/* <ul className="nav-icons">
          {socialLinks.map((link) => {
            const{id,href,icon}=link
            return (
              <li key={id}>
                <a href={href} target="_blank"
                rel='noreferrer'  className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul> */}
        <SocialLinks parentClass="nav-icons" itemClass="nav-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
