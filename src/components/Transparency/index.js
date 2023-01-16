import Copy from '../Copy';
import './Transparency.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setOpacity } from '../../redux/features/ColorValues'
import { useState } from 'react';
import { getInvertRGBA } from '../../util';

function Transparency() {
  const rgbaValues = useSelector((state) => state.rgbaValues.value);
  const dispatch = useDispatch();
  const [localOpacity, setLocalOpacity] = useState(rgbaValues.opacity);

  function handleChange(event) {
    const value = event.target.value.trim();
    const numVal = Number(value);

    if(value && numVal >= 0 && numVal <=100) {
      dispatch(setOpacity(numVal));
    };
    setLocalOpacity(value);
  }

  const rgbaCode = () => {
    return `rgb(${rgbaValues.red}, ${rgbaValues.green}, ${rgbaValues.blue}, ${rgbaValues.decimalOpacity})`
  }

  return (
    <div 
      className='transparency com-wrapper'
      style={{ border: `1px solid ${getInvertRGBA(rgbaValues)}` }}
    >
      <div className='comp-title-container'>
        <span className='comp-title'>Transparency (Opacity)</span>
        <div className='title-underline'></div>
      </div>
      <div className='opacity-input-container'>
        <input
          type='number'
          className='opacity-input'
          id='opacity-input'
          min='0'
          max='100'
          value={localOpacity}
          onChange={handleChange}
        />
        <span className='percent'>min=0, max = 100</span>
      </div>
      <div className='rgb-code-container'>
      <span>{rgbaCode()}</span>
        <Copy copyText={rgbaCode()}/>
      </div>
    </div>
  )
}

export default Transparency