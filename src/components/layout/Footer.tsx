import React from 'react'
import { IconDalowa } from '../icons'
import { website } from '@/lib/constants/dalowaUrl'

export const Footer = () => {
  return (
    <footer className='relative w-full flex justify-end items-center'>
      <a title='Visit David Urbano Website' className='' href={website} target='_blank' rel='noopener noreferrer'>
        <IconDalowa className='hover:bg-[#0A0E17] rounded-full w-16 h-16 lg:w-28 lg:h-28 mx-3' />
      </a>
    </footer>
  )
}
