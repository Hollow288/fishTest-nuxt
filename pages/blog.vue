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
        <div class="row justify-content-center wow slideInUp">
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

<script>
export default {
  name: 'BlogPage',
  data() {
    return {
      newsInformationList: [],
      total: 0,
      currentPage: 1,
      pageSize: 6,
      loading: false,
    };
  },
  mounted() {
    this.fetchNewsInformation();
    if (process.client) {
      new this.$wow.WOW().init(); // 初始化 WOW.js
    }
  },
  methods: {
    async fetchNewsInformation() {
      this.loading = true;
      try {
        const response = await this.$axios.get('/common/news-information-list', {
          params: {
            page: this.currentPage,
            pageSize: this.pageSize,
          },
        });
        this.newsInformationList = response.data.data;
        this.total = response.data.total;
      } catch (error) {
        console.error('Failed to fetch news information:', error);
      } finally {
        this.loading = false;
      }
    },
    currentChange(val) {
      this.currentPage = val;
      this.fetchNewsInformation();
    },
  },
};
</script>

<style scoped>
/* 样式保持不变 */
[v-cloak] {
  display: none;
}
</style>