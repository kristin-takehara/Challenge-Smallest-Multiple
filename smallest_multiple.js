//jshint esversion: 6
/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */

//***Krissy's notes:
//the smallest positive number that is evenly divided by a given set of numbers is called the LEAST COMMON MULTIPLE (LCM).
//-----> We find LCM by using Euclid's algorithm

// module.exports = function( ceiling ) {
//   // do work here
//   let smallestMult = 2520;
//   let dividesEven = false;
//   let divisible = true;

//   while( !dividesEven ) {
//     smallestMult += 2520;
//     divisible = true;
//     for (var i = 11; i < ceiling +1; i++) {
//       if (smallestMult % i !== 0) {
//         divisible = false;
//       }else{
//       dividesEven = true;
//     }
//   }
//   return smallestMult;
//   }
// }
// <<<<<...still working the logic/code out...>>>

//////////////////TEACHER ANSWER///////////////////

function smallestMultiple(num) {
  if (num === 1) { return 1; }

  // generate factors from 1 to num
  let factors = [];
  for (let i = 2; i <= num; i++) {
    factors.push(i);
  }

  // test all numbers between 1 -> Infinity
  // check if all the factors % === 0
  let result;
  while (!result) {
    let allFactorsPass = true;

    // check all factors
    for(let i = 0; i < factors.length; i++) {
      if (num % factors[i] !== 0) {
        allFactorsPass = false;
        break;
      }
    }

    // if all factors pass set result to num
    if (allFactorsPass) {
      result = num;
    }
    else {
      num++;
    }
  }

  return result;
}

console.log(smallestMultiple(20));

module.exports = smallestMultiple;