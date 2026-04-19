<template>
  <div 
    class="text-preview"
    :style="{
      fontSize: props.fontSize + 'px',
      color: props.color,
      textAlign: props.textAlign,
      fontWeight: props.fontWeight,
      padding: props.padding + 'px'
    }"
  >
    {{ props.content }}
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
