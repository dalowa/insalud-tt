import React from 'react'
import { HeaderTop } from './HeaderTop'
import { HeaderActions } from './HeaderActions'

export const Header = () => {
  return (
    <header className='px-3 py-5 flex flex-col w-full sm:px-5 max-w-[var(--max-w-container)] mx-auto'>
      <HeaderTop />
      <HeaderActions />
    </header>
  )
}
