import Interaction from '/public/svg/interaction.svg'
import styles from '../styles/ForBeg.module.css'

export default function ForBeg() {
    return (
        <div className={styles.wrap}>
            <div className={styles.contentWrap}>
                <h1 className={styles.title}>Що треба знати для початку?</h1>

                <div className={styles.content}>
                    <div className={styles.leftCol}>
                        <span className={styles.l1}>
                            <h3 className={styles.h3}>Мій підхід до роботи</h3>

                            <p className={styles.list}>У своїй практиці я використовую індивідуальний підхід, сучасні методики та інтерактивні завдання. Головна мета – зробити навчання ефективним і комфортним, адаптуючи матеріал до потреб кожного клієнта.</p>
                        </span>

                        <span className={styles.l2}>
                            <h3 className={styles.h3}>Для кого підходить заняття?</h3>

                            <ul className={styles.list}>
                                <li>Діти – розвиток мовлення, корекція звуковимови, підготовка до школи.</li>

                                <li>Дорослі – виправлення порушень мовлення, артикуляційні вправи.</li>

                                <li>Носії інших мов – навчання української, покращення вимови, подолання акценту.</li>
                            </ul>
                        </span>

                        <span className={styles.l3}>
                            <h3 className={styles.h3}>Що потрібно для занять?</h3>

                            <ul className={styles.list}>
                                <li>Стабільний інтернет для комфортного зв’язку.</li>

                                <li>Комп’ютер, планшет або телефон із камерою та мікрофоном.</li>

                                <li>Навушники з мікрофоном для кращої якості звуку (опціонально).</li>

                                <li>“ЛОГОБОКС” - набір спеціальних предметів для виконання вправ (підбирається індивідуально для кожного запиту).</li>
                            </ul>
                        </span>
                    </div>

                    <div className={styles.rightCol}>
                        <Interaction width={300} height={300}/>

                        <span className={styles.r1}>
                            <h3 className={styles.h3}>Чи потрібна вам логопедична консультація?</h3>

                            <div className={styles.listWrap}>
                                <h3 className={styles.list}>Відзначте, які з наведених ситуацій вам знайомі:</h3>
                                <ul className={styles.list}>
                                    <li>Дитина неправильно вимовляє деякі звуки або замінює їх на інші.</li>
                                    <li>Говорить занадто швидко або, навпаки, повільно, ковтаючи склади.</li>
                                    <li>Часто повторює звуки чи слова, є проблеми із темпом чи ритмом мовлення.</li>
                                    <li>Мова малозрозуміла для оточення.</li>
                                    <li>Вимова окремих звуків складна у дорослому віці.</li>
                                    <li>Є труднощі з читанням або письмом.</li>
                                    <li>Хочете покращити дикцію або навчитися правильно артикулювати.</li>
                                    <li>Вам потрібно освоїти українську мову з нуля.</li>
                                </ul>
                            </div>

                            <p className={styles.list}>Якщо ви відзначили 2 або більше пунктів, консультація логопеда може бути корисною! Записуйтеся на діагностику, щоб отримати професійну оцінку та рекомендації.</p>
                        </span>
                    </div>
                </div>
            </div>


        </div>
    )
}