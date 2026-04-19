<template>
  <div class="banner-preview">
    <el-carousel 
      :height="props.height + 'px'" 
      :autoplay="props.autoplay"
      :interval="props.interval"
    >
      <el-carousel-item v-for="(img, idx) in props.images" :key="idx">
        <img :src="img" class="w-full h-full object-cover" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
defineProps({
  props: {
    type: Object,
    required: true
  }
})
</script>
