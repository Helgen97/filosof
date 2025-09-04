/**
 * Smooth scroll link component using react-scroll.
 * @module Link
 */
import { memo } from "react";
import { Link as Scroll } from "react-scroll";

/**
 * Renders a smooth-scrolling link to a specified section ID.
 * @param {Object} props - Component props.
 * @param {string} props.toId - ID of the section to scroll to.
 * @param {Function} [props.additionalOnClick] - Optional function to call on click.
 * @param {string} [props.className] - CSS class for styling the link.
 * @param {React.ReactNode} props.children - Content to render inside the link.
 * @returns {JSX.Element} The smooth scroll link component.
 */
const Link = ({ toId, additionalOnClick, className, children }) => {
  const handleClick = () => additionalOnClick?.();

  return (
    <Scroll
      to={toId}
      className={className}
      smooth
      rel="nofollow"
      role="link"
      aria-label={`Scroll to ${children}`}
      onClick={handleClick}
    >
      {children}
    </Scroll>
  );
};

export default memo(Link);
