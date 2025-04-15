import Image from "next/image"

export default function Card({src, title, text}: {src: string, title: string, text: string}) {
    return (
        <div>
            <Image 
                src={src}
                alt="Зображення"
                width={150}
                height={150}
            />

            <span>
                <h1>{title}</h1>
                <p>{text}</p>
            </span>
        </div>
    )
}