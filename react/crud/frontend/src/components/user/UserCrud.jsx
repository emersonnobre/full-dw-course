import React, { Component } from 'react'
import axios from 'axios'
import { baseUrlUsers as baseUrl } from '../../constants'

import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, alterar e excluir',
}

const initialState = {
    user: { name: '', email: '' },
    list: [],
}

export default class UserCrud extends Component {
    constructor(props) {
        super(props)
        
        this.state = {...initialState}

        this.updateField = this.updateField.bind(this)
        this.save = this.save.bind(this)
        this.clear = this.clear.bind(this)
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
            .catch(err => 
                console.log(`[UserCrud][save] - Error: ${err}`)
            )
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" name="name" className="form-control" 
                                value={this.state.user.name}
                                onChange={this.updateField}
                                placeholder="Digite o nome..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" name="email" className="form-control" 
                                value={this.state.user.email}
                                onChange={this.updateField}
                                placeholder="Digite o e-mail..."/>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={this.save}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-1" onClick={this.clear}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {

        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}