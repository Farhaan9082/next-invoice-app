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
      className={`${className} px-5 py-2 rounded-full text-sm`}
      {...props}
    >
      {children}
    </button>
  );
}
