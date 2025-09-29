import React from 'react'

interface PopulationRangeProps {
  minPopulation: number;
  maxPopulation: number;
  setMinPopulation: (value: number) => void;
  setMaxPopulation: (value: number) => void;
}

export const PopulationRange = ({minPopulation, maxPopulation, setMaxPopulation, setMinPopulation}:PopulationRangeProps) => {
  return (
      <div className="flex gap-2 items-center w-">
            <label className='flex flex-col gap-2'>
               <p>Min Poblacion:</p>
               <input 
                  type="number" 
                  value={minPopulation} 
                  onChange={e => setMinPopulation(Number(e.target.value))}
                  min={0}
                  max={1000000000}
                  placeholder='Min poblacion'
               />
            </label>
            <label className='flex flex-col gap-2'>
               <p>Max Poblacion:</p>
               <input 
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
