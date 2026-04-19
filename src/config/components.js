// 组件库配置
export const componentLibrary = {
  basic: {
    name: '基础组件',
    icon: 'Grid',
    components: [
      {
        type: 'text',
        name: '文本',
        icon: 'Document',
        props: {
          content: '请输入文本内容',
          fontSize: 14,
          color: '#333333',
          textAlign: 'left',
          fontWeight: 'normal',
          padding: 10
        }
      },
      {
        type: 'image',
        name: '图片',
        icon: 'Picture',
        props: {
          src: 'https://crmebjavasingle.oss-cn-beijing.aliyuncs.com/crmebimage/public/maintain/2024/12/17/9e86418193ea4fefbbfa4bca7b10755azywv3p0es1.jpeg',
          width: '100%',
          height: 'auto',
          borderRadius: 0
        }
      },
      {
        type: 'button',
        name: '按钮',
        icon: 'Pointer',
        props: {
          text: '点击按钮',
          type: 'primary',
          size: 'default',
          round: false,
          link: ''
        }
      },
      {
        type: 'divider',
        name: '分割线',
        icon: 'Minus',
        props: {
          borderStyle: 'solid',
          color: '#dcdfe6',
          margin: 15
        }
      }
    ]
  },
  marketing: {
    name: '营销组件',
    icon: 'ShoppingCart',
    components: [
      {
        type: 'banner',
        name: '轮播图',
        icon: 'PictureFilled',
        props: {
          images: [
            'https://crmebjavasingle.oss-cn-beijing.aliyuncs.com/crmebimage/public/product/2025/09/30/2e57ec16a2f64fe98979afbb9fd3fc1fk4e1v691tc.png',
            'https://crmebjavasingle.oss-cn-beijing.aliyuncs.com/crmebimage/public/maintain/2024/12/17/0e35027f546c4d31a1e51ea8f378a5388riyvzwkxb.png',
            'https://crmebjavasingle.oss-cn-beijing.aliyuncs.com/crmebimage/public/maintain/2024/12/17/5d951c9872f14f558043fa1057866cf5kcua20h9ji.png'
          ],
          height: 200,
          autoplay: true,
          interval: 3000
        }
      },
      {
        type: 'notice',
        name: '公告栏',
        icon: 'Bell',
        props: {
          content: '这是一条公告信息，欢迎使用低代码平台！',
          color: '#e6a23c',
          bgColor: '#fdf6ec',
          scrollable: true
        }
      },
      {
        type: 'coupon',
        name: '优惠券',
        icon: 'Ticket',
        props: {
          title: '满减优惠券',
          value: 50,
          condition: '满200可用',
          bgColor: '#ff6b6b'
        }
      },
      {
        type: 'product-list',
        name: '商品列表',
        icon: 'Goods',
        props: {
          columns: 2,
          products: [
            {
              name: '精品商品A',
              price: 99,
              originalPrice: 199,
              image: 'https://img.alicdn.com/imgextra/i4/734880677/O1CN01juOIAl1Gs79sgKJrF_!!734880677.jpg'
            },
            {
              name: '精品商品B',
              price: 128,
              originalPrice: 256,
              image: 'https://img.alicdn.com/imgextra/i4/734880677/O1CN01juOIAl1Gs79sgKJrF_!!734880677.jpg'
            },
            {
              name: '精品商品C',
              price: 68,
              originalPrice: 136,
              image: 'https://img.alicdn.com/imgextra/i4/734880677/O1CN01juOIAl1Gs79sgKJrF_!!734880677.jpg'
            },
            {
              name: '精品商品D',
              price: 188,
              originalPrice: 376,
              image: 'https://img.alicdn.com/imgextra/i4/734880677/O1CN01juOIAl1Gs79sgKJrF_!!734880677.jpg'
            }
          ]
        }
      }
    ]
  },
  tools: {
    name: '工具组件',
    icon: 'Tools',
    components: [
      {
        type: 'form-input',
        name: '输入框',
        icon: 'Edit',
        props: {
          label: '标签',
          placeholder: '请输入',
          required: false
        }
      },
      {
        type: 'form-phone',
        name: '手机号',
        icon: 'Phone',
        props: {
          label: '手机号',
          placeholder: '请输入手机号',
          required: true
        }
      },
      {
        type: 'submit-btn',
        name: '提交按钮',
        icon: 'Check',
        props: {
          text: '立即提交',
          bgColor: '#409eff'
        }
      }
    ]
  }
}
