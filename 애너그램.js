// 애너그램수 : 두 문자열의 숫자 나열 순서는 다르지만 구성은 같은 수
// 1) split sort join
function splitSortJoin(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return str1.split("").sort().join() === str2.split("").sort().join();
}

// 2) map = {}

function hashMap(str1, str2) {
  const hashMap = {};
  if (str1.length !== str2.length) {
    return false;
  }

  for (let element of str1) {
    hashMap[element] = hashMap[element] ? hashMap[element] + 1 : 1;
  }

  for (let char of str2) {
    if (!hashMap[char]) {
      return false;
    }
    hashMap[char]--;
  }
  return true;
}
