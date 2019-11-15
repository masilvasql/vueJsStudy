new Vue({
    el:"#desafio",
    data:{
        nome:"Marcelo Abrão da Silva",
        idade:27,
        linkImg:"https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
    },
    methods:{
        idadeVezes3(){
            return this.idade * 3
        },
        random(){
            return Math.random()
        }
    }
})