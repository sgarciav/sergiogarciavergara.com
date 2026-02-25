---
layout: portfolio-post
title: ROS & ROS 2
toc: true
description: Robot Operating System
img: ros-portfolio/ros_logo.png
fig-caption: WWW.ROS.ORG
---

The [Robot Operating System (ROS)](https://www.ros.org/) is a powerful software
architecture used by roboticists all over the world. I have applied my extensive
experience with ROS and ROS 2 in a wide variety of projects
(e.g., [AMRs](https://www.sergiogarciavergara.com/portfolio/02-amr/)
and
[robotic manipulators](https://www.sergiogarciavergara.com/portfolio/03-robotic-manipulation/)). I
talk about my knowledge of ROS and ROS 2 applied to specific robotics projects
in other posts. This post describes my work done for simplifyig software
development for me and my teammates.

Feel free to contact me if I can provide value to your projects.

# ROS in Docker <a id="headerlink" name="ros-docker" href="#ros-docker" title="Permalink to this headline"></a>
------------------

<img src="/assets/img/ros-portfolio/ros-plus-docker.png" alt="Docker + ROS
logos">

[Docker](https://www.docker.com/) is a powerful tool for containarizing
environments. I like to create nice and predictable environments for running my
ROS and ROS 2 projects without the need of setting up virtual machines.

# ROS 1 <> ROS 2 Bridge <a id="headerlink" name="ros-bridge" href="#ros-bridge" title="Permalink to this headline"></a>
------------------

It's not a trivial task to upgrate an existing ROS 1 project to start leveraging
the new libraries provided by ROS 2. Luckily,
the [ros1_bridge](https://github.com/ros2/ros1_bridge) package allows ROS 1
nodes to interact with ROS 2 nodes, and viceversa; thus, allowing developers to
progressively upgrade their projects one package at a time.

I have put together a working example
on
[my personal Github page](https://github.com/sgarciav/ros2_playground/tree/master/ros_bridge) to
demonstrate the ease of implementing the ROS 1 to ROS 2 bridge.

# Husarnet: A VPN Solution <a id="headerlink" name="ros-husarnet" href="#ros-husarnet" title="Permalink to this headline"></a>
------------------

ROS 2 provides a new netowkring
middleware: [DDS](https://en.wikipedia.org/wiki/Data_Distribution_Service) (Data
Distribution Service). One drawback of the new DDS protocol is that it limits
existing VPN solutions. For example, given that OpenVPN does not support
multicast over VPN for DDS discovery, developers may not be able to remotely
monitor their robots in the field.

Enter [Husarnet](https://husarnet.com/), a Peer-to-Peer VPN to connect your
laptops, servers and microcontrollers over the Internet with zero configuration.

I have put together a working example
on
[my personal Github page](https://github.com/sgarciav/ros2_playground/tree/master/husarnet) to
demonstrate the feasibility of using Husarnet in your ROS 2 project.

# Technical Skills <a id="headerlink" name="ros-skills" href="#ros-skills" title="Permalink to this headline"></a>
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
    <td class="skills">Docker</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick proficient">Proficient</div>
        </div>
      </div>
    </td>
  </tr>
</table>
