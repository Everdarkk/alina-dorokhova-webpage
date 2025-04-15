'use client'

import { useState } from "react"
import Image from "next/image"

type QuestionProps = {
    question: string
    answer: string
}

export default function Question({ question, answer }: QuestionProps) {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className="qa">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="question"
                >
                <span>{question}</span>

                <Image 
                    src='/png/chevron.png' 
                    alt="Стрілочка"
                    width={50}
                    height={50}
                    style={{transform: isOpen ? 'rotate(270deg)' : 'rotate(90deg)', transition: 'transform 0.3s ease'}}
                    />
            </button>
            {isOpen && (
                <div className="answer">
                    {answer}
                </div>
            )}
        </div>
    )
}