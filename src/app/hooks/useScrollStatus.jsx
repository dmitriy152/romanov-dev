import { useState, useEffect } from 'react';
export const useScrollStatus = (threshold = 10) => {
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    setIsScroll(window.scrollY > threshold);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return isScroll;
};
