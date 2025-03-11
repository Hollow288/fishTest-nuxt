import { defineNuxtPlugin } from '#app'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'  // 修改这里

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('fancybox', Fancybox)

    Fancybox.bind('[data-fancybox="gallery"]', {
        animated: true,
        dragToClose: true,
    })
})
