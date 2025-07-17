---
layout: post
title: Running Content
toc: false
description: Some content related to running.
---

<div class="container py-5">
  <h2 class="text-center mb-4">Segment Pace Breakdown</h2>

  <form id="pace-form" class="row g-3 justify-content-center">
    <div class="col-md-4">
      <label for="distance" class="form-label">Segment Distance [m]</label>
      <input type="number" class="form-control" id="distance" placeholder="e.g., 800" required>
    </div>
    <div class="col-md-4">
      <label for="runtime" class="form-label">Run Time [MM:SS]</label>
      <input type="text" class="form-control" id="runtime" placeholder="e.g., 03:20" required pattern="^\d{2}:\d{2}$">
    </div>
    <div class="col-md-2 align-self-end">
      <button type="submit" class="btn btn-primary w-150">Calculate</button>
    </div>
  </form>

  <!-- Results Table -->
  <div id="results-container" class="mt-5 d-none">
    <h4 class="text-center mb-3">Time Breakdown per 200m</h4>
    <div class="table-responsive">
      <table class="table table-bordered table-striped text-center">
        <thead class="table-light">
          <tr>
            <th>Distance (m)</th>
            <th>Elapsed Time</th>
          </tr>
        </thead>
        <tbody id="results-table">
          <!-- JS injects rows here -->
        </tbody>
      </table>
    </div>
  </div>
</div>

<script>
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = Math.round(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  document.getElementById('pace-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const distance = parseInt(document.getElementById('distance').value);
    const runtime = document.getElementById('runtime').value;

    if (!/^\d{2}:\d{2}$/.test(runtime)) {
      alert('Please enter run time in MM:SS format.');
      return;
    }

    const [mins, secs] = runtime.split(":").map(Number);
    const totalTimeSec = mins * 60 + secs;

    const resultsTable = document.getElementById('results-table');
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

    document.getElementById('results-container').classList.remove('d-none');
  });
</script>
