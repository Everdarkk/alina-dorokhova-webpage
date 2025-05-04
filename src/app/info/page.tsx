import HeroInfo from "@/components/HeroInfo"
import ForBeg from "@/components/ForBeg"
import Communication from "@/components/Communication"
import MyTools from "@/components/MyTools"
import Schedule from "@/components/Schedule"
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
  alternates: {
    canonical: 'https://www.alinadorokhova.com/info/',
  },
  metadataBase: new URL('https://www.alinadorokhova.com/'),
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