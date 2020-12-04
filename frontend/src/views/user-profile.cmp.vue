<template>
    <section class="user-details-container flex space-between">
        <div class="user-area-container flex column">
            <div class="user-circle">
                <div
                    class="user-img"
                    v-if="loggedInUser.imgUrl"
                >
                    <img :src="imgUrl" />
                </div>
            </div>
            <div class="user-info flex column align-center">
                <span class="name"><i class="fas fa-user-circle"></i> {{loggedInUser.username}}</span>
                <span class="email"><i class="far fa-envelope"></i> {{loggedInUser.email}}</span>
                <span class="created-at">Created at {{formatTime}}</span>
                <label class="user-input input-file"><i class="fas fa-cloud-upload-alt"></i>
                    <input
                        class="hide"
                        type="file"
                        @change="setAvatar"
                    />
                </label>

            </div>
        </div>
        <div class="tab-conatiner">
            <button @click="toggleTab('messages')">Messages</button>
            <button @click="toggleTab('waps')">Templates</button>
        </div>
        <component
            v-if="ownerWaps"
            :is="currTab"
            :waps="dataToTransfer"
        />

    </section>
</template>

<script>
import { userService } from '@/services/user.service';
import { utilService } from '@/services/util.service';
import backofficeMsg from '@/cmps/wap/backoffice-msg.cmp.vue';
import userWaps from '@/cmps/wap/user-waps.cmp.vue';
export default {
    name: 'user-profile',
    data() {
        return {
            ownerWaps: [],
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
            if(this.selectedTab==='messages') return 'backoffice-msg'
            return 'user-waps'
        },
        dataToTransfer() {
            if(this.selectedTab==='messages') {
                return this.ownerWaps.filter(ownerWap => {
                    return ownerWap.reviews
                })
            } else {
                return this.ownerWaps.map(ownerWap => ownerWap.wap)
            }
            // return this.wapReviews;
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
        const ownerWaps=await this.$store.dispatch({ type: 'getOwnerWapReviews',userId: _id })
        console.log('reviews from store:');
        this.ownerWaps=ownerWaps;
    },
    components: {
        userWaps,
        backofficeMsg
    }
}
</script>

<style>
</style>

