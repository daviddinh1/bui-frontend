import { DocumentRow } from "./document-row";

type Doc = {
  title: string;
  description: string;
  date: string;
  path: string; // storage path/key
};

const docs: Doc[] = [
  {
    title: "Q1 2025 Performance",
    description: "Quarterly Report",
    date: "Apr 15, 2025",
    path: "PDF Test.pdf", // from your Supabase bucket
  },
];

export function DocumentsList() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Documents</h2>
      <div className="divide-y">
        {docs.map((d) => (
          <DocumentRow key={d.path} {...d} />
        ))}
      </div>
    </section>
  );
}
