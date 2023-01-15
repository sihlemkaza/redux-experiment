import Copy from '../Copy';
import './RgbInputs.scss';

function RgbInputs() {
  const rgbArray = [
    { name: 'red', title: 'R'},
    { name: 'green', title: 'G'},
    { name: 'blue', title: 'B'},
  ]

  function handleChange(event, rgbName) {

  }

  function renderInputs() {
    return rgbArray.map((rgbItem) => (
      <div className='input-container' key={rgbItem.name}>
        <input
          type='number'
          id={`rgb-${rgbItem.name}`}
          min='0'
          max='255'
        />
        <label htmlFor={`rgb-${rgbItem.name}`} className='rgb-title'>
          {rgbItem.title}
        </label>
      </div>
    ));
  }
  return (
    <div className='rgb-inputs'>
      <span className='comp-title'>RGB</span>
      <div className='rgbs-container'>
        {renderInputs()}
      </div>
      <div className='rgb-code-container'>
        <span>rgb(255, 255, 255)</span>
        <Copy/>
      </div>
    </div>
  )
}

export default RgbInputs