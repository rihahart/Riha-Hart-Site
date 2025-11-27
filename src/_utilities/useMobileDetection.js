"use client";

import { useState, useEffect } from "react";
import useWindowWidth from "./useWindowWidth";

export default function useMobileDetection() {
  const windowWidth = useWindowWidth();
  const [screenSize, setScreenSize] = useState('mobile');

  useEffect(() => {
    if (windowWidth <= 768) {
      setScreenSize('mobile');
    } else if (windowWidth <= 1024) {
      setScreenSize('tablet');
    } else if (windowWidth <= 1440) {
      setScreenSize('desktop1440px');
    } else {
      setScreenSize('desktop');
    }
  }, [windowWidth]);

  return {
    isMobile: screenSize === 'mobile',
    isTablet: screenSize === 'tablet',
    isDesktop1440px: screenSize === 'desktop1440px',
    isDesktop: screenSize === 'desktop',
    screenSize
  };
}
