import './App.scss';
import ExperimentTitle from './components/ExperimentTitle';
import Results from './components/Results';
import RgbInputs from './components/RgbInputs';
import Transparency from './components/Transparency';
import { useSelector } from 'react-redux';
import { getResultRGBA } from './util';

function App() {
  const rgbaValues = useSelector((state) => state.rgbaValues.value);
  
  return (
    <div 
      className="App"
      style={{ backgroundColor: getResultRGBA(rgbaValues) }}
    >
      <div className='all-sections'>
        <ExperimentTitle/>
        <RgbInputs/>
        <Transparency/>
        <Results/>
      </div> 
    </div>
  );
}

export default App;
