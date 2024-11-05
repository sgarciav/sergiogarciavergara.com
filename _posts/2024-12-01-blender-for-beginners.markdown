---
layout: post
title: Reference Guide to Blender 4.3
date: 2024-11-01
description: Reference guide for interacting with Blender 4.3
img: blender-post/blender-logo.png # (optional)
fig-caption: www.blender.org # (optional)
---

# About <a id="headerlink" name="blender-about" href="#blender-about" title="Permalink to this headline"></a>
------------------

`Blender` is a powerful open-source software tool for creating animations. It's
one of the animation tools used by Pixar. This post is not intended to serve as
a tutorial for learning how to create animations (the [official
website](https://www.blender.org/) is an excellent resource for that). I'm
writing this post to keep track of what I learn as I go. I want to create a
reference that summarizes the main concepts such that I can refer to it
whenever I forget something. Hopefully it can serve as a reference guide for
others as well.

As you read through this post, keep in mind that `Blender` offers a wild
variety of features and can be used for so many purposes. There is no better
way to learn how to use this software than by playing with it.

Refer to the [References](#blender-referneces) section for the links/tutorials
I followed while writing this post.

## Index <a id="headerlink" name="blender-index" href="#blender-index" title="Permalink to this headline"></a>

Thsi post is organized as follows:

* [Installation](#blender-installation)
* [Hotkey Cheatsheet](#blender-cheatsheet)
* [Basic Concepts](#blender-basic-concepts)
  * [Parenting](#blender-parenting)
  * [Armatures](#blender-armatures)
  * [Modes](#blender-modes)
  * [Pose Library](#blender-pose-library)
  * [Object Constraints](#blender-obj-constraints)
* [Animation Sequences](#blender-animation-seq)
* [References](#blender-references)

# Installation <a id="headerlink" name="blender-installation" href="#blender-installation" title="Permalink to this headline"></a>
------------------

To run `Blender` in Ubuntu, download the executable
from [this link](https://www.blender.org/download/). You should be able to run
Blender by executing:

``` shell
$ cd /path/to/blender-xxx
$ ./blender
```

# Hotkey Cheatsheet <a id="headerlink" name="blender-cheatsheet" href="#blender-cheatsheet" title="Permalink to this headline"></a>
------------------

<!-- TODO: Consider making this cheatsheet into a downloadable PDF so others can -->
<!-- reference. -->

<!-- TODO: Convert this section into a table and better organize them - not by -->
<!-- keyboard or combinations bla bla but by their functions. -->
<!-- See: https://www.tablesgenerator.com/markdown_tables -->

<!-- The following is a list of hotkeys to facilitate interactions with `Blender's` -->
<!-- interface: -->

<!-- | Operation | Command | -->
<!-- |-----------|:---------:| -->
<!-- |    sss       | eeeeee  | -->
<!-- |           |         | -->
<!-- |           |         | -->

**Keyboard**:

* `TAB`: Toggle in and out of "Edit Mode".
* While in "Object Mode":
  * `G`: Grab
  * `R`: Rotate
  * `S`: Scale
* `H`: Hide a selected object while in "Object Mode".
* `Z`: Choose how to view your world (e.g., wireframe vs original).
* `Keypad 0`: Camera mode: view the scene from the camera's perspective.

**Keyboard Combinations**:

* `Shift + A`: Open the "Add" menu to add new objects.
* `Shift + D`: Duplicate object.
* `Shift + Space`: Open the tools panel at your cursor location which contains:
  select box, move, rotate, and scale. (You can also press `T` on the keyboard.)
* `Shift + Right-click`: Click at the location where you want the 3D cursor to
  appear, which marks the spawning point of a new object and can be used as a
  reference for pivoting.
* `Shift + S`: Select "Cursor to World Origin" to reset the position of the 3D
  cursor to the origin of the map.
* `Ctrl + TAB`: Toggle in and out of "Pose Mode". A bone in an armature needs to
  be selected first.
* `Ctrl + Space`: Make a panel fullscreen. Press again to exit fullscreen view.
* `Ctrl + P`: Parent an object to another after selecting them. Remember, the
  *last* object you select will be the parent.

**Mouse Interactions**:

* `Right click on panel edges`: split scren to add another panel / join panels.

<!-- ## Main Workspaces <a id="headerlink" name="blender-workspaces" href="#blender-workspaces" title="Permalink to this headline"></a> -->

<!-- This section describes in general what you can do with some of the -->
<!-- workspaces. The -->
<!-- [Interface Overview video](https://www.youtube.com/watch?v=8XyIYRW_2xk&list=PLa1F2ddGya_-UvuAqHAksYnB0qL9yWDO6&index=3) explains -->
<!-- how to navigate the different panels and tabs. -->

<!-- This is a screenshot of the available workspaces: -->

<!-- <img src="/assets/img/blender-post/workspaces.png" alt="Blender workspace ribbon screenshot."> -->

<!-- <\!-- TODO: Explain how to insert a color image pallet to color your objects -\-> -->

<!-- **Layout**: Main workspace where you can modify your objects and your scene. -->
<!-- **UV Editing**: -->
<!-- **Sculpting**: -->

# Basic Concepts <a id="headerlink" name="blender-basic-concepts" href="#blender-basic-concepts" title="Permalink to this headline"></a>
------------------

## Parenting <a id="headerlink" name="blender-parenting" href="#blender-parenting" title="Permalink to this headline"></a>

Parenting is a fundamental part of the rigging process when creating
animations. In general, parenting allows you to define an object's position and
orientation relative to another object - i.e., the child object inherits the
transformations of its parent object's. Remember, the *last* object you select
will be the parent. There is a list of videos/turorials in
the [References](#blender-references) section.

To parent an object to another:
1. `Left-click` on the child object
2. `Shift + Left-click` on the parent object
3. `Ctrl + P` and select the appropriate parenting option from the menu
(screenshot below)

<img src="/assets/img/blender-post/parenting.png" alt="Parenting menu.">

## Armatures <a id="headerlink" name="blender-armatures" href="#blender-armatures" title="Permalink to this headline"></a>

An armature is a rig of bones parented one to another. You'll want to use
armatures when animating "bodies" (e.g., characters and robotic
manipulators). Basically, armatures allow you to define relationships between
the body's different joints (bones). For example, while animating a robotic
manipulator, you'll want for the robot's end-effector to move accordingly as you
move the base around. Armatures also allow you to set constraints on how each
bone can move. For example, you can restrict a bone to rotate around the x-axis,
and you can restrict another bone to translate in the yz-plane. There is a list
of videos/turorials in the [References](#blender-references) section.

Make sure you understand [parenting](#blender-parenting) before you start
playing with armatures.

## Modes <a id="headerlink" name="blender-modes" href="#blender-modes" title="Permalink to this headline"></a>

It's important to understand the different between the three main modes of
operation: Object Mode, Pose Mode, and Edit Mode. You'll be accomplishing
different tasks in each mode. Trying to implement a task in the wrong mode can
easily mess up your scene so be patient and practice. Refer to the
provided [cheatsheet](#blender-cheatsheet) to easily switch between modes.

### Object Mode <a id="headerlink" name="blender-obj-mode" href="#blender-obj-mode" title="Permalink to this headline"></a>

### Pose Mode <a id="headerlink" name="blender-pose-mode" href="#blender-pose-mode" title="Permalink to this headline"></a>

### Edit Mode <a id="headerlink" name="blender-edit-mode" href="#blender-edit-mode" title="Permalink to this headline"></a>

## Keyframes <a id="headerlink" name="blender-keyframes" href="#blender-keyframes" title="Permalink to this headline"></a>

Keyframes are what mark specific positions and orientations for your
animations. Essentially, you're telling `Blender` the specific location and
orientation of your scene at specific points in time. `Blender` them takes care
of interpolating between the keyframes to generate a smooth animation.


<!-- This is true for animating bones and armatures -->
record location and orientation while in "Pose Mode"
add keyframes in pose mode

## Pose Library <a id="headerlink" name="blender-pose-library" href="#blender-pose-library" title="Permalink to this headline"></a>

Perhaps you've found out by now that it can be tedious to define

Enter the `pose libraries`. They are exactly what they sound like.

https://www.youtube.com/watch?v=j08-Hzf33yQ

## Object Constraints <a id="headerlink" name="blender-obj-constraints" href="#blender-obj-constraints" title="Permalink to this headline"></a>

<!-- TODO: study how to parent with limits -->

# Animation Sequences <a id="headerlink" name="blender-animation-seq" href="#blender-animation-seq" title="Permalink to this headline"></a>
------------------

This section describes some specific animation sequences that I've learned from
following several tutorials. I summarize the steps for each animation here to
remind myself of the steps so I don't have to look through several videos again
if and when I forget. All the links are in the [References](#blender-references)
section.

<!-- TODO: is this true? -->
<!-- Moreover, before any animation takes place, you should first apply all -->
<!-- transformations to all of your objects. Read more -->
<!-- details -->
<!-- [here](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/apply.html), -->
<!-- but essentially what you're doing is reseting the values of the objects' -->
<!-- location, rotation, and scale. -->

<!-- Follow these steps to apply all transforms to an object: -->
<!-- 1. While in "Object Mode", select an object. -->
<!-- 2. Click `Ctrl + A`. -->
<!-- 3. Select "All Transforms". -->

## Pick and Drop <a id="headerlink" name="blender-pick-drop" href="#blender-pick-drop" title="Permalink to this headline"></a>

<!-- TODO: add a GIF of some pick up animation you do -->

Picking up an object in one location and dropping it in a different location is
a very useful animation
sequence. [This video](https://www.youtube.com/watch?v=jXCq8CncEeA) is a great
tutorial. It explains how to use the "Child Of" constraint to achieve this
sequence. As a reference, the following are the main steps summarized:

1. Select the start point in the keyframe timeline.
2. Key in the keyframe

These steps

You can accomplish the same behavior with objects instead of having to setup the
armature for the object that will be picked up.

1.

## Switch between different camera POVs <a id="headerlink" name="blender-multple-cameras" href="#blender-multple-cameras" title="Permalink to this headline"></a>

Instead of keyframing the camera at different locations to get different points
of view throughout the animation, you can setup multiple cameras and switch
between them. [This video](https://www.youtube.com/watch?v=znsb96lcwaY) is a
great tutorial. As a reference, the following ate the main steps summarized:

1.

# References <a id="headerlink" name="blender-references" href="#blender-references" title="Permalink to this headline"></a>
------------------

## General

<div class="ref-links">
<ul>

<li><a href="https://docs.blender.org/manual/en/latest/"
target="_blank">Blender Reference Manual</a></li>

<li><a href="https://www.blender.org/support/tutorials/"
target="_blank">Blender Tutorials</a></li>

<li><a href="https://www.youtube.com/watch?v=B0J27sf9N1Y"
target="_blank">Blender Tutorials for Complete Beginners - Part 1</a></li>

<!-- <li><a -->
<!-- href="https://www.youtube.com/playlist?list=PLa1F2ddGya_-UvuAqHAksYnB0qL9yWDO6" -->
<!-- target="_blank">Blender 2.80 Fundamentals YouTube Series</a> -->

<!-- <ul> -->

<!-- <li><a -->
<!-- href="https://www.youtube.com/watch?v=RDbrOpnIY7Q&list=PLa1F2ddGya_-UvuAqHAksYnB0qL9yWDO6&index=22" -->
<!-- target="_blank">Three point lighting</a></li> -->

<!-- </ul> -->
<!-- </li> -->

</ul> <!-- End General list -->
</div> <!-- End class -->

## Animating

<div class="ref-links">
<ul>

<li><a href="https://www.youtube.com/watch?v=GS452KMVWKA"
target="_blank">Parenting: Blender 2.8 Fundamentals</a></li>

<li><strong>Keyframes</strong>:
  <ul>

    <li><a href="https://www.youtube.com/watch?v=SZJswvw9wEs"
target="_blank">Blender 2.80 Fundamentals</a></li>

    <li><a href="https://www.youtube.com/watch?v=WB8dK3iX_Uw"
target="_blank">Keyframes for begineers</a></li>

  </ul>
</li>

<li><strong>Armatures</strong>:
  <ul>

    <li><a href="https://www.youtube.com/watch?v=cZ3o5tjO51s"
target="_blank">Blender 2.80 Fundamentals</a></li>

    <li><a href="https://www.youtube.com/watch?v=uK7TTDn1rZ8"
target="_blank">Creating an armature for your character</a></li>

  </ul>
</li>

<li><a href="https://www.youtube.com/watch?v=IAiTYaiZmY0"
target="_blank">Setting up keyframes for the armature's bones</a></li>

<li><a href="https://www.youtube.com/watch?v=jXCq8CncEeA" target="_blank">Pick
up and Drop Objects</a> (Child of constraint example)</li>

<li><a href="https://www.youtube.com/watch?v=znsb96lcwaY"
target="_blank">Multiple cameras and rig paths</a></li>

<li><a href="https://www.youtube.com/watch?v=tzSesvjEEds"
target="_blank">Object visibility on/off animation</a></li>

</ul>
</div>

## Interactions between Objects

<div class="ref-links">
<ul>

<li><a href="https://www.youtube.com/watch?v=81SiXoAWXuU" target="_blank">All
constraints explained</a></li>

<li><a href="https://www.youtube.com/watch?v=j08-Hzf33yQ"
target="_blank">Creating a pose library</a></li>

</ul>
</div>

## Drawing and Coloring

<div class="ref-links">
<ul>

<li><a href="https://www.youtube.com/watch?v=bIob1Mgblm0&t=48s"
target="_blank">How to delete all unused material from a Blender file</a></li>

<li><a href="https://www.youtube.com/watch?v=oZAddnGxjNU" target="_blank">Change
object origin</a></li>

</ul>
</div>
