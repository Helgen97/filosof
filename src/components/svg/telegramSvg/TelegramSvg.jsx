import { memo } from "react";

/**
 * SVG component for rendering the Telegram icon.
 * @module TelegramSvg
 * @param {Object} props - Component props
 * @param {string} [props.size="20"] - Size of the SVG (width and height)
 * @param {string} [props.fill="currentColor"] - Primary fill color for the icon
 * @param {string} [props.fillSecondary="#C8DAEA"] - Secondary fill color
 * @param {string} [props.fillTertiary="#A9C6D8"] - Tertiary fill color
 * @param {string} [props.fillBackground="white"] - Background fill color
 */
const TelegramSvg = ({
  size = "22",
  fill = "#9F7150",
  fillSecondary = "#C8DAEA",
  fillTertiary = "#A9C6D8",
  fillBackground = "white",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Telegram icon"
      focusable="false"
    >
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill={fill}
      />
      <path
        d="M6.76904 10.731L7.95546 14.0148C7.95546 14.0148 8.10379 14.3221 8.26263 14.3221C8.42146 14.3221 10.7839 11.8644 10.7839 11.8644L13.411 6.79022L6.81138 9.88331L6.76904 10.731Z"
        fill={fillSecondary}
      />
      <path
        d="M8.34209 11.5732L8.11434 13.9937C8.11434 13.9937 8.01901 14.7353 8.76051 13.9937C9.50201 13.252 10.2118 12.6801 10.2118 12.6801"
        fill={fillTertiary}
      />
      <path
        d="M6.79043 10.8482L4.34993 10.053C4.34993 10.053 4.05826 9.93468 4.15218 9.66635C4.17151 9.61101 4.21051 9.56393 4.32718 9.48301C4.86793 9.1061 14.336 5.70301 14.336 5.70301C14.336 5.70301 14.6033 5.61293 14.761 5.67285C14.8 5.68492 14.8351 5.70714 14.8627 5.73723C14.8903 5.76732 14.9094 5.8042 14.9181 5.8441C14.9351 5.91457 14.9423 5.98707 14.9393 6.05951C14.9385 6.12218 14.9309 6.18026 14.9252 6.27135C14.8675 7.20176 13.1418 14.1458 13.1418 14.1458C13.1418 14.1458 13.0386 14.5521 12.6687 14.566C12.5778 14.5689 12.4872 14.5536 12.4024 14.5207C12.3175 14.4879 12.2402 14.4384 12.1749 14.375C11.449 13.7506 8.94001 12.0644 8.38559 11.6936C8.37309 11.6851 8.36256 11.674 8.35471 11.661C8.34686 11.6481 8.34188 11.6336 8.34009 11.6186C8.33234 11.5795 8.37484 11.5311 8.37484 11.5311C8.37484 11.5311 12.7437 7.64776 12.8599 7.2401C12.8689 7.20851 12.8349 7.19293 12.7893 7.20676C12.4991 7.31351 7.46893 10.4901 6.91376 10.8407C6.8738 10.8528 6.83156 10.8553 6.79043 10.8482Z"
        fill={fillBackground}
      />
    </svg>
  );
};

export default memo(TelegramSvg);
