import { useState } from "react";

interface UseModal {
  isOpen: boolean;
  openHandler: () => void;
  closeHandler: () => void;
}

export const useModal = (): UseModal => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const closeHandler = () => {
    setOpen(false);
  };

  const openHandler = () => {
    setOpen(true);
  };

  return { isOpen, openHandler, closeHandler };
};
