import { CountryCardsDisplay } from "@/components/CountryCardsDisplay";



export default async function Home() {
  return (
    
    <div className="font-sans flex flex-col min-h-screen pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl sm:text-6xl font-bold text-center"> Countries of the World </h1>
      
      <CountryCardsDisplay />
    </div>
  );
}
