import Image from 'next/image'
import styles from '../styles/Communication.module.css'

export default function Communication() {
    return (
        <div className={styles.wrap}>
            <div className={styles.contentWrap}>
                <div  className={styles.communication}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Покроковий процес комунікації</h2>
                        <ol className={styles.olist}>
                            <li>Заявка – заповнення короткої форми або запис через месенджер.</li>
                            <li>Діагностика – перша зустріч для оцінки мовлення, організаційні питання.</li>
                            <li>План корекції – підбір первинної індивідуальної програми із періодичним її переглядом.</li>
                            <li>Початок занять – робота за складеним планом та надання рекомендацій для роботи вдома.</li>
                        </ol>
                    </div>

                    <Image
                        src='/jpg/communication.jpg'
                        alt='Світлина'
                        width={500}
                        height={500}
                        className={styles.img}
                    />
                </div>

                <div className={styles.mistakes}>
                    <Image 
                        src='/jpg/mistakes.jpg'
                        alt='Світлина'
                        width={500}
                        height={500}
                        className={styles.img}
                    />                    

                    <div className={styles.content}>
                        <h2 className={styles.title}>Часті помилки батьків перед початком та під час занять</h2>

                        <ul className={styles.list}>
                            <li>Очікування швидкого результату після 1-2 занять.</li>

                            <li>Відсутність домашніх тренувань між сесіями.</li>

                            <li>Використання &quot;своїх&quot; методів, які можуть зашкодити прогресу.</li>

                            <li>Недостатня взаємодія з дитиною поза заняттями.</li>

                            <li>Відсутність прозорої комунікації з фахівцем.</li>
                        </ul>

                    </div>
                </div>       
            </div>
        </div>
    )
}