import { CountryCardsDisplay } from "@/components/CountryCardsDisplay";
import Link from "next/link";



export default async function Home() {
  return (
    
    <div className="font-sans flex flex-col min-h-screen pb-20 pt-10 gap-5 lg:gap-16">
      <h1 className="text-4xl sm:text-6xl font-bold text-center"> Countries of the World </h1>
      <Link className="bg-amber-300 py-3 px-6 w-44 text-center rounded-3xl font-bold mx-auto" href={"/favorites"}>Go to Favorites</Link>
      <CountryCardsDisplay />
      
    </div>
  );
}
