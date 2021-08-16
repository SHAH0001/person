<template>
    <div class="select">
        <div class="select-header-wrapper">
            <div 
                :class="{ 'select-border-bottom' : isOpen }"
                @click="isOpen = !isOpen" 
                class="select-header"
            >
                {{ selected }}
            </div>
        </div>
        <transition name="fade">
            <div v-if="isOpen" class="select-menu-wrapper">
                <div 
                    v-for="(item, key) in items" 
                    :key="key" 
                    class="select-menu"
                    @click="selectItem(item)"
                >
                    {{ item }}
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
           isOpen: false,
           selected: 'Выбрать'
        }
    },
    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    methods: {
        selectItem(item) {
            this.selected = item
            this.isOpen = false
        }
    }
}
</script>
<style lang="scss">
@import '@/assets/scss/style.scss';

.select {
    background: $backgroundColor;
    box-shadow: 4px 4px 8px rgba(11, 11, 17, 0.91), -1px -1px 13px rgba(255, 255, 255, 0.34);
    border-radius: 25px;
    margin-bottom: 30px;
    margin-top: 43px;

    &-menu {
        margin: 0;
        padding: 13px 25px;
        color: #ffffff;
        cursor: pointer;
    }

    &-menu:hover {
        background: linear-gradient(180deg, #252734 1.5%, #1A1C29 99.63%);
    }
    
    &-menu:last-child {
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    &-border-bottom {
        border-bottom: 1px solid #5E6477;
    }

    &-header-wrapper {
        margin: 11px 25px;
    }

    &-header {
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
        padding: 11px 0 11px 11px;
        cursor: pointer;
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>