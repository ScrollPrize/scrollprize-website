---
title: "Challenge Overview"
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

The objective of the Vesuvius Challenge is to make history by reading an unopened Herculaneum scroll for the very first time. We believe that an open competition will accelerate progress and enable us to achieve this goal in 2023.

### Join the community

- Join our [Discord server](https://discord.gg/6FgWYNjb4N) to ask questions, learn about what is going on, hang out with fellow contestants and interested onlookers, and perhaps find teammates.
- Receive updates every 1-2 weeks from our [mailing list on Substack](https://scrollprize.substack.com).
- Follow [@scrollprize](https://twitter.com/scrollprize) on Twitter.

Our team is available for any questions and feedback on Discord. You can also email us at team@scrollprize.org.

### Current state

<div>This has been going on recently:</div>

- **Current prizes**: $1,000,000+ in prizes:
  - [Grand Prize](grand_prize): $700,000 prize, by December 31st 2023.
  - [Ink Detection Progress Prize](ink_detection): $100,000 in prizes, by June 14th 2023.
  - [Segmentation Tooling Prize](segmentation): $45,000 in prizes, by June 14th 2023.
  - [First Letters Prize](first_letters): $50,000 in prizes, by June 14th 2023.
  - We’ve also [awarded](previous) some prizes already.
- **[Data](/data)**: 3D X-ray scans of two unopened scrolls from Herculaneum, and scans and images of three papyrus fragments. Also over 150 cm<sup>2</sup> of segments within the scroll have been made available.
- **[Tutorials](/tutorial1)**: The current best tools and techniques for virtually unwrapping papyrus scrolls.
  - Be sure to check out the additional tutorials and docs we added recently in [Tutorial 5](tutorial5).
- **Software**: Various pieces of software that you can use as a starting point.
  - [ink-id](https://github.com/educelab/ink-id/): an ML model and tool by Educelab for predicting ink.
  - [Volume Cartographer](https://github.com/educelab/volume-cartographer): a segmentation tool by EduceLab, further explored in [Tutorial 3](tutorial3). Also contains various other tools for dealing with segments and meshes.
    - [Optical Flow algorithm](https://github.com/educelab/volume-cartographer/pull/20), still a Pull Request on Github, but already usable and recommended if you’re going to do a lot of segmentation. This adds a dropdown to select a new algorithm.
  - [Quick Segment](https://github.com/educelab/quick-segment): another segmentation tool by EduceLab, used to create the Monster Segment (see e.g. the bottom of the [Data page](data)).
  - [Volume Annotate](https://github.com/MosheLevy20/VolumeAnnotate): a segmentation tool by Moshe Levy, aiming to be a Python-based replacement of Volume Cartographer.
  - [Scroll Viewer](https://github.com/lukeboi/scroll-viewer): a web-based tool by Luke Farritor for exploring scroll data.
  - [High-scoring starter notebooks on Kaggle](https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/code?competitionId=47317&sortBy=scoreDescending): a list of public starter notebooks sorted by highest score.
  - There are tons more smaller projects, notebooks, and so on, which can be found in the weekly newsletters on [Substack](https://scrollprize.substack.com/). Also be sure to check out [Discord](https://discord.gg/6FgWYNjb4N) and the [Kaggle forums](https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion?sort=published).

