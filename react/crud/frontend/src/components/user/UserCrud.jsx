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
    
    componentDidMount() {
        this.fetchUsersList()
    }

    fetchUsersList() {
        axios(baseUrl).then(resp => this.setState({ list: resp.data }))
            .catch(err => 
                console.log(`[UserCrud][fetchUsersList] - Error: ${err}`)
            )
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

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`)
            .then(() => {
                const list = this.state.list.filter(u => u.id !== user.id)
                this.setState({ list })
            })
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

    renderTable() {
        return (
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger"
                            style={{marginLeft: '7px'}}
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
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
                        <button className="btn btn-secondary ml-1" onClick={this.clear}
                            style={{marginLeft: '7px'}}>
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
                {this.state.list.length > 0 ? this.renderTable() : 'No registers'}
            </Main>
        )
    }
}