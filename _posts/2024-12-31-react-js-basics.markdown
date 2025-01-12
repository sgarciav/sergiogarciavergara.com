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
this post while I learn about [`React JS`](https://react.dev/) (a JavaScript
library) to build useful and intuitive user interfaces. This post **is not** to
be considered as a full tutorial. It covers the bare minimum to get a beginner
started.

# Where to Begin? <a id="headerlink" name="reactjs-begin" href="#reactjs-begin" title="Permalink to this headline"></a>
------------------

This section describes how to setup your `React` project from scratch. Refer to
the [Basic Concepts](#reactjs-basics) section to learn about `React`.

First, [install
NodeJs](https://github.com/nodesource/distributions?tab=readme-ov-file#installation-instructions). The
main steps are:

``` bash
curl -fsSL https://deb.nodesource.com/setup_23.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
sudo apt-get update && apt-get install -y nodejs
node -v
```

Then, follow [these
instructions](https://react.dev/learn/start-a-new-react-project) for starting a
new `React` project.

`React` has several frameworks and libraries that can help you quickly set up
an application tailored to your specific needs. For example **Next.js** is a
full-stack framework that is powerful for dynamic/static content like blogs,
e-commerce platforms, and dashboards. **Expo**, on the other hand, is a
framework best suited for mobile apps.

Refer to the link above for more details on all the available frameworks. This
post explores the **Expo** framework to develop a mobile app in the [Mobile App
Using Expo](#reactjs-mobile-app) Section.

<!-- TODO: What framework do we use for "starting from existing project"? -->

# Basic Concepts <a id="headerlink" name="reactjs-basics" href="#reactjs-basics" title="Permalink to this headline"></a>
------------------

This section introduces the definitions and general purpose of a few basic
concepts. Other sections in this post may cover more details if needed. [This
video](https://www.youtube.com/watch?v=s2skans2dP4) is a great introduction to
the basic concepts covered in this section, and more.

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
logic and appearance. `React` components are JavaScript functions that return
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

Note that the object passed to the "onClick" prop can't be a function of an
input variable. Invoking, for example, `handleClick(var)`, would make it such
that the function is called immediately as the page is loaded, instead of
waiting for the button to be clicked. As such, you need to pass a **reference
to the function** so that it only executes when the button is clicked. For
example:

``` jsx
function RedAlert() {
  const handleClick = (msg) => {
    alert(msg)
  }

  return (
    <button onClick={() => handleClick(msg)}>
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

## Manage Data <a id="headerlink" name="reactjs-manage-data" href="#reactjs-manage-data" title="Permalink to this headline"></a>

We will leverage the `useState()` function. It's a snapshot of data at any
given time. We can't directly use JS variables becaue they don't cause our app
to re-render.

In the following example, we initialize the state variable *likes* with *0*. In
the same line, we also define the function (*setLikes*) to update the state
variable.

``` jsx
const [ likes, setLikes ] = useState(0);
```

**Controlled Components**

Controlled components use state values to have more predictabel behavior. The
example below displays an input box for the user to type some words. The input
words are put into the state variable *value*, and is controlled by function
*setValue*. As the user types, *setValue* is called, the state variable *value*
is updated, and the input display reads from the state variable.

``` jsx
function ControlledInput() {
  const [ value, setValue ] = useState('')

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
```

<!-- ## Hooks <a id="headerlink" name="reactjs-hooks" href="#reactjs-hooks" title="Permalink to this headline"></a> -->

## Effects <a id="headerlink" name="reactjs-effects" href="#reactjs-effects" title="Permalink to this headline"></a>

Effects are code that reaches outside of our `React` app. Usually, effects can
be done inside [event handlers](#reactjs-event-handling). If you can't run the
effects from an event handler, then leverage the `useEffect()` hook. You can
learn more about `useEffect()` with examples from [this YouTube
video](https://www.youtube.com/watch?v=-4XpG5_Lj_o).

A common example is to fetch data when a component first loads:

``` jsx
useEffect(() => {
  fecthData().then(data => {
    // use data here
  })
}, [])
```

## Dependency Arrays <a id="headerlink" name="reactjs-depend-arr" href="#reactjs-depend-arr" title="Permalink to this headline"></a>

Dependency array serve an essential purpose in `React` hooks. They ensure that
defined functions are only re-created when its dependencies change. Consider
the following function definition:

``` jsx
const functionDef = useCallback((req) => {
  serviceProps.callService(req);
}, [serviceProps.callService]);
```

The `[serviceProps.callService]` at the end of the *useCallback* definition is
the dependency array. If the value of `serviceProps.callService` changes (e.g.,
the parent reassigns it), the dependency array ensures that the *functionDef*
function is updated to use the new `serviceProps.callService`. Without the
dependency array, the *functionDef* function would continue using an outdated
reference to `serviceProps.callService`, potentially causing bugs or unexpected
behavior.

If the dependency array is empty `[]`, the *functionDef* function is only
created once and never updated, regardless of changes in
`serviceProps.callService`.

**When to Include Something in the Dependency Array**

You should include a value in the dependency array if:

* It comes from outside the function (like props, state, or other variables in
  the enclosing scope).
* The behavior of the function depends on it, and it might change over time.

Using our example: `serviceProps.callService` is included because it might
change (e.g., if the parent component reassigns a new function).

<!-- TODO -->
<!-- # ROS Integration <a id="headerlink" name="reactjs-basics" href="#reactjs-basics" title="Permalink to this headline"></a> -->
<!-- ------------------ -->

# Material UI <a id="headerlink" name="reactjs-mui" href="#reactjs-mui" title="Permalink to this headline"></a>
------------------

Now that we have some knowledge about the basic concepts, how to we create and
style our app? [`Material UI`](https://mui.com/material-ui/) is the `React`
library that encompasses all the material design concepts you'll need.

Execute the following inside your project's directory to install the MUI
library:

    npm install @mui/material @mui/styles

Digging deep into all the available **MUI components** is out of the scope of
this post. You can refer to `MUI`'s main page and explore each of them. [This
link](https://mui.com/material-ui/all-components/) will take you to the list
and usage explanation of all MUI components:

<img src="/assets/img/reactjs-post/mui-components.png" class="center" style="max-height: 750px; max-width: 750px;" alt="Screenshot of some available MUI components.">

# Mobile App Using Expo  <a id="headerlink" name="reactjs-mobile-app" href="#reactjs-mobile-app" title="Permalink to this headline"></a>
------------------

For the purpose of this post, I've decided to explore the `Expo` library. This
section will summarize [these
instructions](https://docs.expo.dev/tutorial/introduction/) for setting up our
first mobile app.

## Initial Setup <a id="headerlink" name="reactjs-app-setup" href="#reactjs-app-setup" title="Permalink to this headline"></a>

Execute the following to create the project using the default template:

    npx create-expo-app@latest PROJECT_NAME

At this point, you should be able to rely on the template and start developing
your app. However, we'll continue following the instructions from the link
above. Let's execute the following to remove the boilerplate code:

    cd PROJECT_NAME
    npm run reset-project

Execute the following command to start the development server from the
terminal, which will give you access to useful development tools:

    cd PROJECT_NAME
    npx expo start

For the web browser version, type `w`. For the Android version, download the
[Expo Go](https://expo.dev/go) app and scan the QR code on the screen. This
post will focus on the Android version. You can follow instructions in the
original link for iOS development.

## Styling <a id="headerlink" name="reactjs-app-style" href="#reactjs-app-style" title="Permalink to this headline"></a>

For styling our app, I want to rely on the **Material UI** library. Material UI
is primarily designed for web projects, but there are libraries like
[Material-UI for React
Native](https://github.com/xotahal/react-native-material-ui) that provides
Material Design components for React Native.


<!-- Refer to the [Material UI](#reactjs-mui) Section to learn how to install and -->
<!-- use the library. -->



## Development <a id="headerlink" name="reactjs-app-dev" href="#reactjs-app-dev" title="Permalink to this headline"></a>

The `app/index.tsx` file is the entry point of our app and is executed when the
development server starts. This is a [JSX](#reactjs-jsx) file.

## Troubleshooting <a id="headerlink" name="reactjs-app-troubleshooting" href="#reactjs-app-troubleshooting" title="Permalink to this headline"></a>

### Cannot find module

Sometimes, corrupted caches or incomplete installations cause these
issues. Clear them by execcuting:

    cd PROJECT_NAME
    rm -rf node_modules package-lock.json

Clear the npm cache:

    npm cache clean --force

Reinstall dependencies:

    npm install

Start the server again:

    npx expo start

<!-- ## Project <a id="headerlink" name="reactjs-jsx" href="#reactjs-jsx" title="Permalink to this headline"></a> -->

<!-- TODO: complete this section -->

# Start from Existing Project <a id="headerlink" name="reactjs-existing-proj" href="#reactjs-existing-proj" title="Permalink to this headline"></a>
------------------

**Scenario**: Imagine you've build your've static webpage using something like
[Jekyll](https://jekyllrb.com/), and you're hosting it for the world to
access. Now that you're familiar with `React`, you desire to apply what you've
learned. The good news is that you **do not** need to start from scratch.

Let's go through [these
instructions](https://react.dev/learn/add-react-to-an-existing-project) and
learn how to add `React` to an existing project.

<!-- TODO: complete this section as you updated your website to match -->

# References <a id="headerlink" name="reactjs-references" href="#reactjs-references" title="Permalink to this headline"></a>
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

<li><a href="https://react.dev/learn/add-react-to-an-existing-project"
target="_blank">Add React to an Existing Project</a></li>

</ul> <!-- End General list -->
</div> <!-- End class -->

## Material UI

<div class="ref-links">
<ul>

<li><a href="https://www.youtube.com/watch?v=FB-sKY63AWo" target="_blank">Learn
MUI (Material UI) in under 10 min!</a></li>

<li><a href="https://mui.com/material-ui/all-components/"
target="_blank">Material UI components</a></li>

</ul> <!-- End General list -->
</div> <!-- End class -->
