'use client'

import { useState } from "react"

import Modal from "./Modal"
import Form from "./Form"
import styles from '../styles/Schedule.module.css'

export default function Schedule() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div id="schedule" className={styles.wrap}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Мій розклад
                </h1>

                <p className={styles.text}>
                    Щоб вам було зручно спланувати заняття, я публікую актуальний розклад із вільними годинами. Виберіть зручний час і зв’яжіться для запису. Якщо зручного для Вас часу немає – напишіть мені, і ми спробуємо знайти рішення!
                </p>
            </div>

            <div className={styles.calendarWrap}>
                <iframe 
                    src="https://calendar.google.com/calendar/embed?src=logoped.alina.dorokhova%40gmail.com&ctz=Europe%2FKiev&hl=uk"   
                    width="900" 
                    height="500" 
                    className="calendar"
                    style={{border:0, borderRadius:'0.3rem'}}>
                </iframe>
                
                
            </div>

            <button onClick={() => setIsOpen(true)} className={styles.btn}>
                <span>Записатись</span>
            </button>

            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                <Form onSuccess={() => setIsOpen(false)}/>
            </Modal>
        </div>
    )
}