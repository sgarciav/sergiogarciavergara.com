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

`React` is a JavaScript library.

<!-- ## Why React JS? <a id="headerlink" name="reactjs-why" href="#reactjs-why" title="Permalink to this headline"></a> -->

## Where to Begin? <a id="headerlink" name="reactjs-begin" href="#reactjs-begin" title="Permalink to this headline"></a>

[This YouTube video](https://www.youtube.com/watch?v=s2skans2dP4) is a great
way to get introduced to React JS. You can then follow [React's main
webpage](https://react.dev/learn) for a quickstart.

# Basic Concepts <a id="headerlink" name="reactjs-basics" href="#reactjs-basics" title="Permalink to this headline"></a>
------------------

This section introduces the definitions and general purpose of a few basic
concepts. Other sections in this post may cover more details if needed.

## JSX <a id="headerlink" name="reactjs-jsx" href="#reactjs-jsx" title="Permalink to this headline"></a>

JSX stands for *JavaScript XML*. We use JSX instead of writing traditional HTML
as it provides additional functionality. The example below shows how to
introduce a variable into your HTML code:

``` jsx
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

## Components <a id="headerlink" name="reactjs-components" href="#reactjs-components" title="Permalink to this headline"></a>

React apps are made out of *components*, the building blocks of an
application. A component is a piece of the user interface that has its own
logic and appearance. React components are JavaScript functions that return
markup ([JSX](#reactjs-jsx)).

*React framgment* is an empty component that allows you to return more than one
parent element. For example:

``` jsx
function Profile({name}) {
  return (
    <>
      <h1>Hello, my name is {name}</h1>
    </>
  )
}
```

## Props <a id="headerlink" name="reactjs-props" href="#reactjs-props" title="Permalink to this headline"></a>

*Props* are used to pass data from one component to another. They refer to
"properties on an object", which is what you get in the parameters of each
component. You can pass anything as a prop. You can even pass other components
as props.

To use a prop:

1. Make a prop and give it a value. In this example, the prop is `text`, and
   the value assigned to it is `'Hello'`:

    ``` jsx
    <Greeting text={'Hello'} />
    ```

2. Use the prop value in the component you passed it to:

    ``` jsx
    function Greeting(props) {
      return <h1>{props.text}</h1>
    }
    ```

In the following example, we'll assign a callback function to the prop (in this
case, an [event handling](#reactjs-event-handling) function:

``` jsx
function RedAlert() {
  const handleClick = () => {
    alert('ALERT')
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  )
}
```

## Event Handling <a id="headerlink" name="reactjs-event-handling" href="#reactjs-event-handling" title="Permalink to this headline"></a>

Event handling is how you process the interactions with your interface (e.g.,
clicks, mouse movements, and keyboard events). `React` has built in handling
functions like *onClick*, *onChange*, and *onSubmit*.

<!-- ### Lifecycles <a id="headerlink" name="reactjs-lifecycles" href="#reactjs-lifecycles" title="Permalink to this headline"></a> -->

<!-- Mounting -->
<!-- Updating -->
<!-- Unmounting -->

<!-- # ROS Integration <a id="headerlink" name="reactjs-basics" href="#reactjs-basics" title="Permalink to this headline"></a> -->
<!-- ------------------ -->

# References <a id="headerlink" name="blender-references" href="#blender-references" title="Permalink to this headline"></a>
------------------

## General

<div class="ref-links">
<ul>

<li><a href="https://www.youtube.com/watch?v=s2skans2dP4" target="_blank">React
JS Explained in 10 Minutes</a></li>

<li><a href="https://react.dev/learn" target="_blank">React Documentation:
Quick Start</a></li>

<li><a href="https://www.youtube.com/watch?v=wIyHSOugGGw" target="_blank">Every
React Concept Explained in 12 Minutes</a></li>

<li><a href="https://transform.tools/html-to-jsx" target="_blank">Convert html
to JSX</a></li>

</ul> <!-- End General list -->
</div> <!-- End class -->
