<template>
    <form
        class="form"
        @submit.prevent
    >
        <custom-input
            v-model="user.email"
            class="input"
            placeholder-text="Email"
            type="email"
            @input="checkValidEmail"
        />
        <custom-input
            v-model="user.password"
            class="input"
            placeholder-text="Password"
            type="password"
            @input="checkValidPassword"
        />
        <custom-input
            v-model="user.repeatPassword"
            class="input"
            placeholder-text="Repeat password"
            type="password"
            @input="checkSamePassword"
        />
        <custom-input
            v-model="user.firstName"
            class="input"
            placeholder-text="First name"
            type="text"
            required
        />
        <custom-input
            v-model="user.lastName"
            class="input"
            placeholder-text="Last name"
            type="text"
            required
        />

        <!-- TODO: Mabe it is component? From here -->
        <ul 
            v-if="!isValidEmail"
            class="error"
        >
            Email must be:
            <li 
                v-if="!isValidEmail"
                class="error__item"
            >
                in the format of "username@example.com"
            </li>
        </ul>
        <!-- TODO: Mabe it is component? To here -->

        <ul
            v-if="!isValidPassword || !isSamePassword"
            class="error"
        >
            Password must be: 
            <li
                v-if="!isValidPassword"
                class="error__item"
            >
                8 to 15 characters which contain at least one lowercase letter,
                one uppercase letter, one numeric digit, and one special character
            </li>
            <li
                v-if="!isSamePassword"
                class="error__item"
            >
                Passwords must be the same
            </li>
        </ul>
        <ul 
            v-if="!user.firstName || !user.lastName"
            class="error"
        >
            Required personal info:
            <li 
                v-if="!user.firstName"
                class="error__item"
            >
                First name
            </li>
            <li 
                v-if="!user.lastName"
                class="error__item"
            >
                Last name
            </li>
        </ul>
        <custom-button 
            v-if="isValidForm"
            class="submintBtn"
            @click="handleSubmit"
        > 
            Submit 
        </custom-button>
    </form>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton.vue';
import CustomInput from '@/components/ui/CustomInput.vue';

export default {
    name:"FormComponent",
    components: {
        CustomInput,
        CustomButton
    },
    emits: [
        "create-user"
    ],
    data() {
        return {
            user: {
                email: "",
                password: "",
                repeatPassword: "",
                firstName: "",
                lastName: ""
            },
            isValidEmail: false,
            isValidPassword: false,
            isSamePassword: false
        }
    },
    computed: {
        isValidForm() {
            return this.user.email && 
                this.user.password &&
                this.user.repeatPassword &&
                this.user.firstName &&
                this.user.lastName &&
                this.isValidEmail &&
                this.isSamePassword &&
                this.isValidPassword
        }
    },
    methods: {
        checkValidEmail (event) {
            const emailRegExp = new RegExp('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')
            this.isValidEmail = emailRegExp.test(event.target.value);
        },
        checkValidPassword (event) {
            const passwordRegExp = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}$');
            this.isValidPassword = passwordRegExp.test(event.target.value);
        },
        checkSamePassword() {
            this.isSamePassword = (this.user.password === this.user.repeatPassword)
        },
        handleSubmit () {
            if (this.isValidForm) {
                delete this.user.repeatPassword;
                this.$emit("create-user", this.user);
            }
        }
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    max-width: 195px;
}
.input {
    margin-bottom: 9px;
    padding: 5px;
}
.error {
    font-size: 14px;
    padding-bottom: 5px;
    text-align: left;
}
.error__item {
    list-style-type: circle;
    margin-left: 25px;
}
.submintBtn {
    padding: 5px;
    margin-left: auto;
}
</style>
