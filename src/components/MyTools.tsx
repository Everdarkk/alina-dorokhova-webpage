import styles from '../styles/MyTools.module.css'
import Image from 'next/image'

export default function MyTools() {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>Мої інструменти</h2>

            <div className={styles.content}>
                <ul className={styles.list}>
                    Для ефективної та комфортної роботи використовую перевірені цифрові та методичні інструменти, що допомагають зробити заняття цікавими та результативними:

                    <li className={styles.item}>
                        <i>Платформа для занять</i>

                        <span>💻 <b>Zoom</b> – основний інструмент для проведення онлайн-занять. Завдяки функціям демонстрації екрана, інтерактивної дошки та можливості запису сесій, учні отримують максимально зручний формат навчання.</span>
                    </li>

                    <li className={styles.item}>
                        <i>Візуальні та інтерактивні матеріали</i>

                        <span>📊 <b>Презентації</b> в <b>PowerPoint</b> – адаптовані навчальні матеріали з картинками, вправами та анімацією для залучення дитини в процес.</span>

                        <span>🖊 <b>Інтерактивна дошка</b> Zoom / Jamboard – використовується для написання, малювання та вправ у реальному часі.</span>

                        <span>📚 <b>Інтерактивні онлайн-платформи</b> (Wordwall, Learning Apps, Genially, Pink Cat Games та інші ) - для утримання уваги та забезпечення цікавого процесу.
                        </span>
                    </li>

                    <li className={styles.item}>
                        <i>Додаткові логопедичні ресурси</i>

                        <span>📚 <b>Логопедичні картки</b> та <b>артикуляційні вправи</b> – спеціальні матеріали для розвитку мовлення.</span>

                        <span>🎲 <b>Логопедичні ігри</b> та <b>тренажери</b> – допомагають урізноманітнити заняття та зробити процес навчання цікавим для дітей.</span>

                        <span>🔊 <b>Аудіотренування</b> та <b>фонетичні вправи</b> – розвивають сприйняття звуків і правильну вимову.</span>
                    </li>

                    <li className={styles.item}>
                        <i>Обладнання для якісного зв’язку</i>

                        <span>🎧 <b>Навушники з мікрофоном</b> – покращують якість звуку та допомагають уникнути фонового шуму.</span>

                        <span>📹 <b>HD-Вебкамера</b> – для візуального контакту та демонстрації артикуляційних вправ.</span>
                    </li>
                </ul>

                <div className={styles.logos}>
                    <div className={styles.imgWrap}>
                        <Image
                            src='/png/zoom.png'
                            alt='Zoom'
                            width={500}
                            height={500}
                            className={styles.img}
                        />
                    </div>

                    <div className={`${styles.imgWrap} ${styles.imgPpt}`}>
                        <Image
                            src='/png/ppt.png'
                            alt='PowerPoint'
                            width={500}
                            height={500}
                            className={styles.img}
                        />
                    </div>

                    <div className={styles.imgWrap}>
                        <Image
                            src='/png/genially.png'
                            alt='Genially'
                            width={500}
                            height={500}
                            className={styles.img}
                        />
                    </div>

                    <div className={`${styles.imgWrap} ${styles.imgWw}`}>
                        <Image
                            src='/png/wordwall-seeklogo.png'
                            alt=''
                            width={500}
                            height={500}
                            className={styles.img}
                        />
                    </div>

                    <div className={`${styles.imgWrap} ${styles.imgJam}`}>
                        <Image
                            src='/png/jamboard.png'
                            alt='Jamboard'
                            width={500}
                            height={500}
                            className={styles.img}
                        />
                    </div>

                    <div className={`${styles.imgWrap} ${styles.imgPink}`}>
                        <Image
                            src='/png/pcg.png'
                            alt='PinkCatGames'
                            width={500}
                            height={500}
                            className={styles.img}
                        />
                    </div>

                    <div className={`${styles.imgWrap} ${styles.imgSs}`}>
                        <Image
                            src='/png/ss.png'
                            alt='SteelSeries'
                            width={500}
                            height={500}
                            className={styles.img}
                        />
                    </div>

                    <div className={`${styles.imgWrap} ${styles.imgHp}`}>
                        <Image
                            src='/png/hp.png'
                            alt='HP'
                            width={500}
                            height={500}
                            className={styles.img}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}