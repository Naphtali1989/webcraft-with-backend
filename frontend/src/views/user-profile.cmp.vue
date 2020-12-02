<template>
    <section class="user-profile">
        <h1>Under construction</h1>
        <h1>Welcome back, {{loggedInUser.username}}</h1>
        <div class="stats">
            <img :src="imgUrl" />
            <p>Waps: In Constuction</p>
            <p>Email:{{loggedInUser.email}} </p>
        </div>
        <form class="form-control">
            <input type="file" name="img-uploader" id="imgUploader" class="upload-input" @change="setAvatar" />
        </form>

        {{loggedInUser}}
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
        }
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