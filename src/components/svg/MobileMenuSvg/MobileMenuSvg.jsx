import React from "react";

const MobileMenuSvg = ({ id, className, width, height }) => {
  return (
    <svg
      id={id}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8.66667C4 5.16638 4.03748 4 8.66667 4C13.2959 4 13.3333 5.16638 13.3333 8.66667C13.3333 12.167 13.3481 13.3333 8.66667 13.3333C3.98524 13.3333 4 12.167 4 8.66667Z"
        stroke="#9F7150"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6667 8.66667C18.6667 5.16638 18.7042 4 23.3333 4C27.9625 4 28 5.16638 28 8.66667C28 12.167 28.0148 13.3333 23.3333 13.3333C18.6519 13.3333 18.6667 12.167 18.6667 8.66667Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 23.3333C4 19.833 4.03748 18.6667 8.66667 18.6667C13.2959 18.6667 13.3333 19.833 13.3333 23.3333C13.3333 26.8336 13.3481 28 8.66667 28C3.98524 28 4 26.8336 4 23.3333Z"
        stroke="#9F7150"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6667 23.3333C18.6667 19.833 18.7042 18.6667 23.3333 18.6667C27.9625 18.6667 28 19.833 28 23.3333C28 26.8336 28.0148 28 23.3333 28C18.6519 28 18.6667 26.8336 18.6667 23.3333Z"
        stroke="#9F7150"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MobileMenuSvg;
