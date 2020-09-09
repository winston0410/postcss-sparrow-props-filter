// import * as S from '../node_modules/sanctuary/dist/bundle.js'

import {
  filterByProp,
  getProp
} from './utilities/helper.js'

import * as R from 'ramda'

export default (options) => (decl) => R.when(
  R.pipe(
    getProp,
    filterByProp(options)
  ),
  R.juxt(options.callbacks)
)(decl)
