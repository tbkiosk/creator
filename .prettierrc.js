const defaultConfig = require('@morphis-labs/prettier-config')

module.exports = {
  ...defaultConfig,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ['^@/(.*)$', '^[./]'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
