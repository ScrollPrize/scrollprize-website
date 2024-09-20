---
title: "Tutorial 2: Representation"
sidebar_label: "2. Representation"
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

import { TutorialsTop } from '@site/src/components/TutorialsTop';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<TutorialsTop highlightId={2} />

The micro-CT scan converts the scroll into a volumetric grid of density measurements, providing a mathematical description with integer coordinates and average material densities in small adjacent cubes.

<div className="flex w-[100%]">
  <div className="w-[100%] mb-2 mr-2"><img src="/img/tutorials/rep_ash2vox.png" className="w-[100%]"/><figcaption className="mt-0">Physical scroll to voxel representation</figcaption></div>
</div>

While the raw scan volume represents the maximum amount of information available, this dataset is huge and the written surface is difficult to locate throughout the scroll. Mathematical calculations can be used to manipulate the digital dataset into different representations that are easier to interpret.

Besides the raw scan volume, three types of representations have been explored for segmentation exploiting both traditional methods and machine learning:

* <b>Traditional voxel processing.</b> Thresholding, edge detection, noise reduction, colourization, etc.
* <b>Point clouds.</b> Assigning points in a new coordinate system to represent papyrus surfaces via traditional edge/surface detection.
* <b>Semantic masks.</b> Set background voxels = 0, papyrus voxels = 1 via machine learning, thresholding, noise reduction, morphological operations.

There have been varying levels of success using each of these types of representations.

### Traditional voxel processing

<div className="bg-gray-800 p-4 rounded mb-4">
<strong>Input:</strong> 3D scan volume (voxels in .tif “image stack”)<br/>
<strong>Output:</strong> new 3D volume (voxels in .tif “image stack”)
</div>

Traditional image processing techniques have mostly been intended to aid manual segmentation, either to make the papyrus easier to interpret or to help segmentation algorithms follow the surface better. Popular techniques include thresholding, noise reduction, various colourization schemes, edge detection, and skeletonization.

<div className="flex w-[100%]">
  <div className="w-[100%] mb-2 mr-2"><img src="/img/tutorials/rep_trad_voxel.png" className="w-[100%]"/><figcaption className="mt-0">Voxel to voxel representations using traditional techniques.</figcaption></div>
</div>

Most of these techniques have not been successful at improving segmentation.

### Point clouds

<div className="bg-gray-800 p-4 rounded mb-4">
<strong>Input:</strong> 3D scan volume (voxels in .tif “image stack”)<br/>
<strong>Output:</strong> point cloud (.ply or .obj)
</div>

The goal of point clouds is to extract a limited but useful subset of information from the raw scan volume. In the point cloud representation, calculations select voxels that describe the surface of a sheet.

<div className="flex w-[100%]">
  <div className="w-[100%] mb-2 mr-2"><img src="/img/tutorials/rep_vox2pointcloud.png" className="w-[100%]"/><figcaption className="mt-0">Transforming voxels into a point cloud representation.</figcaption></div>
</div>

The fixed grid and density values are discarded, using traditional edge/surface detection to generate infinitesimal points characterized by 3D real coordinates. If needed, the discarded information can be reattached to the points to revert to the voxel representation.

### Semantic mask

<div className="bg-gray-800 p-4 rounded mb-4">
<strong>Input:</strong> 3D scan volume (voxels in .tif “image stack”)<br/>
<strong>Output:</strong> binary 3D volume (voxels in .tif “image stack”)
</div>

Volumetric segmentation involves mapping the exact 3D shape of the papyrus sheets, and annotating which voxels are papyrus and which belong to the same papyrus wrap vs adjacent wraps. The semantic mask assists in this process by labelling papyrus vs air.

<div className="flex w-[100%]">
  <div className="w-[100%] mb-2 mr-2"><img src="/img/tutorials/rep_semantic.png" className="w-[100%]"/><figcaption className="mt-0">Binarizing papyrus and no papyrus</figcaption></div>
</div>

The semantic mask is generated by combining machine learning with thresholding, noise reduction, and morphological operations. The semantic one could also analyze smaller sections of the papyrus.

### Segmentation

So what comes next? The goal of the representation step was to make segmentation easier. In our next tutorial on “Segmentation”, we look at the different approaches used to map and extract the written surface of the scroll.
