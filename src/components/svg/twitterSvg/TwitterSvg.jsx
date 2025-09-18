import { memo } from "react";

/**
 * SVG component for rendering the Twitter (X) icon.
 * @module TwitterSvg
 * @param {Object} props - Component props
 * @param {string} [props.size="20"] - Size of the SVG (width and height)
 * @param {string} [props.fill="currentColor"] - Fill color for the icon
 */
const TwitterSvg = ({ size = "22", fill = "#9F7150" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Twitter icon"
      focusable="false"
    >
      <path
        d="M15.7334 0.966675H18.8001L12.0668 8.63334L19.9334 19.0333H13.7601L8.92676 12.7133L3.39342 19.0333H0.326758L7.46009 10.8333L-0.0732422 0.966675H6.25342L10.6201 6.74001L15.7334 0.966675ZM14.6601 17.2333H16.3601L5.36009 2.70001H3.53342L14.6601 17.2333Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(TwitterSvg);
