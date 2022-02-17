import styles from '../styles/Styled.module.css'
import Layout from '../components/Layout'

export default function Styled() {
    return (
        <Layout title='Exemplo Styled component'>
            <div className={styles.purple}>
                <h1>Styled Component</h1>
            </div>
        </Layout>
    )
}