<template>
  <form @submit.prevent="submitForm" class="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
    <h2 class="text-2xl font-semibold text-center">Вход в аккаунт</h2>

    <!-- Email -->
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
      {{ loading ? 'Входим...' : 'Войти' }}
    </button>

    <!-- Сообщение об ошибке -->
    <p v-if="errorMessage" class="text-red-600 mt-2 text-sm text-center">{{ errorMessage }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const loading = ref(false)
const errorMessage = ref('')

const router = useRouter()

const submitForm = async () => {
  errorMessage.value = ''
  loading.value = true

  try {
    // Замените URL на ваш API эндпоинт входа
    const response = await axios.post('https://76e94ca2252b1d52.mokky.dev/login', {
      email: email.value,
      password: password.value
    })

    // Предполагается, что сервер возвращает токен
    const token = response.data.token

    if (token) {
      // Сохраняем токен для дальнейших запросов
      localStorage.setItem('authToken', token)

      // Переходим на защищенную страницу (замените на нужный маршрут)
      router.push('/dashboard')
    } else {
      errorMessage.value = 'Не удалось получить токен авторизации.'
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage.value = error.response.data.message
    } else {
      errorMessage.value = 'Ошибка входа. Проверьте данные и попробуйте снова.'
    }
  } finally {
    loading.value = false
  }
}
</script>
