<template>
  <div>
    <!-- 资讯中心内容 -->
    <section class="about-hero-section blog-hero-section ps-3 pe-3 ps-md-0 pe-md-0">
      <div class="container">
        <div class="row justify-content-center">
          <h1 class="text-white mb-10" style="font-family: 'AlimamaFangYuanTiVF-Thin', serif">资讯中心</h1>
          <div class="title-border"></div>
        </div>
      </div>
    </section>

    <section class="blog-section pt-100 pb-100 ps-3 pe-3 ps-md-0 pe-md-0">
      <div class="container" v-cloak>
        <div class="row justify-content-center slide-in-up">
          <div class="blog-wrap ps-0 pe-0 d-flex flex-md-row flex-wrap">
            <div class="col-md-4 col-12 ps-md-2 pe-md-2 ps-0 pe-0" v-for="(news, index) in newsInformationList" :key="index">
              <div class="card align-content-center">
                <img :src="news.newsCover" class="card-img-top mb-20 rounded-0" :alt="'news-image-' + index">
                <div class="card-body p-0">
                  <h4 class="card-title" style="font-family: 'Alibaba-PuHuiTi', serif">{{ news.newsTitle }}</h4>
                  <p class="card-text mb-3" style="font-family: 'Alibaba-PuHuiTi', serif">{{ news.newsIntroduction }}</p>
                  <NuxtLink :to="`/single-blog?newsId=${news.newsId}`" class="btn-primary blog-btn" style="font-family: 'Alibaba-PuHuiTi', serif">查看更多</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top: 20px; text-align: right;">
          <el-pagination
              background
              layout="prev, pager, next"
              :page-size="pageSize"
              :total="total"
              :current-page="currentPage"
              @current-change="currentChange"
              style=".el-pager active: #ffcf40"
          ></el-pagination>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
const { $sr } = useNuxtApp()
const router = useRouter()

onMounted(() => {
  if ($sr) {
    // 初次加载时初始化动画
    $sr.reveal('.slide-in-left', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      reset: false,
    })

    $sr.reveal('.slide-in-right', {
      origin: 'right',    // 从右侧滑入
      distance: '100%',   // 滑入的距离，可以调整
      duration: 1000,     // 动画持续时间
      easing: 'ease-out', // 缓动效果
      opacity: 0,         // 初始透明度
      reset: false,       // 滚动时是否重复触发
    })

    $sr.reveal('.slide-in-up', {
      origin: 'bottom',   // 从下方滑入
      distance: '100%',   // 滑入的距离，可以调整
      duration: 1000,     // 动画持续时间
      easing: 'ease-out', // 缓动效果
      opacity: 0,         // 初始透明度
      reset: false,       // 滚动时是否重复触发
    })
  }
})
</script>

<style scoped>
/* 样式保持不变 */
[v-cloak] {
  display: none;
}
</style>