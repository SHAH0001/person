<template>
  <div id="app">
    <div class="main-screen">
      <transition name="component-fade" mode="out-in">
        <component :is="currentScreen"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import { eventBus } from './main'
import FirstScreen from './components/screens/FirstScreen.vue'
import SecondScreen from './components/screens/SecondScreen.vue'

export default {
  name: 'App',
  data() {
    return {
      currentScreen: 'FirstScreen'
    }
  },
  components: {
    FirstScreen,
    SecondScreen
  },
  methods: {
    changeScreen(screen) {
      // console.log('changeScreen: ', val)
      this.currentScreen = screen
    }
  },
  created() {
    eventBus.$on('changeScreen', this.changeScreen)
    // eventBus.$on('clickFirstScreen', this.changeScreen)
    // clickSecondScreen
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.main-screen {
  position: relative;
  width: 375px;
  height: 812px;
  background-image: url('./assets/images/top-lines.png'), url('./assets/images/bottom-lines.png'), linear-gradient(90deg, rgba(37,39,52,1) 100%, rgba(26,28,41,1) 100%);;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top, bottom;
  overflow-y: scroll;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
{
  opacity: 0;
}
</style>
