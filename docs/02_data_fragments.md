---
title: "Fragments"
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

Scanning sessions and data format is very similar to that of the [full scrolls](data_scrolls).

## 2019 Scans

<div className="flex flex-wrap mb-4">
  <div className="w-[45%] mb-2 mr-2 max-w-[200px]"><img src="/img/data/fr1.jpg" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 1 (PHerc Paris 2 Fr 47)</figcaption></div>
  <div className="w-[45%] mb-2 mr-2 max-w-[200px]"><img src="/img/data/fr2.jpg" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 2 (PHerc Paris 2 Fr 143)</figcaption></div>
  <div className="w-[45%] mb-2 mr-2 max-w-[220px]"><img src="/img/data/fr3.png" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 3 (PHerc Paris 1 Fr 34)</figcaption></div>
  <div className="w-[45%] mb-2 mr-2 max-w-[170px]"><img src="/img/data/fr4.png" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 4 (PHerc Paris 1 Fr 39)</figcaption></div>
</div>

3.24µm 3D X-ray scans, infrared images, and hand-labeled ink masks for three broken-off fragments of papyrus. Each fragment scan is 7,000-14,000 .tif files. The 3D scans are in vertical slices from side to side. Both 54keV and 88keV volumes are a released for every fragment, though they are NOT aligned with each other. Fragment 4 was originally held back for automated scoring in the [Kaggle](https://kaggle.com/competitions/vesuvius-challenge-ink-detection/) competition but has since been released.

Just like the scrolls, the four fragments are from the [Institut de France](https://en.wikipedia.org/wiki/Institut_de_France) and were scanned at the [Diamond Light Source](https://en.wikipedia.org/wiki/Diamond_Light_Source) particle accelerator. More technical details: [“EduceLab-Scrolls: Verifiable Recovery of Text from Herculaneum Papyri using X-ray CT”](https://arxiv.org/abs/2304.02084).

The fragments are really tiny! Here you can see them in context:

<figure>
  <img src="/img/data/francoise.png"/>
  <figcaption className="mt-0">Françoise Bérard (Director of the Library at the Institute de France) holding a tray of fragments; Fragment 1 up close; a fragment vertically mounted for scanning at Diamond Light Source</figcaption>
</figure>

## 2023 Scans

<div className="flex flex-wrap mb-4">
  <div className="w-[45%] mb-2 mr-2 max-w-[300px]"><img src="/img/data/fr5-2.jpg" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 5 (PHerc 1667 Cr 1 Fr 3)</figcaption></div>
  <div className="w-[45%] mb-2 mr-2 max-w-[325px]"><img src="/img/data/fr6-2.jpg" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 6 (PHerc 51 Cr 4 Fr 48)</figcaption></div>
</div>

Very similar to the 2023 scans of the [scrolls](data_scrolls): same voxel sizes and resolutions. As opposed to the 2019 scan volumes, the different volumes of the 2023 scans ARE aligned. More technical details: [“EduceLab Herculaneum Scroll Data (2023) Info Sheet”](https://drive.google.com/file/d/1GTjn2jkVN3OEw-vswJirHkgD6sBOFldC/view).

Fragment 5 (PHerc 1667 Cr 1 Fr 3) is from the same original scroll as Scroll 4 (PHerc 1667), which was partially unrolled in 1987 using the Oslo method. Find this fragment on [Chartes.it](https://www.chartes.it/index.php?r=document/view&id=1691).

## Data format

The fragment data is published on the data server on in the `.volpkg` format, which is the data format used by Volume Cartographer (learn more in [Tutorial 3](tutorial3) and on the [Scrolls](data_scrolls#volpkg-format-used-for-both-scrolls-and-fragments) page). It's the same for all the fragments:

* [`/fragments/*.volpkg/`](http://dl.ash2txt.org/fragments/Frag1.volpkg/)
    * `/config.json`: Metadata.
    * `/volumes/`: Multiple volumes for the various resolutions and incident energies. For the 2019 scans (fragments 1-4) the different volumes are not aligned, for the 2023 scans (fragments 5-6) they are aligned.
    * `/working/reference/`: Photos of the fragment (normal and infrared).

The 3D volumes of the fragments are sliced from the side:

<figure>
  <img src="/img/data/4000.jpg"/>
  <figcaption className="mt-0">/fragments/Frag1.volpkg/volumes/20230205142449/4000.tif</figcaption>
</figure>

Infrared light makes the ink more clearly visible:

<figure class="max-w-[600px]">
  <img src="/img/data/unaligned-ir.png"/>
  <figcaption className="mt-0">Infrared photo of Fragment 1</figcaption>
</figure>

## Surface volumes

Just like with the [segments in the scroll](data_segments), we have made surface volumes for the fragments. This is necessary because even though they look flat from a top-down photo, the fragments are not completely flat.

We have also aligned (“registered”) the surface volumes with the infrared photos, and made a binary ink mask of where we think there is ink, in consultation with papyrologists.

* [`/working/54keV_exposed_surface/`](http://dl.ash2txt.org/fragments/Frag1.volpkg/working/54keV_exposed_surface/): Data about the processed surface volume.
  * `/surface_volume/*.tif`: The actual surface volume of 65 layers.
  * `/ir.png`: Infrared photo, aligned with the surface volume.
  * `/inklabels.png`: Manually created binary labels for the aligned photo (ink vs no-ink).
  * `/mask.png`: Mask of where there is actually a surface (so you don't train on empty space).
  * `/*.ply`: Surface mesh at different stages of processing (manually cleaned up in Meshlab).
  * `/alignment.psd`: Photoshop file for the manual alignment of the infrared photo to the surface volume.

<div className="flex flex-wrap">
  <div className="sm:w-[30%] mb-2 mr-2" style={{ maxWidth: "calc(33% - 8px)" }}><img src="/img/data/surface32-fr1.png" className="w-[100%]"/><figcaption class="mt-[-6px]">Middle layer (32.tif) of Fragment 1’s surface volume</figcaption></div>
  <div className="sm:w-[30%] mb-2 mr-2" style={{ maxWidth: "calc(33% - 8px)" }}><img src="/img/data/ir-fr1.png" className="w-[100%]"/><figcaption class="mt-[-6px]">Aligned infrared</figcaption></div>
  <div className="sm:w-[30%] mb-2 mr-2" style={{ maxWidth: "calc(33% - 8px)" }}><img src="/img/data/inklabels-fr1.png" className="w-[100%]"/><figcaption class="mt-[-6px]">Aligned binary ink labels</figcaption></div>
</div>

## ML training

The idea is to train ML models on these fragments, since we have the ground truth data of where the ink is (in addition to the [newly discovered “crackle” method](firstletters)). Then, those ML models can be applied to the scrolls.

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] " poster="/img/tutorials/ink-training-anim3-dark.jpg">
    <source src="/img/tutorials/ink-training-anim3-dark.webm" type="video/webm"/>
    <source src="/img/tutorials/ink-training-anim3-dark.mp4" type="video/mp4"/>
  </video>
</figure>

At a high level, training on a fragment works like this:

<figure className="">
  <img src="/img/tutorials/ml-overview-alpha.png" />
</figure>

From a fragment (a) we obtain a 3D volume (b), from which we segment a mesh (c), around which we sample a surface volume (d). We also take an infrared photo (e) of the fragment, which we align (f) with the surface volume, and then manually turn into a binary label image (g). For more details, see [Tutorial 4](tutorial4).
