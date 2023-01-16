import './App.scss';
import ExperimentTitle from './components/ExperimentTitle';
import Results from './components/Results';
import RgbInputs from './components/RgbInputs';
import Transparency from './components/Transparency';

function App() {
  return (
    <div className="App">
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
