const { StyleSheet } = require('react-native')
const transform = require('css-to-react-native').default

/**
 * Convert css style string to an array object
 * @param { string } str CSS string
 */
function convertStyles(str) {
  const arrObj = []

  // Parse the style string into prop name and value pair
  const parsedString = str.split(';')

  // Store mappings of prop name and value into an array
  parsedString.forEach(function (style) {
    // Get prop name and prop value
    const ar = style.split(': ')

    if (ar[0] && ar[1]) {
      arrObj.push([ar[0].trim(), ar[1].trim()])
    }
  })

  return arrObj
}

/**
 * Convert CSS string to React Native
 */
// cssToRN(`color: red; padding: 20px;`) => [{ color: 'red', paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }]
function cssToRN(styles) {
  if (typeof styles !== 'string') {
    throw new Error('Expected a valid css string.')
  }

  if (typeof styles === 'string' && styles.length > 0) {
    // Parse the css string into prop name and value pair
    const parsedCSS = convertStyles(styles)

    const rnStyles = transform(parsedCSS) || {}

    // Convert styles to React Native
    return [StyleSheet.create({ style: rnStyles }).style]
  } else if (typeof styles === 'string' && styles.length === 0) return ''
}

module.exports = cssToRN
