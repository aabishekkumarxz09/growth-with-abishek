import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    // Safety check for 0 value to prevent infinite intervals
    if (value === 0) {
      setCount(0);
      return;
    }

    let start = 0;
    const end = value;
    const range = Math.abs(end - start);
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.max(1, Math.floor(duration / range));
    
    const timer = setInterval(() => {
      current += increment;
      setCount(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={countRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export default Counter;