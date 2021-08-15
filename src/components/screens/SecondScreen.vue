<template>
    <div class="second-screen">
        <Header 
            :title="'Физические показатели'"
            back
        />
        <div class="container">
            <Input 
                :label="'Ваш возраст'"
                :unit="'год(-а)/лет'"
            />
            <Input 
                :label="'Рост'"
                :unit="'см'"
            />
            <Input 
                :label="'Текущий вес'"
                :unit="'кг'"
            />
            <Input 
                :label="'Целевой вес'"
                :unit="'кг'"
            />
            <Button 
                :text="'Далее'"
            />
        </div>
    </div>
</template>
<script>
import Header from '../Header.vue'
import Input from '../Input.vue'
import Button from '../Button.vue'

export default {
    components: {
       Header,
       Input,
       Button
    }
}
</script>
<style lang="scss">
.second-screen {
    // height: 91%;
    padding-top: 150px;
}

.button-wrapper {
  position: relative;
}
</style>