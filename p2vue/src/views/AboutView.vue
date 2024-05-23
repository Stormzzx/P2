<template>
  <div class="container">
    <h1 class="title">Meals Store</h1>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else>
      <div class="meals-grid">
        <div v-for="meal in meals" :key="meal.idMeal" class="meal-card">
          <h2 class="meal-title">{{ meal.strMeal }}</h2>
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal-image" />
          <p><strong>Category:</strong> {{ meal.strCategory }}</p>
          <p><strong>Kitchen:</strong> {{ meal.strArea }}</p>
          <button @click="addToCart(meal)" class="add-to-cart-btn">Adicionar ao Carrinho</button>
        </div>
      </div>
      <div class="cart">
        <h2 class="cart-title">Your Storage</h2>
        <ul class="cart-list">
          <li v-for="item in cart" :key="item.idMeal" class="cart-item">
            {{ item.strMeal }} - {{ item.quantity }}x
            <button @click="removeFromCart(item)" class="remove-btn">Remove</button>
          </li>
        </ul>
        <div v-if="cart.length === 0" class="empty-cart">Your storage is empty, select to see them here!</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'AboutView',
  setup() {
    const meals = ref([]);
    const cart = ref([]);
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

    const addToCart = (meal) => {
      const existingItem = cart.value.find(item => item.idMeal === meal.idMeal);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.value.push({ ...meal, quantity: 1 });
      }
    };

    const removeFromCart = (meal) => {
      const index = cart.value.findIndex(item => item.idMeal === meal.idMeal);
      if (index !== -1) {
        if (cart.value[index].quantity > 1) {
          cart.value[index].quantity--;
        } else {
          cart.value.splice(index, 1);
        }
      }
    };

    return {
      meals,
      cart,
      loading,
      addToCart,
      removeFromCart
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
  margin-bottom: 40px;
}

.meal-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
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

.add-to-cart-btn {
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: background 0.3s;
  font-size: 11px;
}


.add-to-cart-btn:hover {
  background: #218838;
}

.cart {
  margin-top: 40px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cart-title {
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
}

.cart-list {
  list-style-type: none;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.remove-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.remove-btn:hover {
  background: #c82333;
}

.empty-cart {
  text-align: center;
  font-size: 1.5em;
  color: #666;
  margin-top: 20px;
}
</style>
