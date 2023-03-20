---
title: "Tutorial 3: Segmenting and Flattening"
sidebar_label: "Segmenting and Flattening"
hide_table_of_contents: true
---

<head>
  <html data-theme="dark" />

  <meta
    name="description"
    content="A $575,000 machine learning and computer vision competition"
  />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://scrollprize.org" />
  <meta property="og:title" content="Vesuvius Challenge" />
  <meta
    property="og:description"
    content="A $575,000 machine learning and computer vision competition"
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
    content="A $575,000 machine learning and computer vision competition"
  />
  <meta
    property="twitter:image"
    content="https://scrollprize.org/img/social/opengraph.jpg"
  />
</head>

import { TutorialsTop } from '@site/src/components/TutorialsTop';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<TutorialsTop highlightId={3} />

As we saw in the ["Scanning" tutorial](/tutorial2), it’s quite hard to extract useful information out of a “word soup”, even when the ink is quite clear. For this tutorial we’ll continue with the [campfire scroll](/data) and show how to use virtual unwrapping to produce a flattened image which shows the content clearly.

Two key steps to virtually unwrapping a scroll or manuscript are _segmenting_ a surface from inside the 3D volume and _flattening_ that surface to 2D. The video below shows the idea quite well; or check out the <a href="https://youtu.be/VG8oOMHCg74?t=37">full version</a> (It was made by Dr. Seales’s son and daughter!). The red line during the reconstruction phase represents the surface that we want to virtually unwrap.

<figure>
  <video playsInline muted controls className="w-[100%]" poster="/img/tutorials/pi-symbol3.jpg">
    <source src="/img/tutorials/pi-symbol3.webm" type="video/webm"/>
    <source src="/img/tutorials/pi-symbol3.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">The basic principle of “virtual unwrapping” <a href="https://youtu.be/VG8oOMHCg74?t=38">(source)</a></figcaption>
</figure>

To perform segmentation and flattening, we'll use [Volume Cartographer](https://github.com/educelab/volume-cartographer), a virtual unwrapping toolkit built by [EduceLab](https://www2.cs.uky.edu/dri). Volume Cartographer is designed to create meshes along surfaces of a manuscript (e.g. pages or scroll wraps) and then sample the voxels around these meshes to create a 2D image of the manuscript's contents. Volume Cartographer installs many tools and utilities. In this tutorial we’ll be looking at the main `VC` GUI as well as the `vc_render` tool.

First, let's install it:

:::info OS-specific instructions

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

