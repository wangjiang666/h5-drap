<template>
  <div class="coupon-preview p-3">
    <div 
      class="rounded-lg p-4 text-white flex justify-between items-center"
      :style="{ backgroundColor: props.bgColor }"
    >
      <div>
        <div class="text-2xl font-bold">¥{{ props.value }}</div>
        <div class="text-sm opacity-80">{{ props.condition }}</div>
      </div>
      <div class="text-right">
        <div class="font-bold">{{ props.title }}</div>
        <el-button size="small" class="mt-2" round>立即领取</el-button>
      </div>
    </div>
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
