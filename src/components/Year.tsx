import styles from '../styles/Year.module.css'
import Image from 'next/image'

export default function Year({year, text}: {year: string, text: string}) {
    return (
        <div className={styles.wrap}>
            <Image
                    src='/png/mark.png'
                    alt='Мітка'
                    width={100}
                    height={100}
                    className={styles.mark}
                />
            <div className={styles.content}>
                
                <p className={styles.year}>{year}</p>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}