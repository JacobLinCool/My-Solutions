/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const m = new Map();
    for (const i in nums) {
        if (m.has(nums[i])) return [m.get(nums[i]), i];
        m.set(target - nums[i], i);
    }
}
