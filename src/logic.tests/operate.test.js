import operate from '../logic/operate';

// Test operation function
describe('Test the operate function', () => {
  // Test addition
  test('Sum 4 + 2 to equal 6:', () => {
    // Arrange
    const numberOne = 4;
    const numberTwo = 2;
    const operation = '+';
    const output = '6';

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  // Test subtraction
  test('Sub 10 - 6 to equal 4:', () => {
    // Arrange
    const numberOne = 10;
    const numberTwo = 6;
    const operation = '-';
    const output = '4';

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  // Test Multiplication
  test('Mul 9 x 5 to equal 45:', () => {
    // Arrange
    const numberOne = 9;
    const numberTwo = 5;
    const operation = 'x';
    const output = '45';

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  // Test Division
  test('Div 60 ÷ 10 to equal 6:', () => {
    // Arrange
    const numberOne = 60;
    const numberTwo = 10;
    const operation = '÷';
    const output = '6';

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  test('Div 60 ÷ 0 to be error message:', () => {
    // Arrange
    const numberOne = 60;
    const numberTwo = 0;
    const operation = '÷';
    const output = "Can't divide by 0.";

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  // Test Modulo
  test('Mod 5 % 3 to equal 2:', () => {
    // Arrange
    const numberOne = 5;
    const numberTwo = 3;
    const operation = '%';
    const output = '2';

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  // Test Modulo
  test('Mod 8 % 0 to be error message:', () => {
    // Arrange
    const numberOne = 8;
    const numberTwo = 0;
    const operation = '%';
    const output = "Can't find modulo as can't divide by 0.";

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });
});
