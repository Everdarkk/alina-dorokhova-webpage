import HeroBlog from "@/components/HeroBlog"
import BlogList from "@/components/BlogList"
import Head from "next/head"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог логопеда Аліни Дорохової',
  description: 'Корисні статті та поради від логопеда онлайн Аліни Дорохової. Дізнайтеся більше про корекцію мовлення, розвиток навичок та сучасні методи логопедії.',
  alternates: {
    canonical: 'https://alinadorokhova.com/blog',
  },
  openGraph: {
    title: 'Блог логопеда Аліни Дорохової',
    description: 'Корисні статті та поради від логопеда онлайн Аліни Дорохової. Дізнайтеся більше про корекцію мовлення, розвиток навичок та сучасні методи логопедії.',
    url: 'https://alinadorokhova.com/blog',
  },
}

export default function Blog() {
    return (
        <>
            <Head>
              <link rel="icon" href="/favicon.ico" />
              <link rel="apple-touch-icon" href="/favicon.ico" />
            </Head>

            <section style={{ maxWidth:'90rem', marginInline:'auto'}}>
                <HeroBlog />
                <BlogList />
            </section>
        </>
    )
}