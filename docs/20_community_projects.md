---
title: "Community Projects"
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

Since launching the Vesuvius Challenge, our community has generated an incredible set of tools to help with various parts of the pipeline.

Efforts can generally be grouped into two categories:

* [**Segmentation:**](#segmentation) the mapping of sheets of papyrus (“segments”) in a 3D X-ray volume. See [Tutorial 3](tutorial3) and [Data -> Segments](data_segments).
* [**Ink Detection:**](#ink-detection) detecting ink in segments. See [Tutorial 4](tutorial4).

## Segmentation

<figure className="max-w-[500px]">
  <div className="w-[100%]"><div className="overflow-hidden mb-2"><img loading="eager" src="/img/data/segmentation-animation.webp" className="w-[100%] mt-[-30px] mb-[-50px]"/></div>
  <figcaption className="mt-0">Some segments from Scroll 1</figcaption></div>
</figure>

Segmentation is the mapping of sheets of papyrus (“segments”) in a 3D X-ray volume. See [Tutorial 3](tutorial3). The community has built various tools to do this.

We also have a hired segmentation team using these tools to generate segments. These are available for anyone to download. See [Data -> Segments](data_segments) for more information.

### What are people working on?

<div><strong>Next milestone:</strong> segmenting all papyrus sheets of all scrolls. For this we will need tools like:</div>

- Segmenting the [latest scans](https://scrollprize.substack.com/p/new-scans-of-herculaneum-papyri-at)
  - Better tooling for dealing with the higher resolutions and multiple volumes
  - Current state of the art: [Philip’s Volume Cartographer fork](#volume-cartographer)
- Better tools for high-accuracy segmentation or correcting
  - Current state of the art: [Khartes](#khartes)
- Autosegmentation (minimal human input)
- Merging of segments
- Visualizing segments both in 3D and in flattened form
  - Current state of the art: [Segment Viewer](#volume-viewer-and-segment-viewer)

### Volume Cartographer

[Original Github repo](https://github.com/educelab/volume-cartographer) / [Faster version by Julian (@RICHI)](https://github.com/schillij95/volume-cartographer-papyrus) / [Even more features by Philip (@spacegaier)](https://github.com/spacegaier/volume-cartographer/)

<figure className="">
  <video autoPlay playsInline muted loop className="w-[100%] max-w-[600px] rounded" poster="/img/tutorials/vc-segmentation3.jpg">
    <source src="/img/tutorials/vc-segmentation3.webm" type="video/webm"/>
    <source src="/img/tutorials/vc-segmentation3.mp4" type="video/mp4"/>
  </video>
</figure>

The main tool that the segmentation team currently uses is Volume Cartographer.

This tool was originally created by EduceLab (in particular Seth Parker), and is now being improved both by EduceLab and the Vesuvius Challenge community. The tool has been improved greatly, with more accurate and faster segmentation algorithms and UI improvements.

<div>Resources:</div>

* [Tutorial 3.](tutorial3) We have an in-depth tutorial on how to use Volume Cartographer.
* [Original Volume Cartographer repo.](https://github.com/educelab/volume-cartographer/) The original version by Seth Parker and others.
* [Julian’s Volume Cartographer fork.](https://github.com/schillij95/volume-cartographer-papyrus/) The segmentation team previously used this version by Julian Schilliger (@RICHI on Discord).
* [Philip’s Volume Cartographer fork.](https://github.com/spacegaier/volume-cartographer/) The segmentation team currently uses this version by Philip Allgaier (@spacegaier on Discord).
* [The Segmenter’s Guide to Volume Cartographer (for contractors).](https://docs.google.com/document/d/11B9Gy1gJRye_NQHphwbIxINvactUchJJsJOJi1FKrgI/edit?usp=sharing) For more technical details about how the segmentation team operates, check out this doc.
* [Volume Cartographer’s Apps and Utilities page](https://github.com/educelab/volume-cartographer/blob/develop/docs/pages/apps-list.md). Also be sure to check out the various other docs in this directory.
* [Data Processing Workflow doc](https://github.com/educelab/ink-id/blob/develop/docs/data-processing-workflow.md) which is in the ink-id repo, but is mostly about Volume Cartographer and segmentation. Also goes into how to do alignment (”registration”) of infrared photos of the fragments, and how to create binary ink labels.
* [Ben’s Segmentation Tutorial.](https://www.youtube.com/watch?v=gcSQKiHdISw) Ben (@Hari_Seldon on Discord) goes into great detail on how to do segmenting.
* [JP’s Segmentation Party.](https://www.youtube.com/watch?v=zKMVNaA2GdU) JP does a bunch of segmentation.
* [.vcps parser.](https://www.kaggle.com/code/kglspl/simple-vcps-parser) Useful code if you’re working with the custom .vcps data format.

### Khartes

[Github repo](https://github.com/KhartesViewer/khartes) / [Brett Olsen’s fork](https://github.com/caethan/khartes/)

<figure className="">
  <video autoPlay playsInline muted loop className="w-[100%] max-w-[600px] rounded">
    <source src="/img/progress/khartes.webm" type="video/webm"/>
    <source src="/img/progress/khartes.mp4" type="video/mp4"/>
  </video>
</figure>

A new tool created by Chuck (@khartes_chuck on Discord) which allows for very precise segmentation, using real-time texturing UIs that show the segment from different angles. It is used on occasion by the segmentation team.

### VC Whiteboard and Segment Viewer

[VC Whiteboard Github repo](https://github.com/tomhsiao1260/vc-whiteboard) / [Segment Viewer Github repo](https://github.com/tomhsiao1260/segment-viewer)

<figure className="max-w-[500px] ">
  <div className="w-[100%]"><div className="overflow-hidden mb-2"><img loading="eager" src="/img/data/segmentation-animation.webp" className="w-[100%] mt-[-30px] mb-[-50px]"/></div></div>
</figure>

These are used by the segmentation team primarily to see which segments they have worked on already. We host them respectively [here](http://37.19.207.113:5173/) and [here](http://37.19.207.113:5174/). The datasets that these live versions pull from are updated about once per month.

### Segment Browser

[Vesuvius Segment Browser](https://vesuvius.virtual-void.net/) / [Github repo](https://github.com/jrudolph/vesuvius-browser)

![demo1](https://github.com/ScrollPrize/scrollprize-website/assets/9868/5c441b97-6a7b-4f26-8dd6-8535f0a3e4d6)

A web-based tool to browse layers and open source ink detection results of all released segments.

### Omit

[Code download](https://tinyurl.com/Omit-1)

<figure className="">
  <video autoPlay playsInline muted loop className="w-[100%] max-w-[600px] rounded">
    <source src="/img/progress/omit.mp4" type="video/mp4"/>
  </video>
</figure>

Visualizing ink on segments in 3D.

### VolumeAnnotate

[Github repo](https://github.com/MosheLevy20/VolumeAnnotate)

<figure className="max-w-[600px] ">
  <img src="/img/progress/volumeannotate.png" className="w-[100%]"/>
</figure>

A reimplementation of Volume Cartographer in Python by Moshe Levy (@moshelevy on Discord). Not quite feature-complete yet (in particular it’s missing Julian’s improvements), but long term this might be easier to maintain than the C++ codebase of Volume Cartographer.

### QuickSegment

[Github repo](https://github.com/educelab/quick-segment)

<figure className="">
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

<figure className="max-w-[500px] ">
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

## Ink Detection

There are two major avenues people have been pursuing for detecting ink in the scrolls, and for building training datasets.

1. **Fragment-based.** Training ML models on detached scroll fragments with photographic ground truth, then running them on scroll segments. This was the method used to prove the concept of recovering Herculaneum ink from CT scans. Some prizes were created around this, like the [Ink Detection prize on Kaggle](https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/). Resulted in Youssef’s [First Letters Prize](firstletters) results.
2. **Scroll-based.** Searching the intact scrolls for the [“crackle pattern”](https://caseyhandmer.wordpress.com/2023/08/05/reading-ancient-scrolls/) discovered by Casey Handmer. Resulted in Luke’s [First Letters Prize](firstletters) results.

It may turn out that both fragment data and scroll data can be combined for effective training sets.
For now, training directly on scroll data removes the domain shift between fragments and scrolls, and yields stronger results.

### What are people working on?

**Next milestone:** Improving the precision seen in the Grand Prize results, so that we can recover more high quality passages.

### Fragment-based ink detection

<figure className="max-w-[100%]">
  <img src="/img/firstletters/composite_thumb.png" className="w-[100%]"/>
  <figcaption className="mt-0">Youssef’s model from the <a href="firstletters">First Letters Prize</a>.</figcaption>
</figure>

<div>Some different things people have pursued:</div>

* [**Youssef’s First Letters Prize model.**](https://github.com/younader/Vesuvius-First-Letters) By Youssef Nader (@YoussefNader on Discord).
* [**Scroll pretraining.**](https://github.com/younader/VesuviusPretraining) Youssef’s original idea for pretraining on the scrolls and finetuning on the fragments, which led him to winning the [First Letters Prize](firstletters).
* [**Ryan Chesler’s analysis.**](https://github.com/ainatersol/Vesuvius-InkDetection/blob/main/additional_findings.md) From the #1 Kaggle team, Ryan Chesler did an analysis of retraining their model on 8µm, and applying that to the Monster Segment.
* [**OverthINKingSegmenter’s analysis.**](https://github.com/MIC-DKFZ/OverthINKingSegmenter/blob/master/vesuvius_followup_writeup.pdf) Another analysis from the #7 Kaggle team, on the importance of resolution.
* [**Stephen Parsons’ PhD dissertation.**](https://uknowledge.uky.edu/cs_etds/138/) Lots and lots of gems in here. And of course we’d be remiss not to mention his original [ink-id](https://github.com/educelab/ink-id) software.
* [**Anton Repushko’s ink labels.**](https://discord.com/channels/1079907749569237093/1177039383375912990/1177039383375912990) Many more ink labels in addition to the First Letters Prize winner’s labels.

We also ran a fragment-based Ink Detection prize on Kaggle. These were the top 10 results:

<a id="kaggle-ink-detection"/>

* 1st place: **ryches.** <a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417496">Writeup</a> / <a href="https://github.com/ainatersol/Vesuvius-InkDetection">Github</a> / <a href="https://www.kaggle.com/code/ryches/1st-place-solution">Inference notebook</a> / <a href="https://www.youtube.com/watch?v=IWySc8s00P0">Presentation</a>
* 2nd place: **RTX23090.** <a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417255">Writeup</a> / <a href="https://github.com/mipypf/Vesuvius-Challenge">Github</a> / <a href="https://www.kaggle.com/code/mipypf/ink-segmentation-2-5d-3dcnn-resnet3dcsn-fp16fold01?scriptVersionId=132226669">Inference notebook</a> / <a href="https://www.youtube.com/watch?v=lmuyUMA-g1Y">Presentation</a>
* 3rd place: **wuyu.** <a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417536">Writeup</a> / <a href="https://github.com/traptinblur/VCID_2023_3rd_place_code/tree/main">Github</a> / <a href="https://www.kaggle.com/code/traptinblur/3rd-place-ensemble-576-8-384-6-224-8?scriptVersionId=135437978">Inference notebook </a> / <a href="https://www.youtube.com/watch?v=YF0l9LuoMAg">Presentation</a>
* 4th place: **POSCO DX - Heeyoung Ahn.** <a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417779">Writeup</a> / <a href="https://github.com/AhnHeeYoung/Competition/tree/master/kaggle">Github</a> / <a href="https://www.kaggle.com/code/ahnheeyoung1/ink-detection-inference/input?scriptVersionId=136610637">Inference notebook</a> / <a href="https://www.youtube.com/watch?v=-Bbd8nCN3fo">Presentation</a>
* 5th place: **Aksell.** <a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417642">Writeup</a> / <a href="https://github.com/aksell1981/inkdet_solution">Github</a> / <a href="https://www.kaggle.com/code/aksell7/3dresnet18-3dresnet34-infer/notebook">Inference notebook </a>
* 6th place: **chumajin.** <a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417274">Writeup</a> / <a href="https://github.com/chumajin/kaggle-VCID">Github</a> / <a href="https://www.kaggle.com/code/chumajin/vcid-6th-place-inference">Inference notebook</a> / <a href="https://www.youtube.com/watch?v=oTGY_LBhxhc">Presentation</a>
* 7th place: **OverthINKingSegmenter.** <a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417430">Writeup</a> / <a href="https://github.com/MIC-DKFZ/OverthINKingSegmenter">Github</a> / inference in repo
* 8th place: **Luck is all you need.** <a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417383">Writeup</a> / <a href="https://github.com/flyyufelix/vesuvius_challenge_8th_place_solution">Github</a> / inference in repo / <a href="https://www.youtube.com/watch?v=zlP1Ig1eVJ0">Presentation</a>
* 9th place: **still 1 fold, 2 net.** <a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417361">Writeup</a> / <a href="https://github.com/hengck23/solution-vesuvius-challenge-ink-detection">Github</a> / <a href="https://www.kaggle.com/code/hengck23/9th-place-final-ensemble-v1/notebook?scriptVersionId=136499959">Inference notebook</a> / <a href="https://www.youtube.com/watch?v=osN_MHBbhy4">Presentation</a>
* 10th place: **Feng Qilong.** <a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417363">Writeup</a> / <a href="https://github.com/fengql123/kaggle-vesuvius-10th-place-solution/tree/main">Github</a> / <a href="https://www.kaggle.com/code/fengqilong/vesuvius-inference">Inference notebook</a> / <a href="https://www.youtube.com/watch?v=pJ7aec_Lux0">Presentation</a>

<figure className="max-w-[600px]">
  <img src="/img/progress/resolution.png" className="w-[100%]"/>
  <figcaption className="mt-0">Ryan Chesler’s 4µm vs 8µm experiment</figcaption>
</figure>

### Scroll-based ink detection

Casey Handmer discovered a [“crackle pattern”](https://caseyhandmer.wordpress.com/2023/08/05/reading-ancient-scrolls/) in Scroll 1 that often visually indicates the presence of ink.

<div>Following this discovery, several projects have built on labeling ink directly in the scroll data:</div>

* [2023 Grand Prize winners.](grandprize) Generally, this approach was used by winning entries for the 2023 Grand Prize.
* [Luke’s First Letters Prize model.](https://github.com/lukeboi/scroll-first-letters) By Luke Farritor (@lukeboi on Discord).
* [Crackle Viewer.](https://github.com/schillij95/Crackle-Viewer) Tool by Julian Schilliger (@RICHI on Discord) to annotate crackles in segments.
* [Vesuvius Kintsugi.](https://github.com/giorgioangel/vesuvius-kintsugi) Another crackle labeling tool by Giorgio Angelotti (@jordi45698 on Discord).
* [Crackle labels.](http://dl.ash2txt.org/bruniss-uploads/) Made by Sean Johnson (@bruniss on Discord) using Vesuvius Kintsugi.
* [Julian’s (unreleased) crackle model.](https://discord.com/channels/1079907749569237093/1079907750265499772/1145465050509869226) Seems similar to Luke’s model.
* [Luke’s 4th place Kaggle finetuning.](https://github.com/lukeboi/scroll-fourth-second) This didn’t seem to work.
* [Luke’s first crackle / ink in PHerc 1667.](https://discord.com/channels/1079907749569237093/1178882484696535152/1178883029234630736)

<figure className="max-w-[100%]">
  <img src="/img/firstletters/luke-submission.png" className="w-[100%]"/>
  <figcaption className="mt-0">Luke’s <a href="firstletters">First Letters Prize</a> submission.</figcaption>
</figure>

