import React from 'react'
import ReactDOM from 'react-dom'

import First from './components/First'
import GoodMorning from './components/GoodMorning'
import Greeting from './components/Greeting'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <First />
        <GoodMorning nome="Gabriel" />
        <Greeting type="Boa noite" name="Roberta" />
        <Pai nome="Gabriel" sobrenome="Santana">
            <Filho nome="Pedrinho" />
            <Filho nome="Torino" />
            <Filho nome="Clarinha" />
        </Pai>
    </div>
    , document.getElementById('root'))