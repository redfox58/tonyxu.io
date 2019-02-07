const { path } = require('@vuepress/shared-utils')
module.exports = (options, ctx) => ({
  name: 'sticky-sidebar',
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],
  globalUIComponents: [
    'StickySidebar'
  ]
})