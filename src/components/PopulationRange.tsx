import React from 'react'
import { Input } from './ui/input';

interface PopulationRangeProps {
  minPopulation: number;
  maxPopulation: number;
  setMinPopulation: (value: number) => void;
  setMaxPopulation: (value: number) => void;
}

export const PopulationRange = ({minPopulation, maxPopulation, setMaxPopulation, setMinPopulation}:PopulationRangeProps) => {
  return (
      <div className="flex gap-2 items-center w-full flex-col xl:flex-row justify-center mb-4 px-5 xl:w-[30%]">
            <label className='flex flex-col gap-2 w-[100%]'>
               <p>Min Poblacion:</p>
               <Input
                  className='px-2 py-1 bg-gray-200 text-black border border-black '
                  type="number" 
                  value={minPopulation} 
                  onChange={e => setMinPopulation(Number(e.target.value))}
                  min={0}
                  max={1000000000}
                  placeholder='Min poblacion'
               />
            </label>
            <label className='flex flex-col gap-2 w-[100%]'>
               <p>Max Poblacion:</p>
               <Input
                  className='px-2 py-1 bg-gray-200 text-black border border-black '
                  type="number" 
                  value={maxPopulation} 
                  onChange={e => setMaxPopulation(Number(e.target.value))}
                  min={0}
                  max={1000000000}
                  placeholder='Min poblacion'
               />
            </label>   
        </div>
  )
}