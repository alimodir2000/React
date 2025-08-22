import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export interface ModalProps {
  children?: React.ReactNode;
  open?: boolean;
  className?: string;
  onClose?: () => void;
}

const Modal = ({ children, open, className, onClose }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) dialog?.showModal();
    return () => dialog?.close();
  }, [open]);

  return createPortal(
    <dialog className={`modal ${className}`} onClose={onClose} ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
