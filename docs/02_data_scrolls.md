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

3D x-ray scans of the scrolls were performed with the [I12 Beamline at Diamond Light Source](https://www.diamond.ac.uk/Instruments/Imaging-and-Microscopy/I12.html). Scanning capabilities include different combinations of resolutions (3.24µm, 7.91µm) and energy levels (53keV, 70keV, 88keV, 90keV, 105keV). The scan conditions for each scroll are listed below.

Scroll scan outputs are scroll "volumes", provided as a stack of 2D .tif files. The file size and number of .tif files for each volume vary depending on the physical size of each scroll.

**Scroll 1 (PHerc. Paris 4)**
<div className="flex w-[100%]">
    <div className="w-[100%] mb-2 mr-2"><img src="/img/overview/scroll1-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-0">Scroll 1 (PHerc. Paris. 4)</figcaption></div>
</div>
<iframe className="w-[100%] max-w-[500px] mb-4 aspect-square" src="https://www.youtube.com/embed/cY5BIxkf5m0"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
Volume [20230205180739](https://dl.ash2txt.org/full-scrolls/Scroll1/PHercParis4.volpkg/volumes/20230205180739/) - top half of the scroll: 7.91µm, 54keV, 14376 x 128MB .tif files.
Volume [20230206171837](https://dl.ash2txt.org/full-scrolls/Scroll1/PHercParis4.volpkg/volumes/20230206171837/) - bottom half of the scroll: 7.91µm, 54keV, 10532 x 130MB .tif files.

**Scroll 2 (PHerc. Paris 3)**
<div className="flex w-[100%]">
  <div className="w-[100%] mb-2"><img src="/img/overview/scroll2-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-0">Scroll 2 (PHerc. Paris. 3)</figcaption></div>
</div>
Volume [20230206082907](https://dl.ash2txt.org/full-scrolls/Scroll2/PHercParis3.volpkg/volumes/20230206082907/) - top half of the scroll: 7.91µm, 54keV, 6586 x 191MB .tif files.
Volume [20230210143520](https://dl.ash2txt.org/full-scrolls/Scroll2/PHercParis3.volpkg/volumes/20230210143520/) - bottom half of the scroll: 7.91µm, 54keV, 14428 x 243MB .tif files.
Volume [20230212125146](https://dl.ash2txt.org/full-scrolls/Scroll2/PHercParis3.volpkg/volumes/20230212125146/) - slab within top half: 7.91µm, 88keV, 1610 x 189MB .tif files.

**Scroll 3 (PHerc. 332)**
<div className="flex w-[100%]">
  <div className="sm:w-[35.5%] mb-2 mr-2"><img src="/img/overview/PHerc332.jpg" className="w-[100%]"/><figcaption className="mt-[0]">Scroll 3 (PHerc. 332)</figcaption></div>
</div>
Volume [20231027191953](https://dl.ash2txt.org/full-scrolls/Scroll3/PHerc332.volpkg/volumes/20231027191953/): 3.24µm, 53keV, 22941 x 178MB .tif files.
Volume [20231117143551](https://dl.ash2txt.org/full-scrolls/Scroll3/PHerc332.volpkg/volumes/20231117143551/): 7.91µm, 53keV, 9778 x 24MB .tif files.
Volume [20231201141544](https://dl.ash2txt.org/full-scrolls/Scroll3/PHerc332.volpkg/volumes/20231201141544/): 3.24µm, 70keV, 22932 x 178MB .tif files.

**Scroll 4 (PHerc. 1667)**
<div className="flex w-[100%]">
  <div className="sm:w-[55%] mb-2"><img src="/img/overview/PHerc1667.jpg" className="w-[100%]"/><figcaption className="mt-[0]">Scroll 4 (PHerc. 1667)</figcaption></div>
</div>
Volume [20231107190228](https://dl.ash2txt.org/full-scrolls/Scroll4/PHerc1667.volpkg/volumes/20231107190228/): 3.24µm, 88keV, 26391 x 130MB .tif files.
Volume [20231117161658](https://dl.ash2txt.org/full-scrolls/Scroll4/PHerc1667.volpkg/volumes/20231117161658/): 7.91µm, 53keV, 11174 x 23MB .tif files.

For more technical details, see [EduceLab-Scrolls: Verifiable Recovery of Text from Herculaneum Papyri using X-ray CT](https://arxiv.org/abs/2304.02084) and [EduceLab Herculaneum Scroll Data (2023) Info Sheet](https://drive.google.com/file/d/1I6JNrR6A9pMdANbn6uAuXbcDNwjk8qZ2/view?usp=sharing)

## Data server

You can find the full scroll data on the [data server](https://dl.ash2txt.org/) in the [`/full-scrolls/`](https://dl.ash2txt.org/full-scrolls/) folder.

* **Scroll 1 (PHerc. Paris. 4):** The scroll for which we have by far the most [segments](data_segments), and in which the [first letters](firstletters) have been discovered and the [2023 Grand Prize](grandprize) was claimed. Half of the scroll has been released in single 54keV volume.
* **Scroll 2 (PHerc. Paris. 3):** Has proven harder to segment. We have a 88keV “slab” (partial volume) in addition to the 54keV main volume. Also, the main volume has a scanning artifact in the middle of the volume.
* **Scroll 3 (PHerc. 332):** Canonical volume is 3.24µm, 53keV. Other volumes will become available as processing finishes. All volumes will be aligned to the canonical volume. Also has raw HDF files available, from before “windowing” the raw values to .tif integer values (see [this FAQ item](faq#how-should-the-intensity-values-in-the-ct-scans-be-interpreted)).
* **Scroll 4 (PHerc. 1667):** Canonical volume is 3.24µm, 88keV. Otherwise similar to Scroll 3. The volume with 3.24µm, 53keV had slight data loss during scanning.

At 3.24µm and 7.91µm resolution, the data files are big. We believe this resolution is necessary to detect ink, as suggested by the excellent paper [From invisibility to readability: Recovering the ink of Herculaneum](https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0215775&type=printable).
