<template>
    <section class="app-header">
        <div class="logo">
            <!-- <img src="@/assets/img/logo1.png" alt="" class="app-logo"> -->
            Logo
        </div>
        <div class="nav-links flex align-center">
            <router-link to="/">Home</router-link>
            <router-link to="/wap">templates</router-link>
            <router-link to="/editor">Editor</router-link>
            <router-link to="/playground">Playground</router-link>
            <avatar :username="'matan cohen'" :size="45" :color="'#03A9F4'" />

        </div>
    </section>
</template>

<script>
import avatar from '@/cmps/avatar.cmp.vue';
export default {
    name: "app-header",
    components: {
        avatar
    }
};
</script>
