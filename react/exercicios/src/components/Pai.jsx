import React, { Component } from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default class Pai extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: props.nome,
            sobrenome: props.sobrenome,
        }
    }

    render() {
        const { nome, sobrenome } = this.state

        return (
            <div>
                <h1>{nome} {sobrenome}</h1>
                <h2>Filhos</h2>
                <ul>
                    {childrenWithProps(this.props)}
                </ul>
            </div>
        )
    }
}