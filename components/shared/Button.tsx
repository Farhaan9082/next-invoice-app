import { MouseEventHandler } from "react";

interface button {
  children: any;
  className: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, className, ...props }: button) {
  return (
    <button
      className={`${className} px-6 py-2.5 rounded-full text-sm md:px-8 md:py-3 md:text-base`}
      {...props}
    >
      {children}
    </button>
  );
}
