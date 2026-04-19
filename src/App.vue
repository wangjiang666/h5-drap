<template>
  <div class="h-screen flex">
    <!-- 左侧组件库 -->
    <div class="w-64 border-r flex-shrink-0 overflow-y-auto">
      <LeftPanel />
    </div>
    
    <!-- 中间预览区 -->
    <div class="flex-1 overflow-hidden">
      <CenterCanvas />
    </div>
    
    <!-- 右侧配置面板 -->
    <div class="w-80 border-l flex-shrink-0 overflow-y-auto">
      <RightPanel />
    </div>
  </div>
</template>

<script setup>
import LeftPanel from '@/components/LeftPanel.vue'
import CenterCanvas from '@/components/CenterCanvas.vue'
import RightPanel from '@/components/RightPanel.vue'
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
