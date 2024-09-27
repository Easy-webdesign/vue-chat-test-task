<template>
    <div class="v-chat__submit">
        <Input v-model="msg"/>
        <Btn 
            @click="onClick"
            @keydown="onEnter"
        >Send</Btn>
    </div>
</template>

<script setup lang='ts'>
    const { newMessage } = useMsgStore();
    const props = defineProps<{
        userId: string
    }>()

    const msg = ref('')

    const onClick = () => {
        if(!msg.value) return;
        const newMsg = {
            id: `${props.userId}-${Math.random()}`,
            userMsgId: props.userId,
            data: msg.value
        };

        newMessage(newMsg)

        msg.value = ''
    }

    

    // const onEnter = (e: any) => {
    //     if(!msg.value) return;
    //     console.log(e.code);
        
    // }

    onMounted(() => {
        document.addEventListener('keydown', (e: any) => {
            if(!msg.value.trim().length || e.code !== 'Enter') return;
            
            const newMsg = {
                id: `${props.userId}-${Math.random()}`,
                userMsgId: props.userId,
                data: msg.value
            };

            newMessage(newMsg)

            msg.value = ''
        })
    })

    
</script>

<style lang='scss' scoped>
    @import './index.scss';
</style>