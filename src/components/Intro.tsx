import Image from 'next/image'
import styles from '../styles/Intro.module.css'

export default function Intro() {
    return (
        <div className={styles.wrap}>
            <h3 className={styles.title}>Про мене</h3>

            <div className={styles.main}>
                <Image 
                    src='/png/alina-white-bg.png' 
                    alt='Фото на світлому фоні'
                    width={5000}
                    height={5000}
                    className={styles.img}
                    />

                <p className={styles.p}>Вітаю! Мене звати Аліна. Мій шлях почався з Донбаського державного педагогічного університету, де я здобула ступінь магістра в галузі спеціальної освіти, а також ступінь магістра в галузі філології. Протягом 8 років я працювала з дітьми з різними мовленнєвими порушеннями – від дислалії до заїкання та затримки мовленнєвого розвитку. Моя робота ґрунтується на сучасних доказових методиках корекції мовлення, які я постійно адаптую під індивідуальні потреби кожної особистості.</p>
            </div>
        </div>
    )
}