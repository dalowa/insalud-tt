import { countryService } from '@/services/countryService';
import { Country } from '@/types/countriesAPI-type';
import { useEffect, useState } from 'react';
export const useCountries = () => {
   const [allCountries, setAllCountries] = useState<Country[]>([]);
   const [loading, setLoading] = useState(true);
   useEffect( () => {
      const requestCountriesList = async () => {
         try {
            setLoading(true);
            
            const countriesList = await countryService.getAllCountries();
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