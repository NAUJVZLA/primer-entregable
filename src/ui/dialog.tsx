import React from "react";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  children,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative bg-white rounded-lg shadow-lg">{children}</div>
    </div>
  );
};

export const DialogContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="p-6">
    {children}
    <button
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      onClick={() => {
        const dialog = document.querySelector('[role="dialog"]');
        if (dialog) {
          const onOpenChange = (dialog as any).onOpenChange;
          if (typeof onOpenChange === "function") {
            onOpenChange(false);
          }
        }
      }}
    >
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  </div>
);

export const DialogHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="mb-4">{children}</div>;

export const DialogTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="text-lg font-semibold">{children}</h2>;

export const DialogDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <p className="text-sm text-gray-500">{children}</p>;
