<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="signup-container">
                    <div class="card-body">
                        <h2 class="text-center mb-4">Sign Up</h2>
                        <form @submit.prevent="registerUser">
                            <div class="form-group">
                                <label for="registerEmail">Email</label>
                                <input type="email" class="form-control" id="registerEmail" name="registerEmail" v-model="email" required>
                            </div>
                            <div class="form-group">
                                <label for="registerPassword">Password</label>
                                <input type="password" class="form-control" id="registerPassword" name="registerPassword" v-model="password" required>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                        </form>
                        <p class="mt-3 text-center">Already have an account? <router-link to="/login">Login</router-link></p>
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

.signup-container{
    position: relative;
    top: 50px;
}
</style>
