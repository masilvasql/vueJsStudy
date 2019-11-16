new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta(){
            alert("pressionou o botão!")
        },
        valorinput1(){
            this.valor = event.target.value
        },
        valorinput2(){
            this.valor = event.target.value
        }
    }
})