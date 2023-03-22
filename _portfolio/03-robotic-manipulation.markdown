---
layout: portfolio-post
title: Robotic Manipulation
description: Projects related to robotic manipulation
img: robotic-manipulation-portfolio/ur-robots.png
fig-caption: BLOG.ROBOTIQ.COM
---

The projects described in this post leverage
the [MoveIt Motion Planning Framework](https://moveit.ros.org/)
([source code for ROS 2](https://github.com/ros-planning/moveit2)). This open
source platform provides key components like motion planning, manipulation,
inverse kinematics, realtime control, and collision checking. Having knowledge
in this library saves developers a considerable amount of time.

I describe in this post the projects I've worked on where I've implemented
solutions from the MoveIt framework to control robotic manipulators. The last
section summarizes the [technical skills](#manipulation-skills) I've implemented
and acquired while working on these projects.

# Universal Robots <a id="headerlink" name="manipulation-ur" href="#manipulation-ur" title="Permalink to this headline"></a>
------------------

## UR5e <a id="headerlink" name="manipulation-ur5e" href="#manipulation-ur5e" title="Permalink to this headline"></a>

During the summer of 2022, [Universal Robots](https://www.universal-robots.com/)
was kind enough to lend us one of their UR5e manipulators for a period of three
weeks. As part of our technical development
at [RIF Robotics](https://www.rifrobotics.com/), we worked on integrating our
software with the UR ROS 2 drivers such that our high-level logic could control
the arm.

Our software leverages the MoveIt framework to generate efficient trajectories
for picking and placing surgical instruments. The following video highlights our
proof-of-concept prototype.

<div id="video-container">

<iframe width="560" height="315" src="https://www.youtube.com/embed/ptR2k0P6Efs"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

</div>

## UR3e <a id="headerlink" name="manipulation-ur3e" href="#manipulation-ur3e" title="Permalink to this headline"></a>

As participants of
the
[Georgia Manufacturing Extension Partnership (GaMEP)](https://www.linkedin.com/company/gamep/) at
Georgia Tech, we gained access to their UR3e manipulator to continue our
technical development at RIF Robotics.

The following video shows the first time we controlled the manipulator with the
RIF Robotics software. Similar to the work done with the UR5e, the logic is
"assembling" surgical instruments. However, instead of having physical
instruments detected by our machine learning models, we're simulating the
positon of the instruments. Their coordinates are handled in the same manner as
if it were physical instruments, allowing MoveIt's motion planner to generate
the appropriate trajectories.

<div id="video-container">

<iframe width="560" height="315" src="https://www.youtube.com/embed/DOgEn15ipTY"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

</div>

## URSIm + Docker <a id="headerlink" name="manipulation-ur-sim" href="#manipulation-ur-sim" title="Permalink to this headline"></a>

As always, it's important to test and debug sofwtare in simulation as much as
possible before trying it out on a physical system. Luckily, Universal Robots
provides an environment that simulates the dynamics of their manipulators
allowing developers to first test their solutions before interfacing them with
the physical robots.

I
setup
[URSim in a Docker container](https://docs.ros.org/en/ros2_packages/rolling/api/ur_robot_driver/installation/ursim_docker.html) and
was able to control the simulated arm with our RIF software. The beauty of our
software is that we developed it to be platform agnostic. As such, however it
performed with the simulated dynamics, is exactly how it performed when
controlling the physical arm.

The window on the left of the video shows RIF's high-level logic controlling the
arm in RViz. The window on the right of the video shows the simulated UR3e
manipulator inside the URSim environment.

<div id="video-container">

<iframe width="560" height="315" src="https://www.youtube.com/embed/cHAnvZpcOx8"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

</div>

# Technical Skills <a id="headerlink" name="manipulation-skills" href="#manipulation-skills" title="Permalink to this headline"></a>
------------------

The following summarizes my proficiency in the technical skills I implemented
and acquired while working on the projects described in this post:

<table>
  <tr>
    <td class="skills">ROS and ROS 2</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick expert">Expert</div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="skills">C++</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick expert">Expert</div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="skills">Python</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick expert">Expert</div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="skills">Manipulation Simulation</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick proficient">Proficient</div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="skills">Motion Planning</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick proficient">Proficient</div>
        </div>
      </div>
    </td>
  </tr>
</table>
