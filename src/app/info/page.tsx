import HeroInfo from "@/components/HeroInfo"
import ForBeg from "@/components/ForBeg"
import Communication from "@/components/Communication"
import MyTools from "@/components/MyTools"
import Schedule from "@/components/Schedule"
import Head from "next/head"

export const metadata = {
  title: 'Аліна Дорохова | Інформаційна сторінка',
  description: 'Сайт логопеда Аліни Дорохової. Онлайн-консультації, корекція мовлення, розвиток мовлення у дітей.',
  keywords: 'логопед онлайн, логопед для дітей, логопед для дорослих, логопедичні заняття онлайн, логопед для дітей з аутизмом, логопед для дітей з дислексією, логопед для дітей з затримкою мовлення, логопед для дітей з фонетичними порушеннями, логопед для дітей з дизартрією, логопед для дітей з алалією, логопед для дітей з ринолалією, логопед для дітей з заїканням, логопед для дітей з дисграфією, логопед для дітей з дислексією, логопед для дітей з афазією, логопед для дітей з аграматизмом, логопед для дітей з фонематичним недорозвиненням',
  author: 'Аліна Дорохова',
  creator: 'Олександр Дорохов',
  openGraph: {
    title: 'Аліна Дорохова - логопед онлайн',
    description: 'Сучасна логопедія для дітей та дорослих. Онлайн заняття з логопедом.',
    images: [
      {
        url: '/icon.svg',
        width: 1200,
        height: 630,
        alt: 'Аліна Дорохова - логопед онлайн',
      },
    ],
    siteName: 'Аліна Дорохова - логопед онлайн',
  },
  metadataBase: new URL('https://alinadorokhova.com'),
}

export default function Info() {
    return (
        <>
            <Head>
              <link rel="icon" href="https://alinadorokhova.com/favicon.svg" />
              <link rel="apple-touch-icon" href="https://alinadorokhova.com/favicon.svg" />
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