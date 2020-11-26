<template>
    <nav class="flex align-center">
        <h1 class="logo">Elena Joy</h1>
        <ul class="nav-links flex space-around clean-list">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
//     data() {
//         return cmps = [
//             {
//                 id: 112314,
//                 type: "navbar-sample",
//                 info: {
//                     class: "flex align-center",
//                     style: {
//                         minHeight: "7.25rem",
//                         width: "90%",
//                         padding: "2rem 0rem"
//                     },
//                     children:
//                     {
//                         h1: {
//                             class: "logo",
//                             txt: "Elena Joy",
//                             style: {
//                                 fontSize: "1.5rem",
//                                 lineHeight: "1.5",
//                                 letterSpacing: "",
//                                 backgroundColor: "",
//                                 color: 'black',
//                                 flex: "1 1 20rem"
//                             }
//                         },
//                         div:{
//                             style:{
//                                 class:"nav-links flex space-around clean-list"
//                             }

//                         }
//                     }
//                 }
//             }

//         ]

//     }
// }
}


</script>

<style scoped lang="scss">
nav {
    width: 90%;
    margin: auto;
    min-height: 10vh;
    padding: 2rem 0rem;
    h1 {
        font-family: "Vibes", sans-serif;
    }
    a {
        font-family: "Ruhl", sans-serif;
        color: black;
        font-weight: 700;
    }
    .logo {
        flex: 1 1 20rem;
    }
}
.nav-links {
    flex: 1 1 20rem;
}
</style>