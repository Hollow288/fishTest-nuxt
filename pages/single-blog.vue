<template>
  <main id="app">
    <section class="about-hero-section blog-hero-section ps-3 pe-3 ps-md-0 pe-md-0">
      <div class="container">
        <div class="row justify-content-center">
          <h1 class="text-white mb-10" style="font-family: 'Alibaba-PuHuiTi', serif">{{ newsInformation.newsTitle }}</h1>
          <div class="title-border"></div>
        </div>
      </div>
    </section>
    <div v-if="loading"  style="height: 300px; display: flex; justify-content: center; align-items: center;">
        加载中...
    </div>
    <section v-else class="single-blog-section pt-100 pb-100 ps-3 pe-3 ps-md-0 pe-md-0" >
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-12 p-0"></div>
          <div class="col-md-8 col-12 single-blog-wrap ps-0 pe-0">
            <img :src="newsInformation.newsCover" alt="加载中..." />
            <div class="d-flex pt-10 pb-10 flex-column flex-md-row">
              <div class="col-lg-6 col-md-8 col-12 d-flex justify-content-center justify-content-md-start">
                <div class="pe-3 single-calendar">
                  <i class="fa-solid fa-calendar"></i>
                  &nbsp;<span style="font-family: 'Alibaba-PuHuiTi', serif">{{ newsInformation.newsDate }}</span>
                </div>
              </div>
            </div>
            <div class="mb-3" v-html="newsInformation.newsText" style="font-family: 'Alibaba-PuHuiTi', serif"></div>
          </div>
          <div class="col-md-2 col-12 p-0"></div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '#app'
// 定义 newsInformation 状态
const newsInformation = ref({});
const loading = ref(true);

useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  title: '资讯中心 - 全包圆橱柜',
  meta: [
    { name: 'description', content: '最新家居资讯、装修技巧、橱柜和衣柜定制知识分享，助您掌握最新家居动态和设计趋势。' },
    { name: 'keywords', content: '家居资讯, 装修技巧, 橱柜知识, 衣柜知识, 行业动态' }
  ]
})

// 在组件加载时请求数据
onMounted(() => {
  loading.value = true
  const queryList = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('newsId');

    try {
      const response = await fetch(`/fish-api/common/news-information?newsId=${newsId}`);
      const data = await response.json();
      newsInformation.value = data.data[0];

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  queryList();
  loading.value = false
});
</script>

<style scoped>
/* 根据需要添加样式 */
</style>
