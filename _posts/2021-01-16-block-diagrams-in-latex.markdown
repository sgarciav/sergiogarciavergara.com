---
layout: post
title: Block Diagrams in LaTeX
date: 2021-01-15
description: Use the TikZ library in LaTeX to draw elegant drawings.
img: # control-system-diagram.png # (optional)
---

This post assumes that you are already familiar
with [LaTeX](https://www.latex-project.org/). This means that you have a working
knowledge of writing tex documents and compiling them into PDFs. If you don't
have a working environment for compiling tex documents, you can
use [Overleaf](https://www.overleaf.com/) in your browser to practice.

The intention of this post is to provide a high-level introduction of the **TikZ
package** and explain the basics to get you started with simple drawings. It is
not meant to be a comprehensive guide for its full use. For more details on how
to use the TikZ package, you can refer to the links at the bottom of this post.

## Download this file <a id="headerlink" name="tikz-download" href="#tikz-download" title="Permalink to this headline"></a>

<a href="../assets/docs/tikzplayground.tex" download="tikzplayground.tex">Click
here to download</a>

I provide a sample tex file (named `tikzplayground.tex`) that you can use as a
starting point. You can use it within your environment or copy the text into
Overleaf. You should be able to compile it and generated the pdf out of the
box. This post will reference this sample file throughout the examples.

# TikZ Package <a id="headerlink" name="tikz-package" href="#tikz-package" title="Permalink to this headline"></a>

TikZ is a powerful LaTeX package that allow us to maintain the elegance of our
documents with aethetically-pleasing drawings. Namely, TikZ allows us to draw
diagrams and plots by coding the specific positions and styles we want to use.

Someone put together
a
[list of available TikZ libraries](https://tex.stackexchange.com/questions/42611/list-of-available-tikz-libraries-with-a-short-introduction#42664) with
some general descriptions. Some examples include: drawing block diagrams and
flowcharts,
[a paper folding library](https://tex.stackexchange.com/questions/42611/list-of-available-tikz-libraries-with-a-short-introduction/42673#42673),
and
[structural analysis](https://latex.net/tikz-library-for-structural-analysis/). This
post will provide a bit of insight towards drawing block diagrams and
flowcharts.

# Getting Started <a id="headerlink" name="tikz-getting-started" href="#tikz-getting-started" title="Permalink to this headline"></a>

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
referenced in the code by "block". Specifically, it defines the shape, its
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

## Simple Feedback Diagram

Refer to **Section 1.1** in the provided [tikzplayground.tex](#tikz-download)
file. The following block diagram describes the transfer function of a
noise-free physical linear system:

<img src="/assets/img/control-system-diagram.png" alt="Block diagram example.">

The code to draw diagrams is composed of two main parts: 1) draw the nodes and
their positions, and 2) draw the arrows/lines to connect the nodes.

## More complicated connections

# Flowcharts <a id="headerlink" name="tikz-flowcharts" href="#tikz-flowcharts" title="Permalink to this headline"></a>

# References <a id="headerlink" name="tikz-references" href="#tikz-references" title="Permalink to this headline"></a>

* [A Very Minimal Introduction to TikZ](https://cremeronline.com/LaTeX/minimaltikz.pdf)
* [Overleaf tutorials](https://www.overleaf.com/learn/latex/LaTeX_Graphics_using_TikZ:_A_Tutorial_for_Beginners_(Part_1)%E2%80%94Basic_Drawing)
* [YouTube series](https://www.youtube.com/watch?v=0yFKxz_Az2g)
