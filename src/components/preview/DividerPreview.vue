<template>
  <div 
    class="divider-preview"
    :style="{ margin: props.margin + 'px 0' }"
  >
    <div 
      :style="{
        borderTop: '1px ' + props.borderStyle + ' ' + props.color
      }"
    ></div>
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
