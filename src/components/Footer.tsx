import Link from 'next/link'
import Facebook from '../../public/svg/Facebook'
import Instagram from '../../public/svg/Instagram'
import Tiktok from '../../public/svg/Tiktok'
import Telegram from '../../public/svg/Telegram'
import FooterForm from './FooterForm'

export default function Footer() {

    return (
        <footer>
            <span>
                <p>Сайт створено з любов&apos;ю та турботою про людей</p>
                <p>Ukraine | Worldwide</p>
                <p>© 2025 Аліна Дорохова. Усі права захищені</p>
            </span>

            <nav>
                <Link href="">
                  <Telegram />
                </Link>

                <Link href="">
                    <Tiktok />
                </Link>

                <Link href="">
                    <Facebook />
                </Link>

                <Link href="">
                    <Instagram />
                </Link>
            </nav>
            <span>
                <h3>Залишились питання?</h3>
                <p>Залиште свою електронну пошту для зворотнього зв&apos;язку</p>
                <FooterForm />
            </span>
        </footer>
    )
}