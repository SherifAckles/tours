import { pageLinks } from "../data";
import PageLink from "./PageLink";
// eslint-disable-next-line react/prop-types
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
