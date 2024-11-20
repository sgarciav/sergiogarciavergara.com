---
layout: post
title: React JS Basics
toc: true
date: 2024-10-19
description: The very basics about React JS.
img: reactjs-post/reactjs-logo.png # (optional)
fig-caption: www.laxaar.com # (optional)
---

# About <a id="headerlink" name="reactjs-about" href="#reactjs-about" title="Permalink to this headline"></a>
------------------

At the time of writing this post, I know nothing about JavaScript. I am writing
this post while I learn about [`React JS`](https://react.dev/) to build useful
and intuitive user interfaces. This post **is not** to be considered as a full
tutorial. It covers the bare minimum to get a beginner started.

<!-- ## Why React JS? <a id="headerlink" name="reactjs-why" href="#reactjs-why" title="Permalink to this headline"></a> -->

## Where to Begin? <a id="headerlink" name="reactjs-begin" href="#reactjs-begin" title="Permalink to this headline"></a>

[This YouTube video](https://www.youtube.com/watch?v=s2skans2dP4) is a great
way to get introduced to React JS. You can then follow [React's main
webpage](https://react.dev/learn) for a quickstart.

# Basic Concepts <a id="headerlink" name="reactjs-basics" href="#reactjs-basics" title="Permalink to this headline"></a>
------------------

This section introduces the definitions and general purpose of a few basic
concepts. Other sections in this post may cover more details if needed.

## Components <a id="headerlink" name="reactjs-components" href="#reactjs-components" title="Permalink to this headline"></a>

React apps are made out of *components*. A component is a piece of the user
interface that has its own logic and appearance. React components are
JavaScript functions that return markup.

## JSX <a id="headerlink" name="reactjs-jsx" href="#reactjs-jsx" title="Permalink to this headline"></a>

JSX stands for *JavaScript XML*. We use JSX instead of writing traditional HTML
as it provides additional functionality. The example below shows how to
introduce a variable into your HTML code:

``` javascript
function Profile({name}) {
  return (
    <div>
      <h1>Hello, my name is {name}</h1>
    </div>
  )
}
```

Web browsers can't read JSX, so this code goes into a compiler and is converted
into traditional HTML and JavaScript.

For those looking to port your existing HTML to JSX, you can use this [html to
jsx tool](https://transform.tools/html-to-jsx) to help you make the conversion.

## Props <a id="headerlink" name="reactjs-props" href="#reactjs-props" title="Permalink to this headline"></a>

### Lifecycles <a id="headerlink" name="reactjs-lifecycles" href="#reactjs-lifecycles" title="Permalink to this headline"></a>

Mounting
Updating
Unmounting

# ROS Integration <a id="headerlink" name="reactjs-basics" href="#reactjs-basics" title="Permalink to this headline"></a>
------------------

# References <a id="headerlink" name="blender-references" href="#blender-references" title="Permalink to this headline"></a>
------------------

## General

<div class="ref-links">
<ul>

<li><a href="https://www.youtube.com/watch?v=s2skans2dP4" target="_blank">React
JS Explained in 10 Minutes</a></li>

<li><a href="https://react.dev/learn" target="_blank">React Documentation:
Quick Start</a></li>

<li><a href="https://transform.tools/html-to-jsx" target="_blank">Convert html
to JSX</a></li>

</ul> <!-- End General list -->
</div> <!-- End class -->

<!-- ## Animating -->

<!-- <div class="ref-links"> -->
<!-- <ul> -->

<!-- <li><a href="https://www.youtube.com/watch?v=GS452KMVWKA" -->
<!-- target="_blank">Parenting: Blender 2.8 Fundamentals</a></li> -->

<!-- <li><strong>Keyframes</strong>: -->
<!--   <ul> -->

<!--     <li><a href="https://www.youtube.com/watch?v=SZJswvw9wEs" -->
<!-- target="_blank">Blender 2.80 Fundamentals</a></li> -->

<!--     <li><a href="https://www.youtube.com/watch?v=WB8dK3iX_Uw" -->
<!-- target="_blank">Keyframes for begineers</a></li> -->

<!--   </ul> -->
<!-- </li> -->

<!-- <li><strong>Armatures</strong>: -->
<!--   <ul> -->

<!--     <li><a href="https://www.youtube.com/watch?v=cZ3o5tjO51s" -->
<!-- target="_blank">Blender 2.80 Fundamentals</a></li> -->

<!--     <li><a href="https://www.youtube.com/watch?v=uK7TTDn1rZ8" -->
<!-- target="_blank">Creating an armature for your character</a></li> -->

<!--   </ul> -->
<!-- </li> -->

<!-- <li><a href="https://www.youtube.com/watch?v=IAiTYaiZmY0" -->
<!-- target="_blank">Setting up keyframes for the armature's bones</a></li> -->

<!-- <li><a href="https://www.youtube.com/watch?v=jXCq8CncEeA" target="_blank">Pick -->
<!-- up and Drop Objects</a> (Child of constraint example)</li> -->

<!-- <li><a href="https://www.youtube.com/watch?v=znsb96lcwaY" -->
<!-- target="_blank">Multiple cameras and rig paths</a></li> -->

<!-- <li><a href="https://www.youtube.com/watch?v=tzSesvjEEds" -->
<!-- target="_blank">Object visibility on/off animation</a></li> -->

<!-- </ul> -->
<!-- </div> -->

<!-- ## Interactions between Objects -->

<!-- <div class="ref-links"> -->
<!-- <ul> -->

<!-- <li><a href="https://www.youtube.com/watch?v=81SiXoAWXuU" target="_blank">All -->
<!-- constraints explained</a></li> -->

<!-- <li><a href="https://www.youtube.com/watch?v=j08-Hzf33yQ" -->
<!-- target="_blank">Creating a pose library</a></li> -->

<!-- </ul> -->
<!-- </div> -->
