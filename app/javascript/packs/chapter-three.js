import Vue from 'vue/dist/vue.esm'

var app = new Vue({
  el: '#app',
  data: {
    message: "Good morning!",

    count: 0,
  },

  methods: {
    handleInput: function(event) {
      // 代入する前に何かしら処理が書ける
      this.message = event.target.value
    }
  }
})
