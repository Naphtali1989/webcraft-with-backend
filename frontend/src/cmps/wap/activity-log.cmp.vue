<template>
    <section
        class="activity-log flex column"
        v-if="activities"
        
    >
        <section
            v-for="(activityData,idx) in activities"
            :key="idx"
            class="flex column"
        >
            <avatar
                :username="username(activityData)"
                :imgUrl="activityData.user.imgUrl"
                :color="'#124a76'"
                :size="45"
            />
            <div class="info flex column align-center">
                {{activityData.activity}}
                {{new Date(activityData.time).toLocaleString()}}
            </div> 
        <!-- {{activityData}} -->
        </section>
    </section>

</template>

<script>
import avatar from '@/cmps/avatar.cmp.vue';
export default {
    props: {
        activities: {
            type: Array
        }
    },
    methods: {
        username(activityData) {
            return activityData.user.username? activityData.user.username:'Webcraft User';
        }
    },
    created() {
        console.log('creating...',this.activities);
    },
    name: 'activity-log',
    components: {
        avatar
    }
}
</script>

<style>
</style>