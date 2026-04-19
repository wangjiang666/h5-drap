import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', {
  state: () => ({
    // 画布中的组件列表
    components: [],
    // 当前选中的组件索引
    selectedIndex: -1,
    // 组件ID计数器
    idCounter: 0
  }),

  getters: {
    selectedComponent: (state) => {
      if (state.selectedIndex >= 0 && state.selectedIndex < state.components.length) {
        return state.components[state.selectedIndex]
      }
      return null
    }
  },

  actions: {
    // 添加组件
    addComponent(component) {
      const newComponent = {
        ...JSON.parse(JSON.stringify(component)),
        id: ++this.idCounter
      }
      this.components.push(newComponent)
      this.selectedIndex = this.components.length - 1
    },

    // 选中组件
    selectComponent(index) {
      this.selectedIndex = index
    },

    // 删除组件
    deleteComponent(index) {
      this.components.splice(index, 1)
      if (this.selectedIndex >= this.components.length) {
        this.selectedIndex = this.components.length - 1
      }
    },

    // 上移组件
    moveUp(index) {
      if (index > 0) {
        const temp = this.components[index]
        this.components[index] = this.components[index - 1]
        this.components[index - 1] = temp
        this.selectedIndex = index - 1
      }
    },

    // 下移组件
    moveDown(index) {
      if (index < this.components.length - 1) {
        const temp = this.components[index]
        this.components[index] = this.components[index + 1]
        this.components[index + 1] = temp
        this.selectedIndex = index + 1
      }
    },

    // 更新组件配置
    updateComponentProps(index, props) {
      if (this.components[index]) {
        this.components[index].props = { ...this.components[index].props, ...props }
      }
    },

    // 重置画布
    reset() {
      this.components = []
      this.selectedIndex = -1
    },

    // 获取保存数据
    getSaveData() {
      return JSON.stringify(this.components)
    },

    // 加载数据
    loadData(data) {
      try {
        this.components = JSON.parse(data)
        this.selectedIndex = -1
      } catch (e) {
        console.error('加载数据失败', e)
      }
    }
  }
})
