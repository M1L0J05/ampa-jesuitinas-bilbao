import Image from 'next/image'
import Link from 'next/link'

import '../styles/header.css'

export default function Header() {
  return (
    <header className='hearderBackground pt-4 lg:p-8'>
      <div className='mx-32 grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex justify-center lg:justify-start'>
          <Image
            src='/assets/header/logo.png'
            alt='Logotipo de la AMPA'
            width={300}
            height={300}
          />
        </div>
        <div className='flex justify-center my-auto lg:justify-end'>
          <Image
            src='/assets/header/contacto_ampa.png'
            alt='Contacto de la AMPA'
            width={500}
            height={250}
          />
        </div>
      </div>
    </header>
  )
}
