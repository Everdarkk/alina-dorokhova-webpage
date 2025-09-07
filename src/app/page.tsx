import Hero from "@/components/Hero"
import About from "@/components/About"
import Head from "next/head"

export const metadata = {
  title: 'Логопед онлайн — Аліна Дорохова | Корекція і розвиток мовлення',
  description: 'Професійний **логопед онлайн** Аліна Дорохова. Комплексна допомога дітям та дорослим: корекція затримки мовлення, дислексії, заїкання та інших мовленнєвих порушень. Індивідуальний підхід.',
  keywords: 'логопед онлайн, логопед для дітей, логопедичні заняття онлайн, корекція мовлення, розвиток мовлення у дітей, логопед для дорослих, допомога при заїканні, дислексія, дисграфія, ЗРР, Аліна Дорохова',
  author: 'Аліна Дорохова',
  creator: 'Олександр Дорохов',
  openGraph: {
    title: 'Аліна Дорохова – Ваш логопед онлайн для дітей та дорослих',
    description: 'Отримайте професійну допомогу від логопеда онлайн. Аліна Дорохова спеціалізується на корекції мовлення, дислексії, заїкання для дітей та дорослих. Запишіться на консультацію!',
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
  metadataBase: new URL('https://alinadorokhova.com'),
  alternates: {
    canonical: 'https://alinadorokhova.com'
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
