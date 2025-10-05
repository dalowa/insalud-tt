
import { CountryCardsDisplay } from "@/components/country";
import { Header } from "@/components/layout";

export default async function Home() {
  return (
    <div className="font-sans flex flex-col justify-between min-h-[85vh] max-w-[var(--max-w-container)] mx-auto gap-5"> 
      <Header />   
      <CountryCardsDisplay />
    </div>
  );
}
