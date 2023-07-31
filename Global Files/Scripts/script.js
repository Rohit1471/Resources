
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


// ===================== Equal Height Function =========================

$(window).on('load resize', function(e){
    console.log("Function is runing..");

    let all_heights= {};

    fruits=['apple','mango','guava','pineapple'];
    let parent_container = $(".equal_height");
    let children_container = $(".equal_height").children();

    // Adding to object
    for(let i=0; i<=children_container.length-1; i++){
        let elements = children_container.eq(i).children();
        all_heights[`box${i+1}`]= {};
        for(let j=0; j<=elements.length; j++){
            // console.log(elements.eq(j).height());
            all_heights[`box${i+1}`][`element${j+1}`]= elements.eq(j).height();
        }
    }
    console.log(all_heights);

        
    // Comparison between all elements
    let heights=[];
    
    function mycompare(myarray) {
        let max_height=0;
        myarray.forEach(i => {
            // console.log(i);
            myarray.forEach(j => {
                if(max_height<=j){
                    max_height=j;
                }
                else{
                    max_height=max_height;
                }
            });
        });
        // console.log("Max-Height: "+max_height);
        heights.push(max_height);
    }


    // Taking values from object
    for (let j=0; j<=children_container.length-1; j++){
        let compare_array=[];
        for (i in all_heights){
            // console.log(Object.values(all_heights[i])[j]);
            compare_array.push(Object.values(all_heights[i])[j]);
        };
        // console.log(compare_array);
        mycompare(compare_array);
        

    }

    // Changing the heights
    console.log(heights);
    console.log(children_container.eq(0).children().eq(0).height(heights[0]));
    for(let i=0; i<=children_container.length-1; i++){
        for(let j=0; j<=children_container.length-1; j++){
            children_container.eq(j).children().eq(i).height(heights[i]);
        }
    }

    e.preventDefault();

});
  