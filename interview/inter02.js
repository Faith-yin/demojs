/*
 * @Date: 2020-11-29 14:54:00
 * @information: [知乎](https://zhuanlan.zhihu.com/p/295320540) - 46
 */

 /**
  * 给定两个数组，写一个方法来计算它们的交集。
  * 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。
  */

let nums1 = [1, 2, 2, 1], nums2 = [2, 2, 3, 4]

// 思路：判断一个数组的每个成员在不在另一个数组中
function judgeMix(arr1, arr2) {
  let arr = arr1.filter(el => arr2.includes(el))
  console.log(arr);
  return arr
}

judgeMix(nums1, nums2)


