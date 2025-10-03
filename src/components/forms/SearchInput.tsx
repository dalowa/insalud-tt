'use client'

import { useCountriesStore } from '@/store'
import { IconSearch } from '../icons';

export const SearchInput = () => {
   const { inputSearch, setInputSearch } = useCountriesStore()
   return (
         <label className='flex w-[91%] sm:w-[35%] lg:w-[45%] rounded-lg bg-white text-gray-500 border border-white justify-center py-1 items-center pr-1 pl-3 gap-2'>
            <IconSearch className='h-5 w-5 text-red-400' />
            <input 
               type="text" 
               placeholder='Search for a country...'
               className=' text-black w-full placeholder:text-gray-500 outline-none py-1' 
               value={inputSearch} 
               onChange={e => setInputSearch(e.target.value)} 
               title='Search for country'/>
         </label>
   )
};
