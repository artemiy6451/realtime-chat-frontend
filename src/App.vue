<template>
    <header>
        <div class="left-side">
            <p class="user-name">
                {{ user_name }}
            </p>
        </div>
    </header>
</template>

<script>
import "./reset.css";

export default {
    data () {
        return {
            user_name: this.getUserName()
        }
    },
    
    getUserName () {
        return "Alex"
    }
}

</script>

<style>

header {
    display: flex;
}

.left-side {
    justify-content: left;
}

.user-name {
    margin: 30px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 30px;
    border: 1.5px solid black;
    border-radius: 5px;
}

</style>
