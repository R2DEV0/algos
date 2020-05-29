/////////////////////////////////////////////////////////////////////////////////////////////////////

// Find the longest SubString with no repeats

// str1 = "bca"

// str2 = "bbb"

// str3 = "cabc"

// str4 = "aabbc"


// function maxSubStringCount(str){
//   let count = 0;
//   var mySet = new Set();
//   for(var i =0; i<str.length; i++)
//   {
//       if (mySet.has(str[i])) {
//           if(count < mySet.size) {
//               count = mySet.size;
//               mySet.clear();
//           }
//           mySet.add(str[i]);
//       }
//       else{
//           mySet.add(str[i]);
//       }
//   }
//   console.log(mySet);
//   return count >mySet.size? count: mySet.size;
// }
// console.log(maxSubStringCount(str4));




// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*
  https://leetcode.com/problems/compare-version-numbers/
  Given two strings, version1, and version2, both representing version numbers
  If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

  Helpful methods:
    - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
    - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails

  Bonus, solve without .split
*/

// const test1V1 = "0.1";
// const test1V2 = "1.1";
// // Output: -1

// const test2V1 = "1.0.1";
// const test2V2 = "1";
// // Output: 1

// const test3V1 = "7.5.2.4";
// const test3V2 = "7.5.3";
// // Output: -1

// const test4V1 = "7.5.2.4";
// const test4V2 = "7.5.2";
// // Output: 1

// const test5V1 = "1.01";
// const test5V2 = "1.001";
// // "1.1"
// // Output: 0
// // Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

// const test6V1 = "1.0.1";
// const test6V2 = "1";
// Output: 1








// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//*
  //Given an honorific (name title) and array of full name strings,
  //in "LastName, FirstName" format

 // Return a new array of strings in this format: "Honorific FirstName LastName"

 // Bonus: avoid built in methods besides simple ones like .push
//*/

// const honorific1 = "Mr.";
// const names1 = [];
// // Output: []

// // Inputs
// const honorific2 = "Sir";
// const names2 = ["John, Elton", "Mckellen, Ian"];
// // Output: ["Sir Elton John", "Sir Ian Mckellen"]

// // Inputs
// const honorific3 = "Dr.";
// const names3 = ["Wright, Jane"];
// // Output: ["Dr. Jane Wright"]



// function name(honor, nameArr){
//   newArr = [];
//   for(let i=0; i<nameArr.length; i++){
//       var fullName = honor+" "+nameArr[i]
//       newArr.push(fullName)
//   }
//   return(newArr)
// }
// console.log(name(honorific2, names2))
//  prints [ 'Sir John, Elton', 'Sir Mckellen, Ian' ]  //


/////////////////////////////////////////////////////////////////////////////////////////////////////


//   Given two strings S and T containing only lowercase letters and "#" characters,
//   return if they are equal when both are typed into empty text editors.

//   # character means a backspace character.

//   i.e., after processing the backspaces, are the two strings equal?

//   Bonus: solve in O(n) time

//   Examples:
//   Input: S = "ab#c", T = "ad#c"
//   Output: true
//   Explanation: Both S and T become "ac"

//   Input: S = "ab##", T = "c#d#"
//   Output: true
//   Explanation: Both S and T become ""

//   Input: S = "a##c", T = "#a#c"
//   Output: true
//   Explanation: Both S and T become "c"
// */

// let S = "ab#c" 
// let T = "ad#c"


