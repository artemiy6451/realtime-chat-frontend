<template>
    <button class="btn">
        <slot />
    </button>
</template>

<script>

export default {
    name:"CustomButton"
}
</script>

<style scoped>
.btn {
    border: 1.5px solid black;
    border-radius: 5px;
    background-color: #fff;
}

.btn:hover {
    background-color: #a9a9a9;
    cursor: pointer;
}
</style>
