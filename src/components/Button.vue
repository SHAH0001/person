<template>
    <button @click="buttonClick" class="button">{{ text }}</button>
</template>
<script>
import { eventBus } from '../main'
export default {
    props: {
        text: {
            type: String,
            required: true,
            default: ''
        },
        backCallback: {
            type: Function,
            required: false,
            default: undefined
        }
    },
    methods: {
        buttonClick() {
            eventBus.$emit('changeScreen', 'SecondScreen')
        }
    }
}
</script>
<style lang="scss">
@import '@/assets/scss/style.scss';

.button {
    // position: absolute;
    // bottom: 20px;
    background: linear-gradient(135deg, #1C1E2B 0%, #323441 100%);
    box-shadow: 2px 2px 8px #0A0C15, -2px -2px 6px rgba(255, 255, 255, 0.27);
    border-radius: 5px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    color: $yellowColor;
    width: 100%;
    padding: 16px 122px;
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    font-weight: 700;
    transition: transform 0.15s;
    transform-style: preserve-3d;
}

.button::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 0.15s, box-shadow 0.15s;
}

.button:active {
  transform: translate(0em, 4px);
}

.button:active::before {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.27), 2px 2px 8px #0A0C15;
  transform: translate3d(0, 0, -1em);
}
</style>