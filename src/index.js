let arrayOfNos = [-10, -1, 6, 0, 7, 5, 2, 3];

let findClosestSum = (arr) => {
  let sortedArray = arr.sort((a, b) => a - b);

  let closestSum = arr[0] + arr[1];
  let closestPair = [arr[0], arr[1]];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + arr[i + 1];
    if (Math.abs(sum) < Math.abs(closestSum)) {
      closestSum = sum;
      closestPair = [arr[i], arr[i + 1]];
    }
  }

  console.log(closestSum, closestPair);
};

findClosestSum(arrayOfNos);
