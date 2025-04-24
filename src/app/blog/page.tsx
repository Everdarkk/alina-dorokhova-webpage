import HeroBlog from "@/components/HeroBlog"
import BlogList from "@/components/BlogList"

export default function Blog() {
    return (
        <section style={{ maxWidth:'90rem', marginInline:'auto'}}>
            <HeroBlog />
            <BlogList />
        </section>
    )
}