<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">
			{{mensagem.texto}}
		</b-alert>
		<b-card>
			<b-form-group label="Nome">
         <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe seu Nome"></b-form-input>
			</b-form-group>

		<b-form-group label="E-mail">
     <b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe seu E-mail"></b-form-input>
		</b-form-group>
		<hr>
		<b-button @click="salvar()" size="lg" variant="primary">Salvar</b-button>
		<b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Listar Usuarios</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario,id) in usuarios" :key="id">
       <strong>Nome: {{usuario.nome}}</strong><br>
       <strong>E-mail: {{usuario.email}}</strong><br>
       <strong>ID: {{id}}</strong><br>
			 <b-button @click="carregar(id)" variant="warning" size="lg">Carregar</b-button>
			 <b-button @click="excluir(id)" size="lg" variant="danger" class="ml-2">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data(){
		return{
			usuarios:[],//salvar os dados da requisição get
			id:null,//recebe o ID do usuario
			mensagens:[],//armazenas as mensagens de erro e sucesso
			usuario:{//salva os valores que vem do form e que serão enviados para o firebase com axios
			nome:'',
			email:'',
			}
		}
	},
	methods:{
		//metodo para limpar dados
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},
		//metodo para carregar usuairo
		carregar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}
		},
		//metodo para excluir usuario
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
			.then( resp => this.limpar())
			.catch(err => {
				this.mensagens.push({
					texto:'Problemas para excluir Usuario',
					tipo:'danger'
				})
			})
		},
		//Metodo responsavel por salvar o usuario e que será chamado apos o click
		salvar(){
			//fazemos uma requisição post ao fite base usando como parametro os dados recebidos do form(this.usuario)
			//this.$http.post('usuarios.json',this.usuario)
			//caso a requisição ocorra bem
			//.then(resp => this.limpar())

			//vereficamos se o usuario esta slistado para um update ou é a criaçãode um novo usuario
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
			.then(() => {
				this.limpar()
				this.mensagens.push({
					texto:'Operação realizada com sucesso!',
					tipo:'success'
				})
			})

		},
    //metodo que ira fazer uma requisição get para listar os usuarios já cadastrados e será chamado aparti de um botão
		obterUsuarios(){
		 this.$http.get('usuarios.json')
		 //caso a requisição ocorra com sucesso
		 .then(res=> {
			 this.usuarios = res.data
			 console.log(res.data)
		 })
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
