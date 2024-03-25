/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

// 动态规划解法
const climbStairs = function (n) {
  if (n <= 2) return n;

  let dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
