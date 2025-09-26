<script setup>
useHead({
title:'Главная',
meta:[
    {name:'description', content:'Главная страница'},
    {name:'keywords', content:'Главная страница'}
]
})
  const { data } = await useFetch('/api/example', {
    method:'post',
    body: {name:'Alex',id:1}
  })

</script>
<template>
<div>
    <slot/>
</div>
<h1>Главная</h1>
<p>Выведено через свой api: {{ data.mess }}</p>

</template>
<style>

</style>