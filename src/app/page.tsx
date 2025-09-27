import { httpClientPlugin } from "@/lib/http-client.plugin";
import { CountryCardsDisplay } from "@/components/CountryCardsDisplay";
import { Country } from "@/types/countriesAPI-type";


export default async function Home() {
  const URL_COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital';

  const countriesList: Country[] = await httpClientPlugin.get(URL_COUNTRIES_API);
  
  console.log(new Set(countriesList.map(e => e.region)))
  return (
    
    <div className="font-sans flex flex-col min-h-screen pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl sm:text-6xl font-bold text-center"> Countries of the World </h1>
      
      <CountryCardsDisplay />
    </div>
  );
}
