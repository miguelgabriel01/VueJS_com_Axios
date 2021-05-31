<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
	</div>
</template>

<script>
export default {
 //metodo do ciclo de vida que é criado assim que a aplicação é iniciada
 created(){
	 /**
		* usamos a variavel global $http que é criada no arquivo axios.js e aparti dele usamos o verbo "post" e fazemos uma requisição a url fornecida como padrão tambem no arquivo axios.js
	  */
	 this.$http.post('usuarios.json',{
		 nome: "Miguel",
		 email: "gabrielogabriel10@gmail.com"
	 }).then(res => console.log(res))
 }
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
