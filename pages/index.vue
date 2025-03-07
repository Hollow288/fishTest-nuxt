<template>
  <div v-cloak>
    <!-- 首页内容 -->
    <section class="hero-section ps-3 pe-3 ps-md-0 pe-md-0">
      <div class="container">
        <div class="row flex-md-row flex-column-reverse">
          <div class="hero-content col-md-6 col-12 ps-0 pe-0 ps-md-2 pe-md-2 d-flex flex-column justify-content-center align-items-start">
            <h5 class="mb-3 wow slideInLeft">欢迎来到艺佳美</h5>
            <h1 class="mb-3 wow slideInLeft" style="font-family: AlimamaFangYuanTiVF-Thin,serif">
              艺佳美是一家专业从事<span>家具设计开发、现代化加工</span>生产企业
            </h1>
            <p class="wow slideInLeft">
              本着具有特色富有创意而且非常实用的理念，我们不断地推陈出新，致力于“精品、健康 、低碳、效益”的环保家居事业，为消费者提供性价比最优的人性化家具产品。 在设计开发上注重便捷、高效、舒适性、人性化、实用性； 在产品材料、辅料上严格采用国际标准材、环保材料； 在生产工艺上采用全自动数控加工中心生产线和新工艺，精度更高、工艺更细致、品质更优。斥资更新的生产线杜绝了人工定位会出现的错孔、漏孔现象，既提升了产品品质，又使产能上了一个新台阶。
            </p>
<!--            <NuxtLink to="/portfolio" class="btn mt-30 wow slideInLeft">工程案例 ></NuxtLink>-->
          </div>
          <div class="hero-image col-md-6 col-12 ps-0 pe-0 ps-md-2 pt-md-0 pe-md-2 text-start wow slideInRight">
            <img src="/picture/hero-section-image.png" alt="hero-section-image" class="hero-section-image">
          </div>
        </div>
      </div>
    </section>

    <section class="about-section pt-100 pb-100 ps-3 pe-3 ps-md-0 pe-md-0">
      <div class="container">
        <div class="row">
          <div class="about-img col-md-6 col-12 ps-0 pe-0 ps-md-3 pe-md-3 text-center">
            <img src="/picture/exterior-design.jpg" alt="exterior-design" class="exterior-design wow slideInLeft">
            <div class="text-end wow slideInLeft">
              <img src="/picture/fantastic-lnterior.jpg" alt="fantastic-lnterior" class="fantastic-lnterior">
            </div>
          </div>
          <div class="about-content col-md-6 col-12 ps-0 pe-0 ps-md-3 pe-md-3 d-flex flex-column align-items-start justify-content-center">
            <h6 class="mb-3">[ 关于艺佳美 ]</h6>
            <h2 class="mb-3" style="font-family: AlimamaFangYuanTiVF-Thin,serif">专业的家具与室内设计</h2>
            <span class="about-divider"></span>
            <p>拥有现代工业化的生产设备，一流的设计团队，完整、科学的质量管理体系</p>
