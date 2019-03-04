/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'

var app = new Vue({
  el: '#app',
  data: {
    // テキストのバインディング
    message: "Can you say hello?",

    // フォーム入力との同期
    synchronizedmessage: '初期メッセージ',

    // リストデータ表示
    list: [
      { id: 1, name: 'ポッポ', hp: 100 },
      { id: 2, name: 'ストライク', hp: 200 },
      { id: 3, name: 'サイドン', hp: 300 },
    ],

    // 条件分岐
    show: true,

    // トランジション&アニメーション
    showAnime: true,

    // カウント
    count: 0,
  },

  methods: {
    // イベントの利用
    handleClick: function(event) {
      alert(event.target)
    },
    // カウント
    increments: function() {
      this.count += 1
    },
    // リストデータ更新
    doAdd: function() {
      var max = this.list.reduce(function(a, b) {
        return a > b.id ? a : b.id
      }, 0)
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
    },
    // リストデータ削除
    doRemove: function(index) {
      this.list.splice(index, 1)
    },
    doAttack: function(index) {
      this.list[index].hp -= 10
    }
  }
})


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
