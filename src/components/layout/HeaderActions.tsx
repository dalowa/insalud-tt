import React from 'react'
import { CountryFilters } from '../country'
import { RandomCountryButton } from './RandomCountryButton'

export const HeaderActions = () => {
  return (
    <div>
      <div className='flex justify-center sm:justify-start mt-4 mb-2'>
        <RandomCountryButton />
      </div>
      <CountryFilters />
    </div>
  )
}
