function searchInsert(nums, target) {
  const n = nums.length
  let left = 0, right = n - 1
  while (left <= right) {
    let mid = ((right - left) >> 1) + left // 这样写是防止大数溢出
    if (target === nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}

const nums1 = [1, 3, 5, 6], target1 = 5
console.log(searchInsert(nums1, target1)) // 2

const target2 = 2
console.log(searchInsert(nums1, target2)) // 1

const target3 = 7
console.log(searchInsert(nums1, target3)) // 4

const target4 = 0
console.log(searchInsert(nums1, target4)) // 0

const nums2 = [1]
console.log(searchInsert(nums2, target4)) // 0