
// Promise template using resolve & reject and then & catch

// function simulateAsyncOperation() {
//     return new Promise((resolve, reject) => {
//       // Simulate an asynchronous operation (e.g., API call, setTimeout, etc.)
//       setTimeout(() => {
//         const randomNumber = Math.random();
//         if (randomNumber < 0.5) {
//           resolve(randomNumber); // Fulfill the Promise with the random number
//         } else {
//           reject(new Error('Random number is greater than or equal to 0.5')); // Reject the Promise with an error
//         }
//       }, 1000); // Simulate a 1-second delay
//     });
//   }
  
//   // Usage:
//   simulateAsyncOperation()
//     .then((result) => {
//       console.log('Fulfilled:', result);
//     })
//     .catch((error) => {
//       console.error('Rejected:', error.message);
//     });
  