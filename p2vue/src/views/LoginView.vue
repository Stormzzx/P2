<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="text-center mb-4">Login</h2>
                        <form @submit.prevent="loginUser">
                            <div class="form-group">
                                <label for="loginEmail">Email</label>
                                <input type="email" class="form-control" id="loginEmail" name="loginEmail" v-model="email" required>
                            </div>
                            <div class="form-group">
                                <label for="loginPassword">Password</label>
                                <input type="password" class="form-control" id="loginPassword" name="loginPassword" v-model="password" required>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                        </form>
                        <p class="mt-3 text-center">Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            email: '',
            password: '',
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

body {
    background-color: #f4f4f4;
}

.login-container {
    position: relative;
    top: 50px;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 100px;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>
<!--template>
    <div class="container">
        <div clas1s="row">
            <div class="col-md-6 offset-md-3">
                <div class="login-container">
                    <h2 class="text-center mb-4">Login</h2>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="username" name="username" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" name="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </form>
                    <p class="mt-3 text-center">Don't have an account?<RouterLink to="/signup">Sign up</RouterLink></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
    const login = ref("")
const signIn = ('');


</script>

<style>
body {
    background-color: #f4f4f4;
}

.login-container {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 100px;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
</style-->
