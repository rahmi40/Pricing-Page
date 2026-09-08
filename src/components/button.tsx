import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button
      className={
        variant === "primary"
          ? "w-full rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
          : "w-full rounded-lg border border-purple-400 px-4 py-3 font-semibold text-purple-600 transition-colors hover:bg-purple-50"
      }
    >
      {children}
    </button>
  );
}

export default Button;
