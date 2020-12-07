<template>
    <section>
        <h1 class="profile-title">Your Msgs</h1>
        <p
            class="no-msg-received"
            v-if="!msgs.length"
        >No message received yet</p>
        <section
            class="msg-container-grid"
            v-if="msgs.length"
        >
            <div
                v-for="(data,idx) in msgs"
                :key="idx"
                class="msg-card"
            >
                <i class="far fa-comment-dots"></i>
                <span>Name: {{data.content.name}}</span>
                <span>Email: {{data.content.email}}</span>
                <span>Subject: {{data.content.subject}}</span>
                <span>Message: {{data.content.message}}</span>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'user-msgs',
    props: {
        msgs: {
            type: Array
        }
    },
}
</script>