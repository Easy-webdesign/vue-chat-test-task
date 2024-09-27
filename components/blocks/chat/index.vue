<template>
    <div class="v-chat__msg-block">
        <h2>{{userIdMod}}</h2>
        <div class="v-chat__msg-box" ref="msg">
            <div ref="msgContainer">
                <Msg
                    v-for="item in getMsgData"
                    :key="item.data"
                    :userId="item.userMsgId" 
                    :myMsg="userId == item.userMsgId"
                    :msg="item.data"
                />
            </div>
        </div>
        <Submit :userId="userId"/>
    </div>
</template>

<script setup lang='ts'>
    import { idToName } from '@/utils/handlers'
    const props = defineProps<{
        userId: string
    }>()

    const { getMsgData } = storeToRefs(useMsgStore());
    const userIdMod = computed(() => {
        return idToName(props.userId)
    });

    const msg = ref(null);
    const msgContainer = ref(null);

    watch(getMsgData, (newData: any)  => {
        setTimeout(() => {
            msg.value.scrollTo(0, msgContainer.value.offsetHeight)
        }, 3)
    }, {deep: true});

    onMounted(() => {
        msg.value.scrollTo(0, msgContainer.value.offsetHeight)
    })

</script>

<style lang='scss' scoped>
    @import './index.scss';
</style>