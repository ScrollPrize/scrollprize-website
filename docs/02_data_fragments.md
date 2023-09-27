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

4µm 3D X-ray scans, infrared images, and hand-labeled ink masks for three broken-off fragments of papyrus. Each fragment scan is 7,000-14,000 .tif files. The 3D scans are in vertical slices from side to side. Both 54keV and 88keV volumes are a released for every fragment. These data are for use in training ink detection models.

Just like the scrolls, the four fragments are from the [Institut de France](https://en.wikipedia.org/wiki/Institut_de_France) and were scanned at the [Diamond Light Source](https://en.wikipedia.org/wiki/Diamond_Light_Source) particle accelerator.

<div className="flex flex-wrap">
  <div className="w-[45%] mb-2 mr-2 max-w-[200px]"><img src="/img/data/fr1.jpg" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 1</figcaption></div>
  <div className="w-[45%] mb-2 mr-2 max-w-[200px]"><img src="/img/data/fr2.jpg" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 2</figcaption></div>
  <div className="w-[45%] mb-2 mr-2 max-w-[200px]"><img src="/img/data/fr3.png" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 3</figcaption></div>
  <div className="w-[45%] mb-2 mr-2 max-w-[200px]"><img src="/img/data/fr4.png" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 4</figcaption></div>
</div>

The fragments are really tiny! Here you can see them in context:

<figure>
  <img src="/img/data/francoise.png"/>
  <figcaption className="mt-0">Françoise Bérard (Director of the Library at the Institute de France) holding a tray of fragments; Fragment 1 up close; a fragment vertically mounted for scanning at Diamond Light Source</figcaption>
</figure>

The idea is to train ML models on these fragments, since we have the ground truth data of where the ink is. Then, those ML models can be applied to the scrolls.

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

## Data format

The fragment data is published on the data server on in the `.volpkg` format, which is the data format used by Volume Cartographer (learn more in [Tutorial 3](tutorial3)). It's the same for all the fragments:

* [`/fragments/Frag{1,2,3,4}.volpkg/`](http://dl.ash2txt.org/fragments/Frag1.volpkg/)
    * `/config.json`: Metadata.
    * `/volumes/`: Two volumes each: one scan at 54keV, one at 88keV. Both have a 4µm voxel size.
    * `/working/<name>.mp4`: Video montage of the slices.
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

