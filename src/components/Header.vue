<template>
    <div class="header-wrapper">
        <div 
            v-if="back" 
            @click="backButtonClick"
            class="header-back-block"
        >
            <div class="back"></div>
        </div>
        <div class="header-title-block">
            <h3 class="title">{{ title }}</h3>
        </div>
    </div>
</template>
<script>
import { eventBus } from '../main'
export default {
    props: {
        title: {
           type: String,
           required: true,
           default: ''
        },
        back: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        backButtonClick() {
            eventBus.$emit('changeScreen', 'FirstScreen')
        }
    }
}
</script>
<style lang="scss">
@import '@/assets/scss/style.scss';

.header-wrapper {
    position: fixed;
    top: 79px;
    z-index: 1000;
    display: flex;
    align-items: center;
    background: $backgroundColor;
    box-shadow: 1px 4px 9px #181a27;
    padding: 22px 25px;
    min-height: 84px;
    width: 375px;

    .header-back-block {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .back {
            position: relative;
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #1C1E2B 0%, #323441 100%);
            box-shadow: 2px 2px 10px #0A0C15, -2px -2px 10px rgba(255, 255, 255, 0.27);
            border-radius: 7px;
        }

        .back::before,
        .back::after {
            content: '';
            position: absolute;
            width: 2px;
            height: 20px;
            background-color: $labelColor;
            border-radius: 7px;
            border: 2px solid $labelColor;
        }

        .back::before {
            top: 16px;
            transform: rotate(-227deg);
            left: 41%;
        } 

        .back::after {
            top: 5px;
            transform: rotate(227deg);
            left: 39%;
        }
    }
}


.header-title-block {
    display: flex;
    justify-content: center;
    width: 100vw;

    .title {
        font-weight: 400;
        font-size: 23px;
        color: $mainColor;
        margin: 0;
    }
}
</style>