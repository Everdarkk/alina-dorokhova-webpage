import Image from "next/image"
import styles from '../styles/HeroInfo.module.css'

export default function HeroInfo() {
    return (
        <div className={styles.wrap}>
            <Image
                src='/png/info.png'
                alt="Інформація"
                width={2000}
                height={2000}
                className={styles.img}
            />

            <h1 className={styles.title}>
                Тут можна дізнатись корисну інформацію та знайти відповіді на свої питання
            </h1>
        </div>
    )
}