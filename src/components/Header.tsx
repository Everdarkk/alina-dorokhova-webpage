import Link from 'next/link'
import Logo from '@/public/svg/Logo'

export default function Header() {
    return (
        <header>
            <div>
                <Logo/>
                <span>
                    <h1>Аліна Дорохова</h1>
                    <p>онлайн-логопед</p>
                </span>
            </div>

            <nav>
                <Link href='/'>Про мене</Link>
                <Link href='/info'>Інфо</Link>
                <Link href='/blog'>Блог</Link>
            </nav>
        </header>
    )
}