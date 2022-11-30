import commentParser from 'postcss-comment'
import nestedPlugin from 'postcss-nested'

export default {
  parser: commentParser,
  plugins: [
    nestedPlugin,
  ],
  sourceMap: true,
}
