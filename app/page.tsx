import Header from "@/components/header/Header";
import Columns from "@/components/columns/Columns";
export default function Home() {
  return (
    <main className="grid grid-cols-10">
      <aside className="bg-slate-600 col-span-2 min-h-screen w-full"></aside>
      <section
        aria-labelledby="heading"
        className="bg-slate-800 col-span-8 min-h-full w-full"
      >
        <Header />
        <Columns />
      </section>
    </main>
  );
}
