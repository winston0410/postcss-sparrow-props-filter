import {
  hasWildCard
} from './partial-functions/wildcard.js'

import {
  getProp,
  getProps
} from './partial-functions/prop.js'

// import * as S from 'sanctuary'

import * as R from 'ramda'

const shouldIncludeOrExclude = R.ifElse(
  R.propEq('inclusion', true)
)

const ifPropHasWildCard = R.ifElse(
  R.pipe(
    getProps,
    hasWildCard
  )
)

const convertToPredicateFn = R.pipe(
  R.map(R.equals),
  R.anyPass
)

const filterByProp = (options) => (decl) =>
  shouldIncludeOrExclude(
    ifPropHasWildCard(
      R.T,
      R.pipe(
        getProps,
        convertToPredicateFn,
        R.applyTo(decl)
      )
    ),
    ifPropHasWildCard(
      R.F,
      R.pipe(
        getProps,
        convertToPredicateFn,
        R.complement(R.applyTo(decl))
      )
    )
  )(options)

export {
  getProp,
  filterByProp
}
