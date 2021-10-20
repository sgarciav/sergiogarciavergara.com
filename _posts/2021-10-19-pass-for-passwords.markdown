---
layout: post
title: "pass: Unix Password Manager"
date: 2021-10-19
description: How to setup PASS to keep your passwords safe.
img: pass-post/passlock.jpg # (optional)
fig-caption: www.freepik.com # (optional)
---

# About <a id="headerlink" name="pass-about" href="#pass-about" title="Permalink to this headline"></a>
------------------

It is no secret that keeping passwords safe has become more and more important
over the years. Enter `pass`, the standard unix password!
The [official website](https://www.passwordstore.org/) is a great resource. This
post only intends to summarize the main points such that you can get started
using `pass` as quickly as possible.

If you have already been convinced to use `pass`, you can skip to
the [Getting Started](#pass-getting-started) section. This post will walk you
through the steps
for [installing](#pass-getting-started), [initializing](#pass-initialize), and
using `pass` on your [machine](#pass-use) and [phone](#pass-android-client).

## Why pass? <a id="headerlink" name="pass-why" href="#pass-why" title="Permalink to this headline"></a>

I can't say if `pass` is better or worse than any other password manager out
there since this is the first and only one I've ever used. In case the official
website hasn't yet conviced you to switch to `pass`, the following are the main
reasons why I don't feel the need to play with any other passwords managers.

**One Master Password**

Similar to other password managers, with `pass` you have to memorize only one
password.

**Git Tracker**

Did you decied to update a password or your login credentials? You can easily
keep track of your changes via git. Whatever changes you make on machine A, you
can easily keep track of on machine B.

Note that you'll be commiting binary `.gpg` files, which git doesn't track well,
but at least you'll have access to the latest files and organzation.

**Android Client**

Do you need to access an entry from your phone? You can use `pass` on the go!
You can easily access your sensitive information from your phone the same way
you would from your machine (more details [here](#pass-android-client)).

**Passwords and More!**

`pass` keeps not only your passwords organized and secure, but also the
corresponding email for the account, username, potential security questions,
etc. This is an example of what a raw entry looks like (not a real entry):

```
gywGY76^5;)knde8
memberID: 63546348
email: name.last@mail.com
website: https://www.website.com
```

# Getting Started <a id="headerlink" name="pass-getting-started" href="#pass-getting-started" title="Permalink to this headline"></a>
------------------

The following instructions are for your Ubuntu/Debian system. To use `pass` in
other systems, refer to the [official website](https://www.passwordstore.org/).

## Installation <a id="headerlink" name="pass-getting-started" href="#pass-getting-started" title="Permalink to this headline"></a>

Execute:

``` shell
$ sudo apt install pass
```

## Setup GPG Keys <a id="headerlink" name="pass-gpg-keys" href="#pass-gpg-keys" title="Permalink to this headline"></a>

Execute:

``` shell
$ gpg --full-generate-key
```

After following the instructions in the prompts, you can execute `$ gpg
--list-key` to make sure that it was created correctly. Make note of the **uid**
phrase you chose, you'll need it to initialize your password store.

# Initialize <a id="headerlink" name="pass-initialize" href="#pass-initialize" title="Permalink to this headline"></a>
------------------

Execute the following to initialize the password store, where `GPG UID` is the
**uid** stored from above:

``` shell
$ pass init [GPG UID]
```

Executing this command will create the `~/.password-store` directory, where all
of your passwords will be stored.

## Connect to git repo <a id="headerlink" name="pass-git" href="#pass-git" title="Permalink to this headline"></a>

Start by creating a new (local) git repository under the `~/.password-store`
directory by executing:

``` shell
$ pass git init
```

If you'd like to pair this repo with an existing one, execute the following:

``` shell
$ pass git remote add origin [GIT URL]
$ cd ~/.password-store
$ git fetch -p
$ git branch password-store
$ git push origin password-store
```

Keep in mind that everytime you execute a `pass` command, it will create a new
(local) commit inside the `~/.password-store` directory - within whatever branch
is being pointed at at the moment. You can then execute the following to push
the commits to the server:

``` shell
$ pass git push
```

# Using pass <a id="headerlink" name="pass-use" href="#pass-use" title="Permalink to this headline"></a>
------------------

## Add a new entry <a id="headerlink" name="pass-add-entry" href="#pass-add-entry" title="Permalink to this headline"></a>

To create a new entry you can either generate a new password for the entry, or
you can insert your own if you already have one.

To generate a password for the entry, execute the following to generate a 20
character password, where `OPTIONAL DIR` is an optional directory name to
provide a file structure for your password store (you can nest as many
directories as you wish), and `FILENAME` is the filename that `pass` will use to
store the password:

``` shell
$ pass generate [OPTIONAL DIR]/[FILENAME] 20
```

Some websites don't allow the use of symbols or special characters in the
passwords. Execute the following to generate a 20 character password in FILENAME
that will *not* contain special characters:

``` shell
$ pass generate --no-symbols [OPTIONAL DIR]/[FILENAME] 20
```

To insert a password, execute the following:

``` shell
$ pass insert [OPTIONAL DIR]/[FILENAME]
```

You can also edit an existing entry by generating a new password from the
command line:

``` shell
$ pass generate --in-place [OPTIONAL DIR]/[FILENAME] 30
```

When editing an entry via the command line, keep in mind that only the first row
of the entry will be updated. Execute the following to edit any other
information in the entry:

``` shell
$ pass edit [OPTIONAL DIR]/[FILENAME]
```

This command will open your default text editor and you will be able to add
whatever text is relevant to the corresponding entry. All this senstitive
information will be maintained together in the same ecrypted file.

## Access an entry <a id="headerlink" name="pass-replace-password" href="#pass-replace-password" title="Permalink to this headline"></a>

Execute the following to display the password for the provided FILENAME:

``` shell
$ pass [OPTIONAL DIR]/[FILENAME]
```

## Use in a different machine <a id="headerlink" name="pass-different-machine" href="#pass-different-machine" title="Permalink to this headline"></a>

To use the same git repo with all of your passwords in a different machine,
you'll need to export/import the GPG key pair used to generate/insert the
passwords. Remember that you can execute `$ gpg --list-key` to list the
available GPG IDs available in your machine.

1. Export the GPG key pair that was generated on the original machine to the
   `public.key` and `private.key` files by executing:

    ``` shell
    $ gpg --export [GPG ID] > public.key
    $ gpg --export-secret-key [GPG ID] > private.key
    ```

2. Copy the key pair files to the secondary machine(s) you wish to use.

3. Import the pair in the new machine(s) by executing:

    ``` shell
    $ cd /path/to/*.key
    $ gpg --import public.key
    $ gpg --import private.key
    ```

4. Set the trust permissions on the new key pair by executing:

    ``` shell
    $ gpg --edit-key [GPG ID]
    $ gpg> trust
    $ "follow the prompts"
    $ gpg> quit
    ```

# Android Client <a id="headerlink" name="pass-android-client" href="#pass-android-client" title="Permalink to this headline"></a>
------------------

One of the beautiful things about `pass` is that you can use it mobily! I use
the Android app
(called
[Password Store](https://play.google.com/store/apps/details?id=dev.msfjarvis.aps&hl=en_US&gl=US)). There
are other compatible clients in
the [official website](https://www.passwordstore.org/).

To use `pass` from your Android phone, you need to first download and install
the
[OpenKeychain](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain&hl=en_US&gl=US) app
to hold your ssh key. This will allow the Password Store app to decrypt your
`pass` entries. Setting up the OpenKeychain app is a breeze. Feel free to drop
whatever questions you may have in the comments.
