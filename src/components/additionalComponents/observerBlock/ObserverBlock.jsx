/**
 * Intersection observer component for triggering callbacks based on visibility.
 * @module ObserverBlock
 */
import { useState, useEffect, useRef, memo } from "react";

/**
 * Renders a 1px-high div that triggers a callback when it intersects with the viewport.
 * Uses IntersectionObserver to detect visibility changes.
 * @param {Object} props - Component props.
 * @param {Function} props.callback - Function to call when the element intersects or stops intersecting.
 * @returns {JSX.Element} The observer block component.
 */
const ObserverBlock = ({ callback }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isIntersecting) callback();
  }, [isIntersecting, callback]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, []); // Removed isIntersecting from dependencies to prevent re-observing

  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "1px" }}
      aria-hidden="true"
    />
  );
};

export default memo(ObserverBlock);
