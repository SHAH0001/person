<template>
    <div class="gender-selection">
        <div 
            class="human"
            :class="{
                'human-active' : !selectGender,
                'human-not-active' : selectGender
            }"
            @click="editGender(false)"
        >
            <img :src="require('@/assets/images/woman.svg')" alt="">
            <p class="human--title">Женский</p>
        </div>
        <div 
            class="human"
            :class="{
                'human-active' : selectGender,
                'human-not-active' : !selectGender
            }"
            @click="editGender(true)"
        >
            <!-- Применил height поскольку картинки разного размера, еще можно было подогнать отспупом, но подумал что так лучше -->
            <img height="152" :src="require('@/assets/images/man.svg')" alt="">
            <p class="human--title">Мужской</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectGender: false
        }
    },
    methods: {
        editGender(value) {
            if (value !== this.selectGender) {
                this.selectGender = !this.selectGender
            }
        }
    }
}
</script>
<style lang="scss">
.gender-selection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .human {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 140px;
        height: 233px;
        border-radius: 25px;
        cursor: pointer;

        &-active {
            background: linear-gradient(180deg, #353744 0%, #191B28 100%);
            box-shadow: inset 4px 4px 8px rgba(11, 11, 17, 0.91), inset -1px -1px 13px rgba(255, 255, 255, 0.34);
        }

        &-not-active {
            background: linear-gradient(180deg, #353744 0%, #191B28 100%);
            box-shadow: 4px 4px 8px rgba(11, 11, 17, 0.91), -1px -1px 13px rgba(255, 255, 255, 0.34);
        }

        &--title {
            margin: 0;
            color: #ffffff;
            margin-top: 16px;
        }
    }

    
}
</style>