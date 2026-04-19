<template>
  <div class="button-preview p-2">
    <el-button 
      :type="props.type" 
      :size="props.size"
      :round="props.round"
      class="w-full"
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
