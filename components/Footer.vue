<!-- components/Footer.vue -->
<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="content about">
            <h2>艺佳美</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita rem eius ratione. Commodi eius magnam</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="content">
            <h4>服务与支持</h4>
            <ul class="left-menu">
              <li>
                <a href="" class="active">首页</a>
              </li>
              <li>
                <a href="about-us.html">关于我们</a>
              </li>
              <li>
                <a href="portfolio.html">工程案例</a>
              </li>
            </ul>
            <ul class="right-menu">
              <li class="mb-10">
                <a href="services.html">涉及业务</a>
              </li>
              <li class="mb-10">
                <a href="blog.html">资讯中心</a>
              </li>
              <li class="mb-10">
                <a href="contact.html">联系我们</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="content contact-us no-mb">
            <h4>联系我们</h4>
            <ul>
              <li>
                <span>线下地址:</span> 495 Walk Street, Barcelona, Spain
              </li>
              <li>
                <span>咨询电话:</span> +1 234 45689
              </li>
              <li>
                <span>联系邮箱:</span> example@domain.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-copyright">
      <p>Copyright &copy; 2024.Company name All rights reserved.</p>
    </div>
  </footer>
  <div class="footErweimaBox wow bounceInRight">
    <div class="imgsItem">
      <img class="wximg" src="/image/wx.png"  />
      <div class="alertimg ">
        <div class="img">
          <img src="/image/about-us-images.png" alt="">
          <p>微信</p>
        </div>
      </div>
    </div>
    <div class="imgsItem">
      <img class="wximg goToTopBtn" id="goToTopBtn" data-wow-infinite="true"  src="/image/ArrowUp.png"  />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* 如果需要样式，可以在这里添加 */
</style>