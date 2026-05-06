"use client";

import { useState, useEffect } from "react";
import useWindowWidth from "./useWindowWidth";

const getScreenSize = (width) => {
  if (width <= 768) return 'mobile';
  if (width <= 1024) return 'tablet';
  if (width <= 1440) return 'desktop1440px';
  return 'desktop';
};

export default function useMobileDetection() {
  const windowWidth = useWindowWidth();
  const [screenSize, setScreenSize] = useState(() =>
    typeof window !== 'undefined' ? getScreenSize(window.innerWidth) : 'desktop'
  );

  useEffect(() => {
    setScreenSize(getScreenSize(windowWidth));
  }, [windowWidth]);

  return {
    isMobile: screenSize === 'mobile',
    isTablet: screenSize === 'tablet',
    isDesktop1440px: screenSize === 'desktop1440px',
    isDesktop: screenSize === 'desktop',
    screenSize
  };
}
