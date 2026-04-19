<template>
  <div class="left-panel h-full bg-white">
    <div class="p-3 border-b font-bold text-gray-700">组件库</div>
    <el-collapse v-model="activeNames" class="component-collapse">
      <el-collapse-item 
        v-for="(category, key) in componentLibrary" 
        :key="key"
        :name="key"
      >
        <template #title>
          <div class="flex items-center">
            <el-icon class="mr-2"><component :is="category.icon" /></el-icon>
            {{ category.name }}
          </div>
        </template>
        <draggable
          :list="category.components"
          :group="{ name: 'components', pull: 'clone', put: false }"
          :clone="cloneComponent"
          :sort="false"
          item-key="type"
          class="grid grid-cols-2 gap-2 p-2"
        >
          <template #item="{ element }">
            <div 
              class="component-item p-3 border rounded cursor-move hover:border-blue-400 hover:bg-blue-50 transition-all text-center"
            >
              <el-icon :size="24" class="mb-1"><component :is="element.icon" /></el-icon>
              <div class="text-xs text-gray-600">{{ element.name }}</div>
            </div>
          </template>
        </draggable>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { componentLibrary } from '@/config/components'
import * as Icons from '@element-plus/icons-vue'

const activeNames = ref(['basic', 'marketing', 'tools'])

const cloneComponent = (item) => {
  return JSON.parse(JSON.stringify(item))
}
</script>

<style scoped>
.component-collapse :deep(.el-collapse-item__header) {
  padding-left: 12px;
}
.component-collapse :deep(.el-collapse-item__content) {
  padding-bottom: 0;
}
</style>
