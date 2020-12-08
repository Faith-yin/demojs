/*
 * @Date: 2020-12-02 09:45:15
 * @information: 冒泡排序
 */

let arr = [4, 2, 6, 5, 1, 3]

function fun() {
  for(let i = 0; i < arr.length; i ++) {
    for(let j = i+1; j < arr.length; j ++) {
      if(arr[i] > arr[j]) {
        let val = arr[i]
        arr[i] = arr[j]
        arr[j] = val
      }
    }
  }
  console.log(arr);
  return arr
}

fun(arr)

