import { blogs } from "@/data/blogs"
import { notFound } from "next/navigation"
import styles from '../styles/Article.module.css'

export async function generateStaticParams() {
    return blogs.map(blog => ({slug: blog.slug}))
}

export default async function Article({ params }: { params: { slug: string } } ) {
    const blog = blogs.find(b => b.slug === params.slug)
    
    if(!blog) return notFound()

    return (
        <div className={styles.wrap}>
            <div className={styles.imgDiv}></div>

            <div className={styles.articleWrap}>
                <h1 className={styles.title}>{ blog.title }</h1>

                <div className={styles.text}>{ blog.content }</div>
            </div>
        </div>
    )
}