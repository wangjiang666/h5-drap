# 低代码 H5 页面编辑器

基于 Vue 3 + Vite + Element Plus 的可视化拖拽搭建平台 Demo。

## 技术栈

- Vue 3 + Composition API
- Pinia 状态管理
- Element Plus UI 组件库
- vuedraggable 拖拽库
- Tailwind CSS
- Vite 构建工具

## 项目结构

```
src/
├── components/
│   ├── LeftPanel.vue      # 左侧组件库面板
│   ├── CenterCanvas.vue   # 中间画布预览区
│   ├── RightPanel.vue     # 右侧属性配置面板
│   └── preview/           # 组件预览渲染
│       ├── TextPreview.vue
│       ├── ImagePreview.vue
│       ├── ButtonPreview.vue
│       ├── BannerPreview.vue
│       ├── CouponPreview.vue
│       └── ...
├── config/
│   └── components.js      # 组件库配置（类型、默认属性）
├── stores/
│   └── editor.js          # Pinia Store（画布状态管理）
├── App.vue                # 主布局（三栏结构）
└── main.js                # 入口文件
```

## 核心功能

1. **组件拖拽** - 从左侧组件库拖拽组件到中间画布
2. **实时预览** - 画布实时渲染组件效果
3. **属性配置** - 选中组件后在右侧面板修改属性
4. **组件排序** - 支持上移、下移、删除操作
5. **数据保存** - 导出 JSON 格式的页面配置

## 支持的组件

| 分类 | 组件 |
|------|------|
| 基础组件 | 文本、图片、按钮、分割线 |
| 营销组件 | 轮播图、公告栏、优惠券、商品列表 |
| 工具组件 | 输入框、手机号、提交按钮 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 数据流

```
LeftPanel (组件库)  →  拖拽克隆  →  CenterCanvas (画布)
                                        ↓
                                   Pinia Store
                                        ↓
RightPanel (配置面板)  ←  选中组件  ←  双向绑定
```

## 关键实现

### vuedraggable 配置

```js
// 组件库：只能拖出，不能拖入
:group="{ name: 'components', pull: 'clone', put: false }"

// 画布：可拖入、可排序
group="components"
```

### 状态管理

- `store.components` - 画布中的组件列表
- `store.selectedIndex` - 当前选中组件索引
- `store.selectedComponent` - 当前选中组件（getter）
