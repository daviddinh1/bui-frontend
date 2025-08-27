import { FileText } from "lucide-react";
import { supabase } from "@/lib/supabase";

type DocumentRowProps = {
  title: string;
  description: string;
  date: string;
  path: string; // storage key, e.g. "PDF Test.pdf" or "reports/q1-2025.pdf"
};

export function DocumentRow({
  title,
  description,
  date,
  path,
}: DocumentRowProps) {
  // Builds the public URL (no network call)
  const { data } = supabase.storage.from("documents").getPublicUrl(path);
  const href = data?.publicUrl ?? "#";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} PDF`}
      className="group flex justify-between items-center gap-3 border-b py-3 px-2 -mx-2 rounded-md
                 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <div className="flex items-center gap-3">
        <FileText className="w-7 h-7 text-slate-700 group-hover:text-blue-700" />
        <div>
          <p className="font-medium group-hover:underline">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">{date}</p>
    </a>
  );
}
