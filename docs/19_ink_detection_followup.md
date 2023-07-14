---
title: "$12,000 Ink Detection Followup (August 28th)"
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

With the [Ink Detection](previous#ink-detection-progress-prize-june-14-2023) winners announced, the world now has ten high-performance open source models that can detect ink in CT scans of Herculaneum papyrus. It’s time to put them to work!

Today we’re announcing the **Ink Detection Followup Prize**, which will be awarded to open source contributors who advance the state of the art in open source ink detection model in a way that brings us all closer to reading the full scrolls.

The 10 winning teams have now all published their code, and made writeups and video presentations, all of which is linked below.

* Six prizes total: two $3,000 prizes, and four $1,500 prizes
* Deadline: Submissions are closed on Monday August 28th 11:59pm PT.
* Any tools, documentation, notebooks, analysis, that use the code from the Ink Detection Prize. Must be open source under a permissive license (MIT, Apache).
* Ideas:
  * Simply running a winning Ink Detection submission on the main scroll! Maybe it just works?? (If so, be sure to also submit for the $50,000 First Letters Prize!)
  * Easy to run notebook / Docker container / VM image that can run all models.
  * Greyscale outputs instead of binary classification.
  * Ensemble model of all the winning submissions.
  * Adapting or fine-tuning models so they work better on the full scrolls (e.g. to account for the 4µm vs 8µm voxel size difference).
  * Analysis that shows how to change our segmentation techniques to get better results with Ink Detection models.
  * Modify models to be trained on (and output) the infrared photos instead of hand-labeled binary classification.
  * Analysis that characterizes the distribution shift between the fragment data and the scroll data (on top of their differing voxel sizes) using visualization, quantification, or other methods, and approaches to bridge this domain gap
* You may make multiple submissions. We may award a single prize to a set of multiple submissions by one person or team.
* Your submission will be judged subjectively: the Technical Review Team will decide what they think are the best open source contributions.
* If you are submitting as a team, the team leader should make the submission, and is responsible for distributing the prize money among the team.
* Submit using [this form](https://forms.gle/4DU4rNTYqNhyGRKVA).


### 1st place: ryches

<p><a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417496">Writeup</a> / <a href="https://github.com/ainatersol/Vesuvius-InkDetection">Github</a> / <a href="https://www.kaggle.com/code/ryches/1st-place-solution">Inference notebook</a></p>


<iframe className="w-[100%] max-w-[400px] mb-4 aspect-video" src="https://www.youtube-nocookie.com/embed/IWySc8s00P0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />


### 2nd place: RTX23090

<p><a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417255">Writeup</a> / <a href="https://github.com/mipypf/Vesuvius-Challenge">Github</a> / <a href="https://www.kaggle.com/code/mipypf/ink-segmentation-2-5d-3dcnn-resnet3dcsn-fp16fold01?scriptVersionId=132226669">Inference notebook</a></p>

<iframe className="w-[100%] max-w-[400px] mb-4 aspect-video" src="https://www.youtube-nocookie.com/embed/lmuyUMA-g1Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

### 3rd place: wuyu

<p><a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417536">Writeup</a> / <a href="https://github.com/traptinblur/VCID_2023_3rd_place_code/tree/main">Github</a> / <a href="https://www.kaggle.com/code/traptinblur/3rd-place-ensemble-576-8-384-6-224-8?scriptVersionId=135437978">Inference notebook </a></p>

<iframe className="w-[100%] max-w-[400px] mb-4 aspect-video" src="https://www.youtube-nocookie.com/embed/YF0l9LuoMAg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

### 4th place: POSCO DX - Heeyoung Ahn

<p><a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417779">Writeup</a> / <a href="https://github.com/AhnHeeYoung/Competition/tree/master/kaggle">Github</a> / <a href="https://www.kaggle.com/code/ahnheeyoung1/ink-detection-inference/input?scriptVersionId=136610637">Inference notebook</a></p>

<iframe className="w-[100%] max-w-[400px] mb-4 aspect-video" src="https://www.youtube-nocookie.com/embed/-Bbd8nCN3fo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

### 5th place: Aksell

<p><a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417642">Writeup</a> / <a href="https://github.com/aksell1981/inkdet_solution">Github</a> / <a href="https://www.kaggle.com/code/aksell7/3dresnet18-3dresnet34-infer/notebook">Inference notebook </a></p>

### 6th place: chumajin

<p><a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417274">Writeup</a> / <a href="https://github.com/chumajin/kaggle-VCID">Github</a> / <a href="https://www.kaggle.com/code/chumajin/vcid-6th-place-inference">Inference notebook</a></p>

<iframe className="w-[100%] max-w-[400px] mb-4 aspect-video" src="https://www.youtube-nocookie.com/embed/oTGY_LBhxhc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

### 7th place: OverthINKingSegmenter

<p><a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417430">Writeup</a> / <a href="https://github.com/MIC-DKFZ/OverthINKingSegmenter">Github</a> / inference in repo</p>

<iframe className="w-[100%] max-w-[400px] mb-4 aspect-video" src="https://www.youtube-nocookie.com/embed/zlP1Ig1eVJ0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

### 8th place: Luck is all you need

<p><a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417383">Writeup</a> / <a href="https://github.com/flyyufelix/vesuvius_challenge_8th_place_solution">Github</a> / inference in repo</p>

<iframe className="w-[100%] max-w-[400px] mb-4 aspect-video" src="https://www.youtube-nocookie.com/embed/zlP1Ig1eVJ0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

### 9th place: still 1 fold, 2 net

<p><a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417361">Writeup</a> / <a href="https://github.com/hengck23/solution-vesuvius-challenge-ink-detection">Github</a> / <a href="https://www.kaggle.com/code/hengck23/9th-place-final-ensemble-v1/notebook?scriptVersionId=136499959">Inference notebook</a></p>

<iframe className="w-[100%] max-w-[400px] mb-4 aspect-video" src="https://www.youtube-nocookie.com/embed/osN_MHBbhy4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

### 10th place: Feng Qilong

<p><a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/417363">Writeup</a> / <a href="https://github.com/fengql123/kaggle-vesuvius-10th-place-solution/tree/main">Github</a> / <a href="https://www.kaggle.com/code/fengqilong/vesuvius-inference">Inference notebook</a></p>

<iframe className="w-[100%] max-w-[400px] mb-4 aspect-video" src="https://www.youtube-nocookie.com/embed/pJ7aec_Lux0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
