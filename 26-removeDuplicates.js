function removeDuplicates(nums) {
  const n = nums.length
  if (n === 0) return 0
  let fast = 1, slow = 1
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
}

const nums1 = [1, 1, 2]
console.log(removeDuplicates(nums1)) // 2
console.log(nums1) // [1, 2, 2]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const len = removeDuplicates(nums2)
console.log(len) // 5
console.log(nums2) // [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
console.log(filterTargetsByLength(nums2, len)) // [0, 1, 2, 3, 4]
function filterTargetsByLength(arr, len) {
  return arr.filter((item, index) => index < len)
}
