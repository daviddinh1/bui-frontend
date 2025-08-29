"use client";
import { useRouter } from "next/navigation";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, children, className }: ButtonProps) {
  const router = useRouter();

  function handleEvent() {
    router.push(href);
  }

  const defaultClassName =
    "border-2 border-slate-600 text-slate-700 hover:bg-blue-50 rounded-lg p-3 text-base text-slate-800 font-semibold transition-colors cursor-pointer";

  return (
    <button onClick={handleEvent} className={className || defaultClassName}>
      {children}
    </button>
  );
}
