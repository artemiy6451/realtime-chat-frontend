<template>
    <header class="header">
        <custom-button 
            v-if="user.loggedIn"
            class="userNameBtn"
        > 
            {{ user.firstName }}
        </custom-button>
        <custom-button 
            v-else
            class="userNameBtn"
        > 
            <router-link 
                to="/registration"
                class="loginLink"
            >
                Register
            </router-link>
        </custom-button>

        <custom-input 
            :placeholder-text="placeholderText"
            class="userSearch"
        /> 
    </header>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton.vue';
import CustomInput from '@/components/ui/CustomInput.vue';


export default {
    name: "HeaderComponent",
    components: {
        CustomButton,
        CustomInput
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            placeholderText: "Search..."
        }
    }
}

</script>

<style scoped>

.header {
    display: flex;
    justify-content: space-between;
}

.userNameBtn {
    margin: 30px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 30px;
}

.userSearch {
    padding: 14px 0px;
    margin: 30px;
    font-size: 20px;
    max-width: 213px;
}

.loginLink {
    font-size: 30px;
    text-decoration: none;
    color: #000;
}
</style>
