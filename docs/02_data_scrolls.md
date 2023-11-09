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

The scroll data is from two scanning sessions:

* 2019 scans, released at the start of the competition in March 2023.
* 2023 scans, released in the fall of 2023 (<a href="https://scrollprize.substack.com/p/new-scans-of-herculaneum-papyri-at">announcement</a>) on an ongoing basis, as the data is being processed.

## 2019 Scans

<div className="flex w-[100%]">
    <div className="w-[100%] mb-2 mr-2"><img src="/img/overview/scroll1-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-0">Scroll 1 (PHerc Paris 3)</figcaption></div>
    <div className="w-[100%] mb-2"><img src="/img/overview/scroll2-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-0">Scroll 2 (PHerc Paris 4)</figcaption></div>
</div>

7.91µm 3D X-ray scans of two intact scrolls (top halves only), scanned in horizontal slices from bottom to top. Each half scroll scan is 14,000 .tif files, 120MB each. Each slice is 7.91µm tall, so this scroll half is 11.2cm tall. Both were scanned at 54keV, though we also released a smaller slice of Scroll 2 at 88keV. These are the scans you need to read to win the Grand Prize. More technical details: [“EduceLab-Scrolls: Verifiable Recovery of Text from Herculaneum Papyri using X-ray CT”](https://arxiv.org/abs/2304.02084).

The two scrolls are from the [Institut de France](https://en.wikipedia.org/wiki/Institut_de_France) and were scanned at about 7.91µm resolution at the [Diamond Light Source](https://en.wikipedia.org/wiki/Diamond_Light_Source) particle accelerator. We are only releasing data from the top halves of these scrolls (they were standing on end when they were scanned). We will work with you to apply your techniques to the bottom halves in order to validate your submission.

## 2023 Scans

<div className="flex w-[100%]">
  <div className="sm:w-[35.5%] mb-2 mr-2"><img src="/img/overview/PHerc0332.jpg" className="w-[100%]"/><figcaption class="mt-[0]">Scroll 3 (PHerc 0332)</figcaption></div>
  <div className="sm:w-[55%] mb-2"><img src="/img/overview/PHerc1667.jpg" className="w-[100%]"/><figcaption class="mt-[0]">Scroll 4 (PHerc 1667)</figcaption></div>
</div>

New scans from 2023 (<a href="https://scrollprize.substack.com/p/new-scans-of-herculaneum-papyri-at">announcement</a>). 3.24µm and 7.91µm 3D X-ray scans of two partially unrolled scrolls, scanned in horizontal slices from bottom to top. PHerc 1667 has an accompanying [fragment](data_fragments). More technical details: [“EduceLab Herculaneum Scroll Data (2023) Info Sheet”](https://drive.google.com/file/d/1dIAMDT-McduVamJOxvPg-PwQm5qQUDX5/view?usp=sharing).

The scrolls are from the [Officina dei Papiri Ercolanesi, Biblioteca Nazionale di Napoli Vittorio Emanuele III in Naples, Italy](https://www.bnnonline.it/it/121/officina-dei-papiri-ercolanesi). Scanning was done at the [Diamond Light Source](https://en.wikipedia.org/wiki/Diamond_Light_Source) particle accelerator, on the [I12 beamline](https://www.diamond.ac.uk/Instruments/Imaging-and-Microscopy/I12.html), using [optical modules 2 and 3](https://www.diamond.ac.uk/Instruments/Imaging-and-Microscopy/I12/Detectors-at-I12.html), which have pixel sizes of 7.91 µm and 3.24 µm, respectively. We scanned with monochromatic incident energies of 53 keV, 70 keV, 88 keV, and 105 keV. This means we have a total of 2*4=8 volumes for each scroll.

## .volpkg format (used for both scrolls and fragments)

Both the scroll and [fragment](data_fragments) data is published on the data server on in the `.volpkg` format, which is the data format used by Volume Cartographer (learn more in [Tutorial 3](tutorial3)).

A `.volpkg` needs to have the following files and directories, otherwise Volume Cartographer will crash. You can, however, add more files or directories.

* `*.volpkg/`
    * `/config.json`: Contains some metadata, such as the name and the thickness of the papyrus.
    * `/volumes/`: The actual CT scans. Each volume is an image stack of .tif files. The different volumes in a .volpkg may be CT scans of the same area, or of completely different areas. For different volumes of the same area, they may be aligned with each other (“registered”), or not.
        * `/<id>/meta.json`: Contains metadata about this particular volume.
        * `/<id>/<number>.tif`: The actual image stack itself.
    * `/renders/`: Where rendering data will be stored. May be empty.
    * `/paths/`: This is where segments are stored (see next chapter: [Segments](data_segments)). May be empty.
    * `/working/` (optional): We typically put miscellaneous related data in this directory.

A typical .tif file from the scrolls look like this, giving a top-down view:

<figure>
  <img src="/img/data/07000.jpg" className="max-w-[500px]"/>
  <figcaption className="mt-0">full-scrolls/Scroll1.volpkg/volumes/20230205180739/07000.tif (cropped)</figcaption>
</figure>

## Data server

You can find the full scroll data on the [data server](http://dl.ash2txt.org/full-scrolls/) in the [`/full-scrolls/`](http://dl.ash2txt.org/full-scrolls/) folder.

* **Scroll 1 (PHerc Paris 3):** The scroll for which we have by far the most [segments](data_segments), and in which the [first letters](firstletters) have been discovered. Half of the scroll has been released in single 54keV volume.
* **Scroll 2 (PHerc Paris 4):** Has proven to be harder to segment. We do have a 88keV “slab” (small sub-volume) in addition to the 54keV main volume. Also, the main volume has a scanning artifact in the middle of the volume.
* **Scroll 3 (PHerc 332):** Canonical volume is 3.24µm, 53keV. Other volumes will become available as processing finishes. All volumes will be aligned to the canonical volume. Also has raw HDF files available, from before “windowing” the raw values to .tif integer values (see [this FAQ item](faq#how-should-the-intensity-values-in-the-ct-scans-be-interpreted)).
* **Scroll 4 (PHerc 1667):** Canonical volume is 3.24µm, 88keV. Otherwise similar to Scroll 3. The volume with 3.24µm, 53keV had slight data loss during scanning, and so is not as good.

At 3.24µm and 7.91µm resolution, the data files are big. We believe this resolution is necessary to detect ink, as suggested by the excellent paper [From invisibility to readability: Recovering the ink of Herculaneum](https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0215775&type=printable).

This is a video montage of Scroll 1:
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
