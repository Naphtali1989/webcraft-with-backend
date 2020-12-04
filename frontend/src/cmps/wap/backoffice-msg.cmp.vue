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
                v-for="msg in wap"
                :key="msg._id"
            >
                <li
                    v-for="(field,idx) in msg"
                    :key="idx"
                >
                    {{field}}
                    {{field.name}}
                </li>
            </ul>
            <!-- {{msg.name}} -->

            <!-- <h1>Name: {{msg[0].name}}</h1>
            <h2>Email: {{msg[0].email}}</h2>
            <h2>Subject: {{msg[0].subject}}</h2>
            <h2>Message: {{msg[0].message}}</h2> -->
            <!-- {{msg}} -->
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
    created() {

    }
}


</script>

<style>
</style>