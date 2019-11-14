new Vue({
    el:'#app',
    data:{
        titulo:'Usando vueJs'
    },
    methods:{
        alterarTitulo(event){
            this.titulo = event.target.value
        }
    }
})