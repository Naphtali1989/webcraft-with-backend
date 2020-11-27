<template>
    <section class="avatar-modal flex column">
        <avatar :username="'matan cohen'" :size="80" :color="'#03A9F4'" />
        <p>Name</p>
        <small>email</small>
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