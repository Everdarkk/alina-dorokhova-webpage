'use client'

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import styles from '../styles/Question.module.css'

type QuestionProps = {
    question: string
    answer: string
}

export default function Question({ question, answer }: QuestionProps) {
    const [isOpen, setIsOpen] = useState(false)
    const answerRef = useRef<HTMLDivElement | null>(null)
    
    useEffect(() => {
        const el = answerRef.current

        if (!el) return

        if (isOpen) {
            el.style.maxHeight = el.scrollHeight + 'px'
            el.style.opacity = '1' 
        } else {
            el.style.maxHeight = '0px'
            el.style.opacity = '0' 
        }
    }, [isOpen])

    return (
        <div className={styles.wrap}>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={styles.question}
            >
                <span className={styles.text}>{question}</span>

                <Image 
                    className={styles.img}
                    src='/png/chevron.png' 
                    alt="Стрілочка"
                    width={50}
                    height={50}
                    style={{
                        transform: isOpen ? 'rotate(270deg)' : 'rotate(90deg)',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </button>

            <div
                ref={answerRef}
                className={`${styles.answer} ${isOpen ? styles.open : ''}`}
            >
                {answer}
            </div>
        </div>
    )
}