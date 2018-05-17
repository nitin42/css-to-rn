const { StyleSheet } = require('react-native');
const transform = require('css-to-react-native').default;

function convertStyles(str) {
  if (str === null || str === undefined) return '';

  const styleObj = [];

  const parsedString = str.split(';');

  parsedString.forEach(function(style) {
    if (typeof style === 'string') {
      // Get prop name and prop value
      const ar = style.split(': ');

      if (ar[0] && ar[1]) {
        styleObj.push([ar[0].trim(), ar[1].trim()]);
      }
    }
  });

  return styleObj;
}

// cssToRN(`color: red; padding: 20px;`) => [74]
function cssToRN(styles) {
  if (typeof styles !== 'string') {
    throw new Error('Expected a valid css string.');
  }

  if (typeof styles === 'string' && styles.length > 0) {
    // Parse the css string into prop name and value pair
    const parsedCSS = convertStyles(styles);

    const rnStyles = Array.isArray(parsedCSS) ? transform(parsedCSS) : {};

    // Convert styles to React Native
    return [StyleSheet.create({ style: rnStyles }).style];
  }
}

module.exports = cssToRN;
