---
layout: post
title: Reference Guide to Blender 4.3
toc: true
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
  * (Right-click to cancel move/rotation. Left-click to confirm.)
* `E`: In Edit Mode, extrude a bone from an existing bone.
* `H`: Hide a selected object while in "Object Mode".
* `Z`: Choose how to view your world (e.g., wireframe vs original).
* `Keypad 0`: Camera mode: view the scene from the camera's perspective.

**Keyboard Combinations**:

* `Shift + A`: Open the "Add" menu to add new objects.
* `Shift + D`: Duplicate object.
* `Shift + Space`: Open the tools panel at your cursor location which contains:
  select box, move, rotate, and scale. (You can also press `T` on the keyboard.)
* `Shift + Right-click`: Click at the location where you want the **3D cursor**
  to appear, which marks the spawning point of a new object and can be used as
  a reference for pivoting.
* `Shift + S`: Select "Cursor to World Origin" to reset the position of the 3D
  cursor to the origin of the map.
* `Ctrl + TAB`: Toggle in and out of "Pose Mode". A bone in an armature needs to
  be selected first.
* `Ctrl + Space`: Make a panel fullscreen. Press again to exit fullscreen view.
* `Ctrl + P`: Parent an object to another after selecting them. Remember, the
  *last* object you select will be the parent.
* `Alt + P`: Open the menu to un-parent two objects. You'll need to click on
  the child first, and then `Alt + P`.

**Mouse Interactions**:

* `Right click on panel edges`: Split screen to add another panel / join panels.
* `Middle-button`: Press and hold to rotate scene.
* `Shift + Middle-button`: Press and hold to move/pan scene.

# Where to Begin? <a id="headerlink" name="blender-begin" href="#blender-begin" title="Permalink to this headline"></a>
------------------

