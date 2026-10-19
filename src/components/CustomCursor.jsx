import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    const SPEED = 0.15; // lower = more lag, higher = snappier
    let rafId;

    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // the dot follows the real cursor instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      // the ring eases toward the mouse each frame
      ring.x += (mouse.x - ring.x) * SPEED;
      ring.y += (mouse.y - ring.y) * SPEED;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      setHovering(Boolean(e.target.closest("a, button, [data-cursor-hover]")));
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={`cursor-ring ${hovering ? "hover" : ""}`} />
      <div ref={dotRef} className={`cursor-dot ${hovering ? "hover" : ""}`} />
    </>
  );
}