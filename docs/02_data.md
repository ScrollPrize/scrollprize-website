---
title: "The Data"
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

<div>
  <table>
    <tbody>
      <tr>
        <td><a href="https://forms.gle/HV1J6dJbmCB2z5QL8">full-scrolls/</a><br/>4.7TB</td>
        <td>
          <div className="mb-4">8µm 3D X-ray scans of two intact scrolls (top halves only), scanned in horizontal slices from bottom to top. Each half scroll scan is 14,000 .tif files, 120MB each. Each slice is 8µm tall, so this scroll half is 11.2cm tall. Both were scanned at 54keV, though we also released a smaller slice of Scroll 2 at 88keV. These are the scans you need to read to win the Grand Prize. See the <code>meta.json</code> files for details.</div>
          <div className="flex flex-wrap max-w-[500px]">
            <div className="sm:w-[45%] mb-2 mr-2"><img src="/img/overview/scroll1-small.jpg" className="w-[100%]"/><strong>Scroll 1</strong></div>
            <div className="sm:w-[45%] mb-2"><img src="/img/overview/scroll2-small.jpg" className="w-[100%]"/><strong>Scroll 2</strong></div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="https://forms.gle/HV1J6dJbmCB2z5QL8">fragments/</a><br/>1.6TB</td>
        <td>
          <div className="mb-4">4µm 3D X-ray scans, infrared images, and hand-labeled ink masks for three broken-off fragments of papyrus. Each fragment scan is 7,000 - 14,000 .tif files. The 3D scans are in vertical slices from side to side. Both 54keV and 88keV volumes are a released for every fragment. These data are for use in training ink detection models and entering the Kaggle competition.</div>
          <div className="flex flex-wrap max-w-[500px]">
            <div className="sm:w-[33%] mb-2 mr-2" style={{ maxWidth: "calc(50% - 8px)" }}><img src="/img/data/fr1.jpg" className="w-[100%]"/><strong>Fragment 1</strong></div>
            <div className="sm:w-[31.6%] mb-2 mr-2" style={{ maxWidth: "calc(50% - 8px)" }}><img src="/img/data/fr2.jpg" className="w-[100%]"/><strong>Fragment 2</strong></div>
            <div className="sm:w-[27%] mb-2 mr-2" style={{ maxWidth: "calc(50% - 8px)" }}><img src="/img/data/fr3-small.jpg" className="w-[100%]"/><strong>Fragment 3</strong></div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/data">Kaggle data</a><br/>37GB</td>
        <td>
          <div>Post-processed version of the “fragments/” data above. Two operations were done on this data:</div>
          <ul>
            <li>3D X-ray scans (54keV) were transformed into “surface volumes”, as described in the <a href="/tutorial1">tutorials</a>.</li>
            <li>Infrared photos were aligned with these surface volumes, and binary ink masks were created to denote the presence of ink.</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><a href="https://gist.github.com/janpaul123/280262ebce904f7366fe4cc155593e90">campfire.zip</a><br/>338MB</td>
        <td>
          <div className="mb-4">X-ray scans and images of the Campfire Scroll</div>
          <div className="flex flex-wrap">
            <div className="sm:w-[35%] max-w-[100px] sm:max-w-[1000px] mb-2 mr-2"><img src="/img/tutorials/campfire-rolled2.jpg" className="max-w-[100px]"/><br/><strong>Campfire scroll</strong></div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

To learn more about the data, read the data paper [“EduceLab-Scrolls: Verifiable Recovery of Text from Herculaneum Papyri using X-ray CT”](https://arxiv.org/abs/2304.02084).

## How to Download the Data

Fill out the [registration form](https://forms.gle/HV1J6dJbmCB2z5QL8) and you will be provided with a download link automatically. The license terms of this data are specified on the download form.

The tutorial data (campfire.zip) is <a href="https://gist.github.com/janpaul123/280262ebce904f7366fe4cc155593e90">available to download</a> without registering.

If you are just entering the [Kaggle competition](https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/) and not working on the grand prize, you do not need to download any data from this page; all the relevant fragment data is available via Kaggle.

## Where did the data come from?

The two full scrolls are from the [Institut de France](https://en.wikipedia.org/wiki/Institut_de_France) and were scanned at about 8µm resolution at the [Diamond Light Source](https://en.wikipedia.org/wiki/Diamond_Light_Source) particle accelerator. We are only releasing data from the top halves of these scrolls (they were standing on end when they were scanned). We will work with you to apply your techniques to the bottom halves in order to validate your submission.

<div className="flex w-[100%]">
    <div className="w-[100%] mb-2 mr-2"><img src="/img/overview/scroll1-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-0">Scroll 1</figcaption></div>
    <div className="w-[100%] mb-2"><img src="/img/overview/scroll2-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-0">Scroll 2</figcaption></div>
</div>

At 8µm resolution, the data files are big. We believe this resolution is necessary to detect ink, as suggested by the excellent paper [From invisibility to readability: Recovering the ink of Herculaneum](https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0215775&type=printable). Each .tif file in the full scroll sans is 8 micrometers tall so if you want to grab a centimeter of them from the middle of the scroll, you can just download 1,250 of them from the middle of the scan. We provide scripts for doing this once you've [registered](https://forms.gle/HV1J6dJbmCB2z5QL8).

The fragments of detached papyrus were scanned at 4µm using the same particle accelerator. They are very tiny!


<figure>
  <img src="/img/data/francoise.png"/>
  <figcaption className="mt-0">Francoise Berard, director of the library at the Institute de France, with the fragments just before they were scanned; and the research group in the scanning room of the Diamond Light Source particle accelerator.</figcaption>
</figure>

## What does the data look like?

A typical .tif file from the scrolls look like this, giving a top-down view:

<figure>
  <img src="/img/data/07000.jpg"/>
  <figcaption className="mt-0">full-scrolls/Scroll1.volpkg/volumes/20230205180739/07000.tif (cropped)</figcaption>
</figure>

The fragments are sliced from the side:

<figure>
  <img src="/img/data/4000.jpg"/>
  <figcaption className="mt-0">fragments/Frag1.volpkg/volumes/20230205142449/4000.tif</figcaption>
</figure>

Watch a video of a scroll:

<iframe className="w-[100%] mb-4 aspect-square" src="https://www.youtube.com/embed/cY5BIxkf5m0"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>