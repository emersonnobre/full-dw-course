<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <div class="form">
            <div v-if="!started">
                <input type="number" 
                    id="quantidadePortas" 
                    size="3" 
                    v-model.number="quantidadePortas"
                    placeholder="Quantidade de portas">
            </div>
            <div v-if="!started">
                <input type="number" 
                    id="portaPremiada" size="3" 
                    v-model.number="portaPremiada" 
                    :disabled="!quantidadePortas"
                    placeholder="Porta premiada">
            </div>
            <button v-if="!started" type="button" @click="submit">Iniciar</button>
            <button v-if="started" type="button" @click="started = false">Reiniciar</button>
        </div>
        <div class="ports" v-if="started">
            <div v-for="i in quantidadePortas" :key="i">
                <Door :number="i" :hasGift="i === portaPremiada" />
            </div>
        </div>
    </div>
</template>

<script>
import Door from './components/Door.vue';

export default {
    name: 'App',
    components: {  Door },
    data() {
        return {
            started: false,
            quantidadePortas: null,
            portaPremiada: null,
        }
    },
    methods: {
        submit() {
            if (this.portaPremiada > this.quantidadePortas) {
                return alert('Porta premiada deve estar dentro do intervalo informado!');
            }
            this.started = true;
        }
    },
}
</script>

<style>
* {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
}

body {
    background: linear-gradient(to right, #2BC0E4, #EAECC6);
    color: #FFF;
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}

.ports {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
}

button {
    background-color: #fff;
    outline: none;
    padding: 5px 0;
    border: none;
    border-radius: 3px;
    font-size: 1.4rem;
    font-weight: bold;
    color: #2BC0E4;
    cursor: pointer;
    margin: 10px 0;
    transition: all .3s linear;
    width: 120px;
    height: 40px;
}

button:hover {
    background-color: #ccc;
}

.form {
    display: flex;
    flex-direction: column;
}

.form input {
    outline: none;
    border: none;
    border-radius: 2px;
    padding: 6px 4px;
    margin-bottom: 15px;
    width: 200px;
    height: 40px;
    font-size: 18px;
}

.form input::placeholder {
    color: #0004;
}

.form input::content {
    font-size: 1rem;
}

</style>