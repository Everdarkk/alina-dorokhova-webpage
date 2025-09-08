import HeroInfo from "@/components/HeroInfo"
import ForBeg from "@/components/ForBeg"
import Communication from "@/components/Communication"
import MyTools from "@/components/MyTools"
import Schedule from "@/components/Schedule"
import Head from "next/head"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Про логопеда Аліну Дорохову',
  description: 'Дізнайтеся більше про досвід та кваліфікацію логопеда Аліни Дорохової. Індивідуальний підхід до кожного клієнта. Корекція мовлення для дітей та дорослих.',
  alternates: {
    canonical: 'https://alinadorokhova.com/info',
  },
  openGraph: {
    title: 'Про логопеда Аліну Дорохову',
    description: 'Детальна інформація про професійний шлях та методи роботи логопеда Аліни Дорохової.',
    url: 'https://alinadorokhova.com/info',
  },
}


export default function Info() {
    return (
        <>
            <Head>
              <link rel="icon" href="/favicon.ico" />
              <link rel="apple-touch-icon" href="/favicon.ico" />
            </Head>

            <section>
                <div style={{maxWidth: '90rem', marginInline: 'auto'}}>
                    <HeroInfo />
                    <Schedule />
                </div>

                <ForBeg />
                <Communication />

                <div style={{maxWidth: '90rem', marginInline: 'auto'}}>
                <MyTools />
                </div>
            </section>
        </>
        
    )
}