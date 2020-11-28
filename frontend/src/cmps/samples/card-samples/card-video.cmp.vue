<template>
    <section class="cards">
        <div class="card">
            <div class="card__image-container">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" alt="Detailed image description would go here." />
            </div>
            <div class="card__content">
                <p class="card__title text--medium">
                    Here's the Title of an Awesome Course
                </p>
                <div class="card__info">
                    <p class="text--medium">30 Min</p>
                    <p class="card__price text--medium">Free</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'card-video',
    data() {
        return {
            //parent
            _id: "asdjksdakljsdaklj",
            name: "section",
            type: "video",
            class: "video-card",
            thumbnail: '',
            style: {
                background: "transparent",
                borderRadius: "0px",
                height: "0px",
                display: 'grid',
                gridTemplateColumns: 'repeat(12, minmax(auto, 60px))',
                gridColumn: '2 / span 12',
                gridGap: '40px'
            },
            imgUrl: '',
            //childrens
            children: [
                {
                    //card
                    _id: "lkddsamvcbsduisaf",
                    name: "div",
                    type: "card-div",
                    class: "card flex column align-center text-center",
                    style: {
                        gridColumnEnd: 'span 4',
                        display: 'flex',
                        flexDirection: 'flex',
                        backgroundColor: '#39393b',
                        borderRadius: '0px',
                        background: "#69D2E7",
                    },
                    //card header
                    children: [{
                        id: "kdkjsalkljasdljkdsa",
                        name: 'div',
                        type: 'header-card-img',
                        imgUrl: '',
                        style: {
                            background: '',
                            width: '100%',
                            paadingTop: '56.25%',
                            overflow: 'hidden',
                            position: 'relative'
                        },

                        children: [{
                            id: 'dskjlsdkljsdsad',
                            name: 'div',
                            class: 'avatar-div',
                            style: {
                                width: "100%",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            },
                            children: [{
                                id: "jkxdskljdsakjldas",
                                name: 'img',
                                class: 'card-img',
                                style: {
                                    display: 'block',
                                    position: 'relative',
                                    bottom: '-70px',
                                    border: "4px solid white"
                                }
                            }]
                        }]
                    }],

                },
            ]

        }
    }
}
</script>


<style scope lang="scss">
.text--medium {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #ecf0f1;
}

.cards {
    grid-column: 2 / span 12;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 60px));
    grid-gap: 40px;
}

.card {
    grid-column-end: span 4;
    display: flex;
    flex-direction: column;
    background-color: #39393b;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

.card:hover {
    transform: translateY(-7px);
}

.card__image-container {
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;
}

.card__image-container img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card__content {
    padding: 20px;
}

.card__title {
    margin-bottom: 20px;
}

.card__info {
    display: flex;
    align-self: end;
    align-items: center;
}

.card__price {
    margin-left: auto;
    padding: 5px 20px;
    background-color: #303032;
    border-radius: 20px;
}
</style>