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

Segmentation is the mapping of sheets of papyrus in a 3D X-ray volume. The resulting surface volumes can be used directly to look for ink. The community has made this a significantly more automated process, but it still involves considerable human input.

We have a small group of contractors (the “Segmentation Team”) who have been mapping the scrolls, mostly Scroll 1.

<figure>
<iframe width="484" height="293" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRQxQefw-7rl3Hnt1Q7MFpI27FtzsvFo2x9q6egW8vN5am8QlQLE20BAjOSPZ2teztjdgMUOGc6FV7Y/pubchart?oid=1982586813&amp;format=interactive"></iframe>
<figcaption className="mt-0">Progress of mapping the scrolls, in area (cm²), from the <a href="https://docs.google.com/spreadsheets/d/1zC_5vkqWgb_5z4Q9BYsETF7_3r1BYPccdAnS_GRYOaQ/edit#gid=2051117465">Segment Directory spreadsheet</a> (dates are when a segment was started, not finished, so it lags behind a bit)</figcaption>
</figure>

The main tool which our segmenting team currently uses is Volume Cartographer, which you can learn more about in [Tutorial 3](tutorial3). [Volume Cartographer](https://github.com/educelab/volume-cartographer) was created by Seth Parker and others at [EduceLab](https://www2.cs.uky.edu/dri), though the segmentation team currently uses a [fork](https://github.com/spacegaier/volume-cartographer/) by Philip Allgaier (@spacegaier on Discord).

The idea is to manually annotate a piece of papyrus in a single slice, after which an algorithm can extrapolate it into 3D, essentially by doing really fancy line-following. This algorithm still needs a lot of correction and supervision, but that’s the rough idea.

<figure className="max-w-[500px]">
  <video autoPlay playsInline muted controls className="w-[100%] rounded-xl" poster="/img/tutorials/vc-extrapolation2.jpg">
    <source src="/img/tutorials/vc-extrapolation2.webm" type="video/webm"/>
    <source src="/img/tutorials/vc-extrapolation2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">Illustration of Volume Cartographer with an algorithm extrapolating in 3D.</figcaption>
</figure>

The resulting 3D shape is called a “mesh”. You can view the meshes of all our segments in [Volume Viewer](http://37.19.207.113:5173/) and [Segment Viewer](http://37.19.207.113:5174/) (see [here](community_projects#volume-viewer-and-segment-viewer)):

<figure className="max-w-[500px]">
  <div className="w-[100%]"><div className="overflow-hidden mb-2"><img loading="eager" src="/img/data/segmentation-animation.webp" className="w-[100%] mt-[-30px] mb-[-50px]"/></div>
  <figcaption className="mt-0">Some segments from Scroll 1</figcaption></div>
</figure>

For more technical details about how the segmentation team operates, check out this doc: [The Segmenter’s Guide to Volume Cartographer (for contractors)](https://docs.google.com/document/d/11B9Gy1gJRye_NQHphwbIxINvactUchJJsJOJi1FKrgI/edit?usp=sharing).

## Data format

The `.volpkg` format used by Volume Cartographer (learn more in [Tutorial 3](tutorial3)) has a `paths` folder, in which each segment has its own subfolder. Each subfolder contains two files:

* `Scroll1.volpkg/paths/<id>/meta.json`: Metadata of a segment.
* `Scroll1.volpkg/paths/<id>/pointset.vcps`: Pointset of a segment. This is a custom data format specific to Volume Cartographer. More information [here](https://www.kaggle.com/code/kglspl/simple-vcps-parser), and see the [Volume Cartographer resources list](community_projects#volume-cartographer).

You can find segments from the made by the segmentation team (led by @Hari_Seldon on Discord) on the [data server](https://forms.gle/HV1J6dJbmCB2z5QL8): [`/full-scrolls/Scroll{1,2}/PHercParis{4,3}.volpkg/paths`](https://dl.ash2txt.org/full-scrolls/Scroll1/PHercParis4.volpkg/paths/).
<!-- 
## Weekly releases

Every **Friday at noon PT** we release new segments from the segmentation team:

* See the [Segment Directory](https://docs.google.com/spreadsheets/d/1zC_5vkqWgb_5z4Q9BYsETF7_3r1BYPccdAnS_GRYOaQ/edit#gid=0) to learn which new segments will be released.
* New segments will be released on the [data server](https://forms.gle/HV1J6dJbmCB2z5QL8): [`/full-scrolls/Scroll{1,2}.volpkg/paths`](https://dl.ash2txt.org/full-scrolls/Scroll1.volpkg/paths/).
* Sometimes the segmentation team will keep working on extending segments that have already been released. When those updated segments are released the following week, the superseded segments will be suffixed with `_superseded` on the data server.
  * The [Segmentation Directory](https://docs.google.com/spreadsheets/d/1zC_5vkqWgb_5z4Q9BYsETF7_3r1BYPccdAnS_GRYOaQ/edit#gid=2051117465) will contain notes on which segments are superseded by which other segments.
  * We typically use similar segment IDs for superseding segments with the final digit incremented. For example, a segment might have ID `123450` and get superseded by segment with ID `123451`.
* We also update [Volume Viewer](http://37.19.207.113:5173/) and [Segment Viewer](http://37.19.207.113:5174/) when we release new segments (see [here](community_projects#volume-viewer-and-segment-viewer)). -->

## Surface volumes

In addition to the `meta.json` and `pointset.vcps` required by Volume Cartographer, we generate a bunch of other files:

* `/layers/{00-64}.tif`: Surface volumes of 65 layers.
  * This is most useful for detecting ink.
* `/<id>_points.obj`: Pointcloud.
* `/<id>.obj`: Mesh of the segment.
* `/<id>.tif`: Texture of the surrounding voxels (the maximum of a few of the surrounding layers, based on Volume Cartographer’s estimated papyrus thickness).
* `/<id>.ppm`: Per-pixel map, a custom data format mapping points between the surface volume and the original 3D volume of the scroll.
* `/author.txt`: Name of the author of the segment.
* `/area_cm2.txt`: Total surface area, in cm<sup>2</sup>.

The surface volume is the most useful dataset for ink detection. The middle layer (32) is sampled right from the segment mesh, and the other layers are sampled “above” and “below” the surface. This results in a new 3D volume “around” the surface of the segment.

<figure className="max-w-[600px]">
  <img src="/img/data/surface_volume.gif"/>
  <figcaption className="mt-0">Scrubbing through layers of the surface volume of <a href="https://dl.ash2txt.org/full-scrolls/Scroll1/PHercParis4.volpkg/paths/20230827161846/layers/">segment 20230827161846</a></figcaption>
</figure>

All these extra files were generated using the following script: `export SEGMENT=20230827161846 && cd /Scroll1.volpkg/paths/${SEGMENT} && nice vc_convert_pointset -i pointset.vcps -o "${SEGMENT}_points.obj" && nice vc_render -v ../../ -s "${SEGMENT}" -o "${SEGMENT}.obj" --output-ppm "${SEGMENT}.ppm" && mkdir -p layers && nice vc_layers_from_ppm -v ../../ -p "${SEGMENT}.ppm" --output-dir layers/ -r 32 -f tif --cache-memory-limit 50G && vc_area ../.. ${SEGMENT} | grep cm | awk '{print $2}' > area_cm2.txt`
