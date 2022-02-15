import Link from 'next/link'
import styles from '../styles/Layout.module.css'
import Header from  './Header'

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <Link href='/' >Back</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}