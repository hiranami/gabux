import React, { useEffect, useState, useRef } from 'react';

const MATRIX_CHARS = '!<>-_\\/[]{}—=+*^?#________!@#$%&*';

export default function TextDecrypt({ text, className = "" }) {
  const containerRef = useRef(null);
  const [displayText, setDisplayText] = useState(text);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress from when element enters bottom of viewport to center
      const start = windowHeight;
      const end = windowHeight * 0.25;

      const current = rect.top;
      let progress = (start - current) / (start - end);
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const totalLength = text.length;
    const revealedLength = Math.floor(scrollProgress * totalLength);

    const chars = text.split('');
    const result = chars.map((char, index) => {
      if (char === ' ' || char === '\n') return char;
      if (index < revealedLength) {
        return char; // Fully revealed
      } else if (index < revealedLength + 8) {
        // Active decrypting scramble threshold
        return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
      } else {
        // Encrypted / dimmed character fallback
        return MATRIX_CHARS[index % MATRIX_CHARS.length];
      }
    });

    setDisplayText(result.join(''));
  }, [scrollProgress, text]);

  return (
    <span ref={containerRef} className={`font-mori tracking-wide transition-colors ${className}`}>
      {displayText}
    </span>
  );
}