<!--            <NuxtLink to="/about-us" class="btn mt-30">查看更多 ></NuxtLink>-->
          </div>
        </div>
      </div>
    </section>

    <section class="services-section pt-100 pb-100 ps-3 pe-3 ps-md-0 pe-md-0">
      <div class="container">
        <div class="row justify-content-center">
          <h6 class="mb-3 text-center wow slideInLeft">[ 涉及业务 ]</h6>
          <h2 class="text-center mb-3 wow slideInRight" style="font-family: AlimamaFangYuanTiVF-Thin,serif">我们能提供什么</h2>
          <span class="about-divider"></span>
          <div class="section-box d-flex flex-wrap justify-content-center pt-40 ps-0 pe-0">
            <div class="col-lg-4 col-md-6 col-12 pe-0 ps-md-3 pe-md-3 wow slideInUp" data-wow-duration="1s" data-wow-delay=".1s">
              <div class="card">
                <div class="card-title-wrap d-flex align-items-center">
                  <i class="el-icon-edit"></i>
                  <h4 class="card-title mb-0">全屋定制</h4>
                </div>
                <div class="card-body mt-20 p-0">
                  <p class="mb-3">据您的个人需求和喜好，制造专属的家居产品，满足您的审美和实用需求</p>
                  <span class="card-divider mb-3"></span>
                  <div class="card-list d-flex flex-column">
                    <span><i class="fa-solid fa-check"></i>根据户型结构进细致定制</span>
                    <span><i class="fa-solid fa-check"></i>测量,设计,生产,安装一条龙服务</span>
                    <span><i class="fa-solid fa-check"></i>注重个性化和定制化的设计</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 pe-0 ps-md-3 pe-md-3 pt-30 pt-md-0 wow slideInUp" data-wow-duration="1s" data-wow-delay=".2s">
              <div class="card">
                <div class="card-title-wrap d-flex align-items-center">
                  <i class="el-icon-hot-water"></i>
                  <h4 class="card-title mb-0">整体厨房</h4>
                </div>
                <div class="card-body mt-20 p-0">
                  <p class="mb-3">在保证美感的同时，注重实用性和质量，保证每个细节尽善尽美</p>
                  <span class="card-divider mb-3"></span>
                  <div class="card-list d-flex flex-column">
                    <span><i class="fa-solid fa-check"></i>高质量五金配件值得信赖</span>
                    <span><i class="fa-solid fa-check"></i>环保板材符合国家标准</span>
                    <span><i class="fa-solid fa-check"></i>专业施工团队，经验丰富</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 ps-0 pe-0 ps-md-3 pe-md-3 pt-30 pt-lg-0 wow slideInUp" data-wow-duration="1s" data-wow-delay=".3s">
              <div class="card">
                <div class="card-title-wrap d-flex align-items-center">
                  <i class="fa-solid fa-columns"></i>
                  <h4 class="card-title mb-0">衣柜</h4>
                </div>
                <div class="card-body mt-20 p-0">
                  <p class="mb-3">我们以简约的设计语言，符合人体工程学的设计方案，诠释对衣柜设计的独特理念</p>
                  <span class="card-divider mb-3"></span>
                  <div class="card-list d-flex flex-column">
                    <span><i class="fa-solid fa-check"></i>优良的材料，保证衣柜长久不变形</span>
                    <span><i class="fa-solid fa-check"></i>根据您的装修风格，提供多样的面材选择</span>
                    <span><i class="fa-solid fa-check"></i>无声滑轨，安装紧密，保证衣柜质量</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center pt-50 ps-0 pe-0">
<!--            <NuxtLink to="/services" class="btn">查看所有 ></NuxtLink>-->
          </div>
        </div>
      </div>
    </section>

    <section class="process-section pt-100 pb-100 ps-3 pe-3 ps-md-0 pe-md-0">
      <div class="container">
        <div class="row justify-content-center">
          <h6 class="mb-3 text-center wow slideInLeft">[ 服务过程 ]</h6>
          <h2 class="text-center mb-3 wow slideInRight" style="font-family: AlimamaFangYuanTiVF-Thin,serif">橱柜家具定制流程</h2>
          <span class="about-divider"></span>
          <div class="process-box pt-40 ps-0 pe-0 d-flex flex-wrap justify-content-center">
            <div class="process-box-wrap col-lg-4 col-md-6 ps-0 pe-0 ps-md-3 pe-md-3 text-center d-flex align-items-center flex-column wow slideInLeft">
              <h2 class="mb-10">01</h2>
              <h3 class="mb-10">设计量尺</h3>
              <p>在装修开始前签订订单，预约橱柜初量时间，联系我们为您设计量尺</p>
            </div>
            <div class="process-box-wrap col-lg-4 col-md-6 ps-0 pe-0 ps-md-3 pe-md-3 text-center pt-3 pt-md-0 d-flex align-items-center flex-column wow slideInUp">
              <h2 class="mb-10">02</h2>
              <h3 class="mb-10">安装验收</h3>
              <p>签订合同后开始生产，生产完毕后会为您免费上门安装，并进行现场验收</p>
            </div>
            <div class="process-box-wrap col-lg-4 col-md-6 ps-0 pe-0 ps-md-3 pe-md-3 pt-3 pt-md-3 pt-lg-0 text-center d-flex align-items-center flex-column wow slideInRight">
              <h2 class="mb-10">03</h2>
              <h3 class="mb-10">售后服务</h3>
              <p>在保修期内，如果产品出现非人为损坏的质量问题，我们将为您提供免费的上门检修服务</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    // 初始化 WOW.js
    // if (process.client) {
    //   new this.$wow.WOW().init();
    // }
  },
};
</script>

<style scoped>
/* 样式保持不变 */
</style>