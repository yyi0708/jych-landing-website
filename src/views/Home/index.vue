<template>
  <!-- navbar  -->
  <Nav></Nav>

  <!-- BaseInfo -->
  <BaseInfo />

  <!-- 详情 -->
  <Detail />

  <!-- video -->
  <Video></Video>

  <!-- fqas -->
  <FQA />

  <!-- footer -->
  <FooterZone />

  <!-- 固定二维码 -->
  <Fix />
</template>

<script setup>
import Nav from "@/views/Home/components/Nav.vue";
import FQA from "@/views/Home/components/FQA.vue";
import Detail from "@/views/Home/components/Detail.vue";
import FooterZone from "@/views/Home/components/Footer.vue";
import BaseInfo from "@/views/Home/components/BaseInfo.vue";
import Video from "@/views/Home/components/video.vue";
import Fix from "@/views/Home/components/Fix.vue";
</script>

<style scoped>
.st0 {
  fill: #0acf83;
}

.st1 {
  fill: #a259ff;
}

.st2 {
  fill: #f24e1e;
}

.st3 {
  fill: #ff7262;
}

.st4 {
  fill: #1abcfe;
}
</style>
