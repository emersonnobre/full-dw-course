export default class Cliente {
    private _id: string
    private _nome: string
    private _idade: number

    constructor(nome: string, idade: number, id: string = null) {
        this._id = id
        this._nome = nome
        this._idade = idade
    }

    static empty() {
        return new Cliente('', 0, '')
    }

    get id() {
        return this._id
    }

    get nome() {
        return this._nome
    }

    get idade() {
        return this._idade
    }
}