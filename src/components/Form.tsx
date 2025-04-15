'use client'

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

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
                <div className="success-message">
                    <h2>Ваше повідомлення успішно відправлено!</h2>
                    <p>Я зв’яжуся з вами найближчим часом.</p>
                </div>
            )  : (
                <form
                ref={form}
                onSubmit={handleSubmit}
            >
                <div>
                    <label>Ім&quot;я:</label>

                    <input 
                        type="text"
                        name='name'
                        required
                    />
                </div>

                <div>
                    <label>Номер телефону або контактні дані:</label>

                    <input 
                        type="telephone"
                        name='phone'
                        required
                    />
                </div>

                <div>
                    <label>Зручний месенджер:</label>

                    <input 
                        type="text"
                        name='messenger'
                        
                    />
                </div>

                <div>
                    <label>Бажаний час:</label>

                    <input 
                        type="time"
                        name='time'
                        required
                    />
                </div>

                <button type="submit">
                    Надіслати
                </button>
            </form>
            )}
        </>
    )
}