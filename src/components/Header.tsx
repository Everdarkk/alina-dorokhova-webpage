import Link from 'next/link'
import Logo from '../../public/svg/Logo'

import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <>
            <header className={styles.wrap}>
                <div className={styles.left}>
                    <Logo />
                    <span className={styles.content}>
                        <h1 className={styles.h1}>Аліна Дорохова</h1>
                        <p className={styles.p}>онлайн-логопед</p>
                    </span>
                </div>

                <nav className={styles.navigation}>
                    <Link className={styles.link} href='/'>Про мене</Link>
                    <Link className={styles.link} href='/info'>Інфо</Link>
                    <Link className={styles.link} href='/blog'>Блог</Link>
                </nav>
            </header>
        </>
    )
}