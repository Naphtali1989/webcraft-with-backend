<template>
    <section class="user-msg-container">
        <div
            v-for="(msg,idx) in msgs.reviews"
            :key="idx"
        >

            <!-- <h2>Name: {{msg.payload.name}}</h2>
            <h2>Name: {{msg.payload.email}}</h2>
            <h2>Subject : {{msg.payload.subject}}</h2> -->
            <!-- <h2>Message: {{msg.payload.message}}</h2> -->
            <!-- {{msg.reviews.map(review => review => {
                for(item of review) {
                    {{item}}
                }
            })}} -->
            {{msg}}
        </div>
    </section>
</template>

<script>
export default {
    name: 'user-msgs',
    props: {
        msgs: Array
    },
    created() {
        // const msgs=this.msgs.map(review => review)
        // const res=Object.values(msgs).forEach(key => {
        //     return key.payload(key => key.payload.forEach(item => item))
        // })
        // console.log('rs',res);

        // .map(review => review.payload)

        // console.log("msgs?",msgs);
        // console.log(msgs);
        // this.msgs=msgs;
    }
}

</script>

<style>
</style>