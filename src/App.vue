<template>
  <div id="app">
    <button @click="addOne"> Add 1 </button>
    <p>
      The button above has been clicked {{ counter }} times
    </p>

    <Sample />
  </div>
</template>

<script>
import Sample from './components/HoC'
import SampleHoc from './components/HoC/HoC'

export default {
  name: 'app',

  components: {
    Sample: SampleHoc(Sample),
  },

  data() {
    return {
      counter: 0
    }
  },

  methods: {
    addOne () {
      this.counter += 1
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
