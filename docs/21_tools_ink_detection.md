---
title: "Ink Detection Tools"
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

There are two major avenues people have been pursuing for detecting ink in the scrolls.

1. **Fragment-based.** Training ML models on fragments, then running them on scroll segments. This is the method we originally envisioned, and created some prizes around, like the [Ink Detection prize on Kaggle](https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/).
2. **Crackle-based.** Searching the scrolls for the [“crackle pattern”](https://caseyhandmer.wordpress.com/2023/08/05/reading-ancient-scrolls/) discovered by Casey Handmer.

### What are people working on?

**Next milestone:** [First Letters Prize](first_letters).

### Fragment-based ink detection

<figure className="max-w-[600px]">
  <img src="/img/progress/inkdetection.jpg" className="w-[100%]"/>
  <figcaption className="mt-0">Figure from the Kaggle 6th place winners writeup</figcaption>
</figure>

The state of the art of Fragment-based ink detection are the top 10 models from the Ink Detection prize on Kaggle.

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

<div>So far, none of these models have successfully shown letters on the scroll segments. One barrier is the difference in resolution (4µm vs 8µm). There have been some interesting analyses performed though:</div>

* [**Ryan Chesler’s analysis.**](https://github.com/ainatersol/Vesuvius-InkDetection/blob/main/additional_findings.md) From the #1 Kaggle team, Ryan Chesler did an analysis of retraining their model on 8µm, and applying that to the Monster Segment.
* [**OverthINKingSegmenter’s analysis.**](https://github.com/MIC-DKFZ/OverthINKingSegmenter/blob/master/vesuvius_followup_writeup.pdf) Another analysis from the #7 Kaggle team, on the importance of resolution.
* [**Scroll pretraining.**](https://github.com/younader/VesuviusPretraining) An idea for pretraining on the scrolls and finetuning on the fragments.
* [**Stephen Parsons’ PhD dissertation.**](https://uknowledge.uky.edu/cs_etds/138/) Lots and lots of gems in here. And of course we’d be remiss not to mention his original [ink-id](https://github.com/educelab/ink-id) software.

### Crackle-based ink detection

Casey Handmer discovered a [“crackle pattern”](https://caseyhandmer.wordpress.com/2023/08/05/reading-ancient-scrolls/) in Scroll 1, which appears to be ink. We haven’t found too many occurrences of it in the scroll yet, but it is a promising idea to explore further.

<div>Several projects have been started to look into this crackle pattern more:</div>

* [Luke’s 4th place Kaggle finetuning.](https://github.com/lukeboi/scroll-fourth-second) This didn’t seem to work.
* [Crackle Viewer.](https://github.com/schillij95/Crackle-Viewer) Tool by Julian Schilliger (@RICHI on Discord) to annotate crackles in segments.
* [Luke’s (unreleased) crackle model.](https://discord.com/channels/1079907749569237093/1079907750265499772/1145416674833600592) A very promising method that appears to uncover multiple letters. By Luke Farritor (@lukeboi on Discord). See also [Nat’s tweet](https://twitter.com/natfriedman/status/1695870954734490003).
* [Julian’s (unreleased) crackle model.](https://discord.com/channels/1079907749569237093/1079907750265499772/1145465050509869226) Seems similar to Luke’s model.

<figure className="max-w-[600px]">
  <img src="/img/progress/crackle.jpeg" className="w-[100%]"/>
  <figcaption className="mt-0">Luke’s unreleased <a href="https://twitter.com/natfriedman/status/1695870954734490003">crackle model</a>.</figcaption>
</figure>
