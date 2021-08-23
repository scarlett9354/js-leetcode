function removeElement(nums, val) {
  let left = 0, right = nums.length
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1]
      right--
    } else {
      left++
    }
  }
  return left
}

const nums1 = [3,2,2,3], val1 = 3
console.log(removeElement(nums1, val1), nums1) // 2 [2, 2, 2, 3]

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2], val2 = 2
console.log(removeElement(nums2, val2), nums2) // 5 [0, 1, 4, 0, 3, 0, 4, 2]