import { HTMLProps } from "react";

export interface ModalProps extends HTMLProps<HTMLDivElement> {
  isOpen: boolean;
  closeHandler: () => void;
}
