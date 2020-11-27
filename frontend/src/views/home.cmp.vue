<template>
    <section class="home-container flex column align-center">
        <img src="@/assets/img/logo3.png" class="logo" />
        <main class="flex-1">
            MAIN CONTENT HERE
        </main>

        <footer class="flex align-center space-between">
            <h1>WEBCRAFT!</h1>
            <div class="links">
                <span>Link 1</span>
                <span>Link 2</span>
                <span>Link 3</span>
            </div>
        </footer>

    </section>
</template>

<script>

import avatar from '@/cmps/avatar.cmp.vue';

export default {
    name: 'home',
    components: { avatar }
};

</script>