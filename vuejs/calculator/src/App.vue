<script>
import Calculator from "./components/Calculator.vue";

export default {
  components: { Calculator, },
}
</script>

<template>
  <div>
    <Calculator />
  </div>
</template>

<style>
  @font-face {
    font-family: "RobotoMono";
    src: url("./assets/fonts/Roboto-Light.ttf");
  }

  * {
    font-family: 'RobotoMono', monospace;
  }

  body {
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
  }
</style>
