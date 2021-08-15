<template>
    <div>
      <Header 
        :title="'Выберите пол'"
      />
      <div class="container">
        <GenderSelection />
        <div class="button-wrapper">
          <Button 
            :text="'Далее'"
          />
        </div>
      </div>
    </div>
</template>
<script>
// import { eventBus } from '../../main'
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

.button-wrapper {
  position: relative;
}
</style>