<template>
    <section class="user-details-container flex space-around">
        <div class="user-area-container flex column">
            <div class="user-circle">
                <div class="user-img">
                    <img :src="imgUrl" />
                </div>
            </div>
            <div class="user-info flex column align-center">
                <span class="name"><i class="fas fa-user-circle"></i> {{loggedInUser.username}}</span>
                <span class="email"><i class="far fa-envelope"></i> {{loggedInUser.email}}</span>
                <span class="created-at">Created at {{formatTime}}</span>
            </div>
        </div>
        <div class="tab-container">
            <button @click="toggleTab('messages')">Messages</button>
            <button @click="toggleTab('waps')">Templates</button>
            <component :is="currTab" :msgs="msgs" />
        </div>
    </section>
</template>

<script>
import { userService } from '@/services/user.service';
import { utilService } from '@/services/util.service';
import userMsgs from '@/cmps/wap/user-msgs.cmp.vue';
import userWaps from '@/cmps/wap/user-waps.cmp.vue';
export default {
    name: 'user-profile',
    data() {
        return {
            msgs: [],
            selectedTab: 'messages'
        }
    },
    methods: {
        toggleTab(tab) {
            this.selectedTab=tab;
        },
        async setAvatar(ev) {
            const res=await utilService.uploadImg(ev);
            console.log('url',res);
            this.loggedInUser.imgUrl=res.url
            // console.log('user:',user);
            this.$store.dispatch({ type: 'updateUser',user: this.loggedInUser })
        }
    },
    computed: {
        currTab() {
            if(this.selectedTab==='messages') return 'user-msgs'
            return 'user-waps'
        },
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
        imgUrl() {
            if(this.loggedInUser.imgUrl) return this.loggedInUser.imgUrl
            else return `https://robohash.org/${this.loggedInUser._id}.png`
        },
        formatTime() {
            const { createdAt }=this.loggedInUser
            return new Date(createdAt).toLocaleString()
        },
    },
    async created() {
        const _id=this.$route.params.id;
        console.log('id of user in profile:',_id);

        if(_id) this.$store.dispatch({ type: 'loadLoggedInUser',_id })
        const msgs=await this.$store.dispatch({ type: 'getOwnerWapReviews',userId: _id })
        console.log('reviews from store:');
        this.msgs=msgs;
    },
    components: {
        userMsgs,
        userWaps
    }
}
</script>

<style>
</style>

