import Header from "@/Components/Header/Header"
import  "./css/style.css"
import { Montserrat } from 'next/font/google'
import MediaLinks from "@/Components/UI-Kit/MediaLinks/MediaLinks"
import Footer from "@/Components/Footer/Footer"
const montserat = Montserrat({ subsets: ['latin'], style: ['normal'] })

export const metadata = {
  title: 'romanov',
  description: 'Romanov Dmitriy - web developer. NextJS 13.0 , React 18, React-Native, Less/SCSS, Pug, Gulp, NodeJS, Express, MongoDB, MySQL',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={montserat.className}>
        <Header/>
        <main className="content">
          {children}
        </main>
        <MediaLinks/>
        <Footer/>
      </body>
    </html>
  )
}
