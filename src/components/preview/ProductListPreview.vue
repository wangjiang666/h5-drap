<template>
  <div class="product-list-preview p-3">
    <div 
      class="grid gap-2"
      :class="props.columns === 2 ? 'grid-cols-2' : 'grid-cols-1'"
    >
      <div 
        v-for="(item, idx) in props.products" 
        :key="idx"
        class="bg-white rounded-lg overflow-hidden shadow-sm border"
      >
        <img :src="item.image" class="w-full h-32 object-cover" />
        <div class="p-2">
          <div class="text-sm font-medium truncate">{{ item.name }}</div>
          <div class="flex items-center justify-between mt-1">
            <span class="text-red-500 font-bold">¥{{ item.price }}</span>
            <span class="text-xs text-gray-400 line-through">¥{{ item.originalPrice }}</span>
          </div>
          <el-button size="small" type="primary" class="w-full mt-2">立即购买</el-button>
        </div>
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
