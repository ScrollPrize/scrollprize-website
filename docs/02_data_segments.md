---
title: "Segments"
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

Segmentation involves mapping sheets of papyrus inside a 3D X-ray scroll volume or fragment volume. 

<figure className="max-w-[500px]">
  <video autoPlay playsInline muted controls className="w-[100%] rounded-xl" poster="/img/tutorials/vc-extrapolation2.jpg">
    <source src="/img/tutorials/vc-extrapolation2.webm" type="video/webm"/>
    <source src="/img/tutorials/vc-extrapolation2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">Illustration of Volume Cartographer with an algorithm extrapolating in 3D.</figcaption>
</figure>

The resulting 3D structure is called a “mesh”, capturing the complex shape of the papyrus sheet.

<div className="flex flex-wrap max-w-[500px]">
  <div className="w-[100%] max-w-[400px] mb-4"><div className="overflow-hidden mb-2"><img loading="eager" src="/img/data/segmentation-animation.webp" className="w-[100%] mt-[-30px] mb-[-50px]"/></div><figcaption className="mt-[-6px]">Some segment meshes from Scroll 1.</figcaption></div>
</div>

The mesh is used to isolate and extract a thin "surface volume" of the mapped papyrus surface in micro-CT. The surface volume is flattened into a stack of 65 image files (layers), where 32.tif is nominally the papyrus surface. 64.tif is “atop” of the surface and 00.tif is “below”.

<div className="flex w-[100%]">
    <div className="w-[100%] mb-2 mr-2"><img src="/img/data/mesh2surfvol.png" className="w-[100%]"/><figcaption className="mt-0">A flattened surface volume is produced starting from a mesh.</figcaption></div>
</div>

<figure className="max-w-[600px]">
  <img src="/img/data/surface_volume.gif"/>
  <figcaption className="mt-0">Scrubbing through layers of the surface volume of segment <a href="https://dl.ash2txt.org/full-scrolls/Scroll1/PHercParis4.volpkg/paths/20230827161846/layers/">20230827161846</a>.</figcaption>
</figure>

The flattened surface volume can be used directly to look for ink, either by visual inspection or with machine learning tools.

<div className="flex w-[100%]">
  <div className="w-[100%] mb-2 mr-2"><img src="/img/data/ML-ink-detection.png" className="w-[100%]"/><figcaption className="mt-0">Machine learning ink detection models finding a Pi.</figcaption></div>
</div>

Our Segmentation Team has been mapping select regions of the scrolls. The community has made this a significantly more automated process with improved tools, but it still involves considerable human input. 

<div className="flex w-[100%]">
  <div className="w-[100%] mb-2 mr-2"><img src="/img/data/segment_areas.png" className="w-[100%]"/><figcaption className="mt-0">Total segment area created over time by our team and community.</figcaption></div>
</div>

You can view the meshes of our Scroll 1 segments in [Volume Viewer](https://github.com/tomhsiao1260/vc-whiteboard/tree/demo-3) (hosted [here](http://37.19.207.113:5174)) and [Segment Viewer](https://github.com/tomhsiao1260/segment-viewer) (hosted [here](http://37.19.207.113:5173)).

For more technical details about how the segmentation team operates, check out this doc: [The Segmenter’s Guide to Volume Cartographer](https://docs.google.com/document/d/11B9Gy1gJRye_NQHphwbIxINvactUchJJsJOJi1FKrgI/edit?usp=sharing).

## Data format

You can find all segment data on the [data server](https://dl.ash2txt.org/) in the [`/full-scrolls/`](https://dl.ash2txt.org/full-scrolls/) folder.

* **Scroll 1 (PHerc. Paris. 4):** [`/full-scrolls/Scroll1/PHercParis4.volpkg/paths/`](https://dl.ash2txt.org/full-scrolls/Scroll1/PHercParis4.volpkg/paths/)
* **Scroll 2 (PHerc. Paris. 3):** [`/full-scrolls/Scroll2/PHercParis3.volpkg/paths/`](https://dl.ash2txt.org/full-scrolls/Scroll2/PHercParis3.volpkg/paths/)
* **Scroll 3 (PHerc. 332):** [`/full-scrolls/Scroll3/PHerc332.volpkg/paths/`](https://dl.ash2txt.org/full-scrolls/Scroll3/PHerc332.volpkg/paths/)
* **Scroll 4 (PHerc. 1667):** [`/full-scrolls/Scroll4/PHerc1667.volpkg/paths/`](https://dl.ash2txt.org/full-scrolls/Scroll4/PHerc1667.volpkg/paths/)

There are many different types of files provided in each `paths/<id>/` folder:
* `meta.json`: Metadata of the segment.
* `layers/{00-64}.tif`: Surface volume of 65 layers.
  * This is most useful for detecting ink.
* `<id>.tif`: Texture of the surrounding voxels (the maximum of a few of the surrounding layers).
* `<id>.obj`: Mesh of the segment.
* `<id>_points.obj`: Pointcloud.
* `<id>.ppm`: Per-pixel map, a custom data format mapping points between the surface volume and the original 3D volume of the scroll.
* `pointset.vcps`: Pointset of a segment. More information [here](https://www.kaggle.com/code/kglspl/simple-vcps-parser)
* `author.txt`: Name of the author of the segment.
* `area_cm2.txt`: Total surface area, in cm<sup>2</sup>.
