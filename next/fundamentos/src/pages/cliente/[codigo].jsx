import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function ClientePorCodigo(props) {
    const router = useRouter()

    return (
        <Layout title='Exemplo de navegação 02 (dinâmica)'>
            <span>Codigo: {router.query.codigo}</span>
        </Layout>
    )
}