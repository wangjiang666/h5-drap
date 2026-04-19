<template>
  <div class="center-canvas h-full flex flex-col items-center bg-gray-100 p-4">
    <!-- 工具栏 -->
    <div class="toolbar mb-4 flex gap-2">
      <el-button type="primary" @click="handleSave">
        <el-icon class="mr-1"><Check /></el-icon>保存
      </el-button>
      <el-button @click="handleReset">
        <el-icon class="mr-1"><RefreshLeft /></el-icon>重置
      </el-button>
      <el-button @click="showQrcode = true">
        <el-icon class="mr-1"><Iphone /></el-icon>预览
      </el-button>
    </div>
    
    <!-- 手机预览区 + 操作按钮 -->
    <div class="phone-wrapper">
      <!-- 左侧操作按钮 -->
      <div class="action-panel">
        <template v-if="store.selectedComponent">
          <el-button-group direction="vertical">
            <el-button 
              :disabled="store.selectedIndex === 0" 
              @click="store.moveUp(store.selectedIndex)"
            >
              <el-icon><Top /></el-icon>
            </el-button>
            <el-button 
              :disabled="store.selectedIndex === store.components.length - 1" 
              @click="store.moveDown(store.selectedIndex)"
            >
              <el-icon><Bottom /></el-icon>
            </el-button>
            <el-button 
              type="danger" 
              @click="store.deleteComponent(store.selectedIndex)"
            >
              <el-icon><Delete /></el-icon>
            </el-button>
          </el-button-group>
        </template>
      </div>

      <!-- 手机框 -->
      <div class="phone-frame">
        <div class="phone-header">
          <span class="text-xs">预览</span>
        </div>
        <div class="phone-content">
          <draggable
            v-model="store.components"
            group="components"
            item-key="id"
            class="min-h-full"
            ghost-class="ghost"
            @add="onAdd"
          >
            <template #item="{ element, index }">
              <div 
                class="component-wrapper"
                :class="{ 'selected': store.selectedIndex === index }"
                @click="store.selectComponent(index)"
              >
                <component 
                  :is="previewComponents[element.type]" 
                  :props="element.props"
                />
              </div>
            </template>
          </draggable>
          
          <div v-if="store.components.length === 0" class="empty-tip">
            <el-icon :size="40" class="text-gray-300"><Plus /></el-icon>
            <p class="text-gray-400 mt-2">拖拽组件到此处</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 二维码弹窗 -->
    <el-dialog v-model="showQrcode" title="扫码预览" width="300px" center>
      <div class="flex flex-col items-center">
        <div ref="qrcodeRef" class="qrcode-container"></div>
        <p class="text-gray-500 text-sm mt-3">扫描二维码预览H5页面</p>
        <el-button class="mt-3" @click="copyLink">
          <el-icon class="mr-1"><CopyDocument /></el-icon>复制链接
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import draggable from 'vuedraggable'
import QRCode from 'qrcodejs2-fix'
import { ElMessage } from 'element-plus'
import { Check, RefreshLeft, Iphone, Top, Bottom, Delete, Plus, CopyDocument } from '@element-plus/icons-vue'
import { useEditorStore } from '@/stores/editor'
import { previewComponents } from './preview'

const store = useEditorStore()
const showQrcode = ref(false)
const qrcodeRef = ref(null)
const previewUrl = ref('https://example.com/preview/123')

const onAdd = (evt) => {
  store.selectComponent(evt.newIndex)
}

const handleSave = () => {
  const data = store.getSaveData()
  console.log('保存数据:', data)
  ElMessage.success('保存成功！')
}

const handleReset = () => {
  store.reset()
  ElMessage.info('已重置')
}

watch(showQrcode, (val) => {
  if (val) {
    nextTick(() => {
      if (qrcodeRef.value) {
        qrcodeRef.value.innerHTML = ''
        new QRCode(qrcodeRef.value, {
          text: previewUrl.value,
          width: 180,
          height: 180
        })
      }
    })
  }
})

const copyLink = () => {
  navigator.clipboard.writeText(previewUrl.value).then(() => {
    ElMessage.success('链接已复制')
  })
}
</script>

<style scoped>
.phone-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.action-panel {
  width: 40px;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}

.action-panel .el-button-group {
  display: flex;
  flex-direction: column;
}

.action-panel .el-button {
  margin: 0;
  margin-bottom: 8px;
}

.phone-frame {
  width: 375px;
  height: 667px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.phone-header {
  height: 44px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.phone-content {
  flex: 1;
  overflow-y: auto;
  position: relative;
}

.component-wrapper {
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.component-wrapper:hover {
  border-color: #409eff;
}

.component-wrapper.selected {
  border-color: #409eff;
  background: rgba(64, 158, 255, 0.05);
}

.empty-tip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.qrcode-container {
  display: flex;
  justify-content: center;
}
</style>
