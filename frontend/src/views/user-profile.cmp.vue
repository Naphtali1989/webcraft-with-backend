<template>
    <section
        class="user-details-container"
        v-if="loggedInUser"
    >
        <nav class="user-dashboard">
            <div class="logo">
                <img :src="imgUrl">
            </div>
            <ul class="sidebar-modal-links clean-list">
                <li><i class="fas fa-user-circle"></i> {{loggedInUser.username}}</li>
                <li>
                    <i class="fas fa-envelope"></i> {{loggedInUser.email}}
                </li>
                <li>
                    <span class="account-creation">Account Creation:</span>
                    {{formatTime}}
                </li>
                <li>
                    <label class="user-input input-file">
                        <span class="upload-btn"><i class="fas fa-cloud-upload-alt"></i></span>
                        <input
                            class="hidden"
                            type="file"
                            @change="setAvatar"
                        />
                    </label>
                    <span class="upload-avatar">Upload Avatar</span>
                </li>
            </ul>
        </nav>
        <div class="main-content-page">
            <div class="main-head">
                <h1>Welcome back, {{loggedInUser.username}}</h1>
            </div>
            <!-- <backoffice-msg
                v-if="ownerWaps"
                :waps="dataToTransfer"
            /> -->
            <msg-table
                :data="dataToTransfer"
                v-if="ownerWaps"
            />
        </div>

    </section>
</template>

<script>
import { userService } from '@/services/user.service';
import { utilService } from '@/services/util.service';
import backofficeMsg from '@/cmps/wap/backoffice-msg.cmp.vue';
import userWaps from '@/cmps/wap/user-waps.cmp.vue';
import socketService from '@/services/socket.service';
import { eventBus } from '@/services/event-bus.service.js'
import msgTable from '@/cmps/custum-cmps/msg-table.cmp.vue';

export default {
    name: 'user-profile',
    data() {
        return {
            ownerWaps: [],
            selectedTab: 'messages',
            user: null
        }
    },
    methods: {
        async setAvatar(ev) {
            const res=await utilService.uploadImg(ev);
            const user=JSON.parse(sessionStorage.getItem('user'))
            user.imgUrl=res.url;
            await this.$store.dispatch({ type: 'updateUser',user })
            // this.$router.push(`/user/${loggedInUser._id}`)

        },
        async getWapsReviews(_id,wapId) {
            const ownerWaps=await this.$store.dispatch({
                type: 'getOwnerWapReviews',
                userId: _id,
                wapId
            })
            this.ownerWaps=ownerWaps;
        }
    },
    computed: {
        dataToTransfer() {
            return this.ownerWaps.filter(ownerWap => {
                return ownerWap.reviews;
            });

        },
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
        imgUrl() {
            if(this.loggedInUser.imgUrl) {
                console.log('got to change img');
                return this.loggedInUser.imgUrl
            }
            return `https://robohash.org/2.png`
        },
        formatTime() {
            const { createdAt }=this.loggedInUser
            return new Date(createdAt).toLocaleString()
        },
    },
    async created() {
        socketService.setup();
        const _userId=this.$route.params.id;
        console.log('id from user?:',_userId);
        if(_userId) {
            console.log('from disptahc:',this.user);
            this.user=await this.$store.dispatch({ type: 'loadLoggedInUser',_userId })
            this.getWapsReviews(_userId)
            socketService.on('form-submitted',({ title,_id }) => {
                const wapId=_id
                this.getWapsReviews(_userId,wapId);
                eventBus.$emit('show-msg',{ txt: `New message received from website:${title}`,type: 'success' })
            })
        }
    },
    components: {
        userWaps,
        backofficeMsg,
        msgTable

    }
}
</script>

<style>
</style>

