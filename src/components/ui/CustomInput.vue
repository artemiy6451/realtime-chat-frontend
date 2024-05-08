<template>
    <input
        v-model="inputText"
        class="input"
        type="text"
        :placeholder="placeholderText"
    >
</template>

<script>
export default {
    name: "CustomInput",
    props: {
        placeholderText: {
            type: String,
            default: "Input here...",
            required: true
        }
    },
    data() {
        return {
            inputText: ""
        }
    }
}
</script>

<style scoped>
.input {
    display: block;
    text-align: center;
    border: 1.5px solid black;
    border-radius: 5px;
    background-color: #fff;
}

.input:focus {
    outline: none;
}
</style>
