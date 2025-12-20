import { forwardRef, useImperativeHandle, useRef } from "react";

export const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => ({
    openModal: () => dialogRef.current.showModal(),
    closeModal: () => dialogRef.current.close(),
  }));

  return (
    <dialog ref={dialogRef}>
      <header>
        <button onClick={() => dialogRef.current.close()}>X</button>
      </header>
      {children}
    </dialog>
  );
});
