import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('USER_INFO', () => {
  const token = ref('this is a token')
  const userInfo = ref({
    name: 'test',
    age: 18,
    work: 'coder',
  })

  const updateUserInfo = (newInfo) => {
    userInfo.value = newInfo
  }

  return { token, userInfo, updateUserInfo }
})
