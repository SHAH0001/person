<template>
    <div class="first-screen">
      <Header 
        :title="'Выберите пол'"
      />
      <div class="container">
        <GenderSelection />
        <Button 
          :text="'Далее'"
        />
      </div>
    </div>
</template>
<script>
import Header from '../Header.vue'
import GenderSelection from '../GenderSelection.vue'
import Button from '../Button.vue'

export default {
  components: {
    Header,
    GenderSelection,
    Button
  } 
}
</script>
<style lang="scss">
@import '@/assets/scss/style.scss';

.first-screen {
  height: 91%;
}

.button-wrapper {
  position: relative;
}
</style>