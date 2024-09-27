<template>
    <div :class="['v-chat__msg', {'v-chat__msg--right': myMsg}]">
        <div class="v-chat__msg-content">
            <p>{{userIdMod}}</p>
            <span>{{msg}}</span>
        </div>
        
    </div>
</template>

<script setup lang='ts'>
    import { idToName } from '@/utils/handlers'
    const props = defineProps<{
        userId: string,
        msg: string,
        myMsg: boolean
    }>()
    

    const userIdMod = computed(() => {
        return idToName(props.userId)
    })
</script>

<style lang='scss' scoped>
    @import './index.scss';
</style>