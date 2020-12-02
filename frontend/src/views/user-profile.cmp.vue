<template>
    <!-- <section class="user-profile flex align-center column">
        <img src="../assets/img/under-construction.png" />
        <h1>Under construction</h1>
        <h1>Welcome back, {{loggedInUser.username}}</h1>
        <div class="stats">
            <img :src="imgUrl"  class="user-avatar"/>
            <p>Waps: In Constuction</p>
            <p>Email:{{loggedInUser.email}} </p>
        </div>
        <form class="form-control">
            <input type="file" name="img-uploader" id="imgUploader" class="upload-input" @change="setAvatar" />
        </form>

        {{loggedInUser}}
    </section> -->
    <section class="user-details-container flex column align-center">
        <img src="../assets/img/under-construction.png" />
        <h1>Under construction</h1>
        <div class="user-card" v-if="loggedInUser">
            <div class="circle">
                <img :src="imgUrl" class="user-logo" />
            </div>
            <div class="sepator"></div>
            <div class="user-info">
                <h2 class="username">{{ loggedInUser.username }}</h2>
                <small>Email: {{loggedInUser.email}}</small>
                <small>Created at {{ formatTime }}</small>
            </div>
            <div class="stats">
                <h2>
                    Waps: will be place here
                </h2>
                <form class="form-control">
                    <p>Upload a img:</p>
                    <input type="file" name="img-uploader" id="imgUploader" class="upload-input" @change="setAvatar" />
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { userService } from '@/services/user.service';
import { utilService } from '@/services/util.service';
export default {
    name: 'user-profile',
    data() {
        return {
            user: null
        }
    },
    methods: {
        async setAvatar(ev) {
            const res=await utilService.uploadImg(ev);
            console.log('url',res);
            this.loggedInUser.imgUrl=res.url
            // console.log('user:',user);
            this.$store.dispatch({ type: 'updateUser',user: this.loggedInUser })
        }
    },
    computed: {
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
    updated() {

    },
    created() {
        const _id=this.$route.params.id;
        console.log('id of user in profile:',_id);
        if(_id) this.$store.dispatch({ type: 'loadLoggedInUser',_id })

    },
}
</script>

<style>
</style>