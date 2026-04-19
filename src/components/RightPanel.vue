<template>
  <div class="right-panel h-full bg-white">
    <div class="p-3 border-b font-bold text-gray-700">属性配置</div>
    
    <div v-if="!store.selectedComponent" class="p-4 text-center text-gray-400">
      <el-icon :size="40" class="mb-2"><Setting /></el-icon>
      <p>请选择组件进行配置</p>
    </div>

    <div v-else class="p-4">
      <div class="mb-4 pb-3 border-b">
        <span class="text-sm text-gray-500">当前组件：</span>
        <span class="font-bold">{{ store.selectedComponent.name }}</span>
      </div>

      <!-- 文本组件配置 -->
      <template v-if="store.selectedComponent.type === 'text'">
        <el-form label-position="top" size="small">
          <el-form-item label="文本内容">
            <el-input v-model="props.content" type="textarea" :rows="3" @input="updateProps" />
          </el-form-item>
          <el-form-item label="字体大小">
            <el-slider v-model="props.fontSize" :min="12" :max="36" @change="updateProps" />
          </el-form-item>
          <el-form-item label="文字颜色">
            <el-color-picker v-model="props.color" @change="updateProps" />
          </el-form-item>
          <el-form-item label="对齐方式">
            <el-radio-group v-model="props.textAlign" @change="updateProps">
              <el-radio-button value="left">左</el-radio-button>
              <el-radio-button value="center">中</el-radio-button>
              <el-radio-button value="right">右</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="字体粗细">
            <el-select v-model="props.fontWeight" @change="updateProps">
              <el-option label="正常" value="normal" />
              <el-option label="加粗" value="bold" />
            </el-select>
          </el-form-item>
        </el-form>
      </template>

      <!-- 图片组件配置 -->
      <template v-if="store.selectedComponent.type === 'image'">
        <el-form label-position="top" size="small">
          <el-form-item label="图片地址">
            <el-input v-model="props.src" @input="updateProps" />
          </el-form-item>
          <el-form-item label="圆角">
            <el-slider v-model="props.borderRadius" :max="50" @change="updateProps" />
          </el-form-item>
        </el-form>
      </template>

      <!-- 按钮组件配置 -->
      <template v-if="store.selectedComponent.type === 'button'">
        <el-form label-position="top" size="small">
          <el-form-item label="按钮文字">
            <el-input v-model="props.text" @input="updateProps" />
          </el-form-item>
          <el-form-item label="按钮类型">
            <el-select v-model="props.type" @change="updateProps">
              <el-option label="主要" value="primary" />
              <el-option label="成功" value="success" />
              <el-option label="警告" value="warning" />
              <el-option label="危险" value="danger" />
              <el-option label="信息" value="info" />
            </el-select>
          </el-form-item>
          <el-form-item label="圆角按钮">
            <el-switch v-model="props.round" @change="updateProps" />
          </el-form-item>
          <el-form-item label="跳转链接">
            <el-input v-model="props.link" placeholder="https://" @input="updateProps" />
          </el-form-item>
        </el-form>
      </template>

      <!-- 轮播图配置 -->
      <template v-if="store.selectedComponent.type === 'banner'">
        <el-form label-position="top" size="small">
          <el-form-item label="高度">
            <el-slider v-model="props.height" :min="100" :max="400" @change="updateProps" />
          </el-form-item>
          <el-form-item label="自动播放">
            <el-switch v-model="props.autoplay" @change="updateProps" />
          </el-form-item>
          <el-form-item label="切换间隔(ms)">
            <el-input-number v-model="props.interval" :min="1000" :max="10000" :step="500" @change="updateProps" />
          </el-form-item>
          <el-form-item label="图片列表">
            <div v-for="(img, idx) in props.images" :key="idx" class="flex gap-2 mb-2">
              <el-input v-model="props.images[idx]" size="small" @input="updateProps" />
              <el-button size="small" type="danger" @click="removeImage(idx)">
                <el-icon><Delete /></el-icon>
              </el-button>
            </div>
            <el-button size="small" @click="addImage">添加图片</el-button>
          </el-form-item>
        </el-form>
      </template>

      <!-- 公告栏配置 -->
      <template v-if="store.selectedComponent.type === 'notice'">
        <el-form label-position="top" size="small">
          <el-form-item label="公告内容">
            <el-input v-model="props.content" type="textarea" @input="updateProps" />
          </el-form-item>
          <el-form-item label="文字颜色">
            <el-color-picker v-model="props.color" @change="updateProps" />
          </el-form-item>
          <el-form-item label="背景颜色">
            <el-color-picker v-model="props.bgColor" @change="updateProps" />
          </el-form-item>
        </el-form>
      </template>

      <!-- 优惠券配置 -->
      <template v-if="store.selectedComponent.type === 'coupon'">
        <el-form label-position="top" size="small">
          <el-form-item label="优惠券标题">
            <el-input v-model="props.title" @input="updateProps" />
          </el-form-item>
          <el-form-item label="优惠金额">
            <el-input-number v-model="props.value" :min="1" @change="updateProps" />
          </el-form-item>
          <el-form-item label="使用条件">
            <el-input v-model="props.condition" @input="updateProps" />
          </el-form-item>
          <el-form-item label="背景颜色">
            <el-color-picker v-model="props.bgColor" @change="updateProps" />
          </el-form-item>
        </el-form>
      </template>

      <!-- 分割线配置 -->
      <template v-if="store.selectedComponent.type === 'divider'">
        <el-form label-position="top" size="small">
          <el-form-item label="线条样式">
            <el-select v-model="props.borderStyle" @change="updateProps">
              <el-option label="实线" value="solid" />
              <el-option label="虚线" value="dashed" />
              <el-option label="点线" value="dotted" />
            </el-select>
          </el-form-item>
          <el-form-item label="线条颜色">
            <el-color-picker v-model="props.color" @change="updateProps" />
          </el-form-item>
          <el-form-item label="上下边距">
            <el-slider v-model="props.margin" :max="50" @change="updateProps" />
          </el-form-item>
        </el-form>
      </template>

      <!-- 输入框配置 -->
      <template v-if="store.selectedComponent.type === 'form-input' || store.selectedComponent.type === 'form-phone'">
        <el-form label-position="top" size="small">
          <el-form-item label="标签名称">
            <el-input v-model="props.label" @input="updateProps" />
          </el-form-item>
          <el-form-item label="占位文字">
            <el-input v-model="props.placeholder" @input="updateProps" />
          </el-form-item>
          <el-form-item label="是否必填">
            <el-switch v-model="props.required" @change="updateProps" />
          </el-form-item>
        </el-form>
      </template>

      <!-- 提交按钮配置 -->
      <template v-if="store.selectedComponent.type === 'submit-btn'">
        <el-form label-position="top" size="small">
          <el-form-item label="按钮文字">
            <el-input v-model="props.text" @input="updateProps" />
          </el-form-item>
          <el-form-item label="背景颜色">
            <el-color-picker v-model="props.bgColor" @change="updateProps" />
          </el-form-item>
        </el-form>
      </template>

      <!-- 商品列表配置 -->
      <template v-if="store.selectedComponent.type === 'product-list'">
        <el-form label-position="top" size="small">
          <el-form-item label="列数">
            <el-radio-group v-model="props.columns" @change="updateProps">
              <el-radio-button :value="1">一列</el-radio-button>
              <el-radio-button :value="2">两列</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="商品列表">
            <div v-for="(item, idx) in props.products" :key="idx" class="mb-3 p-2 border rounded">
              <div class="flex justify-between items-center mb-2">
                <span class="text-xs text-gray-500">商品{{ idx + 1 }}</span>
                <el-button size="small" type="danger" text @click="removeProduct(idx)">
                  <el-icon><Delete /></el-icon>
                </el-button>
              </div>
              <el-input v-model="item.name" placeholder="商品名称" class="mb-1" @input="updateProps" />
              <el-input v-model="item.image" placeholder="图片地址" class="mb-1" @input="updateProps" />
              <div class="flex gap-1">
                <el-input-number v-model="item.price" :min="0" placeholder="价格" controls-position="right" @change="updateProps" />
                <el-input-number v-model="item.originalPrice" :min="0" placeholder="原价" controls-position="right" @change="updateProps" />
              </div>
            </div>
            <el-button size="small" @click="addProduct">添加商品</el-button>
          </el-form-item>
        </el-form>
      </template>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { Setting, Delete } from '@element-plus/icons-vue'
import { useEditorStore } from '@/stores/editor'

const store = useEditorStore()
const props = reactive({})

// 监听选中组件变化，同步属性
watch(() => store.selectedComponent, (comp) => {
  if (comp) {
    Object.assign(props, JSON.parse(JSON.stringify(comp.props)))
  }
}, { immediate: true, deep: true })

const updateProps = () => {
  if (store.selectedIndex >= 0) {
    store.updateComponentProps(store.selectedIndex, { ...props })
  }
}

const addImage = () => {
  props.images.push('https://via.placeholder.com/375x200')
  updateProps()
}

const removeImage = (idx) => {
  if (props.images.length > 1) {
    props.images.splice(idx, 1)
    updateProps()
  }
}

const addProduct = () => {
  props.products.push({
    name: '新商品',
    price: 99,
    originalPrice: 199,
    image: 'https://via.placeholder.com/200x150/ccc/fff?text=新商品'
  })
  updateProps()
}

const removeProduct = (idx) => {
  if (props.products.length > 1) {
    props.products.splice(idx, 1)
    updateProps()
  }
}
</script>
