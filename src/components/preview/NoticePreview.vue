<template>
  <div 
    class="notice-preview flex items-center px-3 py-2"
    :style="{ backgroundColor: props.bgColor, color: props.color }"
  >
    <el-icon class="mr-2"><Bell /></el-icon>
    <span class="truncate">{{ props.content }}</span>
  </div>
</template>

<script setup>
import { Bell } from '@element-plus/icons-vue'

defineProps({
  props: {
    type: Object,
    required: true
  }
})
</script>
