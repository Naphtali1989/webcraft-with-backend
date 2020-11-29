<template>
    <div @click="toggleEditor" id="arrowAnim" :class="arrowDirection">
        <div class="arrowSliding">
            <div class="arrow"></div>
        </div>
        <div class="arrowSliding delay1">
            <div class="arrow"></div>
        </div>
        <div class="arrowSliding delay2">
            <div class="arrow"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "toggle-editor",
    props: {
        isEditorShow: Boolean,
    },
    methods: {
        toggleEditor() {
            this.$emit('toggled')
        }
    },
    computed: {
        arrowDirection() {
            return { rotateArrow: !this.isEditorShow }
        }
    }
}
</script>

<style lang="scss" scoped>
#arrowAnim {
    height: 22px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(10px);
    &.rotateArrow{
        transform:rotate(180deg)
    }
}

.arrow {
    width: 22px;
    height: 22px;
    border: 12px solid;
    border-color: black transparent transparent black;
    transform: rotate(-45deg);
}

.arrowSliding {
    position: absolute;
    animation: slide 3s linear infinite;
}

.delay1 {
    animation-delay: 1s;
}
.delay2 {
    animation-delay: 2s;
}

@keyframes slide {
    0% {
        opacity: 0;
        transform: translateX(110%);
    }
    20% {
        opacity: 1;
        transform: translateX(50%);
    }
    80% {
        opacity: 1;
        transform: translateX(-50%);
    }
    100% {
        opacity: 0;
        transform: translateX(-110%);
    }
}
</style>