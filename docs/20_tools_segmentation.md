---
title: "Segmentation Tools"
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

<figure className="max-w-[500px]">
  <div className="w-[100%]"><div className="overflow-hidden mb-2"><img loading="eager" src="/img/data/segmentation-animation.webp" className="w-[100%] mt-[-30px] mb-[-50px]"/></div>
  <figcaption className="mt-0">Some segments from Scroll 1</figcaption></div>
</figure>

Segmentation is the mapping of sheets of papyrus (“segments”) in a 3D X-ray volume. See [Tutorial 3](tutorial3). The community has built various tools to do this.

We have also set up a small team of contractors producing segments. These are available for anyone to download. See [Data > Segments](data_segments) for more information.

### What are people working on?

<div><strong>Next milestone:</strong> segmenting all papyrus sheets of both scrolls. For this we will need tools like:</div>

- Much faster computer-assisted segmentation tools
  - Current state of the art: [Julian’s Volume Cartographer fork](#volume-cartographer)
- Better tools for high-accuracy segmentation or correcting
  - Current state of the art: [Khartes](#khartes)
- Autosegmentation (minimal human input)
- Merging of segments
- Visualizing segments both in 3D and in flattened form
  - Current state of the art: [Segment-Viewer](#volume-viewer-and-segment-viewer)

### Volume Cartographer

[Original Github repo](https://github.com/educelab/volume-cartographer) / [Faster version by Julian (@RICHI)](https://github.com/schillij95/volume-cartographer-papyrus)

<figure class="">
  <video autoPlay playsInline muted loop className="w-[100%] max-w-[600px] rounded" poster="/img/tutorials/vc-segmentation3.jpg">
    <source src="/img/tutorials/vc-segmentation3.webm" type="video/webm"/>
    <source src="/img/tutorials/vc-segmentation3.mp4" type="video/mp4"/>
  </video>
</figure>

The main tool that the segmentation team (contractors and volunteers) currently uses is Volume Cartographer.

This tool was originally created by EduceLab, and is now being improved both by EduceLab and the Vesuvius Challenge community. The tool has been improved greatly, with more accurate and faster segmentation algorithms and UI improvements.

<div>Resources:</div>

* [Tutorial 3.](tutorial3) We have an in-depth tutorial on how to use Volume Cartographer.
* [Optical Flow Segmentation v2.](https://github.com/educelab/volume-cartographer/pull/34) The team primarily uses this version by Julian Schilliger (@RICHI on Discord).
* [The Segmenter’s Guide to Volume Cartographer (for contractors).](https://docs.google.com/document/d/11B9Gy1gJRye_NQHphwbIxINvactUchJJsJOJi1FKrgI/edit?usp=sharing) For more technical details about how the segmentation team operates, check out this doc.
* [Volume Cartographer’s Apps and Utilities page](https://github.com/educelab/volume-cartographer/blob/develop/docs/pages/apps-list.md). Also be sure to check out the various other docs in this directory.
* [Data Processing Workflow doc](https://github.com/educelab/ink-id/blob/develop/docs/data-processing-workflow.md) which is in the ink-id repo, but is mostly about Volume Cartographer and segmentation. Also goes into how to do alignment (”registration”) of infrared photos of the fragments, and how to create binary ink labels.
* [Ben’s Segmentation Tutorial.](https://www.youtube.com/watch?v=gcSQKiHdISw) Ben (@Hari_Seldon on Discord) goes into great detail on how to do segmenting.
* [JP’s Segmentation Party.](https://www.youtube.com/watch?v=zKMVNaA2GdU) JP does a bunch of segmentation.\

### Khartes

[Github repo](https://github.com/KhartesViewer/khartes)

<figure class="">
  <video autoPlay playsInline muted loop className="w-[100%] max-w-[600px] rounded">
    <source src="/img/progress/khartes.webm" type="video/webm"/>
    <source src="/img/progress/khartes.mp4" type="video/mp4"/>
  </video>
</figure>

A new tool created by Chuck (@khartes_chuck on Discord) which allows for very precise segmentation, using real-time texturing UIs that show the segment from different angles. It is used on occasion by the segmentation team.

### Volume-Viewer and Segment-Viewer

[Volume-Viewer Github repo](https://github.com/tomhsiao1260/volume-viewer) / [Segment-Viewer Github repo](https://github.com/tomhsiao1260/segment-viewer)

<figure className="max-w-[500px] ">
  <div className="w-[100%]"><div className="overflow-hidden mb-2"><img loading="eager" src="/img/data/segmentation-animation.webp" className="w-[100%] mt-[-30px] mb-[-50px]"/></div></div>
</figure>

These are used by the segmentation team primarily to see which segments they have worked on already. We host them respectively [here](http://37.19.207.113:5173/) and [here](http://37.19.207.113:5174/). The datasets that these live versions pull from are updated about once per month.

### VolumeAnnotate

[Github repo](https://github.com/MosheLevy20/VolumeAnnotate)

<figure className="max-w-[600px] ">
  <img src="/img/progress/volumeannotate.png" className="w-[100%]"/>
</figure>

A reimplementation of Volume Cartographer in Python by Moshe Levy (@moshelevy on Discord). Not quite feature-complete yet (in particular it’s missing Julian’s improvements), but long term this might be easier to maintain than the C++ codebase of Volume Cartographer.

### QuickSegment

[Github repo](https://github.com/educelab/quick-segment)

<figure class="">
  <video autoPlay playsInline muted loop className="w-[100%] max-w-[600px] rounded">
    <source src="/img/progress/quicksegment.mp4" type="video/mp4"/>
  </video>
</figure>

Created by EduceLab for annotating a large air gap in Scroll 1, and then projecting from that gap to either side to create two large segments, colloquially referred to as the [“Monster Segment”](data_segments#monster-segment). Hasn’t been used for more segmentation, since it was the only large air gap we could find.

QuickSegment has a built in tutorial which you can find when going to “Help” (in the menu bar) => “Tutorial”. Do note that QuickSegment only works on thumbnail volumes (e.g. `/volumes_small/` renamed to `/volumes/`) and then scaled up using `vc_transform_mesh`.

### Data transformations.

<figure className="max-w-[350px] w-[75%] ">
  <img src="/img/progress/masked.png" className="w-[100%]"/>
</figure>

A couple of folks have written data transformations that allow tools to more efficiently load data from the server.

* [**Masked Slices.**](https://github.com/JamesDarby345/segment-anything-vesuvius) by James Darby (@thatGuy on Discord). Versions of the scroll slices with irrelevant data masked out, which leads to about 2x smaller files when applying compression. The tradeoff is that loading the files is a bit slower because of the compression. Used for `/volumes_masked/` on the data server.
* [**Vesuvius-Build.**](https://github.com/spelufo/vesuvius-build/) by Santiago Pelufo (@spelufo on Discord). Used for `/volumes_small/` and `/volume_grids/` on the data server.

### Viewing tools

<figure class="max-w-[500px] ">
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/mesh-rotate2.jpg">
    <source src="/img/tutorials/mesh-rotate2.webm" type="video/webm"/>
    <source src="/img/tutorials/mesh-rotate2.mp4" type="video/mp4"/>
  </video>
</figure>

Various standard tools exist for viewing 3D data. Some have been augmented to support the file formats that we’re dealing with.

* [**Meshlab.**](https://www.meshlab.net/) Most useful for viewing segments. We introduce how to use this with our data in [Tutorial 2](tutorial2) and subsequent tutorials.
* [**ImageJ/Fiji.**](https://imagej.net/software/fiji/) Useful for viewing surface volumes. We introduce how to use this with our data in [Tutorial 2](tutorial2) and subsequent tutorials.
* [**Blender.**](https://www.blender.org/) Generic 3D program. Adapted for [segment viewing](https://github.com/spelufo/vesuvius-blender) by Santiago Pelufo (@spelufo on Discord). Tutorial can be found [here](https://github.com/spelufo/vesuvius-blender/blob/main/modeling.md) and [here](https://www.youtube.com/watch?v=TdPzqBzCfqw).
* [**ilastik.**](https://www.ilastik.org/) Generic segmentation toolkit. [Adapted](https://github.com/spelufo/vesuvius-build/blob/main/cell_tif_to_h5.jl) by Santiago Pelufo (@spelufo on Discord) for use with our volumes.
* [**3D Slicer.**](https://www.slicer.org/) Check out [this tutorial](https://discord.com/channels/1079907749569237093/1079907750265499772/1103821757741289513) by James Darby (@thatGuy on Discord).

<!--
https://www.kaggle.com/code/brettolsen/efficient-zarr-loading-and-caching/notebook
https://discord.com/channels/1079907749569237093/1079907750265499772/1105250077758464120
https://github.com/lukeboi/scroll-viewer

https://twitter.com/CJHandmer/status/1644940811837276161?s=20
 -->
