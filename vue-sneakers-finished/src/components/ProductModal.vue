<!-- ProductModal.vue -->
<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="close"
  >
    <div class="bg-white p-6 rounded shadow-lg max-w-lg w-full">
      <h2 class="text-xl font-bold mb-4">{{ product.title }}</h2>
      <img :src="product.imageUrl" alt="" class="w-full mb-4" />
      <p class="mb-2">Цена: {{ product.price }} руб.</p>
      <button @click="close" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Закрыть</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
  onClose: Function
})

function close() {
  props.onClose()
}
</script>
