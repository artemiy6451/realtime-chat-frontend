<template>
    <header-component :user="user" />
    <main class="main">
        <div class="chat-window" />
        <sidebar-component :users="users" />
    </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
export default {
    name:"ChatPage",
    components: {
        HeaderComponent,
        SidebarComponent
    },
    data() {
        return {
            user:{
                loggedIn: false,
                firstName: "Kazantsev",
                lastName: "Artem"
            },
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

<style scoped>
.chat-window {
    float: left;
    min-width: calc(100% - 215px - 90px);
    min-height: 700px;
    
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 30px;
}
</style>
