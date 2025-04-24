'use client'

import "../styles/globals.css"
import { Spectral_SC, Bad_Script, Amatic_SC, Sofia_Sans, Comfortaa } from "next/font/google"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

import { useEffect, useState } from "react"
import Image from "next/image"

export const metadata = {
  title: 'Аліна Дорохова | Логопед онлайн',
  description: 'Сайт логопеда Аліни Дорохової. Онлайн-консультації, корекція мовлення, розвиток мовлення у дітей.',
  keywords: 'логопед онлайн, логопед для дітей, логопед для дорослих, логопедичні заняття онлайн, логопед для дітей з аутизмом, логопед для дітей з дислексією, логопед для дітей з затримкою мовлення, логопед для дітей з фонетичними порушеннями, логопед для дітей з дизартрією, логопед для дітей з алалією, логопед для дітей з ринолалією, логопед для дітей з заїканням, логопед для дітей з дисграфією, логопед для дітей з дислексією, логопед для дітей з афазією, логопед для дітей з аграматизмом, логопед для дітей з фонематичним недорозвиненням',
  author: 'Аліна Дорохова',
  creator: 'Олександр Дорохов',
  openGraph: {
    title: 'Аліна Дорохова - логопед онлайн',
    description: 'Сучасна логопедія для дітей та дорослих. Онлайн заняття з логопедом.',
    url: 'https://alina-dorokhova.vercel.app/',
    siteName: 'Аліна Дорохова - логопед онлайн',
    images: [
      {
        url: '/jpg/metadata-pic.jpg',  // Шлях до зображення на вашому сайті
        width: 1200,
        height: 630,
        alt: 'Аліна Дорохова - логопед онлайн',
      }
    ],
    locale: 'uk_UA',
    type: 'website'
  }
}

const spectral = Spectral_SC({
  subsets: ['cyrillic'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-spectral',
  display: 'swap',
})

const badScript = Bad_Script({
  subsets: ['cyrillic'],
  weight: ['400'],
  variable: '--font-bad-script',
  display: 'swap',
})

const amatic = Amatic_SC({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
  variable: '--font-amatic',
  display: 'swap',
})

const sofia = Sofia_Sans({
  subsets: ['cyrillic'],
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sofia',
  display: 'swap',
})

const comfortaa = Comfortaa({
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-comfortaa',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [visible, setVisible] = useState(false)
      useEffect(() => {
          const handleScroll = () => {
              setVisible(window.scrollY > 300)
          }
      
          window.addEventListener('scroll', handleScroll)
          
          return () => {
              window.removeEventListener('scroll', handleScroll)
          }
      }, [])
  
      const scrollToTop = () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          })
      }

  return (
    <html lang="uk">
      <body className={`${spectral.variable} ${badScript.variable} ${amatic.variable} ${sofia.variable} ${comfortaa.variable}`}>
          
          <Header />
          {children}
          <Footer />
          
       

        <button className={`scroll ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
          <Image
            src='/png/arrow-up.png'
            alt='Прокрутити вгору'
            width={512}
            height={512}
          />
        </button>

      </body>
    </html>
  );
}
