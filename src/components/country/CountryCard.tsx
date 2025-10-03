import { formatPopulation } from '@/lib/utils/format'
import { Country } from '@/types/countriesAPI-type'
import Image from 'next/image'
import { IconHeart } from '../icons'
import { useCountriesStore } from '@/store'

interface CountryCardProps {
   country: Country
}

export function CountryCard({country} : CountryCardProps) {

   const { setCurrentModalCountry, setIsModalOpen } = useCountriesStore()

   const handleClickModal = (c: Country) => {
      setIsModalOpen(true)
      setCurrentModalCountry(c)
   }
   return (
      <div
         className={`relative w-full max-w-xs justify-between flex bg-white flex-col items-start rounded-2xl overflow-hidden cursor-pointer
   border border-gray-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-gray-400`}
         onClick={() => handleClickModal(country)}
      >
         
         <div className='w-full h-40 relative overflow-hidden'>
            <Image 
               src={country.flags.png ?? country.flags.svg}
               alt={`Country flag of ${country.name.common}`}
               fill
               priority
               className=""
            />
         </div>
         <div className="justify-evenly relative w-full [&>p]:my-1 p-4">
            <p className="text-sm text-start px-3 py-1 bg-red-100 text-red-400 font-semibold  rounded-lg inline">{`${country.region}`}</p>
            <p className="font-bold text-start text-2xl tracking-wider">{country.name.common}</p>
            <p className="text-sm text-start md:text-base text-gray-600">{`Population: ${formatPopulation(country.population)}`}</p>
            <IconHeart className='absolute w-6 h-6 top-4 right-4 text-gray-400 hover:text-red-400 transition-colors duration-200' />
         </div>
      </div>
   )
};
