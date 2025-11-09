'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface AccordionProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className = '' }: AccordionProps) {
  return <div className={className}>{children}</div>;
}

export function AccordionItem({
  value,
  trigger,
  children,
  open: initialOpen = false,
  onOpenChange,
}: AccordionItemProps) {
  const [open, setOpen] = useState(initialOpen);

  const handleToggle = () => {
    const newOpen = !open;
    setOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  return (
    <div className="border rounded-lg">
      <button
        onClick={handleToggle}
        className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition"
      >
        <span className="text-left">{trigger}</span>
        <ChevronDown
          size={20}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-4 py-4 border-t bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
}

export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function AccordionContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
