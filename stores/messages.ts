
import { defineStore } from 'pinia'

export const useMsgStore = defineStore('messages', {
  state: () =>({
    msgData: [
        {
            id: '',
            userMsgId: 'user-1',
            data: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto similique voluptatum magni delectus id recusandae provident voluptates asperiores commodi dicta maxime illum eius rerum aperiam nisi quos, earum maiores? Ab?'
        },
        {
            id: '',
            userMsgId: 'user-2',
            data: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto similique voluptatum magni delectus id recusandae provident voluptates asperiores commodi dicta maxime illum eius rerum aperiam nisi quos, earum maiores? Ab?'
        },
    ] as {[key: string]: string}[]
  }),

  actions: {
    newMessage(msg: {[key: string]: string}){
        this.msgData.push(msg)
    }
  },

  getters: {
    getMsgData(state){
        return state.msgData
    }
  }
})