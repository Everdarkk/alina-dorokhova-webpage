'use client'

import { useState } from "react"

import Modal from "./Modal"

export default function Schedule() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div id="schedule" className="w-full mx-auto m-4">
            <h1>Тут можна подивитись поточні вільні години для занять</h1>

            <iframe 
            src="https://calendar.google.com/calendar/embed?src=2ae94ac252e42cba2377049421c36abd7f5e8502ff93f625792fc73c7cc32812%40group.calendar.google.com&ctz=Europe%2FHelsinki&mode=AGENDA&showTitle=0&showPrint=0&showCalendars=0&showNav=0" 
            style={{border: 0}} 
            width="800" 
            height="600" 
            frameBorder="0"
            >
            </iframe>

            <button onClick={() => setIsOpen(true)}>
                Записатись
            </button>

            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}/>
        </div>
    )
}