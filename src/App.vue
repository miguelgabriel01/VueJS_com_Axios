<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome">
         <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe seu Nome"></b-form-input>
			</b-form-group>

		<b-form-group label="E-mail">
     <b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe seu E-mail"></b-form-input>
		</b-form-group>
		<hr>
		<b-button @click="salvar()" size="lg" variant="primary">Salvar</b-button>
		</b-card>
	</div>
</template>

<script>
export default {
	data(){
		return{
			usuario:{
			nome:'',
			email:'',
			}
		}
	},
	methods:{
		//Metodo responsavel por salvar o usuario e que será chamado apos o click
		salvar(){
			console.log(this.usuario)
		}
	}
 //metodo do ciclo de vida que é criado assim que a aplicação é iniciada
 //created(){
	 /**
		* usamos a variavel global $http que é criada no arquivo axios.js e aparti dele usamos o verbo "post" e fazemos uma requisição a url fornecida como padrão tambem no arquivo axios.js
	  */
/* 	 this.$http.post('usuarios.json',{
		 nome: "Miguel",
		 email: "gabrielogabriel10@gmail.com"
	 }).then(res => console.log(res))
 */ //}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
