'use client'

import { useState } from 'react'
import Link from 'next/link'

import Education from '/public/svg/education.svg'
import Modal from './Modal'
import Form from './Form'

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="general">
            <div className="hero">
                <div className="title">
                    <h1>Кожне слово має звучати впевнено!</h1>
                    <h2>Допомагаю вам знайти гармонію в мовленні, подолати труднощі та відчути радість від спілкування. </h2>
                    <span>
                        <p>З любов’ю, турботою та індивідуальним підходом – разом зробимо ваше мовлення зрозумілим, виразним і живим!</p>
                    </span>
                </div>
                <Education width={600} />
            </div>

            <div className="buttons">
                <button onClick={() => setIsOpen(true)}>
                    Записатись
                </button>

                <button>
                    <Link href='/info#schedule'>
                        Розклад
                    </Link>
                </button>
            </div>

            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                <Form onSuccess={() => setIsOpen(false)}/>
            </Modal>
        </section>
    )
}