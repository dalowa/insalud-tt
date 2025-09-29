import React from 'react'
import { Input } from './ui/input'

interface SearchInputProps {
   inputSearch: string;
   setInputSearch: (value: string) => void;
}

export const SearchInput = ({inputSearch, setInputSearch}:SearchInputProps) => {
  return (
      <label className='flex bg-black w-full justify-center flex-col px-5 py-2 gap-2 lg:w-[30%]'>
         <p className='text-white'>Nombre del pais</p>
         <Input 
            type="text" 
            className='bg-white text-black ' 
            value={inputSearch} 
            onChange={e => setInputSearch(e.target.value)} 
            /* onKeyDown={e => e.key === 'Enter' && onClickSearch()} */
            title='Search for country'/>
      </label>
  )
}
