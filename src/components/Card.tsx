import Image from "next/image"
import styles from '../styles/Card.module.css'

export default function Card({src, title, text}: {src: string, title: string, text: string}) {
    return (
        <div className={styles.wrap}>
            <Image 
                src={src}
                alt="Зображення"
                width={150}
                height={150}
                className={styles.img}
            />

            <span className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </span>
        </div>
    )
}