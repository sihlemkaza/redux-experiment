import Results from '../../components/Results';
import RgbInputs from '../../components/RgbInputs';
import Transparency from '../../components/Transparency';
import './RgbExperimentPage.scss';

function RgbExperimentPage() {
  return (
    <div className='rgb-experiment-page'>
      <div className='page-title-container'>
        <span className='page-title'>Redux Experiment</span>
        <div className='title-underline'></div>
      </div>
      <RgbInputs/>
      <div className='separator'></div>
      <Transparency/>
      <div className='separator'></div>
      <Results/>
    </div>
  )
}

export default RgbExperimentPage