import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "./Modal.props";
import cn from "classnames";

export const Modal: React.FC<ModalProps> = (props) => {
  const { children, className, closeHandler, isOpen, ...rest } = props;
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  const overlayClick = () => {
    closeHandler();
    console.log("overlay");
  };

  const innerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  const portalInner = (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-90 flex justify-center items-center",
        className,
        { hidden: !isOpen }
      )}
      onClick={overlayClick}
      {...rest}
    >
      <div className="p-8 rounded-2xl bg-white" onClick={innerClick}>
        {children}
      </div>
    </div>
  );

  return mounted
    ? createPortal(portalInner, document.querySelector("#portal") as Element)
    : null;
};
