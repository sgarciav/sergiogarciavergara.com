---
layout: portfolio-post
title: Autonomous Mobile Robots (AMRs)
description: Projects related to AMRs.
img: amr-portfolio/amrs.png
fig-caption: WWW.DJI.COM & WWW.CLEARPATHROBOTICS.COM
---

An autonomous mobile robot (AMR) is a robot capable of navigating its
environment without human oversight. AMRs leverage a variety of sensors for safe
and accurate navigation.

I've worked on a wide variety of projects focused on designing, implementing,
and field testing aerial and ground AMRs. I describe in this post some of the
projects I've worked on. The last section summarizes
the [technical skills](#amr-skills) I've implemented and acquired while working
on these projects.

[**ROS and ROS 2**](https://www.ros.org/) were the base architecture for all the
projects described in this post. I provide more details about my ROS skills in
this post.

<!-- TODO: link the ROS post once it's published -->

# Aerial Vehicles <a id="headerlink" name="amr-aerial" href="#amr-aerial" title="Permalink to this headline"></a>
------------------

During my tenure as a faculty researcher at
the [Georgia Tech Research Center (GTRI)](https://gtri.gatech.edu/), I was the
autonomy lead, and then project director, for a wide variety of DoD-sponsored
projects. I was responsible for developing algorithms to enable autonomous
behaviors of collaborative aerial vehicles.

Due to the sensitive nature of most projects, I can only provide a high level
summary of some of them:

### Collaborative Swarming <a id="headerlink" name="amr-swarming" href="#amr-swarming" title="Permalink to this headline"></a>

The algorithms I developed were for swarms of multiple agents. For most
scenarios, the number of agents was unknown or changed over time depending on
the mission. As such, all algorithms had to be adaptable in realtime such that
the implementation was not affected by the dynamic conditions of the swarm.

I leveraged the open source multi-agent
simulator [SCRIMMAGE](http://www.scrimmagesim.org/) to test my algorithm
development. I gained expertise in both using the simulator as well as
developing new behaviors for it.

The following video provides a high level description of the simulator and its
capabilities (taken from
the [SCRIMMAGE Github page](https://github.com/gtri/scrimmage)):

<div id="video-container">

<iframe width="560" height="315" src="https://www.youtube.com/embed/NW37klOQ2xA"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

</div>

### Target Following <a id="headerlink" name="amr-target-following" href="#amr-target-following" title="Permalink to this headline"></a>

A swarm of n vehicles act on a GPS signal to surround the target. The number of
vehicles is unknown at any point in time so the swarm adapts its formation as a
function of the number of vehicles at time *t*.

### Visual Servoing <a id="headerlink" name="amr-visual-servoing" href="#amr-visual-servoing" title="Permalink to this headline"></a>

One aerial vehicle following another one using only an optical camera. This
project required 1) training a machine learning model of the target vehicle, 2)
development of a controller for keeping the target bounding box in the center of
the image frame, and 3) simulation of the high level logic before testing on the
real platforms.

## Aerial Platforms <a id="headerlink" name="amr-aerial-platforms" href="#amr-aerial-platforms" title="Permalink to this headline"></a>

Although it's important to consider the dynamics of the vehicle when developing
algorithms to enable autonomous behaviors, I make sure that their implementation
is platform agnostic. This means that I design my algorithms to be adaptable
such that future developers don't have the burden of updating the code whenever
they try to implement the same algorithms on other platforms.

The [S1000 from DJI](https://www-v1.dji.com/spreading-wings-s1000.html)
(pictured on the left of this post's banner), is one of the platforms I've
developed for.

# Indoor Ground Vehicles <a id="headerlink" name="amr-ground" href="#amr-ground" title="Permalink to this headline"></a>
------------------

I have addressed several challenged with autonomous indoor navigation. Namely:

### Mapping and Localization <a id="headerlink" name="amr-map-and-loc" href="#amr-map-and-loc" title="Permalink to this headline"></a>

The following is a demo video showing my implementation of
the [ROS2 Navigation Stack](https://navigation.ros.org/). You can see the
vehicle autonomoulsy navigate to a waypoint in a
simulated [Gazebo](https://gazebosim.org/home) environment:

<div id="video-container">

<iframe width="560" height="315" src="https://www.youtube.com/embed/ujxFXNfcRWw"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

</div>

### Path Planners <a id="headerlink" name="amr-path-planners" href="#amr-path-planners" title="Permalink to this headline"></a>

I have leveraged
the [Open Motion Planning Library (OMPL)](https://ompl.kavrakilab.org/) as much
as possible due to it easy of use and flexibility for swapping out planners to
accomplish different tasks.

### Obstacle Avoidance <a id="headerlink" name="amr-obs-avoidance" href="#amr-obs-avoidance" title="Permalink to this headline"></a>

The [Time Elastic Band (TEB) planner](http://wiki.ros.org/teb_local_planner) is
a specific type path planner that I've implemented and tuned on several
projects. This planner is typically used to locally optimize the robot's
trajectory with respect to the global planner, separation from obstacles, and
the dynamic contraints of the vehicle.

## Source Code <a id="headerlink" name="amr-source-code" href="#amr-source-code" title="Permalink to this headline"></a>

As part of our startup, [RIF Robotics](https://www.rifrobotics.com/), we provide
open source solutions for roboticists and hobbyists such that they don't need to
start from scrtach. Check out our Github page and explore our public
repos. The [dingo_setup](https://github.com/RIF-Robotics/dingo_setup) repo
provides the framework for running the ROS 2 nav-stack inside a Docker
container. The instructions in the main README should be enough, but feel free
to reach out if you run into any issues.

## Ground Platforms <a id="headerlink" name="amr-ground-platforms" href="#amr-ground-platforms" title="Permalink to this headline"></a>

Similar to the aerial vehicles, I also developed the algorithms for the ground
vehicles to be platform agnostic.

The
[Dingo from ClearPath Robotics](https://clearpathrobotics.com/dingo-indoor-mobile-robot/) (pictured
on the right of this post's banner), is one of the platforms I've developed
for. You
can
[read here](https://www.rifrobotics.com/blog/clearpath-parnetbot-program-winners) about
how, at RFI Robotics, we one a Dingo platform as part of the ClearPath Robotics
PartnerBot Grant Program.

# Autonomous Lawnmowers <a id="headerlink" name="amr-lawnmower" href="#amr-lawnmower" title="Permalink to this headline"></a>
------------------

I had the oportunity to be a Robotics Software Engineer consultant
for [Greenzie](https://www.greenzie.com/), a startup developing software for
commercial mowers. Outdoor navigation has its own set of challenges. For
example, visual-based navigation becomes more challenging since there are less
features to keep track of while operating in open fields.

# Technical Skills <a id="headerlink" name="amr-skills" href="#amr-skills" title="Permalink to this headline"></a>
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
    <td class="skills">Object Detection</td>
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
  <tr>
    <td class="skills">Path Planning</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick proficient">Proficient</div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="skills">SCRIMMAGE Simulations/Development</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick proficient">Proficient</div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="skills">Gazebo Simulations/Development</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick competent">Competent</div>
        </div>
      </div>
    </td>
  </tr>
</table>
