import { socialLinks } from "../data";

// eslint-disable-next-line react/prop-types
const SocialLinks = ({parentClass,itemClass}) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              className={itemClass}
              rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks