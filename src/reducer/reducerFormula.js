import { initialState } from '../dada/initialState.js';

export default function reducer(state, action) {
 // to be done; 
}

function evaluate(state, action) {
  let opd1, opd2;

  if (state.operands.length === 0) {
    if (state.isFloat) {
      opd1 = parseFloat(state.display);
    } else {
      opd1 = parseInt(state.display);
    }

    return {
      ...state,
      display: String(opd1),
      operands: [opd1],
      operator: action.key,
      newOperand: true,
      lastInput: action.type,
    };
  } else {
    if (state.isFloat) {
      opd2 = parseFloat(state.display);
    } else {
      opd2 = parseInt(state.display);
    }

    opd1 = state.operands[0];

    switch (state.operator) {
      case 'add':
        opd1 += opd2;
        break;
      case 'subtract':
        opd1 -= opd2;
        break;
      case 'multiply':
        opd1 *= opd2;
        break;
      case 'divide':
        opd1 /= opd2;
    }

    return {
      ...state,
      display: String(opd1),
      operands: [opd1],
      operator: action.key,
      newOperand: true,
      isFloat: isFloat(opd1),
      lastInput: action.type,
    };
  }
}

function isFloat(number) {
  let numStr = String(number);
  if (numStr.includes('.')) {
    return true;
  } else {
    return false;
  }
}

function monoOperation(state, action, currentDisplay) {
  let result;
  if (state.isFloat) {
    result = parseFloat(currentDisplay);
  } else {
    result = parseInt(currentDisplay);
  }

  if (action.key === 'negate') {
    result = result * -1;
    return {
      ...state,
      display: String(result),
      operands: [result],
      lastInput: action.type,
    };
  } else {
    result = result / 100;
    return {
      ...state,
      display: String(result),
      operands: [result],
      isFloat: isFloat(result),
      lastInput: action.type,
    };
  }
}

function inputNumber(state, action, currentDisplay) {
  if (state.newOperand || state.operator === 'equals') {
    currentDisplay = '';
  }

  if (action.key === '.') {
    if (state.isFloat) {
      return state;
    } else if (state.newOperand) {
      return {
        ...state,
        display: '0.',
        isFloat: true,
        newOperand: false,
        lastInput: action.type,
      };
    }

    return {
      ...state,
      display: currentDisplay + action.key,
      isFloat: true,
      lastInput: action.type,
    };
  } else {
    if (state.operator === 'equals') {
      return {
        ...state,
        display: currentDisplay + action.key,
        operands: [],
        newOperand: false,
        isFloat: false,
        operator: null,
        lastInput: action.type,
      };
    }

    return {
      ...state,
      display: currentDisplay + action.key,
      newOperand: state.newOperand && action.key === '0' ? true : false,
      lastInput: action.type,
    };
  }
}
