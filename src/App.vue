<template>
    <header-component :user-name="userName" />
    <main>
        <user-list 
            :users="users"
            class="user-list"
        />
    </main>
</template>

<script>
import "@/reset.css";
import HeaderComponent from "@/components/HeaderComponent.vue";
import UserList from "@/components/UserList.vue";

export default {
    components: {
        HeaderComponent,
        UserList
    },
    data() {
        return {
            userName: "Alex",
            users: [
                {id: 1, firstName: "Kazantsev", lastName: "Artem"},
                {id: 2, firstName: "John", lastName: "Doe"},
                {id: 3, firstName: "Jane", lastName: "Doe"},
                {id: 4, firstName: "Bob", lastName: "Doe"},
                {id: 4, firstName: "Bob", lastName: "Doe"}
            ]
        }
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

.user-list {
    position: absolute;
    right: 30px;
}
</style>
