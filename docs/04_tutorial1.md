---
title: "Tutorial 1: Technical Overview"
sidebar_label: "1. Technical Overview"
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

In these tutorials we share the current best tools and techniques for virtually unwrapping and reading carbonized papyrus scrolls without physically opening them.

Our expectation is that you will build on these techniques, improving the tools and models. But of course you may have better ideas, and are free to approach the Vesuvius Challenge any way you think will work!

The three steps in our process for reading a carbonized scroll are:

<TutorialsTop/>

1. <b>Scanning:</b> creating a 3D scan of a scroll or fragment using x-ray tomography
2. <b>Segmentation and Flattening:</b> finding the layers of the rolled papyrus in the 3D scan and then unrolling them into a flattened "surface volume"
3. <b>Ink Detection:</b> identifying the inked regions in the flattened surface volume using a machine learning model

Each of these steps has been shown to work, but to date no one has successfully put them all together and applied them to an unopened Herculaneum scroll to reveal whole passages of hidden text. That is your goal!

### Virtually Unwrapping the En-Gedi Scroll

Before we dive into the Herculaneum papyri with their [radiolucent](https://en.wikipedia.org/wiki/Radiodensity) ink, it's helpful to understand how the En-Gedi scroll was virtually unwrapped in 2015.

Here is an excellent 2 minute overview of how this was achieved:

<iframe className="w-[100%] aspect-video mb-4" src="https://www.youtube.com/embed/GduCExxB0vw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>

For the Herculaneum papyri, many of the same steps apply, with one key change: the ink is not immediately visible to the naked eye. We will need to use a machine learning model to detect the ink.

Let's go through each of the key steps one by one.

### 1. Scanning

<div class="bg-gray-800 p-4 rounded mb-4">
<strong>Input:</strong> physical scroll or fragment.<br/>
<strong>Output:</strong> 3D volume (.tif “image stack”).
</div>

If you've ever had a CT scan at a hospital, this is exactly the same process, except our scans were made in a particle accelerator and are much higher resolution.

Scanning involves taking hundreds to thousands of X-ray photographs of the object from different rotational angles. Typically this is done by having an X-ray source on one side of the object, and an X-ray camera on the other side, and rotating the object 360° on a platform.

<figure className="">
  <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/tutorials/fragment-rotating2.jpg">
    <source src="/img/tutorials/fragment-rotating2.webm" type="video/webm"/>
    <source src="/img/tutorials/fragment-rotating2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">A fragment rotating, with an X-ray source (from a particle accelerator) on one side, and an X-ray camera on the other side <a href="https://www.youtube.com/watch?v=fg_08ukGlMw">(source)</a></figcaption>
</figure>

The X-ray photos are then combined into a 3D volume using one of a number of [tomographic reconstruction](https://en.wikipedia.org/wiki/Tomographic_reconstruction) algorithms. This is typically done by software that comes with the scanner. A volume is a 3D picture made up of 3D pixel cubes called voxels. The *voxel size* tells us the physical size of the cube, and the value stored in the voxel is an estimate of that location's radiodensity.

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/scanning2.jpg">
    <source src="/img/tutorials/scanning2.webm" type="video/webm"/>
    <source src="/img/tutorials/scanning2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">Artistic visualization of constructing a 3D volume; in reality the object rotates as it is scanned.</figcaption>
</figure>

We store the 3D volume as a directory full of .tif files, where each file represents one horizontal crossection or "slice" of the object, typically starting at the bottom of the object and moving upwards. We call this a .tif image stack. In the case of our full scroll scans, each .tif file is 100MB. For the fragment scans, sizes range from 14MB to 40MB. For the flattened surface volumes, each .tif file can be up to 280MB.

Remember that each pixel in the image stack actually represents a cube of physical space. If your volume has a 10um voxel size, then 100 slices will give you 1mm (1000um) of the object.

<div className="flex items-end">
  <figure className="w-[50%] max-w-[230px] mr-4">
    <img src="/img/tutorials/image-stack.png" className="w-[100%]"/>
    <figcaption className="mt-0">.tif image stack</figcaption>
  </figure>
  <figure className="w-[50%]">
    <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/imagej-slices2.jpg">
      <source src="/img/tutorials/imagej-slices2.webm" type="video/webm"/>
      <source src="/img/tutorials/imagej-slices2.mp4" type="video/mp4"/>
    </video>
    <figcaption className="mt-0">Scrubbing through the .tif images</figcaption>
  </figure>
</div>

Image stacks can be visualized using 3D volume rendering software. We will learn how to do this in [“Tutorial 2: Scanning”](tutorial2).

<div className="flex items-start">
  <figure className="w-[44%] mr-4">
    <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/tutorials/scroll-volume2.jpg">
      <source src="/img/tutorials/scroll-volume2.webm" type="video/webm"/>
      <source src="/img/tutorials/scroll-volume2.mp4" type="video/mp4"/>
    </video>
    <figcaption className="mt-0">3D volume of a proxy scroll</figcaption>
  </figure>
  <figure className="w-[54%]">
    <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/tutorials/fragment-volume2.jpg">
      <source src="/img/tutorials/fragment-volume2.webm" type="video/webm"/>
      <source src="/img/tutorials/fragment-volume2.mp4" type="video/mp4"/>
    </video>
    <figcaption className="mt-0">3D volume of a Herculaneum fragment, showing multiple layers of papyrus</figcaption>
  </figure>
</div>

### 2. Segmentation

<div class="bg-gray-800 p-4 rounded mb-4">
<strong>Input:</strong> 3D volume (.tif “image stack”).<br/>
<strong>Output:</strong> 3D mesh (.obj).
</div>

The goal of segmentation is to identify and capture the 3D shape of each of the layers of the rolled papyrus scroll. Each individual surface in our 3D volume that we are able to identify is called a "segment."

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/segmentation2.jpg">
    <source src="/img/tutorials/segmentation2.webm" type="video/webm"/>
    <source src="/img/tutorials/segmentation2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">Segmentation: finding a surface of papyrus.</figcaption>
</figure>


<div>We have to do this step both for scrolls and fragments:</div>

* **Scrolls.** We repeat this process many times for different internal surfaces.
  * Technically we could make one huge "segment" for the entire scroll, but the scroll wraps can be difficult to distinguish in practice, so we split it up into more manageable pieces.
  * Segmentation can be challenging, as different layers of papyrus can be damaged, distorted, or frayed. The carbonized papyrus blisters, and different layers can even fuse with each other.
* **Fragments.** On fragments this process is a little easier, since they are already fairly flat and have an exposed surface on which we can actually see the ink. Still, the fragments are usually not completely flat, and can have "hidden layers" of papyrus attached underneath the visible layer.

We use an in-house tool called Volume Cartographer to manually annotate a surface on one of the slices from the image stack, and then the software extrapolates it along the z-axis to other slices.

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/mesh-drawing2.jpg">
    <source src="/img/tutorials/mesh-drawing2.webm" type="video/webm"/>
    <source src="/img/tutorials/mesh-drawing2.mp4" type="video/mp4"/>
  </video>
</figure>

The result is a 3D mesh (.obj file) called a “segment” which intersects the volume (i.e. the mesh coordinates are also volume coordinates).

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/mesh-rotate2.jpg">
    <source src="/img/tutorials/mesh-rotate2.webm" type="video/webm"/>
    <source src="/img/tutorials/mesh-rotate2.mp4" type="video/mp4"/>
  </video>
</figure>

### 3. Surface volumes

<div class="bg-gray-800 p-4 rounded mb-4">
<strong>Input:</strong> 3D volume (.tif “image stack”) and 3D mesh (.obj).<br/>
<strong>Output:</strong> 3D “surface volume” around the mesh (.tif “image stack”).
</div>

To detect ink from the 3D X-ray scan, it is not sufficient to only examine the voxels which intersect our segment mesh; we also want to sample the voxels _around_ the mesh:

* **downwards, “into the papyrus.”** Ink might have seeped into the papyrus, so the voxels inside the papyrus might contain information about the presence of ink.
* **upwards, “above the papyrus.”** Ink might be sitting on top of the surface, creating a small “hump” that might be detectable.

We might also not have traced the surface of the papyrus completely accurately during segmentation, so sampling voxels around the mesh also gives us some leeway.

Fortunately, this sampling approach can be a helpful optimization: the full 3D volume can be a huge amount of data (up to a terabyte), which is often not very practical to work with, but we only _need_ the voxels which are close to our segment. We therefore do one additional step of data processing to create a new "subvolume" containing only the voxels in which we're interested.

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/surface-volume-extrusion3.jpg">
    <source src="/img/tutorials/surface-volume-extrusion3.webm" type="video/webm"/>
    <source src="/img/tutorials/surface-volume-extrusion3.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">“Extruding” the segment mesh to capture a subvolume. Every voxel inside this new mesh will be saved as a new volume.</figcaption>
</figure>

We then "flatten" this subvolume into a new image stack, where each layer is a 2D image again. This process is similar to creating a map of the earth on flat paper: there are many different types of projections you can use, all of which have their own pros and cons.

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/surface-volume-flattening4.jpg">
    <source src="/img/tutorials/surface-volume-flattening4.webm" type="video/webm"/>
    <source src="/img/tutorials/surface-volume-flattening4.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">Flattening of the subvolume.</figcaption>
</figure>

The output of this process is a flattened 3D volume that has been sampled around the mesh, which we call a “surface volume”. This is again a .tif image stack, just like our original volume. However, it is much smaller than the original volume and more consistent since the papyrus always sits roughly in the middle of the volume.

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/surface-volume-image-stack2.jpg">
    <source src="/img/tutorials/surface-volume-image-stack2.webm" type="video/webm"/>
    <source src="/img/tutorials/surface-volume-image-stack2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">The resulting “surface volume” is another .tif image stack.</figcaption>
</figure>

In [“Tutorial 3: Segmentation and Flattening”](tutorial3) we’ll dive deeper into segmentation and virtual unwrapping.

### 4. Ground truth data alignment

<div class="bg-gray-800 p-4 rounded mb-4">
<strong>Input:</strong> Raw infrared photo and 3D “surface volume” (.tif “image stack”).<br/>
<strong>Output:</strong> Aligned infrared photo and hand-labeled binary mask.
</div>

This step is only applicable for fragments, since we don’t have ground truth data for scrolls.

Once we have a surface volume containing a sheet of papyrus, we align the infrared photo to it, so it matches the surface as closely as possible. We have mostly done this manually. We use infrared photos because the ink has better contrast against the papyrus in the infrared spectrum.

The next manual step is to label where we believe there is ink, using the aligned infrared photo. Not all dark areas are ink: some are shadows, burn marks, or other types of damage. In cases where we aren't sure, we consult with papyrologists. The result of this process is a binary mask indicating where there is ink.

<div className="flex flex-wrap items-start justify-between">
  <figure className="w-[22%]">
    <img className="max-h-[250px]" src="/img/data/surface32-fr1.png"/>
    <figcaption className="mt-0">Middle layer (32.tif) of Fragment 1’s surface volume</figcaption>
  </figure>
  <figure className="w-[22%]">
    <img className="max-h-[250px]" src="/img/tutorials/fragment-unaligned-alpha.png"/>
    <figcaption className="mt-0">Unaligned infrared photo</figcaption>
  </figure>
  <figure className="w-[22%]">
    <img className="max-h-[250px]" src="/img/tutorials/fragment-aligned-alpha.png"/>
    <figcaption className="mt-0">Aligned photo</figcaption>
  </figure>
  <figure className="w-[22%]">
    <img className="max-h-[250px]" src="/img/tutorials/fragment-mask-alpha.png"/>
    <figcaption className="mt-0">Binary mask</figcaption>
  </figure>
</div>

It may not be strictly necessary to label the ink; you could instead learn to infer the infrared images from the x-ray data with no manual labeling. We have chosen to use binary labels to make it easier to quantify ink detection performance.

### 5. Ink detection

<div class="bg-gray-800 p-4 rounded mb-4">
<strong>Input:</strong> 3D “surface volume” around the mesh (.tif “image stack”) and hand-labeled binary mask.<br/>
<strong>Output:</strong> Predicted ink mask.
</div>

We use machine learning models to detect ink, training them on ground truth data of fragments where we know the location of ink from the infrared photos.

Since the input is a “surface volume” consisting of several “slices” of information, the model can learn the different features of ink: its density; its thickness; whether it is sitting on top of the surface, has seeped into the papyrus, or both.

<figure>
  <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/tutorials/ink-detection-anim2-dark.jpg">
    <source src="/img/tutorials/ink-detection-anim2-dark.webm" type="video/webm"/>
    <source src="/img/tutorials/ink-detection-anim2-dark.mp4" type="video/mp4"/>
  </video>
</figure>

We go into great detail in [“Tutorial 4: Ink Detection”](tutorial4).

### 6. Interpretation

<div class="bg-gray-800 p-4 rounded mb-4">
<strong>Input:</strong> One or more predicted ink masks.<br/>
<strong>Output:</strong> Words, sentences, whole books, translations, journal papers, worldwide news coverage, eternal fame.
</div>

<figure className="">
  <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/tutorials/engedi-reconstruction3.webm">
    <source src="/img/tutorials/engedi-reconstruction3.webm" type="video/webm"/>
    <source src="/img/tutorials/engedi-reconstruction3.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">En-Gedi reconstruction of multiple fragments. Can you read it? <a href="https://www.youtube.com/watch?v=tL7rhIFNtQg">(source)</a></figcaption>
</figure>

Your work ends at ink detection. But for the world's papyrologists and classicists, this is where the excitement begins! Papyrologists can often extract more information than you might think. They are used to working with damaged, incomplete information, interpreting it, putting it into a historical context, and making history.
