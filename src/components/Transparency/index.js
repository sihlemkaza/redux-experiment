import Copy from '../Copy';
import './Transparency.scss';

function Transparency() {
  return (
    <div className='transparency com-wrapper'>
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
        />
        <span className='percent'>100%</span>
      </div>
      <div className='rgb-code-container'>
        <span>rgb(255, 255, 255, 1)</span>
        <Copy/>
      </div>
    </div>
  )
}

export default Transparency