import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // Attach mousemove event to track cursor position
    window.addEventListener('mousemove', handleMouseMove);

    // Function to attach hover listeners to interactive elements
    const attachHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Attach listeners initially
    attachHoverListeners();

    // Observe DOM for changes and re-attach listeners
    const observer = new MutationObserver(() => {
      attachHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup event listeners and observer on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      const interactiveElements = document.querySelectorAll('a, button');
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []); // Run once on mount

  return (
    <div
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
