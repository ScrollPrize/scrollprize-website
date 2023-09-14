---
title: "Scrolls"
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

<div className="flex w-[100%]">
    <div className="w-[100%] mb-2 mr-2"><img src="/img/overview/scroll1-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-0">Scroll 1</figcaption></div>
    <div className="w-[100%] mb-2"><img src="/img/overview/scroll2-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-0">Scroll 2</figcaption></div>
</div>

8µm 3D X-ray scans of two intact scrolls (top halves only), scanned in horizontal slices from bottom to top. Each half scroll scan is 14,000 .tif files, 120MB each. Each slice is 8µm tall, so this scroll half is 11.2cm tall. Both were scanned at 54keV, though we also released a smaller slice of Scroll 2 at 88keV. These are the scans you need to read to win the Grand Prize.

The two scrolls are from the [Institut de France](https://en.wikipedia.org/wiki/Institut_de_France) and were scanned at about 8µm resolution at the [Diamond Light Source](https://en.wikipedia.org/wiki/Diamond_Light_Source) particle accelerator. We are only releasing data from the top halves of these scrolls (they were standing on end when they were scanned). We will work with you to apply your techniques to the bottom halves in order to validate your submission.

## Data format

The scroll data is published on the data server on in the `.volpkg` format, which is the data format used by Volume Cartographer (learn more in [Tutorial 3](tutorial3)).

A `.volpkg` needs to have the following files and directories, otherwise Volume Cartographer will crash. You can, however, add more files or directories.

* `*.volpkg/`
    * `/config.json`: Contains some metadata, such as the name and the thickness of the papyrus.
    * `/volumes/`: The actual CT scans.
        * `/<id>/meta.json`: Contains metadata about the image stack.
        * `/<id>/<number>.tif`: The actual image stack itself.
    * `/renders/`: Where rendering data will be stored. May be empty.
    * `/paths/`: This is where segments are stored (see next chapter: [Segments](data_segments)). May be empty.

A typical .tif file from the scrolls look like this, giving a top-down view:

<figure>
  <img src="/img/data/07000.jpg" className="max-w-[500px]"/>
  <figcaption className="mt-0">full-scrolls/Scroll1.volpkg/volumes/20230205180739/07000.tif (cropped)</figcaption>
</figure>

## Data server

For the full scrolls specifically, you’ll find the following files on the [data server](http://dl.ash2txt.org/full-scrolls/):

* [`/full-scrolls/`](http://dl.ash2txt.org/full-scrolls/)
  * `/Scroll{1,2}.volpkg/`
    * `/volumes/`: Both scrolls have a main volume at 54keV. Scroll 2 also has a much smaller volume (“central slab”) taken at 88keV. Both have a 8µm pixel size. Scroll 2 has a scanning artifact in the middle of the scroll.
    * `/working/<name>.mp4`: Video montage of the slices.

At 8µm resolution, the data files are big. We believe this resolution is necessary to detect ink, as suggested by the excellent paper [From invisibility to readability: Recovering the ink of Herculaneum](https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0215775&type=printable). Each .tif file in the full scroll sans is 8 micrometers tall so if you want to grab a centimeter of them from the middle of the scroll, you can just download 1,250 of them from the middle of the scan. We provide scripts for doing this once you've [registered](https://forms.gle/HV1J6dJbmCB2z5QL8).

This is the video montage of Scroll 1:
<iframe className="w-[100%] max-w-[500px] mb-4 aspect-square" src="https://www.youtube.com/embed/cY5BIxkf5m0"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

## Community-contributed data

<div>Each of the scroll directories also contains community-contributed data. These are used by various tools, for example to load data more efficiently based on which area of the scroll you’re looking at.</div>

  * `/volumes_small/`: 10x smaller “thumbnails” of the slices.
    * `/<volume_id>/{*.tif,meta.json}`: Image stack of the 10x smaller volume, e.g. for use in Volume Cartographer. Generated using [`build_small`](https://github.com/spelufo/vesuvius-build/).
    * `/<volume_id>_small.tif`: The same data, but in a single tif file with multiple layers. Generated using [`build_small_volume`](https://github.com/spelufo/vesuvius-build/).
    * `/<volume_id>_volumes_small_axis{1,2}/*.png`: The same data but across the two orthogonal axes, and as pngs instead of tifs. Generated using [`perpSlices.py`](https://discord.com/channels/1079907749569237093/1104099152469704838/1104105003314053191)
  * `/volumes_masked/`: Same as `/volumes/`, but with non-scroll data blacked out, and the files compressed. About 2x smaller than the original volumes, though may take longer to load in software due to the compression. See [this repo](https://github.com/JamesDarby345/segment-anything-vesuvius) for more details (and [this thread](https://discord.com/channels/1079907749569237093/1105181650415001741) for details about the compression vs performance tradeoff).
  * `/volume_grids/<volume_id>/cell_yxz_*.tif`: The volume split into “cells” of 500x500x500 voxels. Generated using [`build_grid_layer`](https://github.com/spelufo/vesuvius-build/).

One community member, Ahron Wayne (@WayneWayneHello on Discord), has bought a benchtop CT scanner and has been making various scans with them, with the goal of making a simulated scroll (a “campfire scroll”) that can be used as ground truth data. His scans can be found in [`/waynewaynehello-uploads/`](http://dl.ash2txt.org/waynewaynehello-uploads/).

<figure className="max-w-[600px]">
  <img src="/img/data/desktop-scan.gif"/>
  <figcaption className="mt-0">One of @WayneWayneHello's scans</figcaption>
</figure>
