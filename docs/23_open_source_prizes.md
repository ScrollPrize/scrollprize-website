---
title: "$20k Open Source Prizes (Nov 30)"
hide_table_of_contents: true
---

<head>
  <html data-theme="dark" />

  <meta
    name="description"
    content="A $1,000,000+ machine learning and computer vision competition"
  />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://scrollprize.org" />
  <meta property="og:title" content="Vesuvius Challenge" />
  <meta
    property="og:description"
    content="A $1,000,000+ machine learning and computer vision competition"
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
    content="A $1,000,000+ machine learning and computer vision competition"
  />
  <meta
    property="twitter:image"
    content="https://scrollprize.org/img/social/opengraph.jpg"
  />
</head>

In our tradition of progress prizes, we’re awarding four $5,000 prizes for qualifying submissions by Nov 30th. This time, we do not award prizes specific to segmentation or ink detection. Anything that increases the probability of reading the scrolls this year qualifies.

<div>There are some conditions:</div>

* Your submission must substantially increase the probability of reading the scrolls this year, as judged by the Review Team. We may award more or fewer prizes at our discretion, depending on the number of qualifying submissions.
* Your submission must be open source.
* We are heavily favoring submissions that:
* Are released early. Tools released tomorrow have a higher chance of being used for reading the scrolls than those released a day before the deadline.
* Actually get used. We’ll look for signals from the community: questions, comments, bug reports, feature requests. Our Segmentation Team will publicly provide comments on tools they use.
* Submissions are closed on Thursday November 30th 11:59pm PT, after which the Review Team will select winners.

[Segmentation](data_segments) is still a big focus, since for the Grand Prize we need multiple large segments. Large enough to contain continuous passages of at least 140 characters.

<div>Some ideas to get you started:</div>

* The Segmentation Team has put together a list of [feature requests](https://docs.google.com/document/d/1YFILhWVHyijU_Yky3lKPvGAjmYm2QnRTYzMM7VqcogA/edit) — be sure to tag @Hari_Seldon on Discord if you’re going to work on this. These include:
  * Many feature requests for Volume Cartographer (we’ve been using [@RICHI’s fork](https://github.com/schillij95/volume-cartographer-papyrus))
  * Adding metadata of which areas were auto-segmented vs manually adjusted
  * Annotating which areas were hard to segment or uncertain
  * Integration of ink detection models to help see if an area was segmented correctly
  * Real time papyrus visualization like Khartes
  * Segmenting “at an angle” for tilted papyrus surfaces
* Tools for browsing all segments and viewing open source model outputs on them.
* Tools for detecting overlap in segments, to avoid unwittingly running training and inference on the same data.
* Tools for merging segments or laying out multiple related segments in 2D (like Marzia D’Angelo’s [fragment map](faq#what-are-some-good-books-that-i-should-read-to-learn-more); more explanation [here](https://discord.com/channels/1079907749569237093/1085972686158712892/1115918553602855002)).
* Auto-segmentation of “mushy” areas: algorithms / models that can detect and follow the papyrus fibers, even where they are bunched up with other layers of papyrus.
* Comparison of various ink detection model architectures.
* Better tools for annotating ink in segments, e.g. by manually finding “crackle” or by reinforcing model outputs.

<figure className="max-w-[600px]">
  <img src="/img/faq/marzia.webp" className="w-[100%]"/>
  <figcaption className="mt-0">Marzia D’Angelo showing her fragment map — can we make something like this for our segments?</figcaption>
</figure>
