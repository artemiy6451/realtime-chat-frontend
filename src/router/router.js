import ChatPage from "@/pages/ChatPage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/registration',
        component: RegistrationPage
    },
    {
        path: '/',
        component: ChatPage
    }
]

const router = createRouter({
    routes,
    history: createMemoryHistory()
})

export default router;
