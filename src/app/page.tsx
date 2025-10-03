
import { CountryCardsDisplay } from "@/components/country";

export default async function Home() {
  return (
    
    <div className="font-sans flex flex-col min-h-screen max-w-[var(--max-w-container)] gap-5 lg:gap-16">    
      <CountryCardsDisplay />
    </div>
  );
}
