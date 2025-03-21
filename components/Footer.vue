<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="content about">
            <h2>全包圆</h2>
            <p>全包圆专注于高端橱柜、衣柜定制，提供一站式家居解决方案，设计与品质并重，打造舒适居家体验。</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="content">
            <h4>服务与支持</h4>
            <ul class="left-menu">
              <li>
                <NuxtLink  to="/" >首页</NuxtLink>
              </li>
              <li>
                <NuxtLink  to="/about-us" >关于我们</NuxtLink>
              </li>
              <li>
                <NuxtLink  to="/portfolio" >工程案例</NuxtLink>
              </li>
            </ul>
            <ul class="right-menu">
              <li class="mb-10">
                <NuxtLink  to="/services" >涉及业务</NuxtLink>
              </li>
              <li class="mb-10">
                <NuxtLink  to="/blog" >资讯中心</NuxtLink>
              </li>
              <li class="mb-10">
                <NuxtLink  to="/contact" >联系我们</NuxtLink>
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

  <div class="footErweimaBox bounce-in-right">
    <div class="imgsItem" @mouseenter="showAlert" @mouseleave="hideAlert">
      <img class="wximg" src="/image/wx.png" />
      <div class="alertimg" :class="{ alertimg_hover: isHovered }" style="left: -25px;">
        <div class="img">
          <img src="/image/about-us-images.png" alt="微信">
          <p>微信</p>
        </div>

      </div>
    </div>
    <div class="imgsItem">
      <img class="wximg goToTopBtn" id="goToTopBtn" src="/image/ArrowUp.png" @click="scrollToTop" v-show="showGoToTop" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const { $sr } = useNuxtApp()
const showGoToTop = ref(false) // 控制按钮显示与隐藏
const isHovered = ref(false);  // 用于控制弹出框显示

// 滚动到顶部的函数
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 监听滚动事件
const handleScroll = () => {
  if (window.scrollY > 300) {
    showGoToTop.value = true
  } else {
    showGoToTop.value = false
  }
}

// 鼠标悬停时显示 alertimg
const showAlert = () => {
  isHovered.value = true;
};

// 鼠标离开时隐藏 alertimg
const hideAlert = () => {
  isHovered.value = false;
};

// 在组件挂载时添加滚动监听事件
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  if ($sr) {
    $sr.reveal('.bounce-in-right', {
      origin: 'right',          // 从右侧滑入
      distance: '100%',         // 滑动的距离
      duration: 1000,           // 动画时长
      easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // 自定义缓动函数，模拟弹性效果
      opacity: 0,               // 起始透明度
      reset: false              // 是否重复触发
    })
  }

})

// 在组件销毁时移除滚动监听事件
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.footErweimaBox .wximg {
  width: 28px;
  height: 28px;
}

.footErweimaBox {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: fixed;
  right: 30px;
  bottom: 30px;
  transition: transform 0.3s ease;
  z-index: 5001;
  flex-direction: column;
}

.footErweimaBox .imgsItem {
  position: relative;
  padding: 0 15px;
  display: flex;
  flex-direction: column; /* 将元素垂直排列 */
  margin-bottom: 20px; /* 可以根据需要调整元素之间的间距 */
  z-index: 5001;
}

.footErweimaBox .alertimg {
  background: #fff;
  width: auto;
  height: 130px;
  padding: 15px;
  position: absolute;
  white-space: nowrap;
  bottom: 48px;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  display: table;
  align-items: center;
}

.footErweimaBox .alertimg .img {
  display: inline-block;
  margin: 0 5px;
}

.footErweimaBox .alertimg .img,
.footErweimaBox .alertimg img {
  width: 80px;
  height: 80px;
}

.footErweimaBox .alertimg:before {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  bottom: -8px;
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-top: 12px solid #fff;
}

.footErweimaBox .alertimg p {
  font-size: 12px;
  text-align: center;
  margin-top: 6px;
  font-family: 'Alibaba-PuHuiTi', serif;
  font-weight: 400;
  color: #333333;
}

.alertimg_hover {
  opacity: 1 !important;
  visibility: visible !important;
  transform: rotateY(0deg) !important;
}

.footErweimaBox .imgsItem .wximg {
  width: 39px;
  height: 39px;
  opacity: 0.6;
  transition: 0.5s;
}

.footErweimaBox .imgsItem .wximg:hover {
  opacity: 1;
}
</style>
