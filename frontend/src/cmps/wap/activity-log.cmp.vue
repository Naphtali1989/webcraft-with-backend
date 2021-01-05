<template>
    <section
        class="activity-log flex column"
        :class="calcSize"
        v-if="activities"
    >
        <section class="activity-log-header">
            <div
                class="log-head flex space-between btn"
                @click="toggleMinimize"
            >
                <h1 class="log-title">Activity Log</h1>

                <div class="log-head-btns flex">
                    <button
                        class="minimize-toggle-btn btn"
                        @click.stop="toggleMinimize"
                    >
                        <i
                            v-show="!isMinimized"
                            class="fas fa-window-minimize"
                        ></i>
                        <i
                            v-show="isMinimized"
                            class="far fa-window-maximize"
                        ></i>
                    </button>
                    <button
                        class="maximize-toggle-btn btn"
                        @click.stop="toggleMaximize"
                    >
                        <i
                            v-show="!isMaximized"
                            class="fas fa-expand-arrows-alt"
                        ></i>
                        <i
                            v-show="isMaximized"
                            class="fas fa-compress-arrows-alt"
                        ></i>
                    </button>
                </div>
            </div>
        </section>
        <section
            v-for="(activityData, idx) in activities"
            :key="idx"
            class="activity-preview flex align-center space-between"
        >
        {{activityData}}
            <avatar
                :username="username(activityData)"
                :imgUrl="activityData.user.imgUrl"
                :color="'#124a76'"
                :size="35"
            />
            <div class="info flex column align-center">
                {{ activityData.activity }}
                {{ new Date(activityData.time).toLocaleString() }}
            </div>
            <button class="undo-btn btn">
                <i class="fas fa-undo-alt"></i>
            </button>
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
    data() {
        return {
            isMinimized: false,
            isMaximized: false,
        }
    },
    computed: {
        calcSize() {
            return { minimized: this.isMinimized, maximized: this.isMaximized };
        }
    },
    methods: {
        toggleMinimize() {
            if (this.isMaximized) this.isMaximized = false;
            this.isMinimized = !this.isMinimized;
        },
        toggleMaximize() {
            if (this.isMinimized) this.isMinimized = false;
            this.isMaximized = !this.isMaximized;
        },
        username(activityData) {
            return activityData.user.username ? activityData.user.username : 'Webcraft User';
        }
    },
    created() {
        console.log('creating...', this.activities);
    },
    name: 'activity-log',
    components: {
        avatar
    }
}
</script>

<style>
</style>