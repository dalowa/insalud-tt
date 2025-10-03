import React from 'react'
import { Input } from './ui/input'

interface SearchInputProps {
   inputSearch: string;
   setInputSearch: (value: string) => void;
}

export const SearchInput = ({inputSearch, setInputSearch}:SearchInputProps) => {
  return (
      <label className='flex w-full justify-center flex-col px-5 py-2 gap-2 xl:w-[30%]'>
         <p className='text-black'>Nombre del pais:</p>
         <Input 
            type="text" 
            className='bg-gray-200 text-black border border-black ' 
            value={inputSearch} 
            onChange={e => setInputSearch(e.target.value)} 
            /* onKeyDown={e => e.key === 'Enter' && onClickSearch()} */
            title='Search for country'/>
      </label>
  )
}
