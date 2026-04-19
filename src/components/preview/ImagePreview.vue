<template>
  <div class="image-preview">
    <img 
      :src="props.src" 
      :style="{
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius + 'px'
      }"
    />
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

<style scoped>
.image-preview img {
  display: block;
  max-width: 100%;
}
</style>
