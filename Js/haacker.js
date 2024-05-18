

// let result
// let sum = 0;
// let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
// for (let i = 0; i < arr.length; i++) {

//      result = sum += arr[i];

// }



// let x = "abba";
// let result = '';

//     for (let i = x.length - 1; i >= 0; i--){
//         result += x[i]
// }

//     if (result === x) {
//         console.log("Good");
//     } else {
//         console.log("Bad");
//     }

// let n = 6;
// for (let i = 1; i <= n; i++) {
//     let spaces = '';
//     let stars = '';
//     for (let j = 1; j <= n - i; j++) {
//         spaces += ' ';
//     }
//     for (let k = 1; k <= i * 2 - 1; k++) {
//         stars += '#';
//     }

//     console.log(spaces + stars);
// }



// for (let i = n; i >= 1; i--) {
//     let spaces = '';
//     let stars = '';
//     // console.log(`i = ${i} ---- nI = ${n}`);
//     for (let j = 1; j <= n - i; j++) {
//         spaces += '-';
//         stars += '#';
//         // console.log(spaces);
//         }

//     console.log(spaces + stars);
// }

// let arr = [7, 3, 5, 4, 2, 3, 7, 4, 6, 8, 7, 4, 2, 9, 8, 7];
// let maxDistance = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 7) {
//         let j = i + 1; // بداية المتتالية بعد الرقم 7 الحالي
//         while (j < arr.length && arr[j] !== 7) {
//             j++;
//         }
//         if (j < arr.length) { // التأكد من أننا وجدنا الرقم 7 الثاني
//             let distance = j - i - 1; // حساب المسافة بين الرقمين 7
//             maxDistance = Math.max(maxDistance, distance); // حفظ أعلى مسافة
//         }
//     }
// }

// console.log(maxDistance);


// let arr = [7, 3, 5, 4, 2, 3, 7, 4, 6, 8, 7, 4, 2, 9, 8, 7];
// let sum = 0;
// let distance = 0;
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 7) {
//         let count = 0;
//         let x = i + 1;
//         while (x < arr.length && arr[x] !== 7) {
//             count++
//             sum += arr[x]
//             x++
//         }
//         (count > distance) ? distance = count : distance;
//         (sum > result) ? result = sum : result;
//         sum = 0;
//         Math.max()
//     }

// }
// console.log(`The largest distance : ${distance}`);
// console.log(`The largest sum : ${result}`);

// let n = 6;
// for (let i = 1; i <= n; i++) {
//     let x = "";
//     let d = "";
//     for (let j = 1; j <= n - i; j++) {
//        x += " ";
//     }
//     for (let k = 1; k <= i  ; k++) {
//         d += "#";
//     }
//     console.log(x + d);

// }

// let arr = [1, 2, 3, 4, 5];
// let minSum = Infinity;
// let maxSum = -Infinity;
// let totalSum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minSum) {
//         minSum = arr[i];
//     }
//     if (arr[i] > maxSum) {
//         maxSum = arr[i];
//     }
//     totalSum += arr[i];
// }

// let minResult = totalSum - maxSum;
// let maxResult = totalSum - minSum;

// console.log(minResult, maxResult);


// let arr = [3, 4 , 2, 1, 3];
// let max = 0;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         count = 1;
//     } else if (arr[i] === max) {
//         count++;
//     }
// }
// console.log(count);

// let arr = [ -4, 3, -9, 0, 4, 1];
// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;
// for (let i = 0; i < arr.length; i++) {
//     (arr[i] > 0) ? positiveCount++ :
//         (arr[i] < 0) ? negativeCount++ :
//             (arr[i] === 0) ? zeroCount++ : ''
// }
// console.log((positiveCount / arr.length).toFixed(6));
// console.log((negativeCount / arr.length).toFixed(6));
// console.log((zeroCount / arr.length).toFixed(6));


function re(k, height) {
    let result = 0;
    let drink = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > drink) {
            drink = height[i]
        } else if (drink > height[i]) {
            result = drink - k;
        }
        if (result < 0) {
            result = 0
        }
    }
    return result
}

let height = [0,2,1,3,1, 6, 3, 5, 2];
console.log(re(4, height));
