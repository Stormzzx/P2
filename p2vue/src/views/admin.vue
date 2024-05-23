<template>
    <div class="form">
        <h3>:: Venda de Cães ::</h3>
        <form @submit.prevents=""submit>
            <span>Raça:</span>
            <input type="nom" v-model="nome">
            <br><br>
            <span>Preço:</span>
            <input type="preco" v-model="preco">
            <br><br>
            <button type="submit"></button>
        </form>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            nome: '',
            preco: '',
        }
    },
    methods: {
        submit(){
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCdKnzBLj4pZiInkPhxb45WdTMNiTDVEnY',{
                email: this.email,
                password: this.password,
                returnSecureToken: true
            })
                .then(
                    res => console.log(res)
                )
                .catch(
                    res => console.log(res)
                )
        }
    }
}
</script>

<style>
.form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
