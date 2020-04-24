const path = require('path')

module.exports = ctx => ({
  plugins: {
    'postcss-import': {
      path: [path.join(ctx.cwd, 'app')],
      skipDuplicates: true,
    },
    'postcss-preset-env': {
      stage: 1,
      browserlist: ['last 2 major versions', 'not dead'],
    },
  },
})
