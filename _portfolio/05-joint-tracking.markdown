---
layout: portfolio-post
title: Upper-body Joint Tracking and Analysis
description: Summarizing my skills in motion capture and joint tracking.
img: joint-tracking-portfolio/main-gui.png
fig-caption: Super Pop VR<sup>TM</sup> main GUI.
---

I have worked on several projects related to tracking and analyzing people's
upper-body joints using differnet sensors and leveraging different methods. This
section describes the work I completed for each project and
the [technical skills](#joint-tracking-skills) I acquired and improved on
related to joint tracking and analysis.

Feel free to contact me if I can provide value to your projects:
[Consulting Services](https://www.sergiogarciavergara.com/pages/consulting/)

# Super Pop VR<sup>TM</sup> <a id="headerlink" name="joint-tracking-superpop" href="#joint-tracking-superpop" title="Permalink to this headline"></a>
------------------

As a PhD student at [Georgia Tech](https://www.gatech.edu/) and a member of
the [HumAnS Lab](https://humanslab.ece.gatech.edu/), I developed an adaptable
in-home VR game (main interface pictured in the banner of this post) to be used
as part of the physical therapy intervention protocols of children who have
cerebral palsy.

Under the supervision of my PhD
advisor, [Dr. Ayanna Howard](https://www.linkedin.com/in/ayanna-howard/), I
developed kinematic baseline for assessing upper-body motor skills
([published article](https://ieeexplore.ieee.org/iel7/6919203/6926219/06926369.pdf?casa_token=mTObTmsnJjkAAAAA:gTqZCQ2aDENlc4glqKJslz29B_bahKgRaJoq5CNXgrRI_WH6lsAwt-nMky42JpQXDGVQ5V1Nsw)). This
baseline, together with the capabilities of the Kinect camera from Microsoft to
track the user's upper-body 3D joint coordinates, allowed for the development of
the game that is being valiated in several clinical trials (read more in
this
[published journal article](https://www.sciencedirect.com/science/article/abs/pii/S0894113018302679?casa_token=5n8vn_dy31gAAAAA:TMFymFH-z9F8BVhi1ExJu-qv1RfPYZjbnJd5Livebve_4VZ-isiHbx3sZElEnpQAIh2G_VReGqg)).

The following video generally describes the functionality of the *Super Pop
VR<sup>TM</sup>* game:

<div id="video-container">

<iframe width="560" height="315" src="https://www.youtube.com/embed/GvDXW54GkhM"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

</div>

This work was done in collaboration
with [Dr. Yu-ping Chen](https://www.linkedin.com/in/yu-ping-chen-20677930/). You
can read more about this project and its results in my
published
[journal articles and conference papers](https://www.sergiogarciavergara.com/pages/publications/).

### DARwIn-OP <a id="headerlink" name="joint-tracking-darwin" href="#joint-tracking-darwin" title="Permalink to this headline"></a>

In collaboration with one of my
labmates, [LaVonda Brown](https://www.linkedin.com/in/lavondabrownphd/), we
explored the use of [DARwIn-OP](https://en.wikipedia.org/wiki/DARwIn-OP) (a.k.a
Darwin), a humanoid robot platform used by researchers around the world. We
integrated Darwin with the *Super Pop VR<sup>TM</sup>* such that it could
provide verbal and non-verbal feedback to the users playing the game.

The following image shows an example of Darwin demonstrating the movement
sequence the users should be mimicking. You can read more about this work in
this
[published journal article](https://www.tandfonline.com/doi/abs/10.1080/17518423.2017.1360962?casa_token=cNTHy7bVrs8AAAAA%3AhyIlYRtXb1aRtQikILOAhHzBJSjtQGzbOsvYXTWohgMxQ5FlO1eA7asyQkU9QxDsLjUgcRWqxFKh7Q&journalCode=ipdr20).

<img src="/assets/img/joint-tracking-portfolio/darwin-sequence.png"
alt="DARwIn-OP demonstrating a movement sequence">

# OpenPose Library <a id="headerlink" name="joint-tracking-open-pose" href="#joint-tracking-open-pose" title="Permalink to this headline"></a>
------------------

While consulting for [Cosmos Robotics](https://cosmosrobotics.com/), we explored
using [OpenPose](https://github.com/CMU-Perceptual-Computing-Lab/openpose), a
library developed by the Perceptual Computing Lab
at [Carnegie Mellon University](https://www.cmu.edu/) to detect and track human body,
hand, facial, and foot keypoints on single images in real-time.

Our task was to write software to automatically detect if a person has fallen to
the ground. The following video shows a case example of our implementation by
leveraging OpenPose's tracking solutions:

<div id="video-container">

<iframe width="560" height="315" src="https://www.youtube.com/embed/dAiY0382aS8"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

</div>

# Technical Skills <a id="headerlink" name="joint-tracking-skills" href="#joint-tracking-skills" title="Permalink to this headline"></a>
------------------

The following summarizes my proficiency in the technical skills I improved on
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
    <td class="skills">Human-Robot Interaction</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick proficient">Proficient</div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="skills">C# and Visual Studio</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick competent">Competent</div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="skills">Kinect from Microsoft</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick competent">Competent</div>
        </div>
      </div>
    </td>
  </tr>
</table>
