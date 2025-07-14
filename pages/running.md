---
layout: post
title: Running Content
toc: false
description: Some content related to running.
---


<div class="container py-5">
  <h2 class="text-center mb-4">Simple Calculator</h2>

  <form id="calc-form" class="row g-3 justify-content-center">
    <div class="col-md-3">
      <label for="input1" class="form-label">Number 1</label>
      <input type="number" class="form-control" id="input1" required>
    </div>
    <div class="col-md-3">
      <label for="input2" class="form-label">Number 2</label>
      <input type="number" class="form-control" id="input2" required>
    </div>
    <div class="col-md-2 align-self-end">
      <button type="submit" class="btn btn-primary w-100">Calculate</button>
    </div>
  </form>

  <!-- Result container -->
  <div id="result-box" class="alert alert-info mt-4 text-center d-none" role="alert">
    Result will appear here.
  </div>
</div>

<!-- Bootstrap JS (optional for some components, not needed here) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- Inline JS logic -->
<script>
  document.getElementById('calc-form').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent form submission

    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);

    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }

    const sum = num1 + num2;

    const resultBox = document.getElementById('result-box');
    resultBox.classList.remove('d-none');
    resultBox.innerText = `The sum of ${num1} and ${num2} is ${sum}.`;
  });
</script>
