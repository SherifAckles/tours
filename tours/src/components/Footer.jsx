import SocialLinks from "./SocialLinks";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    // FOOTER LINKS
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />

      {/* FOOTER SOCIAL LINKS */}
      <SocialLinks parentClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
