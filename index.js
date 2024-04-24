function hasTargetSum(array, target) {
  // Write your algorithm here
  const iteratedNumbers = {};
  for (let i = 0; i < array.length; i++) {
    const complementaryNumber = target - array[i];

    if (iteratedNumbers[complementaryNumber]) return true;

    iteratedNumbers[array[i]] = true;
  }

  // Alternative Algorithm

  // for (let i = 0; i < array.length; i++) {
  //   const compNumber = target - array[i];
  //   for (let j = i + 1; j < array.length; j++) {
  //     if (array[j] === compNumber) return true;
  //   }
  // }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  Runtime complexity is O(n^2) due to a nested loop
  Space complexity is O(n) as no additional data structures are created

*/

/* 
  Add your pseudocode here

  Iterate through the array
  Look for two numbers in the array which add up to the target (array[i] + array[i] = target)

*/

/*
  Add written explanation of your solution here

  - The goal is to find two numbers in the array which sum up to the value of the target
  - I intend to iterate through the numbers in the array and store the iterated numbers in an object. So I first created an empty object where the iterated numbers will be stored
  - Then I performed the iteration
  - I created a variable for the complementary number to the number being iterated in the array
  - I then checked if the variable has been passed as a key to the object. If it has, the function returns true, otherwise false. 


*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
