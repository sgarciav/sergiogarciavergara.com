---
layout: post
title: Machine Learning with PyTorch
date: 2022-01-17
description: Train your first neiural network with PyTorch
img: pytorch-post/pytorch-logo.png # (optional)
fig-caption: www.pytorch.org # (optional)
---

<!-- TODO: update the pytorch logo for a better one -->

# About <a id="headerlink" name="pytorch-about" href="#pytorch-about" title="Permalink to this headline"></a>
------------------

<!-- TODO: finish the about section -->

`PyTorch` is ...

(the [official website](https://pytorch.org/) is an excellent resource for
that).

I'm writing this post to keep track of what I learn as I go. I want to create a
reference that summarizes the main concepts such that I can refer to it whenever
I forget something. Hopefully it can serve as a reference guide for others as
well.

<!-- As you read through this post, keep in mind that `Blender` offers a wild variety -->
<!-- of features and can be used for so many purposes. There is no better way to -->
<!-- learn how to use this software than by playing with it. -->

Refer to the [References](#pytorch-referneces) section for the links/tutorials I
followed while writing this post.

## Misc <a id="headerlink" name="pytorch-misc-commands" href="#pytorch-misc-commands" title="Permalink to this headline"></a>

<!-- See: https://www.tablesgenerator.com/markdown_tables -->

Some general commands to help with determining the setup of your Linux system:

* glibc version: `$ ldd --version`
* CUDA version: `$ nvidia-smi`

## Index <a id="headerlink" name="pytorch-index" href="#pytorch-index" title="Permalink to this headline"></a>

Thsi post is organized as follows:

* [References](#pytorch-references)

# PyTorch in Docker <a id="headerlink" name="pytorch-docker" href="#pytorch-docker" title="Permalink to this headline"></a>
------------------

Messing with your Linunx environment is always a tricky business (at least for
me). So instead let's leverage the power of Docker. This post assumes you
already have Docker installed and running on your host.

**Note**: If playing with your Linux environment doesn't scare you, you can
install and run PyTorch on your host. You can find the instructions on
the [PyTorch official website](https://pytorch.org/get-started/locally/).

## Nvidia Container Toolkit <a id="headerlink" name="nvidia-container-toolkit" href="#nvidia-container-toolkit" title="Permalink to this headline"></a>

The [NVIDIA Container Toolkit](https://github.com/NVIDIA/nvidia-docker) allows
users to build and run GPU accelerated Docker containers. Although you will
**not** have to install the CUDA Toolkit on your host system, you will need to
install the Nvidia driver. The instructions for installing the Nvidia driver can
be found in
the
[Nvidia docs](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker). Namely,
execute the following:

<!-- TODO: figure out why the txt doesn't wrap - thought I had figured that our -->
<!-- already -->

1. Setup the `stable` repository and the GPG key:

        $ distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
        $ curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
        $ curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list

2. Install the `nvidia-docker2` package:

        $ sudo apt update
        $ sudo apt install -y nvidia-docker2

3. Restart the Docker daemon:

        $ sudo systemctl restart docker

4. Test the setup by running a base CUDA container:

        $ sudo docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi

# References <a id="headerlink" name="pytorch-references" href="#pytorch-references" title="Permalink to this headline"></a>
------------------

## General

<div class="ref-links">
<ul>

<li><a
href="https://alvissalim.com/2020/05/16/running-pytorch-in-docker-container/"
target="_blank">Running PyTorch in Docker Container</a></li>

</ul>
</div>
