---
layout: page
title: "Continuous-Time Recurrent Reinforcement Learning for USV Navigation in Dynamic Maritime Environments" # Update with your project title
description: "End-to-end continuous control under dynamic environmental uncertainty"
img: assets/img/USV Dyn.drawio-3.jpg
importance: 1
category: Research # Groups cards on your /projects/ page
related_publications: false
---

<div class="row justify-content-center my-4">
  <div class="col-12 col-lg-10">
    <!-- Responsive Video Player -->
    <div class="card shadow-sm border-0 overflow-hidden">
      <div class="ratio ratio-16x9">
        <video controls autoplay loop muted playsinline poster="{{ '/assets/img/USV Dyn.drawio-3.jpg' | relative_url }}">
          <source src="{{ '/assets/video/all_episodes-2.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</div>

<!-- Action Links (Paper, Code, Demo) -->
<div class="d-flex flex-wrap gap-2 justify-content-center mb-4">
  <a href="{{ '/assets/pdf/MECH0020_Final_Report_23018740_TRINH_MINH.pdf' | relative_url }}" target="_blank" class="btn btn-sm btn-outline-primary">
    <i class="fa-solid fa-file-pdf"></i> Read Paper
  </a>
  <!-- Placeholder button for code -->
  <button class="btn btn-sm btn-outline-secondary" disabled title="Repository undergoing maintenance">
    <i class="fa-brands fa-github"></i> Code (Updating)
  </button>
</div>

---

### Abstract

Navigating Unmanned Surface Vehicles (USVs) in maritime environments requires collision avoidance under time-varying currents, moving obstacles, partial observations, and limited on-board computation. Existing Reinforcement Learning (RL) approaches for USV navigation often assume static or weakly dynamic environments, limiting robustness to dynamic obstacle motion. This project studies USV navigation in a dynamic Rankine vortex-flow simulator with both static and dynamic obstacles, using a limited-range LiDAR sensor representation augmented by engineered direction and clearance features. The task is formulated as a Partially Observable Markov Decision Process (POMDP), and a recurrent policy based on Closed-form Continuous-Time (CfC) neural networks is trained with Proximal Policy Optimization (PPO) under a four-stage timestep-scheduled curriculum. The proposed policy uses a multi-branch feature extractor to separate kinematic, perception, and dynamic-awareness inputs before recurrent belief updating. In simulation, CfC+PPO achieves a 6.2\% success rate (SR) improvement over LSTM+PPO in Static evaluation and a 6.4\% SR improvement over GRU+PPO in Dynamic evaluation, while reducing collision rate (CR) and learned-policy control effort. Ablations show that recurrence improves robustness to cumulative hidden drift, while engineered spatial summaries are essential for reliable local collision avoidance. The results provide promising simulation-based evidence for a lightweight hybrid policy for adaptive USV navigation in dynamic maritime environments.

---

<!-- ### Key Highlights & Architecture

<div class="row row-cols-1 row-cols-md-3 g-3 text-center my-3">
  <div class="col">
    <div class="card h-100 p-3 shadow-sm border-0">
      <h6 class="text-primary fw-bold mb-1">Architecture</h6>
      <p class="small text-muted mb-0">Recurrent policy network handling partial observability</p>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 p-3 shadow-sm border-0">
      <h6 class="text-primary fw-bold mb-1">Environment</h6>
      <p class="small text-muted mb-0">High-fidelity continuous simulator with disturbance modeling</p>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 p-3 shadow-sm border-0">
      <h6 class="text-primary fw-bold mb-1">Outcome</h6>
      <p class="small text-muted mb-0">Improved path efficiency and robustness over baseline controllers</p>
    </div>
  </div>
</div> -->