1. Install the [VcXsrv Windows X Server](https://sourceforge.net/projects/vcxsrv/) or a similar X Server (if you use the Chocolatey package manager: `choco install vcxsrv`).
2. Run *“XLaunch” from the Start Menu, or from *“C:\Program Files\VcXsrv\xlaunch.exe”*.
3. Use the default settings, except: <br/> <img className="max-w-[400px]" src="/img/tutorials/windows-x11-1.webp"/>
4. Check that the X Server is running in the tray: <br/> <img className="max-w-[400px]" src="/img/tutorials/windows-x11-2.webp"/>
5. Install [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/).
6. Put the extracted `campfire` directory in `C:\` (or update the path in the Docker command below).
7. Then run:

```bash
docker run -it -v C:\campfire:/campfire --env="DISPLAY=host.docker.internal:0" ghcr.io/educelab/volume-cartographer
```

  </TabItem>
  <TabItem value="mac" label="macOS (using Homebrew)">


Install [Homebrew](https://brew.sh/). Run `brew install --no-quarantine educelab/casks/volume-cartographer libtiff`.

* The GUI app will be installed to `/Applications/VC.app`.
* The command line tools are installed to `$(brew --prefix)/bin` and should be available in the terminal immediately (e.g. `vc_packager`) — if not, make sure you have `eval $(/opt/homebrew/bin/brew shellenv)` in your shell profile and restart your terminal.


  </TabItem>
  <TabItem value="mac_docker" label="macOS (using Docker)">

<div>We strongly recommend using Homebrew, since it’s much easier to set up. But if you really prefer Docker, here are the steps:</div>

1. Install XQuartz: https://www.xquartz.org/
2. Log out and back into macOS.
3. Launch XQuartz. Under the XQuartz menu, select *“Preferences”*.
4. Go to the *“Security”* tab and ensure *“Allow connections from network clients”* is checked.
5. Quit XQuartz and restart it.
6. Install [Docker Desktop](https://docs.docker.com/desktop/install/mac-install/).
7. Put the extracted `campfire` directory in your home dir (or update the path in the Docker command below).
8. Then run:

```bash
# Allow network connections to XQuartz:
xhost +localhost

# M1 chips:
docker run -it -v ~/campfire:/campfire --env="DISPLAY=host.docker.internal:0" --platform linux/arm64 ghcr.io/educelab/volume-cartographer

# Intel chips:
docker run -it -v ~/campfire:/campfire --env="DISPLAY=host.docker.internal:0" ghcr.io/educelab/volume-cartographer
```


  </TabItem>
  <TabItem value="linux" label="Linux">

* We assume that you’re running the X Window System (if you’re unsure, you probably do).
* First, install [Docker](https://docs.docker.com/engine/install/). Do *not* use Snap to install it.
* Put the extracted `campfire` directory in your home dir (or update the path in the Docker command below).
* Then run:

```bash
docker run -it -e DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix -v ~/campfire:/campfire ghcr.io/educelab/volume-cartographer
```


  </TabItem>
  <TabItem value="source" label="Build from source">

* First, install basic build dependencies like `build-essential`, `cmake`, and Qt6.
* Then:

```bash
# Recursive clone, so we get the vc-deps repo, which contains dependencies.
git clone --recursive https://github.com/educelab/volume-cartographer.git

# Build vc-deps.
cd volume-cartographer/vc-deps
mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release ..
make -j

# Build main app.
cd ../..
mkdir build && cd build
cmake -DVC_PREBUILT_LIBS=ON -DCMAKE_BUILD_TYPE=Release ..
make -j

# Install, or skip this and refer directly to the executables in build/bin.
make install
```


  </TabItem>
</Tabs>

:::

### Creating a `.volpkg`

Volume Cartographer works on `.volpkg` directories, which is a custom format just for Volume Cartographer. Let’s create one using the `vc_packager` tool, by feeding it the tomographically reconstructed volume (represented as a .tif stack) of the [campfire scroll](/data):

```bash
vc_packager -v campfire.volpkg -m 1000 -s ~/campfire/rec/ # Or /campfire/rec when using Docker
```

The material-thickness flag `-m` is an estimate of the papyrus thickness in microns and is used to help Volume Cartographer's tools automatically decide on good default parameters. The defaults can always be overridden later, so even though it's required, don't worry too much about this value.

When prompted, give the volume a descriptive name, set the voxel size to “104”, and skip the flip options.

The output will look like this:

```text
Reading the slice directory...
Slice images found: 477
Analyzing slices [■■■■■■■■■■■■■■■■■■■■■■] 100% [00m:00s<00m:00s] 477/477
Saving to volpkg [■■■■■■■■■■■■■■■■■■■■■■] 100% [00m:02s<00m:00s] 477/477
```

<div>You now have a <code>campfire.volpkg</code> with 4 items in it:</div>

* `config.json`: Contains some metadata.
* `path/`: Currently empty: this is where raw mesh points will be stored, which we’ll be doing soon.
* `renders/`: Also empty: this is where any rendering data will be stored.
* `volumes/`: Contains a single directory with the processed `.tif` image stack.
  * `volumes/<id>/meta.json`: Contains metadata about the processed image stack.

Note that all these directories must be present for Volume Cartographer to work, even if they are empty. This is useful to know if you check these directories into git, since git by default does not keep empty directories. In such cases, it's a good idea to put a `.gitkeep` file in any empty directories (per [convention](https://www.freecodecamp.org/news/what-is-gitkeep/)).

### Creating a new segment

We will use the main `VC` GUI app to perform segmentation of the campfire scroll: finding a surface of papyrus and exporting it as a 3D mesh.

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/segmentation2.jpg">
    <source src="/img/tutorials/segmentation2.webm" type="video/webm"/>
    <source src="/img/tutorials/segmentation2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">Segmentation: finding a surface of papyrus.</figcaption>
</figure>

Run `VC` on the command line to open the GUI app (or `open /Applications/VC.app` on macOS with Homebrew).

Now open the `campfire.volpkg` directory using *“File > Open volpkg”*. You should see something like this:

<figure>
<img src="/img/tutorials/vc-initial.png" className="rounded-xl"/>
</figure>

Play around a bit with this interface! You can zoom using the buttons, and go to the previous/next “slice” (traversing the z-axis).

<div>Now let’s create our first segment (raw mesh):</div>

* Navigate to layer 3 by clicking *“Previous Slice”* or *“Next Slice”* until you’re at 3 (or type *“3”* and press Enter).
  * We do this because a later step (“Segmentation Tool”) is buggy at low layer indices.
* Zoom in on the top left, until you can’t zoom any further.
* Click *“New”* on in the menu on the right. This creates a new segment with a unique ID (the current timestamp). You'll need this ID later!
* Click *“Pen Tool”* at the top.
* Mark points along the top-left strand of papyrus, as shown in the video below.
* Click *“Pen Tool”* again to finish.

<figure>
  <video playsInline muted controls className="max-w-[100%] rounded-xl" poster="/img/tutorials/vc-pen-tool4.jpg">
    <source src="/img/tutorials/vc-pen-tool4.webm" type="video/webm"/>
    <source src="/img/tutorials/vc-pen-tool4.mp4" type="video/mp4"/>
  </video>
</figure>

Note that your colors might be different, depending on your version of Volume Cartographer. You can customize the colors using the color picker at the bottom. We will use bright red dots for visibility.

You have now created the beginning of a mesh: a two-dimensional line on <code>z=3</code>. This line is really only set for <code>z=3</code>, which you can check by clicking *“Next Slice”* and seeing the line disappear. Let’s go back to 3 by clicking *“Previous Slice”*.

<div>We can now automatically create more such lines for all <code>z</code> values from 3 to, say, 100:</div>

* Be sure you’re at layer 3 (the following instructions are [buggy at low layer indices](https://github.com/educelab/volume-cartographer/issues/6#issuecomment-1474407653)).
* Click *“Segmentation Tool”*.
* Set *“Maxima Window Width”* to *“10”*.
* Set *“Ending Slice”* to *“100”*.
* Click *“Start”*.

This runs an automatic segmentation algorithm which attempts to follow the tracked layer across slices, moving “up” the z-axis. Conceptually, it works something like this:

<figure>
  <video playsInline muted controls className="max-w-[100%] rounded-xl" poster="/img/tutorials/vc-extrapolation2.jpg">
    <source src="/img/tutorials/vc-extrapolation2.webm" type="video/webm"/>
    <source src="/img/tutorials/vc-extrapolation2.mp4" type="video/mp4"/>
  </video>
</figure>

Now click *“Next Slice”* a bunch of times (or hold Shift while clicking to advance by 10 slices) to see how well the algorithm aligned your segment with the papyrus, as shown below.

<figure>
  <video playsInline muted controls className="max-w-[100%] rounded-xl" poster="/img/tutorials/vc-segmentation3.jpg">
    <source src="/img/tutorials/vc-segmentation3.webm" type="video/webm"/>
    <source src="/img/tutorials/vc-segmentation3.mp4" type="video/mp4"/>
  </video>
</figure>

If you notice a discrepancy where the points of your segment are no longer aligned with the layer, you can edit the points in *“Segmentation Tool”* and relaunch the segmentation algorithm from that point going forward.

<div>Let’s practice editing the line to match more closely with the papyrus:</div>

* Click *“Segmentation Tool”*.
* Carefully click and drag on the points you want to move, as shown in the video below.
* By default, a neighborhood of points is moved when you click and drag. To adjust the size of the neighborhood, adjust the *“Impact Range”* slider in the bottom right.
* Set *“Ending Slice”* to *“100”*.
* Click *“Start”*.

<figure>
  <video playsInline muted controls className="max-w-[100%] rounded-xl" poster="/img/tutorials/vc-editing3.jpg">
    <source src="/img/tutorials/vc-editing3.webm" type="video/webm"/>
    <source src="/img/tutorials/vc-editing3.mp4" type="video/mp4"/>
  </video>
</figure>

You created your first segment! Be sure to save it using *“File > Save volpkg”*. The point cloud for this segment is stored in `campfire.volpkg/paths/<your-segment-id>/pointset.vcps`. If you want to view the point cloud in MeshLab, you can convert it to an OBJ file using `vc_convert_pointset`:

```bash
vc_convert_pointset -i campfire.volpkg/paths/<your-segment-id>/pointset.vcps -o points.obj
```

### Rendering the segment

In order to see the content on the surface of our segment, we need to flatten and texture the segment using the `vc_render` tool. While the output from `vc_render` is considered a "final result" that can be placed anywhere, our convention is to place all results in a `working` directory within the `.volpkg` so that all data is kept together:

```bash
mkdir campfire.volpkg/working
cd campfire.volpkg/working
```

Now run `vc_render` with the following arguments, substituting `<your-segment-id>`:

```bash
# From within campfire.volpkg/working
vc_render -v ../ -s <your-segment-id> -o out.obj --output-ppm out.ppm
```

If you don't remember your segment's ID, you can use `vc_volpkg_explorer` to list all segment IDs, or type `../paths/2023`, hit Tab to autocomplete, and then remove the `../paths/` prefix (e.g. `-s $(basename ../path/20230315130225)`).

Note that sometimes `vc_render` can throw an error or a segmentation fault. When this happens, the first thing to try is to rerun the program, because [there is a non-deterministic bug in `vc_render`](https://github.com/educelab/volume-cartographer/issues/3).

Behind the scenes, `vc_render` will flatten the 3D surface, attempt to detect the object's ink inside the volume data, and output the result as a virtually unwrapped image. You should get 4 files in the `working` directory: .mtl, .obj, .tif, and our explicitly specified `out.ppm`.

* `out.obj` is a “3D mesh object” file, which we can render in [MeshLab](https://www.meshlab.net/), just like in [“Tutorial 2: Scanning”](tutorial2).
* `out.mtl` is a “material file”, which tells MeshLab and other 3D viewers how to display the OBJ mesh.
* `out.tif` is a "texture image" for the mesh. In this case, it is the flattened, virtually unwrapped result for our segment!
* `out.ppm` is a "per-pixel map" which lets us map from 2D to 3D more easily. We'll use it more in a bit.

Let’s look at the unwrapped .tif first, which should look something like this:

<figure>
  <img src="/img/tutorials/vc-segment.png"/>
</figure>

If you look back to the last page of the campfire scroll (before carbonization), can you see which area of the scroll this segment came from?

<figure className="max-w-[250px]">
  <img src="/img/tutorials/campfire-last-page.jpg"/>
</figure>

Now open the .obj file in MeshLab to view the 3D structure of the mesh:

<figure>
  <video playsInline muted controls className="max-w-[100%] rounded-xl" poster="/img/tutorials/meshlab-segment4.jpg">
    <source src="/img/tutorials/meshlab-segment4.webm" type="video/webm"/>
    <source src="/img/tutorials/meshlab-segment4.mp4" type="video/mp4"/>
  </video>
</figure>

The mesh uses the .tif file as a texture, so you can actually see the 3D placement of the metallic ink.

If you additionally load the full mesh we created at the end of [“Tutorial 2”](tutorial2#meshes), you can more clearly see the location of this segment with respect to the rest of the scroll. For this to work, you might need to generate a full mesh again using Fiji (just like in ["Tutorial 2: Scanning"](tutorial2#meshes)), but this time using the image stack in the `campfire.volpkg/volumes` directory, since `vc_packager` might have done some transformations to the slices.

<figure>
  <video autoPlay playsInline loop muted className="max-w-[100%] rounded-xl" poster="/img/tutorials/meshlab-full4.jpg">
    <source src="/img/tutorials/meshlab-full4.webm" type="video/webm"/>
    <source src="/img/tutorials/meshlab-full4.mp4" type="video/mp4"/>
  </video>
</figure>

### Ink visibility

Depending on what surface you chose to segment, you might notice that some of the scroll's ink shows up quite clearly in the texture images but other inks do not. What gives?

The answer to this question is that not all inks have the same radiodensity. Some inks, like iron gall, show up quite clearly in CT scans because they absorb more x-rays than the papyrus on which they sit. This creates _high contrast_ between the bright iron gall ink voxels and the less bright papyrus voxels. Carbon-based inks, on the other hand, have a very similar radiodensity to papyrus and thus have _low contrast_ when compared against the papyrus voxels. More often than not, the contrast is so low for cabon ink that it is impossible to differentiate the ink from the papyrus when looking at the volume data with the naked eye.

As we will discuss in ["Tutorial 4"](tutorial4), this does not mean that the ink is invisible or undetectable. In fact, we are quite confident that these inks _can_ be detected with machine learning, and that's what we're all here to do! Before we do that, though, let's look a little closer at how `vc_render` works and simplify our dataset down to only what's needed.

### Surface volumes

When looking for ink in the volume, `vc_render` looks at more than just the voxels that directly intersect our segment mesh. It also looks a little bit “above“ and “below“ the mesh, at the neighborhood of voxels that surround our segment. Conceptually, this neighborhood looks something like this (though this video is exaggerated):

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/surface-volume-extrusion3.jpg">
    <source src="/img/tutorials/surface-volume-extrusion3.webm" type="video/webm"/>
    <source src="/img/tutorials/surface-volume-extrusion3.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">Building a neighborhood of voxels around our segment. Everything inside the neighborhood is used for texturing.</figcaption>
</figure>

To generate a single .tif file, `vc_render` searches through this neighborhood, looking for ink, and places the results of that search in the flattened output image. When developing new ink detection methods (as we will be doing in this contest) we also need to have access to this neighborhood so that we can perform our own search for ink. However, we don't want to have to load the full scroll volume since we only need to use a small portion of it. Ideally, we would have a new volume, a “surface volume,” which contains only those voxels that are relevant to the ink detection task. Fortunately, Volume Cartographer gives us a way to do just that!

The `out.ppm` file that we generated with `vc_render` contains a mapping between our flattened output image and the original 3D surface. With this file, we can transform the 3D neighborhood into a simplified surface volume. Conceptually, that process looks something like this:

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/surface-volume-flattening4.jpg">
    <source src="/img/tutorials/surface-volume-flattening4.webm" type="video/webm"/>
    <source src="/img/tutorials/surface-volume-flattening4.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">Flattening of the subvolume.</figcaption>
</figure>

To generate the surface volume, we need to run one more program:

```bash
# From within campfire.volpkg/working
mkdir layers
vc_layers_from_ppm -v ../ -p out.ppm --output-dir layers/
```

Now in the `layers` directory you’ll find another image stack! You can open this in Fiji again, which should then look something like this:

<figure>
  <video autoPlay playsInline loop muted className="max-w-[100%] rounded-xl mb-[-16px]" poster="/img/tutorials/vc-layers-scrub2.jpg">
    <source src="/img/tutorials/vc-layers-scrub2.webm" type="video/webm"/>
    <source src="/img/tutorials/vc-layers-scrub2.mp4" type="video/mp4"/>
  </video>
</figure>

We can look at this with the Volume Viewer plugin:

<figure>
  <video playsInline muted controls className="max-w-[100%] rounded-xl" poster="/img/tutorials/vc-layers-volume2.jpg">
    <source src="/img/tutorials/vc-layers-volume2.webm" type="video/webm"/>
    <source src="/img/tutorials/vc-layers-volume2.mp4" type="video/mp4"/>
  </video>
</figure>

### Flattening and render options

Our segment mesh is 3D, but our output .tif image is 2D, as are each of our images in the “surface volume” image stack. How does this mapping actually work?

<figure>
<img src="/img/tutorials/texture-mapping.png"/>
</figure>

As mentioned in the first tutorial, this process is called “flattening”. Similar to creating a 2D map of the Earth, there are many methods you can use to convert the 3D mesh of our segment into a flat surface, and each of those methods preserve certain aspects of the 3D shape at the expense of others aspects. Volume Cartographer currently provides three flattening methods:
- Least-squares conformal maps (LSCM): An angle-preserving method which tries to minimize the error between the mesh's 2D and 3D angles in a least-squares sense. Works well for surfaces with low curvature, but can often result in 2D triangles that are many times larger than they should be.
- Angle-based Flattening (ABF): An angle-preserving method which additionally uses the error in a triangle's neighbors to reduce area distortion. Much less sensitive to high curvature than LSCM, and is the current default in `vc_render`.
- [Orthographic projection](https://en.wikipedia.org/wiki/Orthographic_projection): A method that is similar to taking a photograph of the 3D mesh but without the effects of perspective. In particular, objects that are further from the camera *are not* smaller than objects that are closer to the camera. Not a good option for scrolls or surfaces that wrap on themselves, but can work well for surfaces that are already semi-flat (i.e. fragments, pages of books).

You can select between the different flattening methods using the `--uv-algorithm` flag in `vc_render`:
```
Flattening & UV Options:
  --uv-algorithm arg (=0)     Select the flattening algorithm:
                                0 = ABF
                                1 = LSCM
                                2 = Orthographic Projection
```

There lots of other options, too, which you can see by using `vc_render --help`. For example, you can select different texturing methods, instead of just picking the maximum pixel value. You can also run your own texturing methods on the “surface volume” image stack directly. In a sense, the separate [“Ink Detection”](tutorial4) machine learning step can be seen as a particularly fancy texturing method!

Try experimenting with the different options and see what happens.

<!--
### Optional: En-Gedi

For this optional part, first download the `EinGediFull-OffsetScan-2015.volpkg` dataset. Open the Volume Cartographer GUI, and open the `EinGediFull-OffsetScan-2015.volpkg` directory. This dataset already contains “segments”, which are essentially meshes. Explore the different segments by clicking around:

<video controls autoPlay playsInline loop muted className="max-w-[100%]">
  <source src="/img/tutorials/vc-overview.mp4" type="video/mp4"/>
</video>

Try rendering some of these fragments, or look at their “surface volume” image stacks. For example, this is `20170221131911`:

<figure className="max-w-[400px]">

![](/img/tutorials/20170221131911_render.png)

</figure>

Can you find where the different segments fit in the full picture of the scroll?

<figure>

<a href="https://archive.org/download/engedi-scroll/EnGedi-MasterView-scale-hires.png">

![](/img/tutorials/EnGedi-MasterView-scale-hires.png)

</a>

<figcaption>The fully stitched together En-Gedi scroll <a href="https://archive.org/details/engedi-scroll/EnGedi-MasterView-scale-hires.png">(source)</a></figcaption>

</figure>
-->