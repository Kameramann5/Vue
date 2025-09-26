<script setup>
useHead({
title:'Пользователи',
meta:[
    {name:'description', content:'Пользователи'},
    {name:'keywords', content:'Пользователи'}
]
})


definePageMeta({
    layout:'users'
})
const {data}=await useFetch('https://dummyjson.com/users')
const users = ref(data.value.users)
</script>
<template>
<h1>Пользователи</h1>
<ul class="d-flex list-unstyled gap-3 flex-wrap justify-content-between">
    <li v-for="user in users" :key="user.id">
       <UserLink :user="user" />
        </li>
    </ul>

</template>
<style>
</style>