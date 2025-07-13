---
layout: post
title: Running Content
toc: false
description: Some content related to running.
---

<h2 id="sergio">Simple Calculator</h2>

<form id="calcForm">
  <label for="num1">Number 1:</label>
  <input type="number" id="num1" required>
  <br>
  <label for="num2">Number 2:</label>
  <input type="number" id="num2" required>
  <br><br>
  <button type="submit">Calculate</button>
</form>

<div id="result-box" class="result-box">Result will appear here</div>

<script src="{{site.baseurl}}/assets/js/running-calc.js"></script>
