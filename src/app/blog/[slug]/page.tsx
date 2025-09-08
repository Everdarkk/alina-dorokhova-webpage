import { blogs } from "@/data/blogs"
import { notFound } from "next/navigation"
import Image from "next/image"
import styles from '../../../styles/Article.module.css'
import Head from "next/head"


export async function generateMetadata({ params }: { params: Promise<{slug: string }> }) { 
  const slug = (await params).slug  
  const blog = blogs.find(b => b.slug === slug)
  if (!blog) return notFound()
  
  return {
    title: 'Логопед онлайн — Аліна Дорохова | Корекція і розвиток мовлення',
    description: 'Логопед онлайн Аліна Дорохова — консультації для дітей та дорослих. Допомога при затримці мовлення, дислексії, заїканні та інших мовленнєвих порушеннях. Досвід та індивідуальний підхід з турботою про кожного клієнта!',
    alternates: {
    canonical: `https://alinadorokhova.com/blog/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: 'Сучасна логопедія для дітей та дорослих. Онлайн консультації з логопедом.',
      images: [
        {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Аліна Дорохова - логопед онлайн',
        },
      ],
    },
  }
}

export default async function Article({ params }: { params: Promise<{slug: string }>} ) {
    const slug = (await params).slug
    const blog = blogs.find(b => b.slug === slug)
    
    if(!blog) return notFound()

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
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