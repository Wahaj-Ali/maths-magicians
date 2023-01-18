import calculate from '../logic/calculate';

const calculateObj = {
  total: 0,
  next: null,
  operation: null,
};

describe('testing:', () => {
  test('AC button to clear the UI to zero', () => {
    expect(calculate(calculateObj, 'AC')).toEqual(calculateObj);
  });
  test('= button along with an operation to perform the operation', () => {
    const calculateObjct = { total: 3, next: 9, operation: 'x' };
    const result = { operation: null, next: null, total: '27' };
    expect(calculate(calculateObjct, '=')).toEqual(result);
  });
  test('the . button', () => {
    const calculateObjct = { total: 0, next: '.9', operation: '+' };
    expect(calculate(calculateObjct, '.')).toEqual({ ...calculateObjct, next: '.9' });
  });
});

describe('Test an operation changes if there already is an operation', () => {
  test('if obj.next is missing', () => {
    const obj = { ...calculateObj, total: '50', operation: '-' };
    expect(calculate(obj, '+')).toEqual({ ...obj, operation: '+' });
  });
});
