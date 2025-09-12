'use client'

import { useState } from 'react'
import Link from 'next/link'

import Education from '/public/svg/education.svg'
import Modal from './Modal'
import Form from './Form'

import styles from '../styles/Hero.module.css'

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className={styles.wrap}>
            <div className={styles.main}>
                <div className={styles.content}>
                    <h1 className={styles.h1}>Покращіть мовлення та знайдіть впевненість!</h1>
                    <h2 className={styles.h2}>Логопед онлайн: індивідуальні заняття зі спеціалістом для покращення вимови та набуття впевненості у мовленні. </h2>
                    <span className={styles.span}>
                        <p className={styles.p}>З любов’ю, турботою та індивідуальним підходом – разом зробимо ваше мовлення зрозумілим, виразним і живим!</p>
                    </span>
                </div>
                <Education className={styles.svg} />
            </div>

            <div className={styles.buttons}>
                <button className={styles.btn1} onClick={() => setIsOpen(true)}>
                    <span>Записатись</span>
                </button>

                <button className={styles.btn2}>
                    <Link href='/info#schedule'>
                        <span>Розклад</span>
                    </Link>
                </button>
            </div>

            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                <Form onSuccess={() => setIsOpen(false)}/>
            </Modal>
        </section>
    )
}