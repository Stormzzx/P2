<template>
    {{ carrinho }}
    <br>
    <input type="text" v-model="pesquisa">
    <button @click="getMeal(pesquisa)">search</button>
    <div style="display: fle; flex-wrap: wrap; gap: 10px; ">
        <div v-for="item in meal"
            style="display: flex; background-color: grey; flex-direction: column; align-items: center;">
            <img :src="item.strMealThumb" alt="" width="75">
            {{ item.strMeal }}
            <button @click="() => carrinho.push(item.strMeal)">comprar</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const meal = ref('')
const pesquisa = ref('')
const carrinho = ref([])
const getMeal = (refeicao) => fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + refeicao)
    .then(dados => dados.json())
    .then(resultado => meal.value = resultado.meals)
</script>

<style>
input {
    width: 100px;
    height: 50px;
}

button {
    width: 100px;
    height: 50px;
}
</style>