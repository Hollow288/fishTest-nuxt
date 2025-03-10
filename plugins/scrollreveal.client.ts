import { defineNuxtPlugin } from '#app'
import ScrollReveal from 'scrollreveal'

export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.client) {
        // 初始化 ScrollReveal
        const sr = ScrollReveal()

        // 将 sr 提供给整个应用
        nuxtApp.provide('sr', sr)

        console.log('ScrollReveal 已初始化', sr)
    }
})
