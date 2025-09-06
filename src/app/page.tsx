import Hero from "@/components/Hero"
import About from "@/components/About"
import Head from "next/head"
import SchemaJsonLd from "@/components/SchemaJsonLd"

export const metadata = {
  title: 'Логопед онлайн — Аліна Дорохова | Корекція і розвиток мовлення',
  description: 'Професійний **логопед онлайн** Аліна Дорохова. Комплексна допомога дітям та дорослим: корекція затримки мовлення, дислексії, заїкання та інших мовленнєвих порушень. Індивідуальний підхід.',
  keywords: 'логопед онлайн, логопед для дітей, логопедичні заняття онлайн, корекція мовлення, розвиток мовлення у дітей, логопед для дорослих, допомога при заїканні, дислексія, дисграфія, ЗРР, Аліна Дорохова',
  author: 'Аліна Дорохова',
  creator: 'Олександр Дорохов',
  openGraph: {
    title: 'Аліна Дорохова – Ваш логопед онлайн для дітей та дорослих',
    description: 'Отримайте професійну допомогу від логопеда онлайн. Аліна Дорохова спеціалізується на корекції мовлення, дислексії, заїкання для дітей та дорослих. Запишіться на консультацію!',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Аліна Дорохова - логопед онлайн',
      },
    ],
    siteName: 'Аліна Дорохова - логопед онлайн',
  },
  metadataBase: new URL('https://alinadorokhova.com'),
  alternates: {
    canonical: 'https://alinadorokhova.com'
  }
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite", // Or "Organization" if it represents your practice
  "name": "Аліна Дорохова - Логопед онлайн",
  "url": "https://alinadorokhova.com",
  "description": "Професійний логопед онлайн Аліна Дорохова. Комплексна допомога дітям та дорослим: корекція затримки мовлення, дислексії, заїкання.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://alinadorokhova.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Про послуги логопеда онлайн",
      "url": "https://alinadorokhova.com/services" // Replace with your actual services page URL
    },
    {
      "@type": "WebPage",
      "name": "Про Аліну Дорохову",
      "url": "https://alinadorokhova.com/about" // Replace with your actual about page URL
    }
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Аліна Дорохова",
  "jobTitle": "Логопед",
  "url": "https://alinadorokhova.com",
  "sameAs": [ // Link to professional profiles if available
    // "https://www.linkedin.com/in/your-profile",
    // "https://www.facebook.com/your-page"
  ],
  "knowsAbout": [ 
    "Логопедія",
    "Корекція мовлення",
    "Дислексія",
    "Заїкання",
    "Дисграфія",
    "ЗРР"
  ]
};

export default function Home() {

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
      </Head>

      <SchemaJsonLd data={pageSchema} />

      <SchemaJsonLd data={personSchema} />
      
      <Hero />
      <About />
    </>
  );
}
