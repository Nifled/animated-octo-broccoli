import React from "react";

export interface ModalWrapperProps extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalWrapper({ isOpen, onClose, children }: ModalWrapperProps) {
  return (
    // Background
    <div
      onClick={onClose}
      className={`backdrop-blur-sm fixed inset-0 flex justify-center items-center ${
        isOpen ? "no-doc-scroll visible bg-black/40" : "invisible"
      }`}
    >
      {/* Modal Body */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing on click
        className="relative bg-white rounded-lg shadow-md p-8 no-scrollbar w-full md:w-[750px] h-full md:h-auto md:max-h-[85%] overflow-y-scroll"
      >
        {children}
      </div>
    </div>
  );
}
