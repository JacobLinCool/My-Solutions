---
title: 1290. Convert Binary Number in a Linked List to Integer
tags: [leetcode, linked-list, math]
author: JacobLinCool
---

[LeetCode 1290. Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

# 想法

這一題我們先用一變數來存放之前的值，每向前一位，就將原值向左移一位（乘以 2），並且加上新的值。
