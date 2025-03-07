<template>
  <div>
    <!-- 联系我们内容 -->
    <section class="about-hero-section contact-hero-section ps-3 pe-3 ps-md-0 pe-md-0">
      <div class="container">
        <div class="row justify-content-center">
          <h1 class="text-white mb-10" style="font-family: 'AlimamaFangYuanTiVF-Thin', serif">联系我们</h1>
          <div class="title-border"></div>
        </div>
      </div>
    </section>

    <section class="contact-section touch-contact-section pt-100 pb-100 ps-3 pe-3 ps-md-0 pe-md-0">
      <div class="container">
        <div class="row">
          <div class="d-flex flex-column flex-md-row ps-0 pe-0">
            <div class="col-lg-6 col-md-6 col-12 icon-box-wrapper ps-md-0 pe-md-3 ps-0 pe-0 wow slideInLeft">
              <h2 class="text-start mb-3 ps-0 pe-0 wow slideInLeft">Contact Us</h2>
              <p class="mb-3 wow slideInLeft">感谢您的关注，随时欢迎您的来电或线下光临。也可以输入您的留言，我们会在工作日内尽快回复您的询问。</p>
              <div class="icon-box-item d-flex col-12 wow slideInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                <i class="fa-solid fa-location-dot"></i>
                <div class="icon-box-text d-flex flex-column align-items-start justify-content-center">
                  <h5>线下地址</h5>
                  <p>15 B-3 Lorem ipsum dolor Bali 80571</p>
                </div>
              </div>
              <div class="icon-box-item d-flex col-12 mt-4 wow slideInLeft" data-wow-duration="1s" data-wow-delay=".2s">
                <i class="fa-solid fa-phone"></i>
                <div class="icon-box-text d-flex flex-column align-items-start justify-content-center">
                  <h5>咨询电话</h5>
                  <a href="tel:+1234567890" class="text-black">+123 456 7890</a>
                </div>
              </div>
              <div class="icon-box-item d-flex col-12 mt-4 wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                <i class="fa-solid fa-envelope"></i>
                <div class="icon-box-text d-flex flex-column align-items-start justify-content-center">
                  <h5>联系邮箱</h5>
                  <a href="mailto:example@gmail.com" class="text-black">example@gmail.com</a>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-6 col-12 contact-form-wrap mt-4 mt-md-0 ms-md-3 ms-0 wow slideInRight">
              <h4 class="text-black pb-20">请您留言</h4>
              <p class="mb-3">请填写一下您的信息，我们会尽快和您联系。</p>
              <form class="contact-form col-12" @submit.prevent="submit">
                <div class="form-row" v-loading="loading">
                  <div class="form-row d-flex flex-column flex-lg-row">
                    <div class="form-group col-lg-6 col-12 pe-0 pe-lg-2">
                      <input
                          type="text"
                          class="form-control"
                          style="font-family: 'Alibaba-PuHuiTi', serif"
                          maxlength="5"
                          placeholder="姓名(必填)"
                          required
                          v-model="formData.name"
                      />
                    </div>
                    <div class="form-group col-lg-6 col-12 pe-0 pe-lg-2">
                      <input
                          type="email"
                          class="form-control"
                          style="font-family: 'Alibaba-PuHuiTi', serif"
                          maxlength="30"
                          placeholder="邮箱(可选)"
                          v-model="formData.email"
                      />
                    </div>
                  </div>
                  <div class="form-row col-lg-12">
                    <div class="form-group">
                      <input
                          type="tel"
                          class="form-control"
                          style="font-family: 'Alibaba-PuHuiTi', serif"
                          maxlength="20"
                          placeholder="电话(必填)"
                          required
                          v-model="formData.phone"
                      />
                    </div>
                    <div class="form-group col-md-12">
                      <textarea
                          class="form-control"
                          style="font-family: 'Alibaba-PuHuiTi', serif"
                          maxlength="100"
                          placeholder="在这里写下留言..."
                          required
                          rows="5"
                          v-model="formData.message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group text-start col-12">
                    <button class="btn w-100">提交</button>
                  </div>
                </div>
                <p style="font-size: 15px; color: #bb2d3b; font-family: 'Alibaba-PuHuiTi', serif">{{ promptInformation }}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      promptInformation: '',
      loading: false,
    };
  },
  methods: {
    async submit() {
      if (!this.formData.name || !this.formData.phone || !this.formData.message) {
        this.promptInformation = '请按要求填写信息!';
        return;
      }

      this.loading = true;
      try {
        const response = await this.$axios.post('/common/message-board', this.formData);
        if (response.code === 200) {
          this.promptInformation = response.message;
          this.formData = { name: '', email: '', phone: '', message: '' }; // 清空表单
        } else {
          this.promptInformation = response.message;
        }
      } catch (error) {
        this.promptInformation = '服务器繁忙，请稍后重试！';
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
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