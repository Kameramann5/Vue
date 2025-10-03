<template>
  <form @submit.prevent="submitForm" class="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
    <!-- Email -->

    <h2 class="text-2xl font-semibold text-center">Регистрация</h2>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        required
        placeholder="Введите email"
        class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <!-- Пароль -->
    <div>
      <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
      <input
        id="password"
        v-model="password"
        type="password"
        required
        placeholder="Введите пароль"
        class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <!-- Кнопка -->
    <button
      type="submit"
      :disabled="loading"
      class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      {{ loading ? 'Регистрация...' : 'Зарегистрироваться' }}
    </button>
    <!-- Сообщения об ошибке или успехе -->
    <p v-if="errorMessage" class="text-red-600 mt-2 text-sm">{{ errorMessage }}</p>
    <p v-if="successMessage" class="text-green-600 mt-2 text-sm">{{ successMessage }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')

const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const submitForm = async () => {
  errorMessage.value = ''
  successMessage.value = ''
  loading.value = true

  try {
    // Замените на ваш API эндпоинт
    const response = await axios.post('https://76e94ca2252b1d52.mokky.dev/users', {
      email: email.value,
      password: password.value
    })

    successMessage.value = 'Регистрация прошла успешно!'
    email.value = ''
    password.value = ''
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage.value = error.response.data.message
    } else {
      errorMessage.value = 'Ошибка регистрации. Попробуйте позже.'
    }
  } finally {
    loading.value = false
  }
}
</script>
