import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
}

type ButtonColor = "ok" | "cancel";

export default function Button({
  children,
  color = "ok",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`w-[7.5rem] rounded-lg text-center leading-10 ${
        color === "ok"
          ? "bg-primary text-white"
          : "bg-gray-light text-gray-semilight"
      }`}
    >
      {children}
    </button>
  );
}