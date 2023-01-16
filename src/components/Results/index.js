import './Results.scss';
import { useSelector } from 'react-redux';
import { getInvertRGBA } from '../../util';

function Results() {
  const rgbaValues = useSelector((state) => state.rgbaValues.value);

  const boxes = [
    { name: 'red', title: 'R', right_symbol: '+' },
    { name: 'green', title: 'G', right_symbol: '+' },
    { name: 'blue', title: 'B', right_symbol: '=' },
    { name: 'final', title: null, right_symbol: null }
  ];

  function getBoxColor(rgbKey) {
    switch(rgbKey) {
      case 'red':
        return `rgb(${rgbaValues.red}, 0, 0)`;
      case 'green':
        return `rgb(0, ${rgbaValues.green}, 0)`;
      case 'blue':
        return `rgb(0, 0, ${rgbaValues.blue})`;
      default:
        return `rgb(${rgbaValues.red}, ${rgbaValues.green}, ${rgbaValues.blue}, ${rgbaValues.decimalOpacity})`;
    }
  }

  function getInverseColor(rgbKey) {
    switch(rgbKey) {
      case 'red':
        return `rgb(${255- rgbaValues.red}, 255, 255)`;
      case 'green':
        return `rgb(255, ${255 - rgbaValues.green}, 255)`;
      case 'blue':
        return `rgb(255, 255, ${255 - rgbaValues.blue})`;
      default:
        return `rgb(${255 - rgbaValues.red}, ${255 - rgbaValues.green}, ${255 - rgbaValues.blue})`;
    }
  }

  function renderBoxes() {
    return boxes.map((boxItem) => (
      <div className='box-symbol-container' key={boxItem.name}>
        <div 
          className='box'
          style={{ 
            backgroundColor: getBoxColor(boxItem.name), 
            color: getInverseColor(boxItem.name) 
          }}
        >{boxItem.title ? boxItem.title: ''}</div>
        { boxItem.right_symbol && 
        <span className='symbol'>{boxItem.right_symbol}</span> }
      </div>
    ));
  }
  return (
    <div 
      className='results com-wrapper'
      style={{ border: `1px solid ${getInvertRGBA(rgbaValues)}` }}
    >
      <span className='results-title'>{`Results when opacity is ${rgbaValues.opacity}%`}</span>
      <div className='box-results'>
        {renderBoxes()}
      </div>
    </div>
  )
}

export default Results