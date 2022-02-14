import React from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'home',
    title: 'Início',
    subtitle: 'Segundo projeto do capítulo de React',
}

export default props => 
    <Main {...headerProps}>
        <div>
            <h1 className="display-4">Bem vindo!</h1>
            <hr />
            <p className="mb-0 text-muted">Sistema para exemplificar a construção 
                de um cadastro desenvolvido em React!</p>
        </div>
    </Main>