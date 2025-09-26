<template>
    <div class="card h-100 shadow-sm">
        <img :src="user.image" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ user.firstName }}</h5>
        <h5 class="card-title">Почта: {{ user.email }}</h5>
        <NuxtLink :to="`/users/user-${ user.id }`" class="btn btn-primary">Перейти</NuxtLink>
    </div>
    </div>
    
</template>
<script setup>
const {user} = defineProps(['user'])
</script>
<style>

</style>