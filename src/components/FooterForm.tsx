'use client'

import emailjs from '@emailjs/browser'
import { useRef } from 'react'

import styles from '../styles/FooterForm.module.css'

export default function FooterForm() {
    const form = useRef<HTMLFormElement>(null)

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
            form.current?.reset()
            alert('Вашу електронну пошту успішно відправлено!')
        })
        .catch((error: Error) => {
            console.error('Дуже прикро, але сталася помилка відправки повідомлення:', error)
        })
    }

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <input 
                className={styles.input}
                type="email"
                name='name'
                placeholder="Ваш e-mail" 
                required
                autoComplete='off'
            />

            <button className={styles.btn} type="submit">Відправити</button>
        </form>
    )
}