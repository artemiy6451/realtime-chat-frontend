<template>
    <div class="userList__container">
        <list-item
            v-for="user in users"
            :key="user.id"
        >
            <p class="userName">
                {{ user.firstName }} {{ user.lastName }}
            </p>
            <custom-button class="addUserBtn">
                +
            </custom-button>
        </list-item>
    </div>
</template>

<script>
import ListItem from '@/components/ui/ListItem.vue';
import CustomButton from './ui/CustomButton.vue';


export default {
    name: "UserList",
    components: {
        ListItem,
        CustomButton
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
.userList__container {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    align-self: end;
}
.userName {
    padding-right: 10px;
    font-size: 20px;
    max-width: 150px;
    overflow-wrap: break-word;
    word-wrap: break-word;
}

.addUserBtn {
    padding: 0;
    margin: 0;
    min-width: 23px;
    font-size: 15px;
}
</style>
