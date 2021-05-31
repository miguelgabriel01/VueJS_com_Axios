import Vue from 'vue'//importamos o vue da pasta node_module
import axios from 'axios'//importamos o axios da pasta node_module

//criamos a url padrão da nossa aplicação
axios.defaults.baseURL = 'https://curso-vue-66946-default-rtdb.firebaseio.com/'//url tirada do banco de dados criado no fire base(firebase.google.com)

Vue.use({
  install(Vue){
    Vue.prototype.$http = axios//trecho do codigo que permite que o axios possa ser executado em qualquer parte da aplicação
  }
})

//feito essa configuração, devemos importar para o arquivo main.js