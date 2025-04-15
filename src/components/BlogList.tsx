import { blogs } from "../data/blogs"
import Link from "next/link"
import Image from "next/image"

export default function BlogList() {
    return (
        <section>
            <ul className='blog-list'>
                { blogs.map((blog) => (
                    <li key={ blog.slug } className='blog-post'>
                        <Link href={`/blog/${blog.slug}`}>
                            <Image 
                                src={blog.imgSrc}
                                alt="Світлина"
                                width={1100}
                                height={600}
                            />

                            <h1 className="title">
                                {blog.title}
                            </h1>

                            <p className="date">
                                {blog.date}
                            </p>
                        </Link>
                    </li>
                )) }
            </ul>
        </section>
    )
}