---
title: "$50,000 First Letters Prize"
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

We’re announcing $50,000 in new prizes for finding the first letters in the scrolls! $40,000 for the first team that uncovers 10 letters within a single area of 4cm<sup>2</sup> from [Scroll 1 or 2](data), and open sources their methods and results (***after*** winning the prize). And a $10,000 prize for the second team to reach this milestone.

The purpose of this prize is to close the gap between the [Ink Detection Prize on Kaggle](ink_detection), and the much more difficult [Grand Prize](grand_prize). We want to prove that ink detection can work on the scrolls. We’ll learn a lot from this: what techniques work best, do we need to adjust how we do segmentation, etc.

It is important that we cross a very high threshold of confidence in order to award the First Letters Prize. This requires that we do extensive review; we’d rather be slow than wrong.

* Two prizes:
  * $40,000 for the first team that makes a submission that meets the criteria
  * $10,000 for the second team.
* Criteria:
  * An image, showing text on a sheet of papyrus, clearly showing at least 10 legible letters in a continuous area from Scroll 1 or 2, no larger than 4cm<sup>2</sup>. Words and lines have to be clearly visible.
  * For example, the following are areas within the fragments (all 4cm<sup>2</sup>) that have respectively ~22, ~17, and ~10 legible letters in them: <div className="flex flex-wrap max-w-[500px]"><div className="sm:w-[35%] mb-2 mr-2" style={{ maxWidth: "calc(65% - 8px)" }}><img src="/img/first-letters/1.png" className="w-[100%]"/></div><div className="sm:w-[20%] mb-2 mr-2" style={{ maxWidth: "calc(35% - 8px)" }}><img src="/img/first-letters/2.png" className="w-[100%]"/></div><div className="sm:w-[35%] mb-2 mr-2" style={{ maxWidth: "calc(50% - 8px)" }}><img src="/img/first-letters/3.png" className="w-[100%]"/></div></div>
* A submission should include the following:
  * **Image.** Submissions must be in the form of an image of the virtually unrolled papyrus, showing visible and legible text. Specify which scroll the image came from and where in the scroll it was found.
    * **Dimensions.** In your images, please include a scale showing the size of 1cm. Please also include pixel and real dimensions (width and height in both pixels millimeters) for all letters that you have found (either within the image or in a separate document).
    * **3D orientation.** Please include a 3D image that makes clear where your area is located in the scroll, how it is oriented, and what orientation the letters are facing. Please make it clear if you found the letters facing the inside or the outside of the scroll, and which side is “up” in the writing. This doesn’t have to be an elaborate rendering, even a crude hand-drawn picture would suffice, as long as you communicate the position and orientation.
      * Include a mesh with texture, if you have it.
    * **Rows of text.** Papyrologists tell us that in all 800 scrolls which have been partially or fully read so far, text appears in regular rows and columns. You can also see this in the fragments and on [Chartes](http://www.chartes.it/). Please include where you are seeing rows, e.g. by annotating your picture with horizontal lines.
    * **Images should still include fibers.** You can make a binary ink image but you should then overlay it over an image where the fibers are visible. We expect to see letters parallel to the papyrus fibers (as that is how it appears in >99% of all samples read to date).
  * **Public fragments with known ground truth.** Please run your methods on the three public fragments and include your results.
    * If your method involves training on the public fragments, please include k-fold results (where you exclude inference areas from training, and repeat that until you have run inference for all segments). Or at least 1-3 such examples, if your training is particularly slow or expensive.
    * Note that the segments are 4µm per pixel instead of 8µm, so you might need to downsample to the same resolution.
    * The surface volumes can be found e.g. [here](http://dl.ash2txt.org/fragments/Frag1.volpkg/working/54keV_exposed_surface/surface_volume/) for Fragment 1, and similarly for the other two.
  * **Reproducible instructions.** Please include clear instructions on how to run your method on an area of a scroll, ideally on a surface volume of a segment (such as the aforementioned surface volumes of fragments or a scroll surface volume such as [this one](http://dl.ash2txt.org/full-scrolls/Scroll1.volpkg/paths/20230504223647/layers/)).
    * Alternatively, running it on a segment mesh file, is also acceptable. More esoteric methods are also acceptable as long as you very clearly explain how to use it.
    * We will use these instructions to run your method on the secret 4th fragment, for which we have known ground truth.
  * **Discussion of your method.** Please tell us how your method works, why you believe your method works, and relevant details on how to interpret the results (e.g. what do different colors in your output mean). Any details that you can share to convince us (and yourself!) that you actually found letters will be helpful.
  * **Other information.** Feel free to include any other things we should know.
* Your submission will be reviewed by the [Review Team](https://scrollprize.org/grand_prize#review-process) to verify technical validity and papyrological plausibility and legibility.
* Just as with the Grand Prize, please **do not** make your discovery public until winning the prize. We will work with you to announce your findings.
* By submitting you agree to make your method open source. It does not have to be open source at the time of submission, but you have to make it open source to accept the prize.
* The first team to make a valid submission by 11:59pm Pacific, December 31st, 2023 wins the $40,000.
* Make your submissions using [this form](https://forms.gle/s6f656m3KSTWkAtN8).

Note that if your text does not meet our expectations (e.g. they are not neatly organized in rows, or aligned with papyrus fibers, or on the inside of the papyrus) you might still have found valid text, so this doesn’t immediately disqualify your submission. It does make it less likely that you found valid text.

If you are not able to provide this information, we would unfortunately have to reject your submission since we have insufficient evidence that you found letters.

If you do submit this information and we still cannot get high confidence, we will not immediately reject your submission; it will remain open until we do have more evidence, though this could potentially take months. For example, if we discover 4 months from now that your method was right all along, and your method was the first such valid method, then you will then win the First Letters Prize (even if, for example, the Grand Prize is already claimed).

### How to get started?

We have a bunch of segments and surface volumes ready to apply your ink detection algorithms on (e.g. which you made for the [Ink Detection Prize on Kaggle](ink_detection), or the original [ink-id](https://github.com/educelab/ink-id/)). See the [Data Organization page](data_organization) for more details. In particular, we recommend you trying out the Monster Segment (in Scroll 1), which is huge:

<figure>
  <img src="/img/first-letters/Scroll1_wrap_recto_smaller.png" className="w-[100%]"/>
  <figcaption className="mt-0">Monster Segment texture</figcaption>
</figure>

<figure>
  <img src="/img/first-letters/monster_slices.png" className="w-[100%]"/>
  <figcaption className="mt-0">Location of the Monster Segment in the scroll</figcaption>
</figure>
