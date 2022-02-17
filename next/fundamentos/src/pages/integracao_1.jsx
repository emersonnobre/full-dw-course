import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao(props) {
    const [ codigo, setCodigo ] = useState(null)
    const [ cliente, setCliente ] = useState({})

    async function obterCliente() {
        if (!codigo) return alert('Informe um código para busca!')
        
        const response = await fetch(`http://localhost:3000/api/clients/${codigo}`)
        const data = await response.json()
        setCliente(data)
    }

    return (
        <Layout title='Integração com API'>
            <div>
                <input type="number" value={codigo ?? 0} onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}>Obter cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Username: {cliente.username}</li>
                <li>Data de registro: {cliente.registerDate}</li>
            </ul>
        </Layout>
    )
}