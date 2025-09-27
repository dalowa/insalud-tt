import { httpClientPlugin } from "@/lib/http-client.plugin";
import { Country } from "../types/countriesAPI-type";
import Image from "next/image";
import { millonesOMiles } from "@/lib/millones-o-miles";


export default async function Home() {
  const URL_COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital';

  const getCountries = async () => {
    const countries: Country[] = await httpClientPlugin.get(URL_COUNTRIES_API)
    return countries
  }

  const countriesList = await getCountries();
  
  return (
    <div className="font-sans flex flex-col min-h-screen p-3 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl sm:text-6xl font-bold text-center"> Countries of the World </h1>

      <div className="flex flex-wrap gap-4 justify-center ">
        {countriesList.map((country, i) => (
          <div 
            key={`${country.name.nativeName + i.toLocaleString()}`}
            className={`border border-white w-40 h-70 flex flex-col gap-3 bg-gray-900/50 rounded-2xl`}
          >
            <h3 className="rounded-t-2xl font-bold text-center bg-white text-black py-2 leading-4 px-0.5">{country.name.common}</h3>
            <Image 
              src={country.flags.png ?? country.flags.svg}
              alt={`Country flag of ${country.name.common}`}
              width={250}
              height={0o0}
              className="px-2"
            />
            <div className="flex flex-col justify-evenly h-full">
              <h4 className="text-sm text-center px-2">{`${country.region}`}</h4>
              <h5 className="text-sm text-center px-2">{`${millonesOMiles(country.population)}`}</h5>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
