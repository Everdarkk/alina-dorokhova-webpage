'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import styles from '../styles/Reviews.module.css'

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
    const [isSmall, setIsSmall] = useState(false)

    const nextReview = () => {
        if (currentIndex < reviews.length - 2) {
            setCurrentIndex((prevIndex) => prevIndex + 1)
        }
    }

    const prevReview = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1)
        }
    }

    useEffect(() => {
        const screenCheck = () => {
            setIsSmall(window.innerWidth < 1080)
        }

        screenCheck()
        window.addEventListener('resize', screenCheck)

        return () => window.removeEventListener('resize', screenCheck)
    }, [])

    const screenValue = isSmall ? `translateX(-${currentIndex * 100}%)` : `translateX(-${currentIndex * 50}%)`


    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Відгуки про мою роботу</h1>

            <div className={styles.sliderWrap}>
                <button onClick={prevReview} className={styles.btn}>
                    <Image
                        className={styles.arrowLeft}
                        src='/png/chevron.png'
                        alt="Стрілочка"
                        width={40}
                        height={40}
                    />
                </button>

                <div className={styles.content}>
                    <div
                        className={styles.slider}
                        style={{ transform: screenValue, transition: 'transform 0.5s ease-in-out' }}
                    >
                        {reviews.map((review, index) => (
                            <div key={index} className={styles.cardWrap}>
                                <div className={styles.card}>
                                    <div className={styles.top}>
                                        <Image
                                            className={styles.img}
                                            src={review.src}
                                            alt='Світлина клієнта'
                                            width={100}
                                            height={100}
                                        />
                                        <div className={styles.nameWrap}>
                                            <h1 className={styles.name}>{review.name}</h1>
                                        </div>
                                    </div>
                                    <div className={styles.textWrap}>
                                        <p className={styles.text}>{review.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={nextReview} className={styles.btn}>
                    <Image
                        className={styles.arrowRight}
                        src='/png/chevron.png'
                        alt="Стрілочка"
                        width={40}
                        height={40}
                    />
                </button>
            </div>
        </div>
    )
}
