'use client'

import { useState } from "react"

import Image from "next/image"
import Modal from "./Modal"

export default function Final() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section>
            <div>
                <p>Я завжди на зв’язку та готова допомогти вам або вашій дитині зробити крок до чіткого та правильного мовлення. Долучайтеся до занять – і разом досягнемо результату!</p>

                <button 
                    onClick={() => setIsOpen(true)}
                    >
                        Записатись
                </button>
            </div>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>

            <Image
                src='/png/alina-black-bg.png'
                alt='Світлина логопеда'
                width={500}
                height={500}
            />
        </section>
    )
}