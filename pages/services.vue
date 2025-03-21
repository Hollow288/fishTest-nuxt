<script setup>
import { Edit } from '@element-plus/icons-vue'
import { useHead } from '#app'
import { HotWater } from '@element-plus/icons-vue'
import { Refrigerator } from '@element-plus/icons-vue'
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
const { $sr } = useNuxtApp()
const router = useRouter()

useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  title: '涉及业务 - 全包圆橱柜',
  meta: [
    { name: 'description', content: '全包圆橱柜业务范围介绍，包括橱柜和衣柜定制、安装及家居设计服务，专业团队助力高端品质打造。' },
    { name: 'keywords', content: '橱柜定制, 衣柜定制, 家居设计, 橱柜安装, 衣柜安装' }
  ]
})

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

<template>
<div>
  <section class="about-hero-section services-hero-section ps-3 pe-3 ps-md-0 pe-md-0">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="text-white mb-10" style="font-family: 'AlimamaFangYuanTiVF-Thin', serif">涉及业务</h1>
        <div class="title-border"></div>
      </div>
    </div>
  </section>

  <section class="services-section services-wrap-section pt-100 pb-100 ps-3 pe-3 ps-md-0 pe-md-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="section-box d-flex flex-wrap justify-content-center ps-0 pe-0">
          <div class="col-lg-4 col-md-6 col-12 pe-0 ps-md-3 pe-md-3 slide-in-up" data-wow-duration="1s" data-wow-delay=".1s">
            <div class="card">
              <div class="card-title-wrap d-flex align-items-center">
                <i class="el-icon">
                  <Edit />
                </i>
                <h4 class="card-title mb-0">全屋定制</h4>
              </div>
              <div class="card-body mt-20 p-0">
                <p class="mb-3">据您的个人需求和喜好，制造专属的家居产品，满足您的审美和实用需求</p>
                <span class="card-divider mb-3"></span>
                <div class="card-list d-flex flex-column">
                                            <span>
                                                <i class="fa-solid fa-check"></i>根据户型结构进细致定制 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>测量,设计,生产,安装一条龙服务 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>注重个性化和定制化的设计 </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 pe-0 ps-md-3 pe-md-3 pt-30 pt-md-0 slide-in-up" data-wow-duration="1s" data-wow-delay=".2s">
            <div class="card">
              <div class="card-title-wrap d-flex align-items-center">
                <i class="el-icon">
                  <HotWater />
                </i>
                <h4 class="card-title mb-0">整体厨房</h4>
              </div>
              <div class="card-body mt-20 p-0">
                <p class="mb-3">在保证美感的同时，注重实用性和质量，保证每个细节尽善尽美</p>
                <span class="card-divider mb-3"></span>
                <div class="card-list d-flex flex-column">
                                            <span>
                                                <i class="fa-solid fa-check"></i>高质量五金配件值得信赖 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>环保板材符合国家标准 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>专业施工团队，经验丰富 </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 ps-0 ps-md-3 pe-md-3 pt-30 pt-lg-0 slide-in-up" data-wow-duration="1s" data-wow-delay=".3s">
            <div class="card">
              <div class="card-title-wrap d-flex align-items-center">
                <i class="el-icon">
                  <Refrigerator />
                </i>
                <h4 class="card-title mb-0">厨房电器</h4>
              </div>
              <div class="card-body mt-20 p-0">
                <p class="mb-3">我们的智能厨电产品，带给您更便捷、高效的厨房体验</p>
                <span class="card-divider mb-3"></span>
                <div class="card-list d-flex flex-column">
                                            <span>
                                                <i class="fa-solid fa-check"></i>比零售更低的价格 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>免费上门安装 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>根据橱柜整体设计，无缝衔接 </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 pe-0 ps-md-3 pe-md-3 pt-30 slide-in-up" data-wow-duration="1s" data-wow-delay=".4s">
            <div class="card">
              <div class="card-title-wrap d-flex align-items-center">
                <i class="fa-solid fa-chair"></i>
                <h4 class="card-title mb-0">代加工</h4>
              </div>
              <div class="card-body mt-20 p-0">
                <p class="mb-3">我们提供同为橱柜行业的代加工服务，全线自有团队质量保证</p>
                <span class="card-divider mb-3"></span>
                <div class="card-list d-flex flex-column">
                                            <span>
                                                <i class="fa-solid fa-check"></i>多年的橱柜加工定制经验 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>告别传统切割机，使用先进的雕刻机 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>一体化封边流水线，圆弧等高定工艺 </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 pe-0 ps-md-3 pe-md-3 pt-30 slide-in-up" data-wow-duration="1s" data-wow-delay=".5s">
            <div class="card">
              <div class="card-title-wrap d-flex align-items-center">
                <i class="fa-solid fa-bed"></i>
                <h4 class="card-title mb-0">新式榻榻米</h4>
              </div>
              <div class="card-body mt-20 p-0">
                <p class="mb-3">一种解决小户型卧室床铺和收纳空间不足的理想解决方案</p>
                <span class="card-divider mb-3"></span>
                <div class="card-list d-flex flex-column">
                                            <span>
                                                <i class="fa-solid fa-check"></i>合理的角度保证睡眠质量 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>专业的设计最大化利用空间 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>环保板材，安全可靠 </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 ps-0 ps-md-3 pe-md-3 pt-30 slide-in-up" data-wow-duration="1s" data-wow-delay=".6s">
            <div class="card">
              <div class="card-title-wrap d-flex align-items-center">
                <i class="fa-solid fa-columns"></i>
                <h4 class="card-title mb-0">衣柜</h4>
              </div>
              <div class="card-body mt-20 p-0">
                <p class="mb-3">我们以简约的设计语言，符合人体工程学的设计方案，诠释对衣柜设计的独特理念</p>
                <span class="card-divider mb-3"></span>
                <div class="card-list d-flex flex-column">
                                            <span>
                                                <i class="fa-solid fa-check"></i>优良的材料，保证衣柜长久不变形 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>根据您的装修风格，提供多样的面材选择 </span>
                  <span>
                                                <i class="fa-solid fa-check"></i>无声滑轨，安装紧密，保证衣柜质量 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<style scoped>

</style>