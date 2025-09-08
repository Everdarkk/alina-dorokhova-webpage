import Hero from "@/components/Hero"
import About from "@/components/About"
import Head from "next/head"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Логопед онлайн — Аліна Дорохова | Корекція і розвиток мовлення',
  description: 'Професійний логопед онлайн Аліна Дорохова. Комплексна допомога дітям та дорослим: корекція затримки мовлення, дислексії, заїкання та інших мовленнєвих порушень. Індивідуальний підхід.',
  alternates: {
    canonical: 'https://alinadorokhova.com'
  },
  openGraph: {
    title: 'Аліна Дорохова – Ваш логопед онлайн для дітей та дорослих', 
    description: 'Отримайте професійну допомогу від логопеда онлайн. Аліна Дорохова спеціалізується на корекції мовлення, дислексії, заїкання для дітей та дорослих. Запишіться на консультацію!',
    url: 'https://alinadorokhova.com',
  },
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
