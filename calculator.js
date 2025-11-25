// Storage: Array to hold all past calculation details (the history log).No declaration of a class; using simple functions and an array.
let calculationHistory = [];

/*Performs addition and records the successful operation to history.
 */
function add(a, b) {
  const result = a + b;
  // Record: operation name, inputs (operands), and the final result.
  calculationHistory.push({
    operation: "add", // Name of the operation
    operands: [a, b], // Inputs used
    result, // Final result
    error: null, // No error means success
  });
  return result; // Return the computed result
}

/*Performs subtraction and records the successful operation to history.
 */
function subtract(a, b) {
  const result = a - b;
  // Record: operation name, inputs (operands), and the final result.
  calculationHistory.push({
    operation: "subtract",
    operands: [a, b],
    result,
    error: null,
  });
  return result;
}

/*Performs multiplication and records the successful operation to history.
 */
function multiply(a, b) {
  const result = a * b;
  // Record: operation name, inputs (operands), and the final result.
  calculationHistory.push({
    operation: "multiply",
    operands: [a, b],
    result,
    error: null,
  });
  return result;
}

/* Performs division. Handles and logs division by zero before throwing an error.
 */
function divide(a, b) {
  // Check for the error condition: division by zero.
  if (b === 0) {
    const errorMsg = "Division by zero is not allowed.";

    // Log the failure to history before stopping the function.
    const failedRecord = {
      operation: "divide",
      operands: [a, b],
      result: "Error", // signify failure
      error: errorMsg,
    };
    calculationHistory.push(failedRecord);

    // Stop the function and pass the error to the caller by throwing.
    throw new Error(errorMsg);
  }

  // If successful: calculate and record.
  const result = a / b;
  calculationHistory.push({
    operation: "divide",
    operands: [a, b],
    result,
    error: null, // No error means success
  });
  return result;
}

/*Utility function to return the full array of calculation records.
 */
function getHistory() {
  return calculationHistory;
}

/*
  Utility function to reset the entire calculation history.
 */
function clearHistory() {
  // Resets the array to an empty state.
  calculationHistory = [];
}

// Export functions so they can be used by other parts of the program.
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  getHistory,
  clearHistory,
};
//Testing code

if (require.main === module) {
  try {
    console.log("Addition:", add(5, 3)); // 8
    console.log("Subtraction:", subtract(10, 4)); // 6
    console.log("Multiplication:", multiply(2, 3)); // 6
    console.log("Division:", divide(8, 2)); // 4
    console.log("Division by zero:", divide(5, 0)); // Should throw an error
  } catch (error) {
    console.error(error.message);
  }

  console.log("Calculation History:", getHistory());
}
// If you want to clear the history, you can call clearHistory() function.
// clearHistory();
