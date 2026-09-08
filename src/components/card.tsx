import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  featured?: boolean;
};

function Card({ children, featured = false }: CardProps) {
  return (
    <div
      className={
        featured
          ? "flex h-full flex-col rounded-2xl border-2 border-purple-600 bg-white p-8 shadow-lg"
          : "flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
      }
    >
      {children}
    </div>
  );
}

export default Card;
