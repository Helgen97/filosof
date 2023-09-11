import { useState, useEffect, useRef } from "react";

const ObserverBlock = ({ callback }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    isIntersecting && callback();
  }, [isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  return <div ref={ref} style={{ width: "100%", height: "1px" }}></div>;
};

export default ObserverBlock;
