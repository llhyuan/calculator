import { useReducer, useState } from 'react';
import Button from './components/Button';
import { buttons } from './dada/buttons.js';
import { initialState } from './dada/initialState.js';
import reducerImmediate from './reducer/reducerImmediate.js';

/* const initialState = {
  'equation': [],
  'display': '0',
  'operand': [],
  'operator': null,
  'isFloat': false,
  'newOperand': true,
  'lastInput': null,
}; */

function App() {
  const [state, dispatch] = useReducer(reducerImmediate, initialState);
  //const [calculatorMode, setCalculatorMode] = useState(false);
  //const [modeDisplay, setModeDisplay] = useState(false);

  const buttonItems = buttons.map((button) => (
    <Button
      key={button[3]}
      fn={button[1]}
      id={button[3]}
      content={button[2]}
      dispatch={dispatch}
    >
      {button[0]}
    </Button>
  ));

  return (
    <div className='min-h-[100vh] flex justify-center items-center bg-gray-700'>
      <div className='text-gray-50 text-[3rem] bg-gray-900 w-[420px] p-6 rounded-3xl'>
        {/* <div
          className='relative flex'
          onClick={() => {
            setCalculatorMode(!calculatorMode);
            setModeDisplay(true);
            setTimeout(() => {
              setModeDisplay(false);
            }, 1000);
          }}
        >
          <div>
            <input
              type='checkbox'
              id='toggle'
              className='sr-only'
              checked={calculatorMode}
            />
            <div className='block bg-gray-600 w-14 h-8 rounded-full'></div>
            <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'></div>
          </div>
          <label
            htmlFor='toggle'
            className={
              'relative bottom-[0.3rem] text-[1.5rem] mx-4 ' +
              (modeDisplay ? '' : 'invisible')
            }
          >
            {calculatorMode ? 'Formula Mode' : 'Immediate Execution'}
          </label>
        </div>
  */}       <div id='equation' className='text-[1.5rem] text-right overflow-scroll'>
          {state['equation']}
        </div>
        <div
          id='display'
          className='h-32 text-[4.2rem] text-right overflow-scroll'
        >
          {state['display']}
        </div>
        <div className='buttons flex flex-wrap gap-[1.2rem]'>{buttonItems}</div>
      </div>
    </div>
  );
}

export default App;
