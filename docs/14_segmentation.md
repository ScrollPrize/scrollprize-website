---
title: "$45,000 Segmentation Tooling (June 14th)"
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

“Segmentation” means identifying sheets of papyrus in a 3D scan of a scroll. Learn more in [“Tutorial 3: Segmentation and Flattening”](tutorial3).

We have a couple of contractors and volunteers who have been segmenting, and this is their progress so far.

<figure>
  <img src="/img/segmentation/leaderboard-2023-05-12.png" className="w-[100%] max-w-[500px]"/>
  <figcaption className="mt-0">Segmentation progress and leaderboard with data from 2023-05-11 <a href="https://docs.google.com/spreadsheets/d/104GIFhiXff9yCwO52-71beIet1bn423ypygxMVlqEGc/edit?usp=sharing">(source)</a></figcaption>
</figure>

We’d like to get to 1000-2000 cm<sup>2</sup> of high-quality segments, and for that we need better tools and algorithms. Good tools and algorithms make a huge difference: you can see the enourmous jump when UKy/EduceLab released their Monster Segment, which was enabled by their new tool, [Quick Segment](https://github.com/educelab/quick-segment).

We are awarding prizes to make it easier and faster to segment the scrolls, with the ultimate goal of fully mapping both scrolls.

* $45,000 total, 7 prizes. 2x10k, 5x5k.
* Any tools, documentation, notebooks, analysis, to help with segmentation and flattening of the scrolls. Must be open source.
* Anything that actually gets used by the community (by people doing segmentation) will have a much higher chance of winning.
* What we would like to see:
  * A list of feature requests from people actively segmenting [can be found here](https://docs.google.com/document/d/1r3FDJIUP1Kx3EamxFwPVX9O_-lGMoWQsbHbOrcoTSvk/edit?usp=sharing). We **strongly recommend** you to look at this list and get in touch with active segmenters on Discord. Let's make their life easier!
  * In general, we would love to see people build on existing open source tools, especially those that have been built in the community. But all submissions are welcome!
  * **Improvements that make the tools super fast to use.** For example, the ability to start segmenting without downloading all of the scroll data; streaming from our download server, for example. (We are happy to host some server-side software if this helps!)
  * Making it faster to move between slices in tools like Volume Cartographer, by only loading the parts of the images that are relevant for your current segmentation task.
  * Super fast keyboard shortcut based interfaces.
  * AI / computer vision assistance to make segmentation faster and more accurate.
  * Quick visualizations to ensure that your segmentation makes sense from different angles.
* You may make multiple submissions. We may award a single prize to a set of multiple submissions by one person or team.
* Your submission will be judged subjectively: the Technical Review Team will decide what they think are the best open source contributions.
* If you are submitting as a team, the team leader should make the submission, and is responsible for distributing the prize money among the team.
* Submissions are closed on Wednesday June 14th 11:59pm PT.
* Submit using [this form](https://docs.google.com/forms/d/e/1FAIpQLSeT-6ucyUUSOJGYIcx6Wp5wozQzvjfDMTwL9i152yrCnXbE_w/viewform).

To get a sense of what segmentation looks like right now, check out the segmentation videos linked in [Tutorial 5: Advanced Topics](tutorial5).

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/segmentation2.jpg">
    <source src="/img/tutorials/segmentation2.webm" type="video/webm"/>
    <source src="/img/tutorials/segmentation2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">Segmentation: finding a surface of papyrus.</figcaption>
</figure>
