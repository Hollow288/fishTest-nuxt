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
<!--      <el-aside width="200px" style="background-color: rgb(238, 241, 246)" class="wow slideInLeft">-->
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
<!--            <div class="grid-photo wow slideInRight">-->
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

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      menuOptions: [],
      chooseOption: 'ztcg-code', // 默认选中项
      portFolioList: [],
      total: 0,
      currentPage: 1,
      pageSize: 8,
      loading: false,
    };
  },
  methods: {
    async queryType() {
      this.loading = true;
      try {
        const response = await this.$axios.get('/common/portal-type');
        this.menuOptions = response.data;
      } catch (error) {
        console.error('Failed to fetch menu options:', error);
      } finally {
        this.loading = false;
      }
    },
    async queryList() {
      this.loading = true;
      try {
        const response = await this.$axios.get('/common/portal-portfolio', {
          params: {
            type: this.chooseOption,
            page: this.currentPage,
            pageSize: this.pageSize,
          },
        });
        this.portFolioList = response.data.data;
        this.total = response.data.total;
      } catch (error) {
        console.error('Failed to fetch portfolio list:', error);
      } finally {
        this.loading = false;
      }
    },
    menuOnclick(item) {
      this.currentPage = 1;
      this.chooseOption = item.key;
      this.queryList();
    },
    currentChange(val) {
      this.currentPage = val;
      this.queryList();
    },
  },
  mounted() {
    this.queryType();
    this.queryList();
    if (process.client) {
      new this.$wow.WOW().init(); // 初始化 WOW.js
    }
  },
};
</script>

<style scoped>
/* 样式保持不变 */
[v-cloak] {
  display: none;
}
</style>