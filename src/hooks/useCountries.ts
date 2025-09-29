import { httpClientPlugin } from '@/lib/http-client.plugin';
import { Country } from '@/types/countriesAPI-type';
import { useEffect, useState } from 'react';
export const useCountries = () => {
   const [allCountries, setAllCountries] = useState<Country[]>([]);
   const [loading, setLoading] = useState(true);
   useEffect( () => {
      const requestCountriesList = async () => {
         try {
            setLoading(true);
            const URL_COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital';
            const countriesList = await httpClientPlugin.get(URL_COUNTRIES_API);
            setAllCountries(countriesList);
         } catch (error) {
            console.error('Error:', error);
         } finally {
            setLoading(false);
         }
      };
      requestCountriesList();
   },[])
   return { allCountries, loading };
};