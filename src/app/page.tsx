import Hero from "@/components/Hero"
import About from "@/components/About"
import Head from "next/head"

export const metadata = {
  title: 'Логопед онлайн — Аліна Дорохова | Корекція і розвиток мовлення',
  description: 'Логопед онлайн Аліна Дорохова — консультації для дітей та дорослих. Допомога при затримці мовлення, дислексії, заїканні та інших мовленнєвих порушеннях. Досвід та індивідуальний підхід з турботою про кожного клієнта!',
  keywords: 'логопед онлайн, логопед для дітей, логопедичні заняття онлайн, корекція мовлення, розвиток мовлення у дітей',
  author: 'Аліна Дорохова',
  creator: 'Олександр Дорохов',
  openGraph: {
    title: 'Аліна Дорохова - логопед онлайн',
    description: 'Сучасна логопедія для дітей та дорослих. Онлайн консультації з логопедом.',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Аліна Дорохова - логопед онлайн',
      },
    ],
    siteName: 'Аліна Дорохова - логопед онлайн',
  },
  metadataBase: new URL('https://www.alinadorokhova.com'),
  alternates: {
    canonical: 'https://www.alinadorokhova.com'
  }
}

export default function Home() {

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
    </>
  );
}
