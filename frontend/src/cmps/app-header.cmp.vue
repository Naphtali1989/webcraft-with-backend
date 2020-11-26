<template>
    <section class="app-header">
        <div class="logo">
            <!-- <img src="@/assets/img/logo1.png" alt="" class="app-logo"> -->
            Logo
        </div>
        <div class="nav-links">
            <router-link to="/editor">Link 1</router-link>
            <router-link to="/">Link 2</router-link>
            <router-link to="/">Link 3</router-link>
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