<template>
    <div class="sidebar">
        <user-list 
            :users="users"
            class="user-list"
        />
        <user-list 
            :users="users"
            class="user-list"
        />
    </div>
</template>

<script>
import UserList from './UserList.vue';

export default {
    name:"SidebarComponent",
    components: {
    UserList
    },
    props: {
        users: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.sidebar {
    float: right;
    max-width: 215px;
    box-sizing: border-box;
    margin: 0px 30px;
}
</style>