I recommend that complete beginners start by watching the [Interface Overview
video](https://www.youtube.com/watch?v=8XyIYRW_2xk&list=PLa1F2ddGya_-UvuAqHAksYnB0qL9yWDO6&index=3). It
explains how to navigate the different panels and tabs. Open `Blender` and
click away while watching the video.

<!-- This is a screenshot of the available workspaces: -->

<!-- <img src="/assets/img/blender-post/workspaces.png" alt="Blender workspace ribbon screenshot."> -->

**TIP**: Always keep in mind that, at the very bottom of each window, there is
a display showcasing what each click can do for that current view.

# Basic Concepts <a id="headerlink" name="blender-basic-concepts" href="#blender-basic-concepts" title="Permalink to this headline"></a>
------------------

## Modes of Operation <a id="headerlink" name="blender-modes" href="#blender-modes" title="Permalink to this headline"></a>

It's important to understand the difference between the three main modes of
operation: `Object Mode`, `Edit Mode`, and `Pose Mode`. You'll be accomplishing
different tasks in each mode. Trying to implement a task in the wrong mode can
easily mess up your scene so be patient and practice. Refer to the provided
[Cheatsheet](#blender-cheatsheet) to easily switch between modes.

**Object Mode**:

In this mode you can manipulate the scene (i.e., the position and pose of
objects and armatures).

**Edit Mode**:

This mode belongs to a specific object. This means that, you first need to
select the object you want to edit, and then enter Edit Mode. You'll only be
able to edit the selected object. To edit a different object, you'll need to go
back to Object Mode, select the new object, and then re-enter Edit Mode. In
this mode you can actually modify the geometry of the select object. For
example, you can select a corner of a cube, press `G`, and modify its shape as
desired.

**Pose Mode**:

This is where we'll be doing most of our animations. You'll need to understand
[Parenting](#blender-parenting) and [Armatures](#blender-armatures) in order to
map a skeleton to an armature and define the desired poses for that skeleton.

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

<img src="/assets/img/blender-post/parenting.png" class="center" alt="Parenting menu.">

When looking at the "Outline" section on the top-right of the screen
(screenshot below), the children objects will appear listed under the parent
object.

<img src="/assets/img/blender-post/outliner.png" class="center" alt="Outliner menu.">

## Armatures <a id="headerlink" name="blender-armatures" href="#blender-armatures" title="Permalink to this headline"></a>

An armature is a rig of bones parented one to another. You'll want to use
armatures when animating "bodies" (e.g., characters and robotic
manipulators). Basically, armatures allow you to define relationships between
the body's different joints (bones). For example, while animating a robotic
manipulator, you'll want for the robot's end-effector to move accordingly as
you move the base around. Armatures also allow you to set constraints on how
each bone can move. For example, you can restrict a bone to rotate around the
x-axis, and you can restrict another bone to translate in the yz-plane. There
is a list of videos/turorials in the [References](#blender-references) section.

**NOTE**: Make sure you understand [Parenting](#blender-parenting) before you
start playing with armatures.

To add an Armature, use shortcut `Shit + A` and select Armature. An example of
a "bone" and its parts is shown in the screenshot below.

<img src="/assets/img/blender-post/bone-example.png" width="50%" class="center" alt="Armature example.">

Your project can have multiple armatures, and each armature will have multiple
bones. Follow these steps to add a single bone to an existing armature (note
that the new bone will be added to the location of the **3D cursor**):

1. Select the armature.
2. Enter Edit Mode.
3. Click `Shift + A` or click on the "Add" button of the menu on the top-left
   corner of the screen.

<!-- <img src="/assets/img/blender-post/edit-mode-add-bone.png" width="50%" class="center" alt="Menu for adding a bone to an existing armature."> -->

In Object Mode, you can move, scale, and rotate a complete Armature. You **can
not** modify individual bones. This can only be done in Edit Mode.

The following are things you can do with bones and armatures in their
corresponding modes (in parenthesis):

**Parenting** (Edit): You can follow the same steps for Parenting as described
in the previous section. When parenting in Edit Mode you can choose between: 1)
connected, and 2) keep offset. The former will connnect the head of the child
bone to the tail of the parent bone (because connected boned **must** share a
head and a tail). The latter will maintain the child's pose.

**Subdiving** (Edit): You can select an existing bone and subdivide it into
multiple to take its place. Right click on the target bone, and select
"Subdivide". The selected bone will automatically turn into two. You can then
choose how many bones the original will be subdivided into via the pop-up menu
at the bottom left of your screen.

**Extruding** (Edit): You can create a new bone by extriding it from an
existing one. You can press `E` to extrude (see
[Cheatsheet](#blender-cheatsheet)).

**Unparenting** (Edit or Object): You can unparent a bone from others with
`Alt + P` (see [Cheatsheet](#blender-cheatsheet)).

**Bone Axes** (Pose): Display the axes of each individual bone by clicking on
the "Armature data tab" on the bottom left corner of the screen, and check the
"axes" box under the "Viewport Display" section.

For a more in-depth explanation of armatures and bones, [this
video](https://www.youtube.com/watch?v=cZ3o5tjO51s) can be a great resource.

## Keyframes <a id="headerlink" name="blender-keyframes" href="#blender-keyframes" title="Permalink to this headline"></a>

Keyframes are what mark specific positions and orientations for your
animations. Essentially, you're telling `Blender` the specific location and
orientation of your scene at specific points in time. `Blender` then takes care
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

# Drawing Concepts <a id="headerlink" name="blender-drawing" href="#blender-drawing" title="Permalink to this headline"></a>
------------------

<!-- TODO: Should there be a general coloring section? -->

## Color Paletts <a id="headerlink" name="blender-color-palett" href="#blender-color-palett" title="Permalink to this headline"></a>

You have the ability to input a color palett that you can use as a theme for
your scene. The following are the steps to import a color palett and set it as
your there. You can use [this YouTube
video](https://www.youtube.com/watch?v=8NEmx0cHwoI) as reference.

1. Get a color palett (the video has an example on how to get one if you don't
   already have one).
1. Go to the "*Shading*" workspace.
1. Drag and drop the color palett file into the bottom scene.
1. Connect the "Color" output of the color palett box with the "Base Color"
   input of the Principled BSDF box (example shown in screenshow below).
  * Choose the "Closest" option under your palett box, instead of the default
    "Linear".

<img src="/assets/img/blender-post/color-palett-import.png" width="80%" class="center" alt="Color palett import.">

At this point you'll have loaded the color palett and you can see that it's
applied to your scene, seemingly randomly - depending on the structure of the
palett you've loaded. The following are the steps for setting the palett such
that you have more control over selecting colors for specific parts of your
scene:

1. Go to the "*UV Editing*" workspace.
1. Enter Edit Mode and press `A` on the right screen to select all.
1. Click on the left screen, press `A` to select all, press `S` for scale,
   press `0`, and press `Enter`.
  * This will create a dot that you can then move around to select a specific
    color (the before and after is shown in the screenshot below).
1. On the left screen, press `G` to grab the dot and place it on the desired
   color.

<img src="/assets/img/blender-post/color-palett-after.png" width="50%" class="center" alt="Single color selection view.">

Now you can go back to the "*Layout*" workspace and continue your
animation/drawing work. To change colors, go back to the "*UV Editing*"
workspace, press `A` and then `G` on the left screen to move the dot around the
palett and select the desired color.

As a final note, to visualize the colors you've set for the objects in your
scene you can either [render the scene](#blender-render-img) or:
: Under the Layout workspace, at the top-right of the screen, under the
"*Viewport Shading*" menu, select "Texture" (menu is shown in the screenshot
below).

<img src="/assets/img/blender-post/select-texture.png" width="35%" class="center" alt="Select Texture.">

## Render Image <a id="headerlink" name="blender-render-img" href="#blender-render-img" title="Permalink to this headline"></a>

Coming soon ...

## Combining Scenes <a id="headerlink" name="blender-combine-scenes" href="#blender-combine-scenes" title="Permalink to this headline"></a>

Imagine you have two scenes in two different *.blend* files, and you want to
combine them into a single scene. For example, you may have a road on one scene
and a car in a different scene. `Blender` allows you to import the car into the
road scene with ease.

You can import any part of your scene (e.g., armatures, materials, collections,
etc). From the destination *.blend* file click on **File > Append**. Select the
source *.blend* file and then the item to import... and done.

Use [this video](https://www.youtube.com/watch?v=s24kSjRAUNo) as reference for
more details.

## Character Meshing <a id="headerlink" name="blender-character-mesh" href="#blender-character-mesh" title="Permalink to this headline"></a>

Coming soon ...

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

## Pick and Place <a id="headerlink" name="blender-pick-place" href="#blender-pick-place" title="Permalink to this headline"></a>

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

## Switch between camera POVs <a id="headerlink" name="blender-multple-cameras" href="#blender-multple-cameras" title="Permalink to this headline"></a>

Instead of keyframing the camera at different locations to get different points
of view throughout the animation, you can setup multiple cameras and switch
between them. [This video](https://www.youtube.com/watch?v=znsb96lcwaY) is a
great tutorial. As a reference, the following are the main steps summarized:

1.

<!-- # Missing Topics <a id="headerlink" name="blender-missing" href="#blender-missing" title="Permalink to this headline"></a> -->
<!-- ------------------ -->

<!-- `Blender` is an extremely powerful tool, and I barely covered the basics in -->
<!-- this post. Hopefully this post has served as a great intro reference for -->
<!-- beginners out there. Some other concepts not covered in this post are: -->
<!-- * Character meshing -->

<!-- Perhaps one day I'll expand the post to account for more topics and -->
<!-- tutorials. In the meantime, the chat below is always available for questions -->
<!-- and discussions. Happy animating! -->

# References <a id="headerlink" name="blender-references" href="#blender-references" title="Permalink to this headline"></a>
------------------

## General

<div class="ref-links">
<ul>

<li><a href="https://docs.blender.org/manual/en/latest/"
target="_blank">Blender Reference Manual</a></li>

<li><a href="https://www.blender.org/support/tutorials/"
target="_blank">Blender Tutorials</a></li>

<li><a
href="https://www.youtube.com/playlist?list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z"
target="_blank">Blender 4.0 Beginner Donut Tutorial</a></li>

<li><a href="https://www.youtube.com/watch?v=s24kSjRAUNo" target="_blank">Move
Items From One Blender File To Another</a></li>

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

<li><a href="https://www.youtube.com/watch?v=8NEmx0cHwoI" target="_blank">How
To Texture UV Colors In Blender</a></li>

</ul>
</div>
