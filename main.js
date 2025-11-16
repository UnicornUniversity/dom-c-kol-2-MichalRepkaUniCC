export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    if (inputNumberSystem !== 10 || outputNumberSystem !== 2) {
      throw new Error("Unsupported number system conversion. Supported: 10 -> 2.");
    }
  
    const n = Number(inputNumber);
  
    if (!Number.isFinite(n) || !Number.isInteger(n)) {
      throw new Error("Input number must be a finite integer in base 10.");
    }
  
    return decimalToBinary(n);
  }
  
  function decimalToBinary(N) {
    if (N === 0) {
      return "0";
    }
  
    let isNegative = false;
    if (N < 0) {
      isNegative = true;
      N = -N;
    }
  
    let B = "";
  
    while (N > 0) {
      const remainder = N % 2;
      const digitChar = remainder === 0 ? "0" : "1";
      B = digitChar + B;
      N = Math.floor(N / 2);
    }
  
    if (isNegative) {
      B = "-" + B;
    }
  
    return B;
  }
  
  export function permittedInputSystems() {
    return [10];
  }
  
  export function permittedOutputSystems() {
    return [2];
  }