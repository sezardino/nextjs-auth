import cn from "classnames";

import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "primary", children, className, ...rest } = props;

  const defaultClasses =
    "transition font-bold cursor px-5 py-2 border-2 border-stone-500 ";

  const primaryClasses =
    "rounded-md hover:border-transparent hover:bg-white hover:text-slate-900";

  const secondaryClasses =
    "rounded-full border-red-900 text-red-900 hover:bg-red-900 hover:text-white";

  const buttonClasses =
    variant === "secondary" ? secondaryClasses : primaryClasses;

  return (
    <button className={cn(defaultClasses, buttonClasses, className)} {...rest}>
      {children}
    </button>
  );
};
