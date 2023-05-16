import { pageLinks } from "../data";

// eslint-disable-next-line react/prop-types
const PageLinks = ({parentClass,itemClass}) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
