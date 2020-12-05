<template>
    <section
        v-if="waps"
        class="backoffice-grid-msgs"
    >
        <div
            v-for="(wap) in waps"
            :key="wap._id"
        >
            <h1>{{wap.title || 'Wap title'}}</h1>
            <ul
                class="clean-list"
                v-for="msg in wap.reviews"
                :key="msg._id"
            >
                <li class="backoffice-card">
                    <button class="btn remove-card"><i class="fas fa-times-circle"></i></button>
                    <p>Website Name :{{msg.title || 'Webcraft website'}}</p>
                    <span class="created-at">{{formatTime(msg.content.createdAt)}}</span>
                    <span>{{msg.content.byUser.username}} Message:</span>
                    <h1 class="msg msg-sender">Message by : {{msg.content.name||'No name'}}</h1>
                    <p class="msg msg-email">Email: {{msg.content.email||'No name'}}</p>
                    <p class="msg msg-sub">Subject: {{msg.content.subject||'No name'}}</p>
                    <p class="msg ">Message: {{msg.content.message||'No name'}}</p>
                    <button class="btn check-website">Check Website</button>
                </li>

            </ul>
        </div>
    </section>
</template>

<script>
export default {

    name: 'backoffice-msg',
    props: {
        waps: {
            type: Array
        },
    },
    methods: {
        formatTime(time) {
            return new Date(time).toLocaleString()
        },
    },
    computed: {
    },
    created() {

    }
}


</script>

<style>
</style>