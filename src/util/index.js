export function getResultRGBA (rgbaValues) {
  return `rgb(${rgbaValues.red}, ${rgbaValues.green}, ${rgbaValues.blue}, ${rgbaValues.decimalOpacity})`;
}

export function getInvertRGBA (rgbaValues) {
  return `rgb(${255 - rgbaValues.red}, ${255 - rgbaValues.green}, ${255 - rgbaValues.blue})`;
}