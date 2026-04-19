<template>
  <div class="form-phone-preview p-3">
    <div class="text-sm mb-1">
      {{ props.label }}
      <span v-if="props.required" class="text-red-500">*</span>
    </div>
    <el-input :placeholder="props.placeholder">
      <template #prepend>+86</template>
    </el-input>
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
