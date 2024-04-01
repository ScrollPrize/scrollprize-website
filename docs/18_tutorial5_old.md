---
title: "Tutorial 5: Advanced Topics"
sidebar_label: "5. Advanced Topics"
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

Tools keep evolving as the community builds more stuff. We have since published some video tutorials:
1. [Ben’s Segmentation Tutorial](https://www.youtube.com/watch?v=gcSQKiHdISw). Ben (@Hari_Seldon on Discord) goes into great detail on how to do segmenting.
2. [JP’s Segmentation Party](https://www.youtube.com/watch?v=zKMVNaA2GdU). JP does a bunch of segmentation.

There are several work-in-progress tutorials and docs for various programs that we recommend checking out:
1. [Volume Cartographer’s Apps and Utilities page](https://github.com/educelab/volume-cartographer/blob/develop/docs/pages/apps-list.md). Also be sure to check out the various other docs in this directory.
2. [Data Processing Workflow doc](https://github.com/educelab/ink-id/blob/develop/docs/data-processing-workflow.md) which is in the ink-id repo, but is mostly about Volume Cartographer and segmentation. Also goes into how to do alignment (”registration”) of infrared photos of the fragments, and how to create binary ink labels.
3. [Quick Segment](https://github.com/educelab/quick-segment) has a built in tutorial which you can find when going to “Help” (in the menu bar) => “Tutorial”. Do note that Quick Segment only works on thumbnail volumes (e.g. `/volumes_small/` renamed to `/volumes/`) and then scaled up using `vc_transform_mesh`. Ask around in [Discord](https://discord.gg/V4fJhvtaQn) to learn more.
