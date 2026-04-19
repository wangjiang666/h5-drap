<template>
  <div class="submit-btn-preview p-3">
    <el-button 
      class="w-full" 
      size="large"
      :style="{ backgroundColor: props.bgColor, borderColor: props.bgColor }"
      type="primary"
    >
      {{ props.text }}
    </el-button>
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
