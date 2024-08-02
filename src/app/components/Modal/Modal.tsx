import React from "react";
import { ModalWrapper, ModalWrapperProps } from "./ModalWrapper";
import { X } from "react-feather";

const ModalContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);

/**
 * Modal compound component that handles opening and closing the modal internally.
 * Exploses `ModalOpenButton` and `ModalContents` components.
 * @example
 * <Modal>
    <Modal.OpenButton>
      <button>Open</button>
    </Modal.OpenButton>

    <Modal.Contents>
      <Modal.Controls><button>Extra Control</button></Modal.Controls>
      <h1>This is the modal contents</h1>
    </Modal.Contents>
  </Modal>
 */
export function Modal({ children, ...props }: React.PropsWithChildren) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ModalContext.Provider value={[isOpen, setIsOpen]} {...props}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.OpenButton = function ModalOpenButton({
  children,
}: {
  children: React.ReactElement;
}) {
  const [_, setIsOpen] = React.useContext(ModalContext);

  // Clone the children node and add an internal onClick handler to open the modal
  return React.cloneElement(children, {
    onClick: () => {
      setIsOpen(true);

      if (children?.props?.onClick) {
        children?.props?.onClick();
      }
    },
  });
};

Modal.Contents = function ModalContents({
  children,
  ...props
}: Omit<ModalWrapperProps, "isOpen" | "onClose">) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext);

  // Only render the contents if the modal is open, this helps with performance
  if (!isOpen) return null;

  return (
    <ModalWrapper isOpen={isOpen} onClose={() => setIsOpen(false)} {...props}>
      {children}
    </ModalWrapper>
  );
};

// Top right controls, includes close (X) button by default
Modal.Controls = function ModalControls({ children }: React.PropsWithChildren) {
  const [_, setIsOpen] = React.useContext(ModalContext);

  return (
    <div className="flex w-max sticky ml-auto top-0 right-0 gap-2">
      {children}
      <button onClick={() => setIsOpen(false)} className="hover:text-slate-400">
        <X size={30} />
      </button>
    </div>
  );
};
