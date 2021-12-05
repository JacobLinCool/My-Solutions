---
title: 1. Two Sum
tags: [leetcode, array, two-sum]
author: JacobLinCool
---

[LeetCode 1. Two Sum](https://leetcode.com/problems/two-sum/)

# Thought

## First Approach: Brute Force

Complecity:

$$
O(n^2)
$$

Just use 2 for loops to iterate over the array and check if the sum is equal to the target.

## Second Approach: Map

Complecity: $O(n)$

Use a map to store `diff_between:index`. If we find the diff in the map, we have found the pair.
