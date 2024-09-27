<template>
    <textarea class="v-chat__input" rows="3" v-model="localValue"/>
</template>

<script>
    export default defineNuxtComponent({
        props: ['modelValue'],
        emits: ["update:modelValue"],
        data(){
            return {}
        },
        computed: {
            localValue: {
                get(){
                    return this.modelValue
                },
                set(value){
                    this.$emit('update:modelValue', value)
                }
            }
        },
        methods: {},
    })
</script>

<style lang='scss' scoped>
    @import './index.scss';
</style>