<template>
  <header>
    <div class="main-inner pt-10 pb-10 ps-3 pe-3 ps-md-0 pe-md-0">
      <nav class="navbar navbar-expand-lg p-0">
        <div class="container">
          <NuxtLink to="/">
            <img src="/public/picture/fish-icon.png" width="150" height="65">
          </NuxtLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars fa-fw"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/" exact-active-class="active">首页</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/about-us" exact-active-class="active">关于我们</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/portfolio" exact-active-class="active">工程案例</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/services" exact-active-class="active">涉及业务</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/blog" exact-active-class="active">资讯中心</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/contact" exact-active-class="active">联系我们</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
/* 你的样式 */
</style>
