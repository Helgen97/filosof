import React from "react";

const LocationMarkerSvg = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.59239 11.2573C4.608 6.66328 8.3448 2.95179 12.9388 2.9674C17.5327 2.983 21.2442 6.7198 21.2286 11.3138V11.408C21.1721 14.3942 19.5047 17.1544 17.4605 19.3116C16.2914 20.5256 14.9859 21.6004 13.5699 22.5145C13.1913 22.842 12.6297 22.842 12.2511 22.5145C10.1402 21.1406 8.28757 19.4059 6.7779 17.3899C5.43235 15.6318 4.6684 13.4981 4.59239 11.2855L4.59239 11.2573Z"
        stroke="#9F7150"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        opacity="0.5"
        cx="12.9105"
        cy="11.4174"
        r="2.66594"
        stroke="#9F7150"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocationMarkerSvg;
