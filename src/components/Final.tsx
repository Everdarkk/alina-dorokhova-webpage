'use client'

import { useState } from "react"

import Image from "next/image"
import Modal from "./Modal"
import styles from '../styles/Final.module.css'
import Form from "./Form"

export default function Final() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <p className={styles.text}>Я завжди на зв’язку та готова допомогти вам або вашій дитині зробити крок до чіткого та правильного мовлення. Долучайтеся до занять – і разом досягнемо результату!</p>
                    <button onClick={() => setIsOpen(true)} className={styles.btn}>
                        Записатись
                    </button>
                </div>
                <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                    <Form onSuccess={() => setIsOpen(false)}/>
                </Modal>
                <Image
                    className={styles.img}
                    src='/png/alina-black-bg.png'
                    alt='Світлина логопеда'
                    width={5000}
                    height={5000}
                />
            </div>
        </div>
    )
}