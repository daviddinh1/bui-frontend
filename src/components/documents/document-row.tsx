import { FileText } from "lucide-react";
import { supabase } from "@/lib/supabase";

type DocumentRowProps = {
  title: string;
  description: string;
  date: string;
  path: string; // <-- add this
};

export function DocumentRow({
  title,
  description,
  date,
  path,
}: DocumentRowProps) {
  // getPublicUrl is a pure helper (no network call)
  const { data } = supabase.storage.from("documents").getPublicUrl(path);
  const href = data?.publicUrl ?? "#";

  return (
    <div className="flex justify-between items-center border-b py-3">
      <div className="flex items-center gap-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open document PDF"
          title="Open document PDF"
          className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
        >
          <FileText className="w-7 h-7 text-slate-700" />
        </a>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">{date}</p>
    </div>
  );
}
