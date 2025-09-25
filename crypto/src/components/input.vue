<template>
<input min="0" type="number" placeholder="Введите число" @input="changeAmount($event.target.value)">
<br>
<button @click="convert()">Конвертировать</button>
<button @click="favourite()" className="fav">В избранное</button>
</template>




<script>
export default {
props: {
    changeAmount: {
        type: Function,
        required: true,
    },
    convert: {
        type: Function,
        required: true,
    },
    favourite: {
        type: Function,
        required: true,
    },
}
}
</script>

<style scoped>
.fav {
    margin-left: 20px;
}
input {
    border-radius: 3px;
    border: 0;
    padding: 10px 15px;
    outline: none;
    color: #333;
    background: #fafafa;
    width: 500px;
    position: relative;
    top: -50px;
    font-size: 1.2em;

}
button { 
    position: relative;
    top: -20px;
    padding: 15px 20px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    background:black;
    outline: none;
    border: none;
}
</style>
