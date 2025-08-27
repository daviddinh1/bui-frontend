import Navbar from "@/components/navbar";
import { Hero } from "@/components/hero";
import { DocumentsList } from "@/components/documents/documents-list";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="border-b p-4 text-center">
        <div className="max-w-2xl mx-auto text-lg opacity-90">
          Retail access coming soon
        </div>
      </div>
      <DocumentsList />
    </>
  );
}
