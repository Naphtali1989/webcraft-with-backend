<template>
    <section class="avatar-modal flex column align-center">
        <div class="info flex column align-center">
            <avatar :username="'matan cohen'" :size="80" :color="'#03A9F4'" />
            <h3>Matan Cohen</h3>
            <span>emailgaming@gmail.com</span>
        </div>
        <div class="seperator"></div>
        <section class="modal-links flex column ">
            <span><i class="far fa-user"></i> Login</span>
            <span><i class="fas fa-sign-out-alt"></i> Sign up</span>
        </section>
    </section>
</template>

<script>
import avatar from '@/cmps/avatar.cmp.vue';
export default {
    name: 'avatar-modal',
    components: {
        avatar
    }
}
</script>

<style>
</style>