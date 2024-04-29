<template>
    <div>
        <div 
            v-for="user in users" 
            :key="user.id"
            class="user-item"
        >
            <list-item>
                <p class="userName">
                    {{ user.firstName }} {{ user.lastName }}
                </p>
                <custom-button class="addUserBtn">
                    +
                </custom-button>
            </list-item>
        </div>
    </div>
</template>

<script>
import ListItem from '@/components/ui/ListItem.vue';
import CustomButton from './ui/CustomButton.vue';


export default {
    name:"UserList",
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
