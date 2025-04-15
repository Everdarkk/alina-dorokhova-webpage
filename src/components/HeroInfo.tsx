import Image from "next/image"

export default function HeroInfo() {
    return (
        <section>
            <Image
                src='/png/info.png'
                alt="Інформація"
                width={500}
                height={500}
            />

            <h1 className="title">
                Тут можна дізнатись корисну інформацію та знайти відповіді на свої питання
            </h1>
        </section>
    )
}