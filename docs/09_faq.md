---
title: "FAQ"
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

### What are the key academic papers I should read to understand the work done so far to read the Herculaneum Papyri?

* [EduceLab-Scrolls: Verifiable Recovery of Text from Herculaneum Papyri using X-ray CT](https://raw.githubusercontent.com/educelab/EduceLab-Scrolls/main/paper/EduceLab-Scrolls.pdf) (data paper)
* [From invisibility to readability: Recovering the ink of Herculaneum](https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0215775&type=printable)
* [From damage to discovery via virtual unwrapping: Reading the scroll from En-Gedi](https://www.science.org/doi/10.1126/sciadv.1601247)

For a comprehensive overview of the field, see [this list by Dr. Seales' lab](https://educelab.gitlab.io/publications/bibtex-refs/).

### What are the best talks that have been given on this work?

* [Reading the Herculaneum Papyri: Yesterday, Today, and Tomorrow](https://www.youtube.com/watch?v=g-7-Xg75CCI&t=4928s)
* [Digital Restoration Initiative: Reading the Invisible Library](https://www.youtube.com/watch?v=NPy0potyh4c)
* [Reading the Invisible Library: Virtual Unwrapping and the Scroll from En-Gedi](https://www.youtube.com/watch?v=mwe9sHZ58A0)

<figure className="">
<img src="/img/faq/getty-own-photo-small.jpg"/>
<figcaption className="mt-0">The Getty Villa in California, a reproduction of the Villa of the Papyri</figcaption>
</figure>

### What are some good books that I should read to learn more?

The best book we have found is [David Sider’s The Library of the Villa dei Papiri at Herculaneum](https://en.wikipedia.org/wiki/Special:BookSources/9780892367993)

Here are some other excellent books we recommend:
* [Joseph Jay Deiss, Herculaneum: Italy's Buried Treasure](https://en.wikipedia.org/wiki/Special:BookSources/9780060912055)
* [Kenneth Lapatin (ed.), Buried by Vesuvius: The Villa dei Papiri at Herculaneum](https://en.wikipedia.org/wiki/Special:BookSources/9781606065921)
* [Christopher Charles Parslow, Rediscovering Antiquity: Karl Weber and the Excavation of Herculaneum, Pompeii, and Stabiae](https://en.wikipedia.org/wiki/Special:BookSources/9780521646642)
* [Leighton D. Reynolds & Nigel Guy Wilson, Scribes and Scholars: A Guide to the Transmission of Greek and Latin Literature](https://en.wikipedia.org/wiki/Special:BookSources/9780198721468)
* [Philip Matyszak, 24 Hours in Ancient Rome](https://en.wikipedia.org/wiki/Special:BookSources/9781789291278)
* A new book about the papyri in German — [Die Papyri Herkulaneums im Digitalen Zeitalter](https://en.wikipedia.org/wiki/Special:BookSources?isbn=9783110766233) by Kilian Fleischer — contains an estimate of how many pages of text we can expect to find if we can make the scrolls readable, which we [translated into English](/img/faq/page72to79.pdf).
* [Opera incerta sugli Dèi by Marzia D’Angelo](https://cispe.org/philodemus-opus-incertum-pherc-89-1301-1383/) has a cool insert (see below).

<figure className="">
  <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/faq/maquette2.jpg">
    <source src="/img/faq/maquette2.webm" type="video/webm"/>
    <source src="/img/faq/maquette2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">Herculaneum scroll reconstruction from a <a href="https://bibliopolis.it/shop/opera-incerta-sugli-dei/">book</a> by Marzia D’Angelo <a href="https://cispe.org/philodemus-opus-incertum-pherc-89-1301-1383/">(source)</a></figcaption>
</figure>

### What are some good YouTube videos I should watch?

* [Secrets of the Villa of the Papyri](https://www.youtube.com/watch?v=nm8Y8fDYKEc)
* [The Ancient Library of Papyri](https://www.youtube.com/watch?v=r5k5ZeVmpfk)
* [Reading the Papyrus Scrolls found at Herculaneum](https://www.youtube.com/watch?v=rcWpzqzefV4)
* [Out of the Ashes: Recovering the Lost Library of Herculaneum](https://www.youtube.com/watch?v=98W-j545-0Y)
* For more videos see [this page](https://www2.cs.uky.edu/dri/videos/)

### Do we really need 8µm resolution? These data files are huge!

We are releasing about 5.5TB worth of 3D volumetric data of the scrolls (8µm), and 1.8TB worth of data of the fragments (4µm). We don't know what the minimum resolution necessary to detect ink is, but this paper suggests that it may be 8µm: [From invisibility to readability: Recovering the ink of Herculaneum](https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0215775&type=printable).

### If an algorithm can read ink from a fragment X-ray, is it likely to work on a scroll?

We hope so, but we suspect this will be a key challenge.

We’re organizing the Ink Detection Progress Prize, to find the best possible approach for detecting ink on fragments. With this solid foundation we hope it will be easier to apply these algorithms to the scrolls.

### Can machine learning models hallucinate letters that aren't there?

This is a risk for models that are trained on letterforms. We strongly recommend that participants guard against the risk of hallucination in their models and, will review all submissions with this in mind.

<!--
### What is papyrus and how is it made?

Papyrus is a grassy reed that grows along the banks of the Nile in egypt
It can grow up to 4.5 meters tall and 7.5cm thick
The tough outer rind is peeled away
The green inner pith is peeled or sliced into strips

The strips are laid out in two layers in a grid pattern
They are pressed together until the layers merge like velcro
And then left out in the sun to dry, where they turn light brown
The sheets – called kollemata – are smoothed out with an ivory or seashell ruler

INSERT DEJAN VIDEO

The kollemata are then glued together with paste made of flour and water
Then the areas where they are joined are hammered smooth
This forms a long piece of papyrus, usually 15-30 feet, comprised of up to 20 kollemata

The Papyrus is rolled up around a dowel called an umilicus
Portions of it are unrolled for writing. The first section, called the protokollon,  is usually left blank

Text is written in columns with a quill and inkwell
Inks are made of varied substances
Scribes often wrote in ancient greek (to seem cool), or in latin
-->

### How can we get more ground truth data? Can I make my own carbonized scrolls?

Yes! Just buy [this papyrus on Amazon](https://www.amazon.com/gp/product/B005D75WYE/), roll it up, and put it inside a Dutch oven at 500F+ (260C+) for a few hours.

This is very instructive and we highly recommend doing it! You will see how fragile the charred scroll is, how it blisters in the heat, how the layers can separate, how it turns to dust as you handle it.

Of course, for it to be useful as ground truth data, you will need to find someone to let you image it in their CT scanner.

<figure>
<img src="/img/faq/charredpapyrus-small.jpg"/>
</figure>

### What software is available currently that might help me?

The two main pieces of software developed by Dr. Seales’ lab are [Volume Cartographer](https://github.com/educelab/volume-cartographer/) and [ink-id](https://github.com/educelab/ink-id/). Both are open source and available on Github.

In the tutorials we also show you how to use generic software to work with 3D volumes ([Fiji](https://imagej.net/software/fiji/downloads)) and meshes ([MeshLab](https://www.meshlab.net/#download)).

### Where can I find collaborators?

* [Discord thread](https://discord.com/channels/1079907749569237093/1085988126486437959)
* [Kaggle forum thread](https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/discussion/395040)

### What would the papyrus scrolls look like when unrolled?

Something like this:

<figure className="">
  <img src="/img/faq/janko-papyrus-small.jpg"/>
  <figcaption className="mt-0">Reconstructed scroll <a href="https://www.stockholmuniversitypress.se/site/chapters/10.16993/baj.f/download/462/">(source)</a></figcaption>
</figure>

### Why are there no spaces in the text?

In ancient Latin and Greek, they didn’t use spaces! Spaces were added later to aid foreign language learners.

### How does CT-scanning work exactly?

We take X-ray photographs of the object from different angles. Typically this is done by having an X-ray source on one side of the object, and an X-ray camera on the other side, and rotating the object on a platform. If the object doesn’t fully fit in the frame of the camera, it can be moved around as well.

<div>Just like with any digital camera, there are a lot of settings and parameters. The most important for you to know are:</div>

* **Resolution:** the dimensions of each pixel in an X-ray photo, typically denoted in µm (micrometers or “microns”). Lower is better. We scanned the scrolls at 8µm, which we think should be enough to detect ink patterns, but we scanned the fragments at 4µm just in case. Renting beam time on a particle accelerator is expensive, but if we need to we can go back and scan objects at even lower resolutions.
* **Energy level:** the energy of the X-ray electrons, typically expressed in keV (kiloelectronvolts). For particle accelerators this is one precise number, whereas for bench top scanners this is more of a range. We think lower is better, since carbon responds better to lower energy levels. We scanned everything twice, at 54keV and 88keV (though for the scrolls we only had time for a smaller slice at 88keV).

At high resolutions the field of view of the camera is too small to capture the object in its entirety, so multiple passes have to be made. Typically these are stitched together as part of the scanning process.

<div className="flex flex-wrap items-end">
  <figure className="sm:w-[37%]">
    <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" style={{ clipPath: "inset(55px 7px 40px)", margin: "-55px -7px -40px" }}>
      <video autoPlay playsInline loop muted className="max-w-[100%] rounded-xl" poster="/img/tutorials/imagej-raw-xrays2.jpg">
        <source src="/img/tutorials/imagej-raw-xrays2.webm" type="video/webm"/>
        <source src="/img/tutorials/imagej-raw-xrays2.mp4" type="video/mp4"/>
      </video>
    </video>
    <figcaption className="mt-0">Raw X-ray photos</figcaption>
  </figure>
  <figure className="sm:w-[63%]">
    <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/tutorials/fragment-rotating2.jpg">
      <source src="/img/tutorials/fragment-rotating2.webm" type="video/webm"/>
      <source src="/img/tutorials/fragment-rotating2.mp4" type="video/mp4"/>
    </video>
    <figcaption className="mt-0">A fragment rotating <a href="https://www.youtube.com/watch?v=fg_08ukGlMw">(source)</a></figcaption>
  </figure>
</div>

From the X-ray photos from different angles we can reconstruct a 3D volume, using a clever algorithm called [tomographic reconstruction](https://en.wikipedia.org/wiki/Tomographic_reconstruction) (which is where “CT scanner” gets its name; ”computed tomography”). This is typically done by software that comes with the scanner.

<div className="flex flex-wrap items-end justify-between">
  <figure className="sm:w-[38%]">
    <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/tutorials/fragment-volume2.jpg">
      <source src="/img/tutorials/fragment-volume2.webm" type="video/webm"/>
      <source src="/img/tutorials/fragment-volume2.mp4" type="video/mp4"/>
    </video>
    <figcaption className="mt-0">Volumetric representation of a fragment, showing multiple layers of papyrus</figcaption>
  </figure>
  <figure className="sm:w-[60%]">
    <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/faq/fragment-pointcloud.png">
      <source src="/img/faq/fragment-pointcloud.webm" type="video/webm"/>
      <source src="/img/faq/fragment-pointcloud.mp4" type="video/mp4"/>
    </video>
    <figcaption className="mt-0">Mesh representation of the same fragment</figcaption>
  </figure>
</div>

The resulting 3D volume is like a 3D image. Each unit is called a “voxel” (instead of “pixel”), and has a particular brightness (it’s greyscale). This 3D volume is typically represented as a “.tif image stack”. This is just a bunch of .tif images where each image (called a “slice”) represents a different layer the z-direction, typically starting at the bottom and moving upwards.

### What signals might be present in the 3D X-ray scans for ink detection?

We don’t really know, but we suspect that ink might be filling in between the grid pattern of papyrus, kind of like syrup filling in gaps in a waffle.

<figure className="max-w-[400px]">
  <img src="/img/faq/waffle.png"/>
  <figcaption className="mt-0">Syrup filling in gaps in a waffle <a href="https://youtu.be/mwe9sHZ58A0?t=3168">(source)</a></figcaption>
</figure>

Ink might also be sitting on top of the papyrus, causing a slight bump on the surface. In [Tutorial 4](tutorial4) we should several examples of where the ink is directly visible in slices of 3D X-ray scans, which is promising. The talks at the top of this page also go into some details.

There might be some effect of indentation of the writing instrument, but it’s probably not very significant. The thought has generally been that any indentation effect would be even smaller than ink w.r.t. the scan resolution and maybe not significant when compared against the natural relief of the papyrus fibers. However, this has not been explored in detail on this type of material (look at the paper "Revisiting the Jerash Silver Scroll" for work on an etched metal scroll), so we don’t know for sure.

It could be worthwhile to try to reverse engineer what machine learning models are seeing, so that perhaps we can see it more directly. Perhaps this could influence other ink detection methods or future scanning efforts.

### Does segmenting and flattening need to happen before ink detection?

This ordering is largely historical and due to the way we’ve constructed label sets, which relies on doing the segmentation and flattening first. But this can’t be the only way to do it, and we’d love to see the pipeline get shaken up.

For example, the model input of ink detection could be sampled directly from the original 3D X-ray volume, instead of using a “surface volume” as an intermediate step. This could avoid loss of resolution during the sampling process into a differently oriented volume, which happens when constructing a surface volume.

The downside of such an approach is that a lot more data needs to be accessible on disk, since the original 3D X-ray volumes are much bigger than the surface volumes (37GB vs 1.6TB in total for all fragments). This can be problematic for cloud training, which might not have enough available hard drive space. However, since we only need to access the voxels around the mesh, the data size could be reduced (creating something like a surface volume, but retaining the original coordinate space, and avoiding any resampling).

### I would like to read the works that have been recovered from the scrolls so far, where I can I find them?

<div>Most are by Philodemus. This is a list of English translations we have found so far:</div>

* [Philodemus: On Anger. (2020), David Armstrong & Michael McOsker. SBL. ISBN 1628372699](https://en.wikipedia.org/wiki/Special:BookSources/1628372699)
* [Philodemus: On Death. (2009), W. Benjamin Henry. SBL. ISBN 1-58983-446-1](https://en.wikipedia.org/wiki/Special:BookSources/1-58983-446-1)
* [Philodemus: On Frank Criticism. (1998), David Konstan, Diskin Clay, Clarence, E. Glad. SBL. ISBN 1-58983-292-2](https://en.wikipedia.org/wiki/Special:BookSources/1-58983-292-2)
* [Philodemus, On Piety, Part 1. (1996). Critical Text with Commentary by Dirk Obbink. Oxford University Press. ISBN 0-19-815008-3](https://en.wikipedia.org/wiki/Special:BookSources/0-19-815008-3)
* [Philodemus, On Poems, Book 1. (2001). Edited with Introduction, Translation, and Commentary by Richard Janko. Oxford University Press. ISBN 0-19-815041-5](https://en.wikipedia.org/wiki/Special:BookSources/0-19-815041-5)
* [Philodemus, On Poems, Book 2, with the fragments of Heracleodorus and Pausimachus. (2020). Edited with Introduction, Translation, and Commentary by Richard Janko. Oxford University Press. ISBN 9780198835080](https://en.wikipedia.org/wiki/Special:BookSources/9780198835080)
* [Philodemus, On Poems, Books 3-4, with the Fragments of Aristotle, On Poets. (2010). Edited with Introduction, Translation, and Commentary by Richard Janko. Oxford University Press. ISBN 0-19-957207-0](https://en.wikipedia.org/wiki/Special:BookSources/0-19-957207-0)
* [Philodemus, On Property Management. (2013), Voula Tsouna. SBL. ISBN 1-58983-667-7](https://en.wikipedia.org/wiki/Special:BookSources/1-58983-667-7)
* [Philodemus, On Rhetoric Books 1 and 2: Translation and Exegetical Essays. (2005). Clive Chandler (editor). Routledge. ISBN 0-415-97611-1](https://en.wikipedia.org/wiki/Special:BookSources/0-415-97611-1)
* [David Sider, (1997), The Epigrams of Philodemos. Introduction, Text, and Commentary. Oxford University Press. ISBN 0-19-509982-6](https://en.wikipedia.org/wiki/Special:BookSources/0-19-509982-6)
* Philodemus: On Methods of Inference. 2nd edition. (1978). Phillip Howard De Lacy, Estelle Allen De Lacy. Bibliopolis.

### What happened to the people when Mount Vesuvius erupted? 😢

We recommend starting with the only surviving eyewitness account: [Pliny the Younger, Letters 6.16 and 6.20](http://www.u.arizona.edu/~afutrell/404b/web%20rdgs/pliny%20on%20vesuvius.htm).

The story of the eruption of Mount Vesuvius has captured imaginations for centuries. The cities of Pompeii and Herculaneum are unique in how well they were preserved. A great introduction to this story is [A Timeline of Pompeii](https://www.youtube.com/watch?v=nwB8sBHZzQc).

<figure className="sm:float-right sm:ml-4">
<img src="/img/faq/map-herculaneum.svg"/>
<figcaption className="mt-0">Map showing Mt. Vesuvius in relation to Herculaneum, Pompeii, and Misenum (where Pliny the Younger witnessed the event) <a href="https://commons.wikimedia.org/wiki/File:Mt_Vesuvius_79_AD_eruption.svg">(source)</a></figcaption>
</figure>

<div>Some more resources:</div>

* Wikpedia
    * [Mount Vesuvius](https://en.wikipedia.org/wiki/Mount_Vesuvius)
    * [Eruption of Mount Vesuvius in 79 AD](https://en.wikipedia.org/wiki/Eruption_of_Mount_Vesuvius_in_79_AD)
    * [Herculaneum](https://en.wikipedia.org/wiki/Herculaneum)
    * [Pompeii](https://en.wikipedia.org/wiki/Pompeii)
* Books: [Recommended reads on Pompeii](https://www.elodieharper.com/post/recommendedreadsonpompeii)
    * [Pompeii](https://en.wikipedia.org/wiki/Special:BookSources?isbn=9781846684715), by Mary Beard
    * [Complete Pompeii](https://en.wikipedia.org/wiki/Special:BookSources?isbn=9780500290927), by Joanne Berry
    * [Life and Death in Pompeii and Herculaneum](https://en.wikipedia.org/wiki/Special:BookSources?isbn=9780714122823), by Paul Roberts
* Movies
    * [Pompeii: The Last Day](https://www.imdb.com/title/tt0369838/)
    * [Pompeii (2014)](https://www.imdb.com/title/tt1921064/)

### Why did you decide to start this project?

Nat read [24 Hours in Ancient Rome](https://www.amazon.com/24-Hours-Ancient-Rome-People-ebook/dp/B0758BFFFX) during the 2020 COVID lockdown. He fell into an internet rabbit hole that ended up with him reaching out to Dr. Seales two years later to see how he could help speed up the reading of the Herculaneum Papyri. They came up with the idea of the Vesuvius Challenge. Daniel was intrigued by this idea and decided to co-sponsor it with Nat.

### Is this going to work?

We think so! Based on the results that Dr. Seales and his team have been able to produce so far, we believe that it is possible to read the Herculnaeum scrolls using the scans that we already have. We don’t think it’s easy, and we’re not certain, but we believe it’s possible.

### I have a lot of money! Can I help sponsor this?

Vesuvius Challenge Inc. is a 501c3 non-profit organization that was formed solely to solve the puzzle of the Herculaneum Papyri. It is currently funded by Nat Friedman and Daniel Gross, and by many hours of volunteer contributions.

If you want to contribute money to support our operational costs or to increase the prize amounts, please <a href="mailto:nat@nat.org">get in touch</a>!

### Has the mainstream media covered this work in the past?

* Watch [this interview](https://drive.google.com/file/d/1nAAItmdAJ5PcnBE3TmOjCoxIX3uhlLDc/view) with Dr. Brent Seales on 60 Minutes!
* [The UnXplained](https://www.imdb.com/title/tt20234948/)
* Great article by [Smithsonian Magazine](https://www.smithsonianmag.com/history/buried-ash-vesuvius-scrolls-are-being-read-new-xray-technique-180969358/)
* More articles and videos on [this page](https://www2.cs.uky.edu/dri/news/)

### I’m a journalist and I would like to interview someone from the Vesuvius Challenge!

Ok! Please email press@scrollprize.org.

### Do you have a scroll that looks like the Nintendo logo from GoldenEye N64?

Of course (🔊 sound on).

<figure>
  <video loop controls className="w-[100%]" poster="/img/faq/papyrus-n64.jpg">
    <source src="/img/faq/papyrus-n64.webm" type="video/webm"/>
    <source src="/img/faq/papyrus-n64.mp4" type="video/mp4"/>
  </video>
</figure>

### Do you have a super-cringe, over-the-top, and factually questionable trailer video for the competition?

[Naturally.](https://www.youtube.com/watch?v=u9WCapDeKsQ)


<!--
### Tails and serifs
"Some of the v2 label edits included various tails and serifs that I omitted the first time. This scribe liked little flourishes evidently (even more true of the other scribe on .. fragments - check the upsilon and kappa (YK) in the middle of .. - the tail on the kappa is even longer than it first appears!)." -->