<template>
  <div>
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script>
// 导入 Header 和 Footer 组件
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>

</style>