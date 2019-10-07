import Vue from 'vue'

const withHandsome = component => {
  return Vue.component('withHandsome', {
    data () {
      return {
        name: 'HoC data content'
      }
    },

    render (h) {
      return h(component, {
        props: {
          name: `${this.name} HoC decorator content`
        }
      })
    }
  })
}

export default withHandsome
