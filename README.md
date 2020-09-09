# PostCSS Sparrow Props Filter

[![Known Vulnerabilities](https://snyk.io/test/github/winston0410/postcss-sparrow-props-filter/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/postcss-sparrow-props-filter?targetFile=package.json) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/3c39abd758944d4086bd3820ee884fce)](https://www.codacy.com/manual/winston0410/postcss-sparrow-props-filter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=winston0410/postcss-sparrow-props-filter&amp;utm_campaign=Badge_Grade) [![Maintainability](https://api.codeclimate.com/v1/badges/7e62b729c7df2e8d77d8/maintainability)](https://codeclimate.com/github/winston0410/postcss-sparrow-props-filter/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/7e62b729c7df2e8d77d8/test_coverage)](https://codeclimate.com/github/winston0410/postcss-sparrow-props-filter/test_coverage)

A PostCSS Sparrow plugin that helps you **search CSS declarations** by **properties**.

This plugin is designed to be used with [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow), which helps you filter CSS declarations by **selectors**.  By using these two plugins together, you can **easily get the declarations you need**.

## Made in Hong Kong :free: :free:

This plugin is made with love by a Hong Konger.

## Installation

This plugin require you to use [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow) for matching with selectors you want.

Download both `postcss-sparrow` and this plugin through NPM.

```shell

npm i postcss-sparrow postcss-sparrow-props-filter

```

Then import this plugin as the callback for [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow).

```javascript
//postcss.config.js
module.exports = {
  plugins: [
    //Other plugins...

    require('postcss-sparrow')({
      transformations: [
        {
          selectors: ['*'],
          inclusion: true,
          callbacks: [
            require('postcss-sparrow-props-filter')(
              {
                props: ['font-size'],
                inclusion: true,
                callbacks: [
                  //Do transformation here with your own callback functions
                  (decl) => {
                    decl.remove()
                  }
                ]
              }
            )
          ]
        }
      ]
    })
  ]
}
```

## API Reference

### `options.props` : Array

An array of properties that you want to match with. Use `*` as wildcard and select all properties.

### `options.inclusion` : Boolean

True for including and False for excluding selectors listed in `options.props`.

### `options.callbacks` : Array

An array of callbacks that you use to transform the selected declarations.  The selected declaration will be passed in as an argument.
