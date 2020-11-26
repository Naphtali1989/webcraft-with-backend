<template>
    <div
        class="avatar"
        :style="{
            width: size + 'px',
            height: size + 'px',
            backgroundColor: color || bgColor,
            lineHeight: size + 'px',
        }"
    >
        <span v-if="username">{{ computeName }} </span>
        <img v-else :src="imgUrl" />
    </div>
</template>

<script>
export default {
    name: 'avatar',
    props: {
        username: {
            type: String,
        },
        imgUrl: {
            type: String
        },
        size: {
            type: Number
        },
        admin: {
            type: Boolean
        },
        color: {
            type: String
        }
    },
    computed: {
        computeName() {
            return this.username.split(' ').map(letter => letter.charAt(0)).join('').toUpperCase()
        },
        bgColor() {
            console.log('admin:?',this.admin)
            if(!this.admin) return `#${Math.random().toString().slice(2,8)}`


        }
    }
}
</script>

<style lang="scss">
  .avatar {
      border-radius: 50%;
      text-align: center;
      img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 50%;
      }
      span {
          color: white;
          font-family: Georgia, 'Times New Roman', Times, serif;
          letter-spacing: 1px;
          font-size: 1.125rem;
      }
  }

</style>