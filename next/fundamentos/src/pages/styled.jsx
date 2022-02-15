import styles from '../styles/Styled.module.css'
import Layout from '../components/Layout'

export default function Styled() {
    return (
        <Layout>
            <div className={styles.purple}>
                <h1>Styled Component</h1>
            </div>
            <hr />
            <p>This is a styled component build to train my abilities with the NextJS CSS resources!</p>
        </Layout>
    )
}