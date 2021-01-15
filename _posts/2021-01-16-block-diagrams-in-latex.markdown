---
layout: post
title: Block Diagrams in LaTeX
date: 2020-12-10
description: Use the TikZ library in LaTeX to draw block diagrams and flowcharts.
img: # control-system-diagram.png # (optional)
---

This post assumes that you are already familiar
with [LaTeX](https://www.latex-project.org/). This means that you have a working
LaTeX environment that allows you to write tex documents and compile them into
PDFs. If you don't have a working environment, you can use <a
href="https://www.overleaf.com/" target="_blank">Overleaf</a> in your browser to
practice.

I provide a sample tex file that you can download here for you to play with. You
can use it within your environment or copy the text into Overleaf. You should be
able to compile it out of the box. This post will reference this sample file so
you can follow along with it.

The intention of this post is to provide a high-level introduction of the **TikZ
libraries** and explain enough to get you started. It is not meant to be a
comprehensive guide for its full use.

## TikZ Libraries <a id="headerlink" name="tikz-library" href="#tikz-library" title="Permalink to this headline"></a>

The TikZ libraries are powerful LaTeX tools that allow you t

Someone put together a <a
href="https://tex.stackexchange.com/questions/42611/list-of-available-tikz-libraries-with-a-short-introduction#42664"
target="_blank">list of available TikZ libraries</a> with some general
descriptions. Some examples include: drawing block diagrams and flowcharts (both
addressed in this post),

<a href="https://latex.net/tikz-library-for-structural-analysis/"
target="_blank">structural analysis</a>

## Getting Started <a id="headerlink" name="tikz-getting-started" href="#tikz-getting-started" title="Permalink to this headline"></a>

To start using the TikZ libraries, start by including the relevant packages in
your tex file:

```
\usepackage{tkz-euclide}
\usepackage{tikz}
```

Use the `\usetikzlibrary{}` command to include the specific library you want to
use. For example, use the Calc library to make complex coordinate calculations
by adding the `\usetikzlibrary{calc}` call at the top of your tex file. Our
sample file calls the following libraries for drawing box diagrams and
flowcharts:

```
\usetikzlibrary{arrows}
\usetikzlibrary{quotes,angles}
\usetikzlibrary{positioning}
\usetikzlibrary{plotmarks}
\usetikzlibrary{shapes.geometric, arrows}
```

After defining the libraries of interest

## Block Diagrams <a id="headerlink" name="tikz-block-diagrams" href="#tikz-block-diagrams" title="Permalink to this headline"></a>

## Flowcharts <a id="headerlink" name="tikz-flowcharts" href="#tikz-flowcharts" title="Permalink to this headline"></a>
