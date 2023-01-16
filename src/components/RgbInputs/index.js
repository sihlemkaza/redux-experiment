import Copy from '../Copy';
import './RgbInputs.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setRGB } from '../../redux/features/ColorValues'
import { useState } from 'react';
import { getInvertRGBA } from '../../util';

function RgbInputs() {
  const rgbaValues = useSelector((state) => state.rgbaValues.value);
  const dispatch = useDispatch();
  const [localRGB, setLocalRGB] = useState({
    red: rgbaValues.red,
    green: rgbaValues.green,
    blue: rgbaValues.blue
  });

  const rgbArray = [
    { name: 'red', title: 'R'},
    { name: 'green', title: 'G'},
    { name: 'blue', title: 'B'},
  ]

  function handleChange(event, key) {
    const value = event.target.value.trim();
    const numVal = Number(value);

    if(value && numVal >= 0 && numVal <=255) {
      dispatch(setRGB({ key, value }));
    };

    let updatedRGB = { ...localRGB };
    updatedRGB[key] = value;
    setLocalRGB(updatedRGB);
  }

  function getResultColor () {
    return `rgb(${rgbaValues.red}, ${rgbaValues.green}, ${rgbaValues.blue})`;
  }

  function renderInputs() {
    return rgbArray.map((rgbItem) => (
      <div className='input-container' key={rgbItem.name}>
        <input
          type='number'
          id={`rgb-${rgbItem.name}`}
          min='0'
          max='255'
          value={localRGB[rgbItem.name]}
          onChange={(event) => handleChange(event, rgbItem.name)}
        />
        <label htmlFor={`rgb-${rgbItem.name}`} className='rgb-title'>
          {rgbItem.title}
        </label>
      </div>
    ));
  }
  return (
    <div 
      className='rgb-inputs com-wrapper'
      style={{ border: `1px solid ${getInvertRGBA(rgbaValues)}` }}
    >
      <span className='comp-title'>RGB</span>
      <div className='rgbs-container'>
        {renderInputs()}
      </div>
      <div className='rgb-code-container'>
        <span>{getResultColor()}</span>
        <Copy copyText={getResultColor()}/>
      </div>
    </div>
  )
}

export default RgbInputs