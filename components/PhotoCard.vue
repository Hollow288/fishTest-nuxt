<template>
  <a
      class="card"
      :href="link"
      target="_blank"
      ref="card"
      @mousemove="move"
      @mouseleave="leave"
      @mouseover="over"
  >
    <div class="reflection" ref="refl"></div>
    <img :src="img" alt="photo-card" />
  </a>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";

const props = defineProps({
  img: String,
  link: String,
});

const card = ref(null);
const refl = ref(null);

const scale = (val, inMin, inMax, outMin, outMax) =>
    outMin + ((val - inMin) * (outMax - outMin)) / (inMax - inMin);

const over = () => {
  refl.value.style.opacity = 1;
};

const leave = () => {
  card.value.style.transform = `perspective(500px) scale(1)`;
  refl.value.style.opacity = 0;
};

const move = (event) => {
  const relX = (event.offsetX + 1) / card.value.offsetWidth;
  const relY = (event.offsetY + 1) / card.value.offsetHeight;

  // 只保留放大的效果
  card.value.style.transform = `perspective(500px) scale(2)`;

  const lightX = scale(relX, 0, 1, 150, -50);
  const lightY = scale(relY, 0, 1, 30, -100);
  const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
  const lightOpacity = scale(lightConstrain, 0.3, 1, 1, 0) * 255;
  const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
  const lightShadeBlack = `rgba(0, 0, 0, 1)`;
  refl.value.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
};

onMounted(() => {
  console.log("PhotoCard component mounted");
});
</script>

<style scoped>
.card {
  position: relative;
  display: inline-block;
  perspective: 1000px;
  transition: transform 0.3s ease;
}

.reflection {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}
</style>
