<template>
  <div>
    <!-- 工程案例内容 -->
    <section class="about-hero-section ps-3 pe-3 ps-md-0 pe-md-0">
      <div class="container">
        <div class="row justify-content-center">
          <h1 class="text-white mb-10" style="font-family: 'AlimamaFangYuanTiVF-Thin', serif">工程案例</h1>
          <div class="title-border"></div>
        </div>
      </div>
    </section>

<!--    <el-container>-->
<!--      <el-aside width="200px" style="background-color: rgb(238, 241, 246)" class="slide-in-left">-->
<!--        <h5 style="font-family: 'AlimamaFangYuanTiVF-Thin', serif; text-align: center; background-color: white">产品分类</h5>-->
<!--        <el-menu v-for="item in menuOptions" :key="item.key" :default-active="chooseOption" active-text-color="#d7926b">-->
<!--          <el-menu-item @click="menuOnclick(item)" :index="item.key" style="font-family: 'Alibaba-PuHuiTi', serif">-->
<!--            {{ item.value + " >" }}-->
<!--          </el-menu-item>-->
<!--        </el-menu>-->
<!--      </el-aside>-->
<!--      <el-main style="overflow-x: hidden">-->
<!--        <div class="container" style="margin-top: 80px">-->
<!--          <div class="row" v-loading="loading">-->
<!--            <div class="grid-photo slide-in-right">-->
<!--              <div v-for="item in portFolioList" :key="item.id">-->
<!--                <a :href="item.panoramaUrl" data-fancybox="gallery">-->
<!--                  <photo-card :img="item.thumbnailUrl" link=""></photo-card>-->
<!--                </a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="row" style="margin-top: 100px; text-align: right">-->
<!--            <el-pagination-->
<!--                background-->
<!--                layout="prev, pager, next"-->
<!--                :page-size="pageSize"-->
<!--                :total="total"-->
<!--                :current-page="currentPage"-->
<!--                @current-change="currentChange"-->
<!--                style=".el-pager active: #ffcf40"-->
<!--            ></el-pagination>-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-main>-->
<!--    </el-container>-->
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