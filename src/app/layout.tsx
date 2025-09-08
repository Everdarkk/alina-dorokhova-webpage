'use client'

import "../styles/globals.css"
import { Spectral_SC, Bad_Script, Amatic_SC, Sofia_Sans, Comfortaa } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"
import Image from "next/image"
import Head from "next/head"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: 'Логопед онлайн — Аліна Дорохова',
    default: 'Логопед онлайн — Аліна Дорохова | Корекція і розвиток мовлення',
  },
  description: 'Професійний логопед онлайн Аліна Дорохова. Комплексна допомога дітям та дорослим: корекція затримки мовлення, дислексії, заїкання та інших мовленнєвих порушень. Індивідуальний підхід.',
  keywords: 'логопед, логопед онлайн, логопед для дітей, логопедичні заняття онлайн, корекція мовлення, розвиток мовлення у дітей, логопед для дорослих, допомога при заїканні, дислексія, дисграфія, ЗРР, Аліна Дорохова.',
  metadataBase: new URL('https://alinadorokhova.com'),
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  
  openGraph: {
    siteName: 'Аліна Дорохова - логопед онлайн',
    images: [{
      url: '/favicon.ico',
      width: 1200,
      height: 630,
      alt: 'Аліна Дорохова - логопед онлайн',
    }],
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

const jsonLd = {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Онлайн-консультації логопеда Аліни Дорохової",
              "description": "Онлайн-консультації та корекція мовленнєвих порушень у дітей та дорослих.",
              "serviceType": "Логопед онлайн",
              "provider": {
                "@type": "Person",
                "name": "Аліна Дорохова",
                "url": "https://alinadorokhova.com",
                "jobTitle": "Логопед",
                "phone": "+380663276738",
              },
              "areaServed": "Онлайн",
              "serviceOutput": "Покращення мовлення, корекція звуковимови, допомога при заїканні, дислексії, ЗРР"
            }

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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}>

        </script>
      </Head>
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
