import React from "react";
import { Link as Scroll } from "react-scroll";

const Link = ({ toId, additionalOnClick, className, children }) => {
  
  const onClick = () => {
    additionalOnClick && additionalOnClick();
  };

  return (
    <Scroll to={toId} onClick={onClick} className={className} smooth nofollow>
      {children}
    </Scroll>
  );
};

export default Link;
