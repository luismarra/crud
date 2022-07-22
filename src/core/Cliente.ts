export default class Cliente {
    #id: string
    #nome: string
    #idade: number
    #email: string
    #empresa: string
    #secao: string

    constructor(nome: string, idade: number, email: string, empresa: string, secao: string, id: string = null) {
        this.#id = id
        this.#nome = nome
        this.#idade = idade
        this.#email = email
        this.#empresa = empresa
        this.#secao = secao
    }

    static vazio() {
        return new Cliente('', 0, '', '',  '')
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    get email() {
        return this.#email
    }

    get empresa() {
        return this.#empresa
    }

    get secao() {
        return this.#secao
    }

}