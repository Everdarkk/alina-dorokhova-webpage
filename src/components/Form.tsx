'use client'

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import styles from '../styles/Form.module.css'

type FormProps = {
    onSuccess: () => void
}

export default function Form({ onSuccess }: FormProps) {
    const form = useRef<HTMLFormElement>(null)
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!form.current) return
        emailjs.sendForm(
            'service_c5h555c',
            'template_1kf064q',
            form.current,
            'ZvZBKlk2q-i3uF2gR'
        )
        .then(() => {
            setIsSent(true)
            form.current?.reset()

            setTimeout(() => {
                onSuccess()
                setIsSent(false)
            }, 3000)
        })
        .catch((error: Error) => {
            console.error('Дуже прикро, але сталася помилка відправки повідомлення:', error)
        })
    }

    return (
        <>
            {isSent ? (
                <div className={styles.success}>
                    <h2 className={styles.title}>Ваше повідомлення успішно відправлено!</h2>
                    <p className={styles.text}>Я зв’яжуся з вами найближчим часом.</p>
                </div>
            )  : (
                <form
                ref={form}
                onSubmit={handleSubmit}
                className={styles.form}
            >
                <div className={styles.part}>
                    <label>Ім&apos;я:</label>

                    <input 
                        type="text"
                        name='name'
                        className={styles.input}
                        required
                    />
                </div>

                <div className={styles.part}>
                    <label>Номер телефону або контактні дані:</label>

                    <input 
                        type="telephone"
                        name='phone'
                        className={styles.input}
                        required
                    />
                </div>

                <div className={styles.part}>
                    <label>Зручний месенджер:</label>

                    <input 
                        type="text"
                        name='messenger'
                        className={styles.input}
                    />
                </div>

                <div className={styles.part}>
                    <label>Бажаний час:</label>

                    <input 
                        type="time"
                        name='time'
                        className={styles.inputTime}
                        required
                    />
                </div>

                <button type="submit" className={styles.btnSend}>
                    <span>Надіслати</span>
                </button>
            </form>
            )}
        </>
    )
}