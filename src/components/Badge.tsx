import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
      {children}
    </span>
  );
}

export default Badge;
