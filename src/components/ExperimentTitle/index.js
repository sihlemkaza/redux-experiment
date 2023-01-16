import { getInvertRGBA } from '../../util';
import './ExperimentTitle.scss';
import { useSelector } from 'react-redux';

function ExperimentTitle() {
  const rgbaValues = useSelector((state) => state.rgbaValues.value);

  return (
    <div 
      className='experiment-title com-wrapper'
      style={{ border: `1px solid ${getInvertRGBA(rgbaValues)}` }}
    >
      <div className='comp-title-container'>
        <span className='comp-title'>Redux Experiment</span>
        <div className='title-underline'></div>
      </div>
    </div>
  )
}

export default ExperimentTitle