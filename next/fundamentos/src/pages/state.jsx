import Layout from '../components/Layout'
import { useState } from 'react'

export default function State(props) {
    const [ number, setNumber ] = useState(0)

    function handleIncrement() { setNumber(number+1) }

    return (
        <Layout title='State component'>
            <div>{number}</div>
            <button onClick={handleIncrement}>increment</button>
        </Layout>
    )
}