import Header from '../components/Header'
import Link from 'next/link'

export default function Index() {
    return (
        <div>
            <Header title='Fundamentos de React & Next.js' />
            <h1>Index page!</h1>
            <h2>Let's code bro!</h2>
            <Link href='/styled'>Styled component</Link>
            <Link href='/jsx'>JSX component</Link>
        </div>
    )
}