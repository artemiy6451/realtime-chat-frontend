<template>
    <div class="list-item">
        <slot />
    </div>
</template>

<script>
export default {
    name:"ListItem",
    props: {
        user: {
            type: Object,
            required: true
        }
    }

}
</script>

<style scoped>
.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100px;
    max-width: 200px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 5px;
}
</style>
