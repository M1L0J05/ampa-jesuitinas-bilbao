'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='flex items-center justify-around flex-wrap lg:flex-nowrap bg-morado-900 bg-opacity-50 p-4 lg:rounded-xl lg:mt-8'>
      <div className='flex justify-center bg-white p-1 rounded-xl '>
        <Image
          src='/assets/header/somosjesuitinasLogo.png'
          alt='Logotipo de la AMPA'
          width={225}
          height={75}
        />
      </div>
      <div className='block lg:hidden'>
        <button
          className='flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-naranja-900 hover:border-naranja-900'
          onClick={toggleNavbar}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
            />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:justify-around lg:w-full`}
      >
        <div className='text-white text-3xl mt-4 flex justify-center flex-wrap lg:flex-nowrap lg:m-auto lg:justify-around px-2 lg:w-full'>
          <Link
            href='/'
            className='hover:text-naranja-900 hover:font-semibold w-full text-center lg:w-auto p-4 lg:p-1'
          >
            Inicio
          </Link>
          <Link
            href='/'
            className='hover:text-naranja-900 hover:font-semibold w-full text-center lg:w-auto p-4 lg:p-1'
          >
            Noticias
          </Link>
          <Link
            href='/'
            className='hover:text-naranja-900 hover:font-semibold w-full text-center lg:w-auto p-4 lg:p-1'
          >
            Actividades
          </Link>
          <Link
            href='/'
            className='hover:text-naranja-900 hover:font-semibold w-full text-center lg:w-auto p-4 lg:p-1'
          >
            Colegio
          </Link>{' '}
          <Link
            href='/'
            className='hover:text-naranja-900 hover:font-semibold w-full text-center lg:w-auto p-4 lg:p-1'
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
