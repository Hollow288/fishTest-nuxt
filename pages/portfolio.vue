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

    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)" class="slide-in-left">
        <h5 style="font-family: 'AlimamaFangYuanTiVF-Thin', serif; text-align: center; background-color: white">产品分类</h5>
        <el-menu v-for="item in menuOptions" :key="item.key" :default-active="chooseOption" active-text-color="#d7926b">
          <el-menu-item @click="menuOnclick(item)" :index="item.key" style="font-family: 'Alibaba-PuHuiTi', serif">
            {{ item.value + " >" }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="overflow-x: hidden">
        <div class="container" style="margin-top: 80px">
          <div class="row" v-loading="loading">
            <div class="grid-photo slide-in-right">
              <div v-for="item in portFolioList" :key="item.id">
                <a :href="item.panoramaUrl" data-fancybox="gallery">
                  <photo-card :img="item.thumbnailUrl" link=""></photo-card>
                </a>
              </div>
            </div>
          </div>
          <div class="row justify-content-end" style="margin-top: 100px; text-align: right">
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                :current-page="currentPage"
                @current-change="currentChange"
                class="pagination-right"
            ></el-pagination>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { onMounted} from 'vue'
import { useHead } from '#app'
const { $sr } = useNuxtApp()


const menuOptions =  ref([])
const chooseOption =  ref("")
const total =  ref(0)
const currentPage = ref(1)
const pageSize = ref(8)
const loading = ref(false)
const portFolioList = ref([])
const dataLoaded = ref(false)


useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  title: '工程案例 - 全包圆橱柜',
  meta: [
    { name: 'description', content: '全包圆橱柜工程案例展示，涵盖橱柜和衣柜设计效果图，见证高品质家居定制解决方案。' },
    { name: 'keywords', content: '工程案例, 橱柜案例, 衣柜案例, 成功案例, 家装效果图' }
  ]
})


const queryType = async () => {
  try {
    const response = await fetch(`http://localhost:8999/fish-api/common/portal-type`);
    const data = await response.json();
    menuOptions.value = data.data

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


const queryList = async () => {
  try {
    const response = await fetch(`http://localhost:8999/fish-api/common/portal-portfolio?type=${chooseOption.value}&page=${currentPage.value}&pageSize=${pageSize.value}`);
    const data = await response.json();
    portFolioList.value = data.data.data
    total.value = data.data.total
    loading.value = false

  } catch (error) {
    console.error('Error fetching data:', error);
    loading.value = false
  }
}


const menuOnclick = (item) => {
  // 回退到第一页
  currentPage.value = 1;
  chooseOption.value = item.key;
  loading.value = true;
  queryList()
}


const currentChange = (val) =>{
  currentPage.value = val
  loading.value = true;
  queryList()
}

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

  currentPage.value = 1;
  chooseOption.value = 'ztcg-code'
  total.value = 10;
  pageSize.value = 8;
  loading.value = true;
  queryList()
  queryType()
})
</script>

<style>

.fancybox__container {
  z-index: 8000
}

.pagination-right {
  justify-content: flex-end;
  display: flex;
}


</style>