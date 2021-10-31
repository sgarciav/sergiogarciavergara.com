---
layout: post
title: Reference Guide to Blender 2.9
date: 2021-10-19
description: Reference guide for interacting with Blender 2.9
img: blender-post/blender-logo.png # (optional)
fig-caption: www.blender.org # (optional)
---

# About <a id="headerlink" name="blender-about" href="#blender-about" title="Permalink to this headline"></a>
------------------

<!-- TODO: write about how this is for animation only -->

`Blender` is a powerful tool for creating animations.

I'm writing this post as I learn how to interact with
`Blender`. The [official website](https://www.blender.org/) is an excellent
resource. The intention of this post is to keep track of what I learn as I go so
that 1) I can easily recall what I've learned, and 2) I can refer to the
material as I practice using the software. Hopefully it'll serve as a learning
base for others.

As you read through, keep in mind that `Blender` offers a wild variety of
features and can be used for SO many purposes. This post is *not* a turotial

I used the references listed in the [References](#blender-referneces) section.

# Installation <a id="headerlink" name="blender-installation" href="#blender-installation" title="Permalink to this headline"></a>
------------------

To run `Blender` in Ubuntu, download the executable
from [this link](https://www.blender.org/download/). You should be able to run
Blender by executing:

``` shell
$ cd /path/to/blender-xxx
$ ./blender
```

# Interacting with Blender <a id="headerlink" name="blender-interactions" href="#blender-interactions" title="Permalink to this headline"></a>
------------------

## Hotkey Cheatsheet <a id="headerlink" name="blender-hotkeys" href="#blender-hotkeys" title="Permalink to this headline"></a>

<!-- TODO: Consider making this cheatsheet into a downloadable PDF so others can -->
<!-- reference. -->

<!-- TODO: Convert this section into a table and better organize them - not by -->
<!-- keyboard or combinations bla bla but by their functions. -->
<!-- See: https://www.tablesgenerator.com/markdown_tables -->

The following is a list of hotkeys to facilitate interactions with `Blender's`
interface:

**Keyboard**:

* `TAB`: Toggle in and out of "Edit Mode".
* While in "Object Mode":
  * `G`: Grab
  * `R`: Rotate
  * `S`: Scale
* `H`: Hide a selected object while in "Object Mode".
* `Z`: Choose how to view your world (e.g., wireframe vs original).
* `Keypad 0`: Camera moder: view the scene from the camera's perspective.

**Keyboard Combinations**:

* `Shift + A`: Open the "Add" menu to add new objects.
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

## Main Workspaces <a id="headerlink" name="blender-workspaces" href="#blender-workspaces" title="Permalink to this headline"></a>

This section describes in general what you can do with some of the
workspaces. The
[Interface Overview video](https://www.youtube.com/watch?v=8XyIYRW_2xk&list=PLa1F2ddGya_-UvuAqHAksYnB0qL9yWDO6&index=3) explains
how to navigate the different panels and tabs.

This is a screenshot of the available workspaces:

<img src="/assets/img/blender-post/workspaces.png" alt="Blender workspace ribbon screenshot.">

**Layout**

Main workspace where you can modify your objects and your scene.

**UV Editing**

**Sculpting**

# Animating <a id="headerlink" name="blender-animating" href="#blender-animating" title="Permalink to this headline"></a>
------------------

The first thing you'll want to do before you start animating is make sure you
apply all transformations to all of your objects. Read more
details
[here](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/apply.html),
but essentially what you're doing is reseting the values of the objects'
location, rotation, and scale.

Follow these steps to apply all transforms to an object:
1. While in "Object Mode", select an object.
2. Click `Ctrl + A`.
3. Select "All Transforms".

## Parenting <a id="headerlink" name="blender-parenting" href="#blender-parenting" title="Permalink to this headline"></a>

Parenting is a fundamental part of the rigging process when creating
animations. In general, parenting allows you to define an object's position and
orientation relative to another object - i.e., the child object inherits the
transformations of its parent object's. Remember, the *last* object you select
will be the parent. There is a list of videos/turorials in
the [References](#blender-references) section.

#bb bg## Object Constraints <a id="headerlink" name="blender-obj-constraints" href="#blender-obj-constraints" title="Permalink to this headline"></a>

<!-- TODO: study how to parent with limits -->

## Armatures <a id="headerlink" name="blender-armatures" href="#blender-armatures" title="Permalink to this headline"></a>

You'll want to use armatures when animating "bodies" (e.g., characters and
robotic manipulators). Basically, armatures allow you to define relationships
between the body's different joints. For example, while animating a robotic
manipulator, you'll want for the robot's end-effector to move accordingly as you
move the base around. Armatures also allow you to set constraints on how each
bone can move. For example, you can restrict a bone to rotate around the x-axis,
and you can restrict another bone to translate in the yz-plane. There is a list
of videos/turorials in the [References](#blender-references) section.

Each bone in an armature has three parts: head (base of the bone), body, and
tail (narrower end of the bone). The pivot point of a bone is the head. An
armature is a rig of bones parented one to another. Make sure you
understand [parenting](#blender-parenting) first before you start playing with
armatures.

## Keyframes <a id="headerlink" name="blender-keyframes" href="#blender-keyframes" title="Permalink to this headline"></a>

Keyframes are what mark specific positions and orientations for your animations.

record location and orientation while in "Pose Mode"
add keyframes in pose mode

# References <a id="headerlink" name="blender-references" href="#blender-references" title="Permalink to this headline"></a>
------------------

**General**:

* [Blender 2.9 Reference Manual](https://docs.blender.org/manual/en/latest/)
* [Blender Tutorials](https://www.blender.org/support/tutorials/)
* [Blender 2.80 Fundamentals YouTube Series](https://www.youtube.com/playlist?list=PLa1F2ddGya_-UvuAqHAksYnB0qL9yWDO6)

**Animating**:

* [Keyframes for beginners](https://www.youtube.com/watch?v=WB8dK3iX_Uw)
* Armatures:
  * [Blender 2.8 Fundamentals](https://www.youtube.com/watch?v=cZ3o5tjO51s)
  * [Creating an armature for your character](https://www.youtube.com/watch?v=uK7TTDn1rZ8)
* [Pickup and Drop Object](https://www.youtube.com/watch?v=XdhGscPHIk0)
* [Parenting](https://www.youtube.com/watch?v=GS452KMVWKA) <a id="headerlink" name="blender-ref-parenting" href="#blender-ref-parenting" title="Permalink to this headline"></a>

**Interactions between Objects**:

* [All constraints explained](https://www.youtube.com/watch?v=81SiXoAWXuU)

**Coloring**:

* [How to delete all unused material from a Blender file](https://www.youtube.com/watch?v=bIob1Mgblm0&t=48s)
