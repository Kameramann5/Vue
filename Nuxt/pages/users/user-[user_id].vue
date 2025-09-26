<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const { user_id } = useRoute().params

const { data } = await useFetch(`https://dummyjson.com/users/${user_id}`)

function goBack() {
  router.push('/users')
}
</script>

<template>
  <div class="container mt-4">
    <button @click="goBack" class="btn btn-primary mb-3">Назад</button>

    <h1 class="mb-3">id пользователя - {{ user_id }}</h1>

    <ul class="list-group">
      <li class="list-group-item"><strong>Имя:</strong> {{ data.firstName }} {{ data.lastName }}</li>
      <li class="list-group-item"><strong>Телефон:</strong> {{ data.phone }}</li>
      <li class="list-group-item"><strong>Возраст:</strong> {{ data.age }}</li>
    </ul>
  </div>
</template>

<style>
/* Дополнительные стили не требуются при использовании Bootstrap */
</style>