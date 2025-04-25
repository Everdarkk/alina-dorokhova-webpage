import { blogs } from "@/data/blogs"
import { notFound } from "next/navigation"
import Image from "next/image"
import styles from '../../../styles/Article.module.css'
import Head from "next/head"

export const metadata = {
  title: 'Аліна Дорохова | Стаття блогу ',
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

export default async function Article({ params }: { params: Promise<{slug: string }>} ) {
    const slug = (await params).slug
    const blog = blogs.find(b => b.slug === slug)
    
    if(!blog) return notFound()

    return (
        <>
            <Head>
                <link rel="icon" href="/icon.svg" />
                <link rel="apple-touch-icon" href="/icon.svg" />
            </Head>

    
            <section style={{ maxWidth:'90rem', marginInline:'auto'}}>
                <div className={styles.wrap}>
                    <Image
                        src={blog.imgSrc}
                        alt="Світлина"
                        width={1000}
                        height={500}
                        className={styles.img}
                    />

                    <div className={styles.articleWrap}>
                        <h1 className={styles.title}>{ blog.title }</h1>
                        <div className={styles.text}>{ blog.content }</div>
                    </div>
                </div>
            </section>
        </>
    )
}