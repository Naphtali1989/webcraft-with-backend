<template>
    <section class="card flex column align-center">
        <div class="header">
            <div class="avatar">
                <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="">
            </div>
        </div>
        <div class="card-body flex column align-center text-center">
            <h3 class="username">Helen Miller</h3>
            <h5 class="position">Accountant</h5>
            <p>Helen Miller is an accountant at the Acme Inc comany. She works very hard.</p>
            <a href="#" class="action button is-small">View profile</a>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    border-radius: 6px;
    max-width: 300px;
    max-height: 380px;
    margin: 0 auto;
    .header {
        height: 120px;
        width: 100%;
        background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPu7BceUzLF-DvrMQdcldR3W_5Gn9BhKsiw&usqp=CAU);
        .avatar {
            width: 80px;
            height: 80px;
            position: relative;
            margin: 0 auto;
            img {
                display: block;
                position: absolute;
                bottom: -70px;
                border: 4px solid white;
            }
        }
    }
    .card-body {
        padding: 30px;
        .user-meta {
            padding-top: 20px;
            .username {
                font-size: 18px;
                font-weight: 600;
            }
            .position {
                font-size: 90%;
                color: #7f00ff;
            }
        }
    }
    .user-bio {
        padding-top: 8px;
        font-size: 92%;
    }
    .action {
        padding: 16px 20px 16px 20px;
        background: #7f00ff;
        border-color: #7f00ff;
        color: white;
        border-radius: 100px;
    }
}
</style>
