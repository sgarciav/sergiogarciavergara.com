---
layout: post
title: Block Diagrams in LaTeX
toc: true
date: 2025-01-07
description: Use the TikZ library in LaTeX to draw elegant drawings.
img: tikz-post/control-system-diagram.png # (optional)
---

# About <a id="headerlink" name="tikz-about" href="#tikz-about" title="Permalink to this headline"></a>
------------------

This post assumes that you are already familiar with
[LaTeX](https://www.latex-project.org/). You know how to wite `tex` documents
and how to compile them into PDFs.

If you don't have a working environment for compiling tex documents, you can
use [Overleaf](https://www.overleaf.com/) in your browser to practice.

The intention of this post is to provide a high-level introduction of the
**TikZ package** and explain the basics to get you started with simple
drawings. It is not meant to be a comprehensive guide for its full use. For
more details on how to use the TikZ package, you can refer to the
[Reference](#tikz-references) section. As you go through this tutorial, keep in
mind that there are multiple ways to accomplish the same. [This
guide](https://latexdraw.com/block-diagram-in-latex-step-by-step-tikz-tutorial/)
provides a different path for drawing your diagrams.

## Why TikZ? <a id="headerlink" name="tikz-why" href="#tikz-why" title="Permalink to this headline"></a>

`TikZ` is a powerful LaTeX package that allow us to maintain the elegance of
our documents with aethetically-pleasing drawings. Namely, `TikZ` allows us to
draw diagrams and plots by coding the specific positions and styles we want to
use.

Someone put together
a
[list of available TikZ libraries](https://tex.stackexchange.com/questions/42611/list-of-available-tikz-libraries-with-a-short-introduction#42664) with
some general descriptions. Some examples include:
* drawing block diagrams and flowcharts,
* [a paper folding library](https://tex.stackexchange.com/questions/42611/list-of-available-tikz-libraries-with-a-short-introduction/42673#42673), and
* [structural analysis](https://latex.net/tikz-library-for-structural-analysis/).

This post will provide a bit of insight towards drawing block diagrams and
flowcharts.

## Download this file <a id="headerlink" name="tikz-download" href="#tikz-download" title="Permalink to this headline"></a>

<a href="../assets/docs/tikzplayground.tex" download="tikzplayground.tex">Click
here to download</a>

I provide a sample tex file (named `tikzplayground.tex`) that you can use as a
starting point. You can use it within your environment or copy the text into
Overleaf. You should be able to compile it and generated the pdf out of the
box. This post will reference this sample file throughout the examples.

# Getting Started <a id="headerlink" name="tikz-getting-started" href="#tikz-getting-started" title="Permalink to this headline"></a>
------------------

To start using the TikZ libraries, first include the relevant packages in your
tex file.

``` latex
\usepackage{tkz-euclide}
\usepackage{tikz}
```

Use the `\usetikzlibrary{}` command to include the specific library you want to
use. Our sample file calls the following libraries for drawing block diagrams
and flowcharts:

``` latex
\usetikzlibrary{arrows}
\usetikzlibrary{quotes,angles}
\usetikzlibrary{positioning}
\usetikzlibrary{plotmarks}
\usetikzlibrary{shapes.geometric, arrows}
```

You can then start constructing your diagram as a figure by including the
following to your tex file:

``` latex
\begin{figure}[h]
\begin{center}
\begin{tikzpicture}[auto, node distance=2.7cm, >=latex']
... code ...
\end{tikzpicture}
\end{center}
\end{figure}
```

The following sections describe the code you need to add within the `... code
...` section to draw block diagrams and flowcharts.

## Define Styles <a id="headerlink" name="tikz-define-styles" href="#tikz-define-styles" title="Permalink to this headline"></a>

Before we start drawing, let's define some styles first. This is optional but
I've found it really helpful to define the style/dimensions of your drawing
blocks such that you can just reference them by type in your overall
drawing. These will be the building blocks for your diagrams.

For example, the following defines a rectangular block that can later be
referenced in the code by `block`. Specifically, it defines the shape, its
dimensions, the position of the text, and the color and fill of the box:

``` latex
\tikzstyle{block} = [rectangle, minimum width=2.5cm, minimum height=1cm, text centered, text width=2.7cm, draw=black, fill=white]
```

Similarly, the following defines a circular block that can be referenced in the
code by "sumation":

``` latex
\tikzstyle{sumation} = [circle, minimum width=0.2cm, minimum height=0.5cm, text centered, text width=0.4cm, draw=black, fill=white]
```

There are more building block examples in the
provided [tikzplayground.tex](#tikz-download) file.

# Block Diagrams <a id="headerlink" name="tikz-block-diagrams" href="#tikz-block-diagrams" title="Permalink to this headline"></a>
------------------

## Simple Feedback Diagram

Refer to **Section 1** in the provided [tikzplayground.tex](#tikz-download)
file. The following block diagram describes the transfer function of a
noise-free physical linear system:

<img src="/assets/img/tikz-post/control-system-diagram.png" alt="Block diagram example.">

The code to draw diagrams is composed of two main parts: 1) draw the nodes and
their positions, and 2) draw the arrows/lines to connect the nodes.

Let's look at an example. Let's add the sumation circle to the right if the
`R(s)` input (where `sumation` is a style that is defined at the top of the tex
file):

``` latex
  \node (input) [circle] {R(s)};
  \node (sum) [sumation, right of=input, xshift=-0.4cm] {};
```

* `input` and `sum` are the internal names of each node. It's how the diagram
references each node.
* `circle` and `sumation` are the node types.
* `right of=` and `xshift=` is how we specify exactly where we want each
  node. Each node is positioned relative to another except the first one.
* Text inside the bracket at the end (`{}`) is the text that will be added next
  to the corresponding node.

Now let's connect the `sum` and `input` with an arrow:

``` latex
\draw [arrow] (input) -- node[anchor=north] {} (sum);
```

This line draws an arrow from the `input` node to the `sum` node. The two
dashes (`--`) specify that we're drawing a straight arrow (more complicated
examples in the next section). If we wanted to add text to the arrow, we could
have included text inside the brackets in `[anchor=north] {}`. The cardinal
direction defined by "anchor" determines where the text will be drawn.

## More complicated connections

The TikZ package automatically decides where to draw the base and tip of the
arrow. The default is when the nodes are next to each other (e.g., side to side
or one is above or below the other).

We do have more control over the placement of lines and arrows.

<!-- TODO: add example of -| lines and compass orientation -->

Having this control on where exactly to place arrows and lines comes in handy
when we're structuring more complicated drawing. See the [General
Drawings](#tikz-drawings) section for specific examples.

# Flowcharts <a id="headerlink" name="tikz-flowcharts" href="#tikz-flowcharts" title="Permalink to this headline"></a>
------------------

Drawing flowcharts is very much the same as block diagrams. The same nodes and
arrows concepts apply.

Refer to **Section 2** in the provided [tikzplayground.tex](#tikz-download)
file. You'll see the code for the flowchart below:

<img src="/assets/img/tikz-post/spd-flowchart.png" alt="Flowchart example." class="center-img">

# General Drawings <a id="headerlink" name="tikz-drawings" href="#tikz-drawings" title="Permalink to this headline"></a>
------------------

Refer to **Section 3** in the provided [tikzplayground.tex](#tikz-download)
file. You'll see the code for the drawings below:

TODO: Add a screenshot of the drawings

<!-- <img src="/assets/img/tikz-post/drawings.png" alt="Drawings example."> -->

# References <a id="headerlink" name="tikz-references" href="#tikz-references" title="Permalink to this headline"></a>
------------------

* [A Very Minimal Introduction to TikZ](https://cremeronline.com/LaTeX/minimaltikz.pdf)
* [Block Diagram in LaTeX: Step-by-Step TikZ Tutorial](https://latexdraw.com/block-diagram-in-latex-step-by-step-tikz-tutorial/)
* [Overleaf tutorials](https://www.overleaf.com/learn/latex/LaTeX_Graphics_using_TikZ:_A_Tutorial_for_Beginners_(Part_1)%E2%80%94Basic_Drawing)
* [YouTube series](https://www.youtube.com/watch?v=0yFKxz_Az2g)
