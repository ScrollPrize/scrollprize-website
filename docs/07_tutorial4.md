---
title: "Tutorial 4: Ink Detection"
sidebar_label: "Ink Detection"
hide_table_of_contents: true
---

<head>
  <html data-theme="dark" />

  <meta
    name="description"
    content="A $250,000 machine learning and computer vision competition"
  />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://scrollprize.org" />
  <meta property="og:title" content="Vesuvius Challenge" />
  <meta
    property="og:description"
    content="A $250,000 machine learning and computer vision competition"
  />
  <meta
    property="og:image"
    content="https://scrollprize.org/img/social/opengraph.jpg"
  />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://scrollprize.org" />
  <meta property="twitter:title" content="Vesuvius Challenge" />
  <meta
    property="twitter:description"
    content="A $250,000 machine learning and computer vision competition"
  />
  <meta
    property="twitter:image"
    content="https://scrollprize.org/img/social/opengraph.jpg"
  />
</head>

import { TutorialsTop } from '@site/src/components/TutorialsTop';

<TutorialsTop highlightId={4} />

This tutorial gives a high-level overview of our current best methods on how to do ink detection, followed by a more hands-on tutorial [on Kaggle as a notebook](https://www.kaggle.com/code/jpposma/vesuvius-challenge-ink-detection-tutorial).

Ink detection is the task of taking data from a 3D X-ray scan around a papyrus surface, and identifying the locations of the inked parts of the papyrus.

This is where one of the difficulties of the Herculaneum Papyri comes in: the ink seems to be [radiolucent](https://en.wikipedia.org/wiki/Radiodensity), making it hard to detect on 3D X-ray scans.

* **Campfire & En-Gedi scrolls:** Ink shows up as brighter voxels in 3D X-ray scans, so ink detection can be done by taking the brightest pixel in some voxel region.
* **Herculaneum scrolls & fragments:** Ink does not seem directly visible in 3D X-ray scans, but there does seem to be data there, since machine learning models can detect it.

In the video below Dr. Seales talks about how ink detection works in the Herculaneum scrolls, and how it came about:

<iframe className="w-[100%] aspect-video mb-4" src="https://www.youtube.com/embed/g-7-Xg75CCI?start=5930" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>

There is hope: not only can machine learning models detect the ink, on occasion we can see the ink directly in the 3D X-ray volumes. Here are some examples, with slices from the 3D surface volumes on the left, and infrared photos showing ink on the right (from the recent [data paper](https://raw.githubusercontent.com/educelab/EduceLab-Scrolls/main/paper/EduceLab-Scrolls.pdf)):

<figure className="">
  <img src="/img/tutorials/ink2-alpha.png" />
</figure>

<figure className="">
  <img src="/img/tutorials/ink1-alpha.png" />

  <figcaption className="mt-0">Ink visible in 3D surface volumes (left: 3D volume slice; right: infrared photo), found by Stephen Parsons</figcaption>
</figure>

You have to look closely, but the shapes are visible!

So it seems reasonable that the machine learning models can see patterns like this in more places. We train our models on detached fragments, since we have ground truth data in the form of actual visible ink. The idea is to then apply those models to the inside layers of the intact scrolls.

At a high level, training on a fragment works like this:

<figure className="">
  <img src="/img/tutorials/ml-overview-alpha.png" />
</figure>

From a fragment (a) we obtain a 3D volume (b), from which we segment a mesh (c), around which we sample a surface volume (d). We also take an infrared photo (e) of the fragment, which we align (f) with the surface volume, and then manually turn into a binary label image (g).

We train this model by picking a pixel in the binary label image, and sampling a subvolume around the same coordinates from the surface volume. We then backpropagate the known label data to update the model weights:

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] " poster="/img/tutorials/ink-training-anim3-dark.jpg">
    <source src="/img/tutorials/ink-training-anim3-dark.webm" type="video/webm"/>
    <source src="/img/tutorials/ink-training-anim3-dark.mp4" type="video/mp4"/>
  </video>
</figure>

We can then use the model to predict what a label image would have looked like, from different input data than you have trained on.

<figure>
  <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/tutorials/ink-detection-anim3-dark.jpg">
    <source src="/img/tutorials/ink-detection-anim3-dark.webm" type="video/webm"/>
    <source src="/img/tutorials/ink-detection-anim3-dark.mp4" type="video/mp4"/>
  </video>
</figure>

Of course, in reality the label image on the right doesn’t come out perfectly. The current state of the art is Stephen Parsons’ [ink-id](https://github.com/educelab/ink-id/) program, which produces outputs like this (showing different training epochs in k-fold training/prediction):


<figure>
  <video autoPlay playsInline loop muted className="w-[100%] max-w-[238px]" poster="/img/landing/fragment-training2.png">
    <source src="/img/landing/fragment-training2.webm" type="video/webm"/>
    <source src="/img/landing/fragment-training2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">A model learning to detect ink on a fragment, showing different training epochs</figcaption>
</figure>

When running ink-id on all the public fragments, the results look like this (prediction left, infrared right):

<figure className="">
  <table className="w-[100%] max-w-[400px]">
    <tr><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f1_composite.png" /></td><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f1_ir.png" /></td></tr>
    <tr><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f2_composite.png" /></td><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f2_ir.png" /></td></tr>
    <tr><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f3_composite.png" /></td><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f3_ir.png" /></td></tr>
  </table>
  <figcaption className="mt-0">Predicted label images from ink-id (left); infrared photos (right)</figcaption>
</figure>

As you can see, some letters can be clearly seen, others not at all, and a lot of letters are somewhere in between. The [Ink Detection Progress Prize](https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/) is all about creating the best possible machine learning model for detecting ink.

All fragments also have “hidden layers”: pieces of papyrus that are fused to the backs of the fragments. Running the machine model on those reveals some previously unseen letters:

<div className="flex flex-wrap items-end max-w-[500px] mb-4">
  <figure className="w-[33%]">
    <img src="/img/tutorials/f1_hidden_composite.png"/>
  </figure>
  <figure className="w-[33%]">
    <img src="/img/tutorials/f2_hidden_composite.png"/>
  </figure>
  <figure className="w-[33%]">
    <img src="/img/tutorials/f4_hidden_composite_partially_redacted.png"/>
  </figure>
  <figcaption className="mt-0">“Hidden layers” of papyrus, partially revealed by machine learning.</figcaption>
</div>

So how can a machine learning model detect ink? In the electron microscope images below (from the paper [From invisibility to readability: Recovering the ink of Herculaneum](https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0215775&type=printable)), you can clearly see the difference between the inked and non-inked regions. We suspect that machine learning models are able to learn some of these features from the 3D X-ray scans.

<figure>
  <a href="/img/tutorials/sem.png" target="_blank"><img src="/img/tutorials/sem-alpha.png"  className="w-[100%]"/></a>
  <figcaption className="mt-0">Electron microscope pictures from the top (A and B) and the side (C) <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0215775">(source)</a></figcaption>
</figure>

<div>The main challenges for ink detection are:</div>

* Model performance. Getting more letters to be legible!
* Applying these models to the full scrolls.
* Reverse engineering the models to better understand the kind of patterns they are using to detect ink.
* Creating more ground truth data (e.g. “campfire scrolls”).

Now let’s create a model! This part of the tutorial is over [on Kaggle as a notebook](https://www.kaggle.com/code/jpposma/vesuvius-challenge-ink-detection-tutorial)
