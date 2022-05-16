const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test("checks that the function returnTwo returns two ", () => {
 expect(returnTwo(2)).toBe(2)
})

test("checks to see if greeting returns a greeting for the user", () => {
    expect(greeting("dane")).toBe("Hello, dane")
})

test("checks to see if add returns the sum of num1 and num2", () => {
    expect(add(3,4)).toBe(7)
})

describe("multiply, divide, subtract tests", () => {
    test("checks to see if the function multiply returns the value of num1 and num2 multiplied", () => {
        expect(multiply(1,2)).toBe(2)
    })
    test("checks to see if the function divide returns the value of num1 and num2 divided", () => {
        expect(divide(4,2)).toBe(2)
    })
    test("checks to see if subtract returns the value of num1 and num2 subtracted", () => {

    })
})
