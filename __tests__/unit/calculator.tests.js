const Calculator = require('../../calculator/calc');

it ("calculator function should exist", () => {
    expect( typeof(Calculator.performOperation)).toBe ("function");
});

it ("calculator function should accept two arguments", () => {
    expect( Calculator.performOperation.length).toBe (2);
});

it ("calculator function should understand 'add', 'sub', 'mult' and 'div' operation", () => {
    // expect( Calculator.performOperation('add', 'I')).not.toBe('Unsupported Operation');
    // expect( Calculator.performOperation('sub', 'I')).not.toBe('Unsupported Operation');
    // expect( Calculator.performOperation('mult', 'II')).not.toBe('Unsupported Operation');
    // expect( Calculator.performOperation('div', 'III')).not.toBe('Unsupported Operation');
    // expect( Calculator.performOperation('abc', 'I, II')).toBe ('Unsupported Operation');
});

it ("'add' function should return addition of input parameters", async () => {
    expect( await Calculator.performOperation('add', 'I,IV,X,XX')).toBe (35);
});

it ("'sub' function should return subtraction of input parameters", async () => {
    expect( await Calculator.performOperation('sub', 'L,III,X,VI,I,IX')).toBe (21);
});

it ("'mult' function should return multiplication of input parameters", async () => {
    expect( await Calculator.performOperation('mult', 'I,II,III,IV,V')).toBe (120);
});

it ("'div' function should return multiplication of input parameters", async () => {
    expect( await Calculator.performOperation('div', 'LX,III,II')).toBe (10);
});

it ("tests to check if input includes only 1 operand", async () => {
    expect( await Calculator.performOperation('add', 'I')).toBe ('I');
});