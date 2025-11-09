'use client';

import { Toaster as SonnerToaster } from '@/components/ui/sonner';

export function Toaster() {
  return <SonnerToaster />;
}

function Sonner() {
  return <div id="sonner-container" role="region" aria-label="Notifications" data-sonner-toaster />;
}

export default Toaster;
