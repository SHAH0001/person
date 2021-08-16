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
            <Select 
                :items="items"
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
import Select from '../Select.vue'

export default {
    data() {
        return {
            items: [
                'Быстрая скорость набора',
                'Средняя скорость набора',
                'Поддержка',
                'Средняя скорость похудения',
                'Быстрая скорость похудения'
            ]
        }
    },
    components: {
       Header,
       Input,
       Button,
       Select
    }
}
</script>
<style lang="scss">
.second-screen {
    padding-top: 150px;
}

.button-wrapper {
  position: relative;
}
</style>