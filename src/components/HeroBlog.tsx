import BlogPic from '/public/svg/blog.svg'
import styles from '../styles/HeroBlog.module.css'

export default function HeroBlog() {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>На цій сторінці можна подивитись мої публікації, які стосуються логопедичної практики та занять з клієнтами</h1>

            <BlogPic width={500} height={500} className={styles.img}/>
        </div>
    )
}