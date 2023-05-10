---
title: "Data Organization"
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

The community continues to create derived data (particularly for the full scrolls), based on the original dataset. We’re also doing some segmentation of the scrolls ourselves, and releasing that data. This page serves as an overview for all the data that is currently hosted on the server. To download the data, see [here](data#how-to-download-the-data).

The top-level structure is as follows:
* `/fragments/` - the fragment data
  * `/Frag1.volpkg/`
  * `/Frag2.volpkg/`
  * `/Frag3.volpkg/`
* `/full-scrolls/` - the scroll data
  * `/Scroll1.volpkg/`
  * `/Scroll2.volpkg/`
* `/<name>-uploads/` - folders for individuals who we’ve given direct upload access to our server

## .volpkg

The data format used by [Volume Cartographer](tutorial3) is a `.volpkg` directory.

A `.volpkg` needs to have the following files and directories, otherwise Volume Cartographer will crash. You can, however, add more files or directories.

* `/config.json`: Contains some metadata, such as the name and the thickness of the papyrus.
* `/volumes/`: The actual CT scans.
  * `/<id>/meta.json`: Contains metadata about the image stack.
  * `/<id>/<number>.tif`: The actual image stack itself.
* `/renders/`: Where rendering data will be stored. May be empty.
* `/paths/`: This is where segments are stored. May be empty.
  * `/<id>/meta.json`: Metadata of a segment.
  * `/<id>/pointset.vcps`: Pointset of a segment. This is a custom data format specific to Volume Cartographer.

By convention, there is often a `working` directory with miscellaneous data.

## Fragments

The data for each of the fragments is the same for all the fragments:
* `/config.json`: Metadata.
* `/volumes/`: Two volumes each: one scan at 54keV, one at 88keV. Both have a 4µm pixel size.
* `/paths/`: Empty.
* `/renders/`: Empty.
* `/working/<name>.mp4`: Video montage of the slices.
* `/working/reference/`: Photos (normal and infrared) of the fragment.
* `/54keV_exposed_surface/`: Data about the processed surface volume, used in the Ink Detection Prize on Kaggle.
  * `/*.ply`: Surface mesh at different stages (manually cleaned up in Meshlab).
  * `/alignment.psd`: Photoshop file for the manual alignment of the infrared photo to the surface volume.
  * `/inklabels.png`: Manually created binary labels for the aligned photo (ink vs no-ink).
  * `/mask.png`: Mask of where there is actually a surface (so you don't train on empty space).
  * `/surface_volume/{*.tif,meta.json}`: The actual surface volume of 65 layers. The same data as on Kaggle.

## Scrolls

The basic data for the two scrolls is pretty simple:
* `/config.json`: Metadata.
* `/volumes/`: Both scrolls have a main volume at 54keV. Scroll 2 also has a much smaller volume (“central slab”) taken at 88keV. Both have a 8µm pixel size. Scroll 2 has a scanning artifact in the middle of the scroll.
* `/renders/`: Empty.
* `/working/<name>.mp4`: Video montage of the slices.

Both scrolls have some derived that data the community has added:
* `/paths/<id>/`: Segments created by the contest organizers and the community (except for the Monster Segment, see below).
  * Only `meta.json` and `pointset.vcps` are necessary here.
  * The other files were generated using: `export SLICE=20230504094316 && cd /Scroll1.volpkg/paths/${SLICE} && vc_convert_pointset -i pointset.vcps -o "${SLICE}_points.obj" && vc_render -v ../../ -s "${SLICE}" -o "${SLICE}.obj" --output-ppm "${SLICE}.ppm" && mkdir -p layers && vc_layers_from_ppm -v ../../ -p "${SLICE}.ppm" --output-dir layers/ -r 32 -f tif --cache-memory-limit 50G`
  * `/<id>_points.obj`: Pointcloud.
  * `/<id>.obj`: Mesh of the segment.
  * `/<id>.tif`: Texture of the surrounding voxels.
  * `/layers/{*.tif,meta.json}`: Surface volumes of 65 layers.
* `/volumes_small/`: 10x smaller “thumbnails” of the slices.
  * `/<volume_id>/{*.tif,meta.json}`: Image stack of the 10x smaller volume, e.g. for use in Volume Cartographer. Generated using [`build_small`](https://github.com/spelufo/vesuvius-build/).
  * `/<volume_id>_small.tif`: The same data, but in a single tif file with multiple layers. Generated using [`build_small_volume`](https://github.com/spelufo/vesuvius-build/).
  * `/<volume_id>_volumes_small_axis{1,2}/*.png`: The same data but across the two orthogonal axes, and as pngs instead of tifs (for some reason :)). Generated using [`perpSlices.py`](https://discord.com/channels/1079907749569237093/1104099152469704838/1104105003314053191)
* `/volumes_masked/`: Same as `/volumes/`, but with non-scroll data blacked out, and the files compressed. About 2x smaller than the original volumes, though may take longer to load in software due to the compression. See [this repo](https://github.com/JamesDarby345/segment-anything-vesuvius) for more details (and [this thread](https://discord.com/channels/1079907749569237093/1105181650415001741) for details about the compression vs performance tradeoff).
* `/volume_grids/<volume_id>/cell_yxz_*.tif`: The volume split into “cells” of 500x500x500 voxels. Generated using [`build_grid_layer`](https://github.com/spelufo/vesuvius-build/).

Misc stuff:
* `/stephen-parsons-uploads/`: A massive segment in Scroll 1, which we call the Monster Segment. At the time of writing, it is larger than all our other segments combined, so we recommend trying this one first. More information [here](https://discord.com/channels/1079907749569237093/1079907750265499772/1104116512396161144) and [here](https://discord.com/channels/1079907749569237093/1079907750265499772/1102710816656064663).
* `/hari-seldon-uploads/surface-volume-larger-scroll2-20230426144221.zip`: An extra deep surface volume, spanning two papyrus sheets. Also see `slice4_r100.avi` for a video montage of the slices.
