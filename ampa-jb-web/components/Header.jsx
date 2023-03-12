import Image from 'next/image'

export default function Header() {
  return (
    <header className=' bg-gray-100 p-6'>
      <div className='border border-violet-900 rounded-3xl container grid grid-cols-1 m-auto lg:grid-cols-3 gap-1 p-2 lg:p-6'>
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
        <div className='mx-auto lg:col-star-3 lg:col-end-4 lg:row-start-1'>
          <div className='p-2 lg:p-6 flex-row justify-around text-center font-sans lg:text-right'>
            <h1 className='text-xl font-bold'>
              Colegio "Jesuitinas Bilbao" Ikastetxea
            </h1>
            <p className='text-naranja-900'>C/ Zabalbide 141, 48015 - Bilbao</p>
            <p className='text-naranja-900'>Tlfo: 94 445 42 00 </p>
            <p className='text-naranja-900'>
              E-Mail: AMPA (Plataforma EDUCAMOS)
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
