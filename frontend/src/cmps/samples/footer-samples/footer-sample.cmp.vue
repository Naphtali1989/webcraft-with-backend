<template>
    <div class="footer">
        <h4>Elena Joy </h4>
        <ul>
             <li>
                <a href="#"><img src="@/assets/svgs/youtube-symbol1.svg" alt="youtube-social-media" /></a>
            </li>
            <li>
                <a href="#"><img src="@/assets/svgs/twitter1.svg" alt="twitter-social-media" /></a>
            </li>
            <li>
                <a href="#"><img src="@/assets/svgs/instagram1.svg" alt="instagram" /></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "footer-sample",
}
</script>

<style scoped lang="scss" >
.footer {
    background-color: lightblue;
    color: white;
    display: flex;
    padding: 3rem 5%;
    align-items: center;
    flex-wrap: wrap;

    ul {
        display: flex;
        flex: 1 1 40rem;
        justify-content: space-between;
        align-items: center;
    }
    h4 {
        flex: 3 1 40rem;
        font-size: calc(1.4rem + 1vw);
    }
}
</style>