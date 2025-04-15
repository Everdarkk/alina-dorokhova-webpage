'use client'

import { useState } from "react"
import Image from "next/image"

type Review = {
    src: string
    name: string
    text: string
}

const reviews: Review[] = [
    {
        src: '/jpg/1.jpg',
        name: 'Олеся',
        text: 'Аліно, дуже дякуємо Вам за роботу, за терплячість та креативність! За те, що поставили моєму сину таку гарну вимову і навчили деяким новим словам! Сподіваюсь знову зустрінемось з Вами цієї осені, можливо з новим учнем. А наразі бажаю Вам гарного літа і старанних учнів.',
    },
    {
        src: '/jpg/2.jpg',
        name: 'Катерина',
        text: 'Малий до Вас дуже звик. І завжди чекає на заняття. Вчора навіть біг більше 3км, щоб встигнути. Йому з раннього віку було дуже важко сходитися з людьми. І ми були дуже щасливі, що знайшли саме Вас!',
    },
    {
        src: '/jpg/3.jpg',
        name: 'Василіса',
        text: 'Аліно, дякую Вам за урок! Син був геть зареваний поки не побачив Аліну-пірата. Він так старався вимовляти звуки, що аж червонів.',
    },
    {
        src: '/jpg/4.jpg',
        name: 'Анна',
        text: 'Добрий вечір, Алін мені дуже сподобався ваш підхід викладання, щодо подаруночків у кінці заняття. Тепер Ваші дітки просять їх від мене, підкажіть будь ласка де Ви створюєте гру під назвою Актонавти чи щось вроді цього?',
    },
    {
        src: '/jpg/5.jpg',
        name: 'Олена',
        text: 'Аліно, дуже вам вдячні за таку плідну працю. Я так розумію, це було останнє наше заняття? Доня буде дуже сильно сумувати, та й я, звичайно. Ви - неймовірна!',
    },
    {
        src: '/jpg/6.jpg',
        name: 'Анастасія',
        text: 'Дякуємо, що Ви є у нас! Вся родина Вас дуже любить!',
    }
]

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }

    const prevReview = () => {
        setCurrentIndex((prevIndex) => ((prevIndex - 1) + reviews.length) % reviews.length)
    }

    const firstReview = reviews[currentIndex]
    const secondReview = reviews[(currentIndex + 1) % reviews.length]

    return (
        <section>
            <h1>Відгуки про мою роботу</h1>

            <div className="carousel">
                <button onClick={prevReview}>
                    <Image 
                        src='/png/chevron.png' 
                        alt="Стрілочка"
                        width={100}
                        height={100}
                        style={{transform: 'rotate(180deg)', transition: 'transform 0.3s ease'}}
                    />
                </button>

                <div className="reviews">
                    <div className="review-card">
                        <div className="top-side">
                            <Image
                                src={firstReview.src}
                                alt='Світлина клієнта'
                                width={50}
                                height={50}
                            />

                            <h1>{ firstReview.name }</h1>
                        </div>

                        <p>{ firstReview.text }</p>
                    </div>

                    <div className="review-card">
                        <div className="top-side">
                            <Image
                                src={secondReview.src}
                                alt='Світлина клієнта'
                                width={50}
                                height={50}
                            />

                            <h1>{ secondReview.name }</h1>
                        </div>

                        <p>{ secondReview.text }</p>
                    </div>
                </div>

                <button onClick={nextReview}>
                    <Image 
                        src='/png/chevron.png' 
                        alt="Стрілочка"
                        width={100}
                        height={100}
                        style={{transform: 'rotate(0deg)', transition: 'transform 0.3s ease'}}
                    />
                </button>
            </div>
        </section>
    )
}