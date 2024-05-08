<template>
    <div class="container">
        <div class="registrationInner">
            <h1 
                class="title"
            >
                Registration
            </h1>
            <form-component 
                @create-user="createUser"
            />
        </div>
    </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue';

export default {
    name: "RegistrationPage",
    components: {
        FormComponent
    },
    methods: {
        createUser(user) {
            // TODO: send data to backend
            console.log(user)
            // this.$router.push("/")
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Это сделает контейнер по вертикали по размеру экрана */
}
.title {
    font-size: 40px;
    margin-bottom: 5px;
    text-align: center;
}
.registrationInner {
    max-width: 400px; /* Примерная ширина контейнера с содержимым */
}
</style>
