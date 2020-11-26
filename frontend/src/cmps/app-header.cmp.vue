<template>
    <section class="app-header">
        <div class="logo">
            <!-- <img src="@/assets/img/logo1.png" alt="" class="app-logo"> -->
            Logo
        </div>
        <div class="nav-links">
            <router-link to="/">Home</router-link>
            <router-link to="/wap">templates</router-link>
            <router-link to="/editor">Editor</router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: "app-header",
    data() {
        return {};
    },
};
</script>

<style>
</style>