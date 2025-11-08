'use client';

import { Toaster } from '@/components/ui/sonner';

export function Toaster() {
  return <Sonner />;
}

function Sonner() {
  return (
    <div
      id="sonner-container"
      role="region"
      aria-label="Notifications"
      data-sonner-toaster
    />
  );
}

export default Toaster;
