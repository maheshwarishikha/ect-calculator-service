const Calculator = require('../../calculator/calc');

it ("calculator function should exist", () => {
    expect( typeof(Calculator.performOperation)).toBe ("function");
});

it ("calculator function should accept two arguments", () => {
    expect( Calculator.performOperation.length).toBe (2);
});

it ("calculator function should understand 'add', 'sub', 'mult' and 'div' operation", () => {
    // expect( Calculator.performOperation('add', 'params')).not.toBe('Unsupported Operation');
    expect( Calculator.performOperation('sub', 'params')).not.toBe('Unsupported Operation');
    expect( Calculator.performOperation('mult', 'params')).not.toBe('Unsupported Operation');
    expect( Calculator.performOperation('div', 'params')).not.toBe('Unsupported Operation');
    expect( Calculator.performOperation('abc', 'params')).toBe ('Unsupported Operation');
});

it ("'add' function should return addition of input parameters", () => {
    expect( Calculator.performOperation('add', 'I, IV, X, XX')).toBe (35);
});

it ("'sub' function should return subtraction of input parameters", () => {
    expect( Calculator.performOperation('sub', 'L, III, X, VI, I, IX')).toBe (21);
});

it ("'mult' function should return multiplication of input parameters", () => {
    expect( Calculator.performOperation('mult', 'I, II, III, IV, V')).toBe (120);
});

it ("'div' function should return multiplication of input parameters", () => {
    expect( Calculator.performOperation('div', 'LX, III, II')).toBe (10);
});