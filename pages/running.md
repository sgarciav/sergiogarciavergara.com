---
layout: post
title: Running Content
toc: false
description: Some content related to running.
---

<style>
    label {
        font-size: 18px;
    }
</style>

<!-- ========================================= -->
<!-- Estimate Pace Breakdown based on 200m expected time -->
<!-- ========================================= -->
<div class="container py-5">
  <h2 class="text-center mb-4">Segment Estimation</h2>

  <form id="estimate-form" class="row g-3 justify-content-center">
    <div class="col-md-6">
      <label for="runtime-estimation" class="form-label">Run Time per 200m [mm:ss]</label>
      <input type="text" class="form-control" id="runtime-estimation" placeholder="e.g., 00:50" required pattern="^\d{2}:\d{2}$">
    </div>
    <div class="col-md-2 align-self-end">
      <button type="submit" class="btn btn-primary w-150">Calculate</button>
    </div>
  </form>

  <!-- Results Table -->
  <div id="results-container-estimation" class="mt-5 d-none">
    <h4 class="text-center mb-3">Time Breakdown per 200m</h4>
    <div class="table-responsive">
      <table class="table table-bordered table-striped text-center">
        <thead class="table-light">
          <tr>
            <th>Distance (m)</th>
            <th>Elapsed Time</th>
          </tr>
        </thead>
        <tbody id="results-table-estimation">
          <!-- JS injects rows here -->
        </tbody>
      </table>
    </div>
  </div>
</div>

---

<!-- ========================================= -->
<!-- Break down the total run time per 200m segments given the total time -->
<!-- ========================================= -->

<div class="container py-5">
  <h2 class="text-center mb-4">Segment Pace Breakdown</h2>

  <form id="pace-form" class="row g-3 justify-content-center">
    <div class="col-md-5">
      <label for="distance" class="form-label">Segment Distance [m]</label>
      <input type="number" class="form-control" id="distance" placeholder="e.g., 800" required>
    </div>
    <div class="col-md-4">
      <label for="runtime-breakdown" class="form-label">Run Time [mm:ss]</label>
      <input type="text" class="form-control" id="runtime-breakdown" placeholder="e.g., 03:20" required pattern="^\d{2}:\d{2}$">
    </div>
    <div class="col-md-2 align-self-end">
      <button type="submit" class="btn btn-primary w-150">Calculate</button>
    </div>
  </form>

  <!-- Results Table -->
  <div id="results-container-breakdown" class="mt-5 d-none">
    <h4 class="text-center mb-3">Time Breakdown per 200m</h4>
    <div class="table-responsive">
      <table class="table table-bordered table-striped text-center">
        <thead class="table-light">
          <tr>
            <th>Distance (m)</th>
            <th>Elapsed Time</th>
          </tr>
        </thead>
        <tbody id="results-table-breakdown">
          <!-- JS injects rows here -->
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- ========================================= -->
<!-- Math for both forms -->
<!-- ========================================= -->

<script>
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = Math.round(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }


  document.getElementById('pace-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const distance = parseInt(document.getElementById('distance').value);
    const runtime = document.getElementById('runtime-breakdown').value;

    if (!/^\d{2}:\d{2}$/.test(runtime)) {
      alert('Please enter run time in mm:ss format.');
      return;
    }

    const [mins, secs] = runtime.split(":").map(Number);
    const totalTimeSec = mins * 60 + secs;

    const resultsTable = document.getElementById('results-table-breakdown');
    resultsTable.innerHTML = '';

    // Calculate pace per meter
    const pacePerMeter = totalTimeSec / distance;

    // Create rows for 200, 400, 800, 1000m
    const checkpoints = [200, 400, 800, 1000];
    checkpoints.forEach(m => {
      if (m <= distance) {
        const timeAtCheckpoint = formatTime(pacePerMeter * m);
        const row = `<tr><td>${m}</td><td>${timeAtCheckpoint}</td></tr>`;
        resultsTable.insertAdjacentHTML('beforeend', row);
      }
    });

    document.getElementById('results-container-breakdown').classList.remove('d-none');
  });

  document.getElementById('estimate-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const runtime = document.getElementById('runtime-estimation').value;

    if (!/^\d{2}:\d{2}$/.test(runtime)) {
      alert('Please enter run time in mm:ss format.');
      return;
    }

    const [mins, secs] = runtime.split(":").map(Number);
    const totalTimeSec = mins * 60 + secs;

    const resultsTable = document.getElementById('results-table-estimation');
    resultsTable.innerHTML = '';

    // Calculate pace per meter
    const pacePerMeter = totalTimeSec / 200;

    // Create rows for 200, 400, 800, 1000m
    const checkpoints = [200, 400, 800, 1000];
    checkpoints.forEach(m => {
      const timeAtCheckpoint = formatTime(pacePerMeter * m);
      const row = `<tr><td>${m}</td><td>${timeAtCheckpoint}</td></tr>`;
      resultsTable.insertAdjacentHTML('beforeend', row);
    });

    document.getElementById('results-container-estimation').classList.remove('d-none');
  });
</script>
