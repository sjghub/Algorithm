// 1) Set 사용
function useSet(arr) {
  const uniqueSet = new Set(arr); // Set(5) {}
  const uniqueArr = [...new Set(arr)]; // [1,2,3,4,5]
  return uniqueArr;
}
useSet([1, 2, 3, 4, 5, 1]);

// 2)indexOf,filter
function useFilter(arr) {
  const uniqueArr = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
  console.log(uniqueArr);
}
useFilter([1, 2, 3, 4, 5, 1, 2, 3]);

// 3) map = {}

function useMap(arr) {
  const hashMap = {};
  const uniqueArr = [];
  for (let e of arr) {
    if (!hashMap[e]) {
      uniqueArr.push(e);
    }
    hashMap[e] = e;
  }
  console.log(uniqueArr);
}
useMap([1, 2, 3, 4, 5, 1, 2, 3]);
