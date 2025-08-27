import { DocumentRow } from "./document-row";

const docs = [
  {
    title: "Q1 2025 Performance",
    description: "Quarterly Report",
    date: "Apr 15, 2025",
  },
  {
    title: "Q4 2024 Performance",
    description: "Quarterly Report",
    date: "Jan 20, 2025",
  },
  {
    title: "2023 Tax Document",
    description: "Tax Document",
    date: "Feb 10, 2024",
  },
  {
    title: "Q3 2024 Performance",
    description: "Quarterly Report",
    date: "Oct 18, 2024",
  },
];

export function DocumentsList() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-4">Documents</h2>
      <div className="divide-y">
        {docs.map((doc, idx) => (
          <DocumentRow key={idx} {...doc} />
        ))}
      </div>
    </section>
  );
}
