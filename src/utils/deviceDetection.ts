/**
 * Device detection utilities for performance optimization
 */

export const isLowEndDevice = (): boolean => {
  // Check hardware concurrency (CPU cores)
  const hasLowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
  
  // Check device memory (if available)
  const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
  
  // Check for mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  return hasLowCores || hasLowMemory || isMobile;
};

export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const isTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const getDevicePixelRatio = (): number => {
  // Use lower DPR on low-end devices to reduce canvas resolution
  return isLowEndDevice() ? Math.min(window.devicePixelRatio || 1, 1.5) : (window.devicePixelRatio || 1);
};
