import baseConfig from '@pkg/eslint-config'

export default [
  ...baseConfig, // 先展開你的共用 config

  {
    rules: {
      // 使用 unplugin-vue-router 規則產生路由
      'vue/multi-word-component-names': 'off',
    },
  },
]
