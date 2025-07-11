---
layout: post
title: Running Content
toc: false
description: Some content related to running.
---

<h2>Simple Calculator</h2>

<form id="calcForm">
  <label for="num1">Number 1:</label>
  <input type="number" id="num1" required>
  <br>
  <label for="num2">Number 2:</label>
  <input type="number" id="num2" required>
  <br><br>
  <button type="submit">Calculate</button>
</form>

<h3 id="result"></h3>

<script>
  const form = document.getElementById('calcForm');
  const resultBox = document.getElementById('result');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const response = await fetch("https://two00m-calculator.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ num1, num2 })
    });

    const data = await response.json();

    if (data.result !== undefined) {
      resultBox.innerText = "Result: " + data.result;
    } else {
      resultBox.innerText = "Error: " + (data.error || "Unknown error");
    }
  });
</script>
