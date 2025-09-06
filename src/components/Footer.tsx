'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'

import styles from '../styles/Footer.module.css'

const FooterForm = dynamic(() => import('@/components/FooterForm'), {
    ssr: false})

export default function Footer() {

    return (
        <footer className={styles.wrap}>
            <span className={styles.block}>
                <p>Сайт створено з любов&apos;ю та турботою про людей</p>
                <p>Ukraine | Worldwide</p>
                <p>© 2025 Аліна Дорохова. Усі права захищені</p>
            </span>

            <nav className={styles.nav}>
                <a href="https://t.me/logoped_dorokhova_alina" target="_blank" rel="noopener noreferrer">
                  <Image
                    className={styles.img}
                    src='/png/telegram.png'
                    alt='Telegram'
                    width={512}
                    height={512512}
                  />
                </a>

                <a href="https://www.tiktok.com/@logoped_alinka?_t=ZM-8vepfYyVi4L&_r=1" target="_blank" rel="noopener noreferrer">
                    <Image
                        className={styles.img}
                        src='/png/tik-tok.png'
                        alt='TikTok'
                        width={512}
                        height={512}
                    />
                </a>

                <a href="https://www.instagram.com/logoped.alinka?igsh=aG1pYnZna3AwcWE0" target="_blank" rel="noopener noreferrer">
                    <Image
                        className={styles.img}
                        src='/png/instagram.png'
                        alt='Instagram'
                        width={512}
                        height={512}
                    />
                </a>

                <a href="https://www.facebook.com/share/18g5pm7b2T/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                    <Image
                        className={styles.img}
                        src='/png/facebook.png'
                        alt='Facebook'
                        width={512}
                        height={512}
                    />
                </a>
            </nav>
            <span className={styles.question}>
                <h5 className={styles.text}>Залишились питання?</h5>
                <p className={styles.mail}>Залиште свою електронну пошту для зворотнього зв&apos;язку</p>
                <FooterForm />
            </span>
        </footer>
    )
}