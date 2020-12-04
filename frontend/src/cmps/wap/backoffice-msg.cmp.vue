<template>
    <section
        class="backoffice-grid-msgs"
        v-if="waps"
    >
        <div
            class="backoffice-card"
            v-for="(wap) in waps"
            :key="wap._id"
        >
            <h1>{{wap.title || 'Wap title'}}</h1>
            <ul
                v-for="msg in wap.reviews"
                :key="msg._id"
            >
            {{msg.content.name||'No name'}}
    
            <h1>Message by : {{msg.content.name||'No name'}}</h1>
            <h2>Email: {{msg.content.email||'No name'}}</h2>
            <h2>Subject: {{msg.content.subject||'No name'}}</h2>
            <h2>Message: {{msg.content.message||'No name'}}</h2>
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
    computed:{

    },
    created() {

    }
}


</script>

<style>
</style>