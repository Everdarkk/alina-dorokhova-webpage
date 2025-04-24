import Image from 'next/image'
import Year from './Year'

import styles from '../styles/TimelineChart.module.css'

export default function TimelineChart() {
    return (
        <div className={styles.wrap}>
            <Image 
                src='/png/vector.png'
                alt='Шкала часу'
                width={1300}
                height={50}
                className={styles.img} 
            />

            <Image 
                src='/png/vector2.png'
                alt='Шкала часу'
                width={10}
                height={100}
                className={styles.img2}
            />

            <div className={styles.main}>
                <Year
                    year='2016'
                    text='початок логопедичної діяльності в ході навчання в ДДПУ'
                />

                <Year
                    year='2018'
                    text='закінчила магістратуру ДДПУ з відзнакою'
                />

                <Year
                    year='2019'
                    text='логопединя в компанії "Логозон"'
                />

                <Year
                    year='2021'
                    text='науково-методичний співробітник-консультант в компанії “Логозон”'
                />

                <Year
                    year='2022'
                    text='онлайн-логопед для дітей-білінгвів в онлайн-школі “GovoriKa”'
                />

                <Year
                    year='2023-∞'
                    text='приватна практика онлайн-логопеда'
                />
            </div>
        </div>
    )
}