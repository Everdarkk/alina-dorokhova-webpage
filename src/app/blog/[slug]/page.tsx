import { blogs } from "@/data/blogs"
import { notFound } from "next/navigation"
import Image from "next/image"

export async function generateStaticParams() {
    return blogs.map(blog => ({slug: blog.slug}))
}

export default async function Article({ params }: { params: { slug: string } } ) {
    const blog = blogs.find(b => b.slug === params.slug)
    
    if(!blog) return notFound()

    return (
        <section>
            <Image 
                src={blog.imgSrc}
                alt="Світлина"
                width={1000}
                height={500}
            />
            <h1>{ blog.title }</h1>
            <>{ blog.content }</>
        </section>
    )
}