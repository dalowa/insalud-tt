import { httpClientPlugin } from "@/lib/http-client.plugin";
import { Country } from "../types/countriesAPI-type";


export default async function Home() {
  const URL_COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital';

  const getCountries = async () => {
    const countries: Country[] = await httpClientPlugin.get(URL_COUNTRIES_API)
    return countries
  }

  const countriesList = await getCountries();
  console.log(countriesList)
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl sm:text-6xl font-bold text-center"> Countries of the World </h1>

      <ul>
        {countriesList.map((c, i) => (
          <li key={`${c.name.nativeName + i.toLocaleString()}`}>{c.name.common}</li>
        ))}

      </ul>
    </div>
  );
}
