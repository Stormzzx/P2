<template>
  <div class="container">
    <h1 class="title">Home Page - Meals</h1>
    <div v-if="loading" class="loading">Carregando...</div>
    <div v-else class="meals-grid">
      <div v-for="meal in meals" :key="meal.idMeal" class="meal-card">
        <h2 class="meal-title">{{ meal.strMeal }}</h2>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal-image" />
        <p><strong>Categoria:</strong> {{ meal.strCategory }}</p>
        <p><strong>Cozinha:</strong> {{ meal.strArea }}</p>
        <p style="text-align: justify;"><strong>Instruções:</strong> {{ meal.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'Home',
  setup() {
    const meals = ref([]);
    const loading = ref(true);

    onMounted(async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        meals.value = data.meals;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        loading.value = false;
      }
    });

    return {
      meals,
      loading
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.loading {
  text-align: center;
  font-size: 1.5em;
  color: #666;
}

.meals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.meal-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.meal-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.meal-title {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #444;
}

.meal-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.meal-card p {
  margin: 5px 0;
  color: #666;
  line-height: 1.4;
}

.meal-card p strong {
  color: #333;
}
</style>
