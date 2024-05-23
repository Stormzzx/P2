<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <div class="led-container">
                <div class="led"></div>
                <div class="led"></div>
                <div class="led"></div>
            </div>
            <router-link class="navbar-brand" to="/">Projeto Vue com Meals API</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/about">Store</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/game">Game</router-link>
                    </li>
                </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" v-model="pesquisa" type="search" placeholder="Search"
                            aria-label="Search">
                        <button class="btn btn-outline-success" @click="getMeal(pesquisa)" type="button">Search</button>
                    </form>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const pesquisa = ref("")
const getMeal = (refeicao) => fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + refeicao)
    .then(dados => dados.json())
    .then(resultado => store.getMeals(resultado))
</script>

<style>
@keyframes blink {
    50% {
        opacity: 0;
    }
}

.led-container {
    display: flex;
}

.led {
    position: relative;
    right: 10px;
    width: 10px;
    height: 10px;
    background-color: #0f8b02;
    border-radius: 50%;
    animation: blink 1s infinite alternate;

}

.led+.led {
    margin-left: 5px;
}
</style>