// const equalStrings = (S,T) => {
//   let idx = 0;
//   let idxLead = 0;
//   let hashcount = 0;
//   let outputS = [];
//   while(idx < S.length){
//       if (S[idxLead] !== '#' && idxLead < S.length){
//           idxLead ++
//       }
//       else if(S[idxLead+hashcount] === '#'){
//           hashcount++
//       }
//       else if(idx<idxLead-hashcount){
//           outputS.push(S[idx]);
//           idx++;
//       }
//       else{
//           idx = idxLead+hashcount;
//           idxLead = idx;
//           hashcount = 0;
//       }
//   }
//   return outputS;
// }
// console.log(equalStrings(S, T))


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Given an array of ailements (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

// const medications = [
//   {
//     name: "Sulforaphane",
//     treatableSymptoms: [
//       "dementia",
//       "alzheimer's",
//       "cancer",
//       "inflammation",
//       "neuropathy",
//     ],
//   },
//   {
//     name: "Longvida Curcumin",
//     treatableSymptoms: [
//       "pain",
//       "inflammation",
//       "depression",
//       "arthritis",
//       "anxiety",
//     ],
//   },
//   {
//     name: "Hericium erinaceus",
//     treatableSymptoms: ["anxiety",
//     "cognitive decline",
//     "depression"],
//   },
//   {
//     name: "Nicotinamide mononucleotide",
//     treatableSymptoms: [
//       "ageing",
//       "low NAD",
//       "obesity",
//       "mitochondrial myopathy",
//       "diabetes",
//     ],
//   },
//   {
//     name: "PainAssassinator",
//     treatableSymptoms: [
//       "pain",
//       "inflammation",
//       "cramps",
//       "headache",
//       "toothache",
//       "back pain",
//       "fever",
//     ],
//   },
// ];
// const ailments1 = ["pain"];
// const ailments2 = ["pain", "inflammation", "depression"];
// const ailments3 = ["existential dread"];


// function webMD(ailments, medications){
//   let bestmeds=[];
//   let maxTreated=0;
//   for (const medication of medications){
//       count = 0;
//       for (const ailment of ailments){
//           if (medication.treatableSymptoms.includes(ailment)){
//               count+=1
//               if (count>maxTreated){
//                   bestmeds=[medication.name]
//                   maxTreated=count

//               }
//               else if (count===maxTreated){
//                   bestmeds.push(medication.name)
//               }
//           }
//       }
//   }
//   if (bestmeds.length ==0){
//     bestmeds = ['There is nothing to help you, you will most likely die']
//   }
// return bestmeds;
// }
// console.log(webMD(ailments3, medications))



// const recipe = {
//   "organic fat": 99,
//   "live squid": 1,
//   "birds nest": 1,
//   "fried flesh": 1,
//   "spicy": 5,
//   "gourmet memes": 4200,
// };

// const available = {
//   "organic fat": 990,
//   "live squid": 1,
//   "birds nest": 10,
//   "fried flesh": 10,
//   "spicy": 50,
//   "gourmet memes": 42000,
//   "sugar": 9001,
//   "spice": 5,
//   "everything nice": 1,
// };


// function getMin(recipe, available){
//   for(keys in recipe){
//       if(available.hasOwnProperty(keys)){
//           let min = Math.floor(available[keys]/recipe[keys])
//           return min;
//       }
//       else{
//           return 0;
//       }
//   }
// }

// function food(recipe, available){
//   let minimum = getMin(recipe, available)

//   for(keys in recipe){
//       if(!available.hasOwnProperty(keys)){
//           return 0;
//       }
//       else{
//           let curr = Math.floor(available[keys]/recipe[keys])
//           if(curr < minimum){
//               minimum = curr;
//           }
//       }
//   }
//   return minimum;
// }
// console.log(food(recipe, available))


// // ###### A little fancier ######
// const getMin = (recipe, available) =>{
//   for(keys in recipe){
//       if(available.hasOwnProperty(keys)){
//           let limiting = keys;
//           let minimum = Math.floor(available[keys]/recipe[keys]);
//           return minimum;
//       }
//       else{
//           return 0;
//       }
//   }
// }

// const food = (recipe, available) =>{
//   let minimum = getMin(recipe, available);
//   let limiting = ''
//   for(keys in recipe){
//       if(!available.hasOwnProperty(keys)){
//           return `You can't make ANY dishes!`;
//       }
//       else{
//           let curr = Math.floor(available[keys]/recipe[keys])
//           if(curr < minimum){
//               limiting = keys;
//               minimum=curr;
//           }
//       }
//   }
//   return `You can make ${minimum} dishes due to limiting ${limiting}`
// }

// console.log(food(recipe, available))



// const friend1 = {
//   firstName: "Friend",
//   lastName: "One",
//   isSocialDistancing: false,
//   isInfected: true,
// };

// const friend2 = {
//   firstName: "Friend",
//   lastName: "Two",
//   isSocialDistancing: false,
//   isInfected: true,
// };

// const friend3 = {
//   firstName: "Friend",
//   lastName: "Three",
//   isSocialDistancing: false,
//   isInfected: false,
// };

// // Input:
// const people = [
//   {
//     firstName: "Person",
//     lastName: "One",
//     isSocialDistancing: false,
//     friends: [friend2, friend3],
//   },
//   {
//     firstName: "Person",
//     lastName: "Two",
//     isSocialDistancing: true,
//     friends: [friend2, friend1],
//   },
//   {
//     firstName: "Person",
//     lastName: "Three",
//     isSocialDistancing: false,
//     friends: [friend2, friend1],
//   },
// ];
// // Output: ["Person One", "Person Three"]

// const highRisk = people =>{
//   output = [];
//   for(let i=0; i<people.length; i++){
//       if(people[i]['isSocialDistancing'] === false){
//           output.push(`${people[i].firstName} ${people[i].lastName}`)
//       }
//       else if(  ){
//   }
//   }
//   return output;
// }
// console.log(highRisk(people));







// const students = [
//   {
//       firstName: "FN1",
//       lastName: "LN1",
//       habits: [
//       "doesn't wash dishes",
//       "falls asleep in lecture",
//       "shows up early",
//       ],
//   },
//   {
//       firstName: "FN2",
//       lastName: "LN2",
//       habits: ["shows up late", "washes dishes", "helps peers"],
//   },
//   {
//       firstName: "FN3",
//       lastName: "LN3",
//       habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
//   },
//   {
//       firstName: "FN4",
//       lastName: "LN4",
//       habits: ["shows up early", "helps peers", "washes dishes"],
//   },
// ];


// const checkHabits = (people, habit, idx) => {
//   for(let j=0; j<people[idx]['habits'].length; j++){
//       if(people[idx]['habits'][j] == habit){
//           return `${people[idx]['firstName']} ${people[idx]['lastName']}`
//       }
//   }
// }

// const naughtyList = (people,habit) => {
//   output = [];
//   for(let i=0; i < people.length; i++){
//       let x = checkHabits(people,habit, i);
//       if(x !== undefined){
//           output.push(x)
//       }
//   }
//   return output;
// }

// console.log(naughtyList(students, "doesn't wash dishes"))


/////////////////////////////////////////   Find byID and update  ///////////////////////////////////////

// const students = [
//   {
//       id: 1,
//       name: "student1",
//       isLateToday: false,
//       lateCount: 15,
//       redBeltStatus: false
//   },
//   {
//       id: 2,
//       name: "student2",
//       isLateToday: false,
//       lateCount: 1,
//       redBeltStatus: false
//   },
//   {
//       id: 3,
//       name: "student3",
//       isLateToday: false,
//       lateCount: 0,
//       redBeltStatus: false
//   }
// ];


// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null


// function findByIdAndUpdate(id, updatedVals, collection) {
//   const keys = Object.keys(updatedVals);
//   for (const doc of collection) {
//       if (doc.id === id) {
//           for (const key of keys) {
//           // only update keys that exist on the found object
//               if (doc.hasOwnProperty(key)) {
//                   const newVal = updatedVals[key];
//                   doc[key] = newVal;
//               }
//           }
//           return doc;
//       }
//   }
//   // above return didn't run so nothing was found
//   return null;
// }

// console.log(students);
// findByIdAndUpdate(3, { redBeltStatus: true, isAnAdmin: true }, students)
// console.log(students);



// ////////////////////////////////////////////////// find dictonary to match another ////////////////////////////////////////////
// const searchFor = {
//   firstName: "Bob",
//   age: 31
// };

// const items = [
//   { firstName: "Bob", lastName: "Bobbert", age: 31 },
//   { firstName: "John", lastName: "Smith", age: 25 },
//   { firstName: "Bob", lastName: "Smith", age: 27 },
//   { firstName: "Bob", lastName: "White", age: 31 }
// ];

// // return a new list of objects containing the same key pair values
// // const output = [
// //   { firstName: "Bob", lastName: "Bobbert", age: 31 },
// //   { firstName: "Bob", lastName: "White", age: 31 }
// // ];


// function searchItems(obj, searchObj){
//   newObj = [];
//   for( key in items) {
//     if(items[key].firstName == searchFor.firstName && items[key].age == searchFor.age){
//       newObj.push(items[key])
//     }
//   }
//   return newObj;
// }
// console.log(searchItems(items, searchFor))



// ///////////////////////////////////////////////////////////////////////////////////////////

// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given a list of positive integers 0-255 arr
// You are given a value 1-255 k

// Find all the consecutive sets of integers that add up to the value k



// findConsqSums(arr, k);
// findConsqSums([2,99,5,3,6,7,0,0,23,12], 16)
//                      3
//                            j
// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// function findConsqSums(arr, k) {
//     const sums = [];

//     for (let i = 0; i < arr.length; ++i) {
//       const consecNums = [];
//       let sum = 0;
//       let j = i;

//       while (sum <= k && j < arr.length - 1) {
//         if (sum + arr[j] <= k) {
//           sum += arr[j];
//           consecNums.push(arr[j++]);

//           if (sum === k) {
//             sums.push([...consecNums]);
//           }
//         } else {
//           break;
//         }
//       }
//     }
//     return sums;
//   }



// /////////////////////////////////////////////////////////////////////////////////////////////////

//Group members: Ryan, Becky,Martin,Jancy
// Union Sorted Arrays

// Efficiently combine two already-sorted multiset arrays
// into a new sorted array containing the multiset union.

// Unions by default will take the set of dupes
// that has the highest occurences from one array.

// Input: [1,2,2,2,6, 6,6,6,7], [2,2,6,6,7]
// Output: [1,2,2,2,6,6,6,6, 7]

// function unionSortedArrs(arr1, arr2) {
//     const res = [];
//     let idx1 = 0;
//     let idx2 = 0;

//     while (idx1 < arr1.length || idx2 < arr2.length) {
//         if (idx1 === arr1.length) {
//             res.push(arr2[idx2]);
//             idx2++;
//             continue;
//         } else if (idx2 === arr2.length) {
//             res.push(arr1[idx1]);
//             idx1++;
//             continue;
//         }

//         if (arr1[idx1] === arr2[idx2]) {
//             res.push(arr1[idx1]);
//             idx1++;
//             idx2++; // since both were same, increment both
//         } else if (arr1[idx1] < arr2[idx2]) {
//             res.push(arr1[idx1]);
//             idx1++;
//         } else {
//             res.push(arr2[idx2]);
//             idx2++;
//         }
//     }
//     return res;
// }





//////////////////////////////////////////////////////////////////////////////////////////////////

// function intersectSortedArrays(arr1, arr2) {
//     let idx1 = 0;
//     let idx2 = 0;

//     const len1 = arr1.length;
//     const len2 = arr2.length;
//     const result = [];

//     while (idx1 < len1 && idx2 < len2) {
//         if (arr1[idx1] < arr2[idx2]) {
//             idx1++;
//         } else if (arr1[idx1] > arr2[idx2]) {
//             idx2++;
//         }
//         // current num from both arrays are equal
//         else {
//             if (result[result.length - 1] !== arr1[idx1]) {
//                 result.push(arr1[idx1]);
//             }
//             idx1++;
//             idx2++;
//         }
//     }
//     return result;
// }




/////////////////////////////////// Partition & Quicksort //////////////////////////////////////////////////////


// let arr = [1000,13,12,1001,82,1,2,4,3,0];

// function swap(arr, leftIndex, rightIndex){
//     var temp = arr[leftIndex];
//     arr[leftIndex] = arr[rightIndex];
//     arr[rightIndex] = temp;
// }

// function partition(arr, left, right) {
//     var pivot = arr[Math.floor((right + left) / 2)],
//         i= left,
//         j= right;
//     while (i <= j) {
//         while (arr[i] < pivot) {
//             i++;
//         }
//         while (arr[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(arr, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(arr, left, right) {
//     var index;
//     if (arr.length > 1) {
//         index = partition(arr, left, right); 
//         if (left < index - 1) {
//             quickSort (arr, left, index - 1);
//         }
//         if (index < right) {
//             quickSort(arr, index, right);
//         }
//     }
//     return arr;
// }

// var result = quickSort(arr, 0, arr.length - 1);
// console.log(result);



////////////////////////////////////   mergeSort using Recursion //////////////////////////////////////////////////////////////////

// let arr = [6,3,9,7,1,3,0,2]


// function mergeSort(arr){
//     if (arr.length <= 1){
//         return arr;
//     }
//     // find the middle of the array //
//     const middle = Math.floor(arr.length/2);
//     // divid array by left and right //
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle);
//     // use recursion to combine the left & right //
//     return merge(
//         mergeSort(left), mergeSort(right)
//     );
// }


//     // merge the 2 arrays: left & right //
//     function merge (left, right) {
//         let newArray = [], leftIndex =0, rightIndex = 0;
    
//         // concatenate values into the newArray in order //
//         while (leftIndex < left.length && rightIndex < right.length) {
//             if (left[leftIndex] < right[rightIndex]) {
//                 newArray.push(left[leftIndex]);
//                 // move the left array pointer 
//                 leftIndex++;
//             }
//             else {
//                 newArray.push(right[rightIndex]);
//                 // move the right array pointer
//                 rightIndex++;
//             }
//         }
//         return newArray.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
//     }

// console.log(mergeSort(arr));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function BubbleSort(arr){
//     var placeholder = 0
//     for(i=0; i<arr.length; i++){
//         for(j=0; j<arr.length; j++){
//             if (arr[j-1] > arr[j]){
//                 placeholder = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = placeholder
//             }
//         }
//     }
//     return arr
// }
// console.log(BubbleSort([4,7,3,8,9,2]))

