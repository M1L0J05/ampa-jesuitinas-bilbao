import Header from '../components/Header'

import '../styles/globals.css'

export const metadata = {
  title: 'AMPA Jesuitinas Bilbao',
  description: 'Website of AMPA Jesuitinas Bilbao',
}

export default function RootLayout({ children }) {
  return (
    <html lang='sp'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
