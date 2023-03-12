import Image from 'next/image'
import Link from 'next/link'

import '../styles/header.css'

export default function Header() {
  return (
    <header className='hearderBackground p-2 lg:p-4'>
      <div className='grid grid-cols-1 m-auto lg:grid-cols-3 gap-1 p-2 '>
        <div className='p-2 flex justify-center lg:col-start-2 lg:col-end-3 lg:row-start-1 '>
          <Image
            src='/assets/header/logo.png'
            alt='Logotipo de la AMPA'
            width={300}
            height={300}
          />
        </div>

        <div className='relative h-32 p-2 lg:my-auto lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:min-h-max rounded-3xl bg-white bg-opacity-50'>
          <Image
            src='/assets/header/somosjesuitinasLogo.png'
            alt='Logotipo de la AMPA'
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className='flex align-middle rounded-3xl  bg-white bg-opacity-50 lg:col-star-3 lg:col-end-4 lg:row-start-1 lg:bg-opacity-0'>
          <div className='p-2 lg:p-6 text-center font-sans lg:text-right m-auto rounded-3xl bg-white bg-opacity-0 lg:bg-opacity-50 '>
            <h1 className='text-2xl font-bold'>
              AMPA "Jesuitinas Bilbao" Ikastetxea
            </h1>
            <p className='tex-lg'>C/ Zabalbide 141, 48015 - Bilbao</p>
            <p className='text-lg'>Tlfo: 94 445 42 00 (Horario escolar)</p>
            <p className='text-lg hover:text-naranja-900 hover:font-bold'>
              <Link href='https://inmaculada-hijasjesus-bilbao.educamos.com/'>
                E-Mail: AMPA (Plataforma EDUCAMOS)
              </Link>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
