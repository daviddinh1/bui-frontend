import { FileText } from "lucide-react";

type DocumentRowProps = {
  title: string;
  description: string;
  date: string;
};

export function DocumentRow({ title, description, date }: DocumentRowProps) {
  return (
    <div className="flex justify-between items-center border-b py-3">
      <div className="flex items-center gap-3">
        <FileText className="w-7 h-7 text-slate-700" />
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">{date}</p>
    </div>
  );
}
