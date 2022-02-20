
<script setup>
import { ref, reactive, computed, } from 'vue';

const contentVisible = ref(false);
const nome = ref('Emerson');
const objectOfAttrs = ref({
  class: 'subtitle',
  id: 'subtitleId',
});
const disableButton = ref(true);
const author = reactive({
  name: 'John Frusciante',
  musics: [
    'Scar tissue',
    'Cant stop',
    'The zephyr song',
  ],
});
const students = reactive([
  {
    name: 'Clarissa',
    grade: 9.1,
  },
  {
    name: 'Thomas',
    grade: 4.1,
  },
  {
    name: 'Isabelle',
    grade: 7.1,
  },
  {
    name: 'Yasmin',
    grade: 2,
  },
]);
const mustApplyClass = ref(false);

// A diferença entre os computeds e os métodos puros é que os computeds trabalham com cache de acordo com seu reactive
const hasMusics = computed(() => {
  return author.musics.length > 0 ? 'Yes' : 'No';
});

function returnContent() {
  return "Some random content...";
}

function toggleContent() {
  contentVisible.value = !contentVisible;
}

function alert(msg) {
  window.alert(msg);
}

function onSubmit() {
  console.log('sending data form...');
}

function toggleClass() {
  mustApplyClass.value = !mustApplyClass.value;
}
</script>

<template>
  <!-- usando v-bind para declarar valores de atributos HTML com valores do componente. Não funcionaria com {{ }} -->
  <h1 v-bind:id="nome+'IdContent'" class="welcome">Hello, world? {{ nome }}</h1>
  <!-- Sem argumentos ele atribui as propriedades do obj como atributos do elemento -->
  <p v-bind="objectOfAttrs">This is a subtitle for you!</p> 
  <button v-bind:disabled="disableButton">Check this</button>

  <!-- Controlando visibilidade de conteúdo com IF  -->
  <main>
    <!-- v-on: ou @ para eventos -->
    <button @click="alert('Alert de evento')">Alert message</button>
    <button v-on:click="toggleContent">{{ contentVisible ? "hide content" : "show content"}}</button>

    <div v-if="contentVisible" id="content">
      {{ returnContent() }}
    </div>
  </main>

  <section class="form-section">
    <h1>Form</h1>
    <form @submit.prevent="onSubmit">
      <button type="submit">Send data</button>
    </form>
  </section>

  <p>Has musics?</p>
  <span>{{ hasMusics }}</span>

  <!-- Laço de repetição FOR -->
  <h1>Laço For</h1>
  <p v-for="(student, index) in students">
    {{ index + 1 }}) {{ student.name }} - {{ student.grade }}:
    <span v-if="student.grade >= 8">Great!</span>
    <span v-else-if="student.grade >= 7">Good!</span>
    <span v-else-if="student.grade >= 6">Median!</span>
    <span v-else>Bad!</span>
  </p>

  <h1>Usando classes de forma condicional</h1>
  <button @click="toggleClass">{{mustApplyClass ? 'Remover classe' : 'Aplicar classe'}}</button>
  <div :class="{'red-background': mustApplyClass}">
    <h3>This div is being manipulated by the click above!</h3>
  </div>

</template>

<style scoped>
.welcome {
  color: #e28341;
  font-size: large;
}

.subtitle {
  color: #666;
  font-size: medium;
  border: 1px solid #222;
}

.form-section {
  margin-top: 1rem;
  border: 1px solid black;
  padding: 1rem 3rem;
}
.red-background {
  background-color: tomato;
  color: #fff;
  padding: 2rem;
  margin-top: 1rem;
}
</style>
