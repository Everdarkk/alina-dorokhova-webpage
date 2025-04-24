import { blogs } from "../data/blogs"
import Link from "next/link"
import Image from "next/image"
import styles from '../styles/BlogList.module.css'

export default function BlogList() {
    return (
        <div className={styles.wrap}>
            <ul className={styles.list}>
                { blogs.slice().reverse().map((blog) => (
                    <li key={ blog.slug } className={styles.itemWrap}>
                        <Link href={`/blog/${blog.slug}`}>
                            <div className={styles.contentWrap}>
                                <Image
                                    src={blog.imgSrc}
                                    alt="Світлина"
                                    width={800}
                                    height={600}
                                    className={styles.img}
                                />
                                <div className={styles.content}>
                                    <h1 className={styles.title}>
                                        {blog.title}
                                    </h1>
                                    <p className={styles.date}>
                                        {blog.date}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                )) }
            </ul>
        </div>
    )
}