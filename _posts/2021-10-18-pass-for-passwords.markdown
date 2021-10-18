---
layout: post
title: pass Password Manager
date: 2021-10-18
description: How to setup PASS to keep your passwords safe.
img: passlock.jpg # (optional)
---

# Introduction <a id="headerlink" name="pass-introduction" href="#pass-introduction" title="Permalink to this headline"></a>



It is no secret that keeping passwords safe has become more and more important
over the years. Enter [PASS](https://www.passwordstore.org/)!

`pass` keeps all your sensitive information together and secure. Not just your
passwords, but the corresponding email, username, potential questions

This is an example of what an entry looks like:



I can't say if it's better or worse than any other password manager out there
since this is the first and only one I've ever used. I can only say that it has
been 1) amazingly easy to get started with, and 2) amazingly easy to use - i.e.,
generating and editing entries, and accessing them when you need them.

This post intends to provide a quick and dirty guide on how to get you started
using `pass`.

`pass` allows you to 1) generate passwords,

# Getting Started <a id="headerlink" name="pass-getting-started" href="#pass-getting-started" title="Permalink to this headline"></a>

## Installation <a id="headerlink" name="pass-getting-started" href="#pass-getting-started" title="Permalink to this headline"></a>

Execute:

{% highlight shell %}
$ sudo apt install pass
{% endhighlight %}

## Setup GPG Keys <a id="headerlink" name="pass-gpg-keys" href="#pass-gpg-keys" title="Permalink to this headline"></a>

Execute:

{% highlight shell %}
$ gpg --full-generate-key
{% endhighlight %}

After following the instructions in the prompts, you can execute `$ gpg
--list-key` to make sure that it was created correctly. Make note of the **uid**
phrase you chose - you'll need it to initialize your password store.

# Initialize <a id="headerlink" name="pass-initialize" href="#pass-initialize" title="Permalink to this headline"></a>

Execute `$ pass init [GPG UID]` to initialize the password store - where "GPG
UID" is the uid stored from above. This will create the `~/.password-store`
directory, where all of your passwords will be stored.

## Connect to git repo <a id="headerlink" name="pass-git" href="#pass-git" title="Permalink to this headline"></a>

Start by creating a new (local) git repository under the `~/.password-store`
directory by executing:

{% highlight shell %}
$ pass git init
{% endhighlight %}

If you'd like to pair this repo with an existing one, execute the following:

{% highlight shell %}
$ pass git remote add origin [GIT URL]
$ cd ~/.password-store
$ git fetch -p
$ git branch password-store
$ git push origin password-store
{% endhighlight %}

Keep in mind that everytime you execute a `pass` command, it will create a new
(local) commit inside the `~/.password-store` directory - within whatever branch
is being pointed at at the moment. You can then execute the following to push
the commits to the server:

{% highlight shell %}
$ pass git push
{% endhighlight %}

# Use

## Add a new password

You can either generate a new password for a new site, or you can insert your
own if you already have one.

To insert a password, execute `$ pass insert [OPTIONAL DIR]/[FILENAME]`, where:
* OPTIONAL DIR is an optional directory name to provide a file structure for your password store.
* FILENAME is the filename that `pass` will use to store the password.

You can then execute `$ pass [OPTIONAL DIR]/[FILENAME]` to display the password
for the provided filename.

## Replace an existing password

Execute the following to replace the password in FILANAME:

{% highlight shell %}
$ pass generate --in-place FILENAME 30
{% endhighlight %}

## Use in a different machine

To use the same git repo with all of your passwords in a different machine,
you'll need to export/import the GPG key pair used to generate/insert the
passwords.

1. Export the GPG key pair on the original machine by executing:

        {% highlight shell %}
        $ gpg --export [GPG ID] > public.key
        $ gpg --export-secret-key [GPG ID] > private.key
        {% endhighlight %}

2. Copy the key pair to the secondary machine(s) you wish to use.

3. Import the pair in the new machine(s) by executing:

        $ gpg --import public.key
        $ gpg --import private.key

4. Set the trust permissions on the new key pair by executing:

        $ gpg --edit-key [GPG ID]
        $ gpg> trust
        $ [follow the prompts]
        $ gpg> quit

# Android Client <a id="headerlink" name="pass-android-client" href="#pass-android-client" title="Permalink to this headline"></a>

One of the beautiful things about `pass` is that you can use it mobily! I use
the Android app
(called
[Password Store](https://play.google.com/store/apps/details?id=dev.msfjarvis.aps&hl=en_US&gl=US)).

You'll need to also download and install
the
[OpenKeychain](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain&hl=en_US&gl=US) app
to hold your ssh key.
