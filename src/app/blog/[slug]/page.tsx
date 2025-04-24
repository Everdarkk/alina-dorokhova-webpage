import { blogs } from "@/data/blogs"
import { notFound } from "next/navigation"
import Image from "next/image"
import styles from '../../../styles/Article.module.css'


export default async function Article({ params }: { params: { slug: string } }) {
    const blog = blogs.find(b => b.slug === params.slug)
    
    if(!blog) return notFound()

    return (
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
    )
}