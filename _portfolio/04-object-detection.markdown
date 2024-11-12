---
layout: portfolio-post
title: Object Detection
toc: true
description: Projects related to object detection.
img: object-detection-portfolio/surgical-instrument-detection.png
fig-caption: RIF ROBOTICS MODEL
---

This post describes the projects I've worked on related to training and
implementing objected detection models for various applications. This post also
describes the [sofwtare tools](#obj-detection-tools) I've leveraged to
facilitate the training process, and
the [technical skills](#obj-detection-skills) I've improved on and acquired
while working on these projects.

<!-- TODO: instance segmentation vs object detection -->

# Surgical Instruments <a id="headerlink" name="obj-detection-surgical-instruments" href="#obj-detection-surgical-instruments" title="Permalink to this headline"></a>
------------------

As part of our technical development
at [RIF Robotics](https://www.rifrobotics.com/), we are training a machine
learning vision-based model to detect and identify surgical instruments. Our
goal at RIF is for a robotic manipulator to autonomously manipulate any
instrument. Thus, we need to train an image segmentation model (as opposed to
typical object detection) such that our software can also extract the
instrument's pose. The resulting pose is what will be fed into our motion
planning algorihtms for autonomus pick and place.

We have trained an instance segmentation model using
Facebook's [Detectron2](https://github.com/facebookresearch/detectron2)
library. The following video shows the performance of the initial model in
real-time:

<div id="video-container">

<iframe width="560" height="315" src="https://www.youtube.com/embed/pqETlsT3EW0"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

</div>

Surgical instruments are particularly hard to differentiate given the very
similar features that a lot of pairs have between them. As such, we're working
on defining a framework that can handle the thousands of different types of
instruments.

Stay tuned for future progress!

## PyTorch in Docker <a id="headerlink" name="obj-detection-pytorch" href="#obj-detection-pytorch" title="Permalink to this headline"></a>

*Detectron2* is built on top of [PyTorch](https://pytorch.org/), an open source
machine learning framework. We have setup a [Docker](https://www.docker.com/)
environment for running PyTorch. It faciliates the training and testing
processes.

Feel free to contact me if you're interested in setting up a similar environment
for your
project:
[Consulting Services](https://www.sergiogarciavergara.com/pages/consulting/)

# Hobby Projects <a id="headerlink" name="obj-detection-hobby" href="#obj-detection-hobby" title="Permalink to this headline"></a>
------------------

At the time of writing this post, I am cleaning up the descriptions of my hobby
projects. Updates for this section are coming soon.

# Software Tools <a id="headerlink" name="obj-detection-tools" href="#obj-detection-tools" title="Permalink to this headline"></a>
------------------

### CVAT <a id="headerlink" name="obj-detection-cvat" href="#obj-detection-cvat" title="Permalink to this headline"></a>

Annotating images is always a laborious and time-consuming process. This is
especially true if you're making annotations for image segmentation models since
you have to carefully trace the outline of the objects of interest instead of
just dragging a bounding box around the objects.

The [Computer Vision Annotation Tool (CVAT)](https://github.com/opencv/cvat) is
the tool of my choice because its easy-to-use interface. Moreover, they provide
a Docker environment such that developers don't have to worry about installation
steps.

At RIF, we have written some Python scripts to facilitate the annotation process
for image segmentation even further. Instead of dragging your mouse around each
object repeteadly, the scripts implement several classic computer vision
methodologies to extract the outlines of the objects of interest and generate a
good-enough starting point such that you're just fixing the initial estimates.

Feel free to contact me if you're interested in setting up a similar environment
for your
project:
[Consulting Services](https://www.sergiogarciavergara.com/pages/consulting/)

### FiftyOne <a id="headerlink" name="obj-detection-fiftyone" href="#obj-detection-fiftyone" title="Permalink to this headline"></a>

As you annotate images and train your models, you need to be able to visualize
your progress. [FiftyOne](https://github.com/voxel51/fiftyone) is an open source
tool that facilitates the generation and management of your datasets.

The Python scripts we've written at RIF also interact with FiftyOne providing a
seamless solution between image annotation and model training.

# Technical Skills <a id="headerlink" name="obj-detection-skills" href="#obj-detection-skills" title="Permalink to this headline"></a>
------------------

The following summarizes my proficiency in the technical skills I improved on
and acquired while working on the projects described in this post:

<table>
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
  <tr>
    <td class="skills">CVAT: Image Annotation</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick proficient">Proficient</div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="skills">PyTorch</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick competent">Competent</div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="skills">TensorFlow</td>
    <td>
      <div class="rating">
        <div class="line">
          <div class="tick novice">Novice</div>
        </div>
      </div>
    </td>
  </tr>
</table>
