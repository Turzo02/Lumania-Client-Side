'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const SmoothScrollProvider = ({ children }) => {
  useSmoothScroll();
  return <>{children}</>;
};

export default SmoothScrollProvider;
