---
layout: post
title: "aidermacs: AI in emacs"
toc: true
date: 2026-01-22
description: How to setup and use aider integrated into your emacs config.
img: pass-post/passlock.jpg # (optional)
fig-caption: www.freepik.com # (optional)
---

# About <a id="headerlink" name="aider-about" href="#aider-about" title="Permalink to this headline"></a>
------------------

[Emacs vs Vim: The Endless War Between Two Iconic
Editors](https://www.historytools.org/docs/emacs-vs-vim-whats-the-difference). This
post is not about this "controversial" debate. I've chosen
[emacs](https://www.gnu.org/software/emacs/) for my development and I don't
plan on swithching.

This post assumes that you already have a preferred `emacs` configuration and
you're here to learn about integrating `aider` into your development workflow.

From their website: *[aider](https://aider.chat/#) lets you pair program with
LLMs to start a new project or build on your existing codebase*.

# Setup <a id="headerlink" name="aider-setup" href="#aider-setup" title="Permalink to this headline"></a>
------------------

## Aider Standalone <a id="headerlink" name="aider-standalone" href="#aider-standalone" title="Permalink to this headline"></a>

Before you integrate `aider` with your emacs configuration we can test the AI
agent from your terminal. You can follow the instructions from the official
website, but here are the summarized steps:

``` bash
python -m pip install aider-install
aider-install

# Change directory into your codebase
cd /to/your/project

# DeepSeek
aider --model deepseek --api-key deepseek=<key>

# Claude 3.7 Sonnet
aider --model sonnet --api-key anthropic=<key>

# o3-mini
aider --model o3-mini --api-key openai=<key>
```

## Install Emacs Packages <a id="headerlink" name="aider-install" href="#aider-install" title="Permalink to this headline"></a>

**Emacs Version**

Verify that your `emacs` version is 30 or greater. To update your

    sudo add-apt-repository ppa:ubuntuhandbook1/emacs
    sudo apt-get update
    sudo apt-get install emacs

After executing `emacs --version` you'll see that you have the latest version
installed.

You may need to re-install some packages and libraries to match your desired
configuration.

**init.el**

Open Emacs and install the `aider` and `aidermacs `packages via `M-x
list-packages`. Find `aider`, press `I`, then `X` to install.

Add the following to your `init.el` file:

``` lisp
(use-package aidermacs
  :bind (("C-c a" . aidermacs-transient-menu))
  :config
    ; Set API_KEY in .bashrc, that will automatically picked up by aider or in elisp
    ;(setenv "ANTHROPIC_API_KEY" "sk-...")
    ; defun my-get-openrouter-api-key yourself elsewhere for security reasons
    ;(setenv "OPENROUTER_API_KEY" (my-get-openrouter-api-key))
  :custom
    ; See the Configuration section below
  (aidermacs-default-chat-mode 'ask)
  (aidermacs-default-model "gemini/gemini-3-pro-preview")
  )
```

Once you restart `emacs` you should now be able to access the `aider` agent
with the key binding `C-c a`.

# Usage <a id="headerlink" name="aider-usage" href="#aider-usage" title="Permalink to this headline"></a>
------------------



# Models <a id="headerlink" name="aider-models" href="#aider-models" title="Permalink to this headline"></a>
------------------

One of the beautiful things of `aider` is that you can choose whatever AI Model
you want (Gemini, DeepSeek, OpenAI, etc). There are a bunch of free models you
can use as well. This is a list of available models to choose from:

https://aider.chat/docs/llms.html

## Setup Model <a id="headerlink" name="aider-setup-model" href="#aider-setup-model" title="Permalink to this headline"></a>
