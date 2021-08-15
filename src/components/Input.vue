<template>
    <div class="input">
        <label class="input-label" for="">{{ label }}</label>
        <div class="input-wrapper">
            <input :style="{ paddingRight: 16 + offsetWidth + 'px' }" class="input-field" type="text">
            <div ref="unit" class="input-unit">{{ unit }}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            offsetWidth: null
        }
    },
    props: {
        label: {
            type: String,
            required: true,
            default: ''
        },
        unit: {
            type: String,
            required: true,
            default: ''
        }
    },
    mounted() {
        console.log('From input: ', this.$refs.unit.offsetWidth)
        this.offsetWidth = this.$refs.unit.offsetWidth
    }
}
</script>
<style lang="scss">
@import '@/assets/scss/style.scss';

.input {
    margin-bottom: 30px;

    &-label {
        display: block;
        color: $labelColor;
        margin: 0 0 6px 0;
    }

    &-wrapper {
        position: relative;
        width: 100%;
    }

    &-field {
        width: 100%;
        background: $backgroundColor;
        box-shadow: inset 4px 4px 8px rgba(11, 11, 17, 0.91), inset -1px -1px 13px rgba(255, 255, 255, 0.34);
        border-radius: 50px;
        outline: none;
        padding: 11px 25px;
        font-size: 18px;
        color: #ffffff;
    }

    &-unit {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 16px;
        font-size: 14px;
        font-weight: 400;
        color: $mainColor;
        height: 46px;
    }
}
</style>