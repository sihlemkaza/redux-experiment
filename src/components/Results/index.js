import './Results.scss';

function Results() {
  const boxes = [
    { name: 'red', title: 'R', right_symbol: '+' },
    { name: 'gren', title: 'G', right_symbol: '+' },
    { name: 'blue', title: 'B', right_symbol: '=' },
    { name: 'final', title: null, right_symbol: null }
  ];

  function renderBoxes() {
    return boxes.map((boxItem) => (
      <div className='box-symbol-container' key={boxItem.name}>
        <div className='box'>{boxItem.title ? boxItem.title: ''}</div>
        { boxItem.right_symbol && 
        <span className='symbol'>{boxItem.right_symbol}</span> }
      </div>
    ));
  }
  return (
    <div className='results com-wrapper'>
      <span className='results-title'>Results when opacity is 100%</span>
      <div className='box-results'>
        {renderBoxes()}
      </div>
    </div>
  )
}

export default Results