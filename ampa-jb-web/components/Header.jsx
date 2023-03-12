import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className=' bg-gray-100 p-2'>
      <div className='container grid grid-cols-1 m-auto lg:grid-cols-3 gap-1 p-2'>
        <div className='p-2 flex justify-center lg:col-start-2 lg:col-end-3 lg:row-start-1'>
          <Image
            src='/assets/header/logo.png'
            alt='Logotipo de la AMPA'
            width={150}
            height={150}
          />
        </div>
        <div className='text-blue-600 text-center text-3xl lg:col-start-1 lg:col-end-2 lg:row-start-1'>
          Header - 1
        </div>
        <div className='lg:col-star-3 lg:col-end-4 lg:row-start-1 flex align-middle'>
          <div className='p-2 lg:p-6 text-center font-sans lg:text-right m-auto '>
            <h1 className='text-lg font-bold'>
              AMPA "Jesuitinas Bilbao" Ikastetxea
            </h1>
            <p className='text-naranja-900 text-xs'>
              C/ Zabalbide 141, 48015 - Bilbao
            </p>
            <p className='text-naranja-900 text-xs'>
              Tlfo: 94 445 42 00 (Horario escolar)
            </p>
            <p className='text-naranja-900 text-xs hover:text-morado-900 hover:font-bold'>
              <Link href='https://marededeudelassumpcio-badalona.educamos.com/'>
                E-Mail: AMPA (Plataforma EDUCAMOS)
              </Link>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
