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

* Two prizes:
  * $40,000 for the first team that makes a submission that meets the criteria
  * $10,000 for the second team.
* Criteria:
    * An image, showing text on a sheet of papyrus, clearly showing at least 10 legible letters in a continuous area from Scroll 1 or 2, no larger than 4cm<sup>2</sup>. Words and lines have to be clearly visible.
    * For example, the following are areas within the fragments (all 4cm<sup>2</sup>) that have respectively ~22, ~17, and ~10 legible letters in them: <div className="flex flex-wrap max-w-[500px]"><div className="sm:w-[35%] mb-2 mr-2" style={{ maxWidth: "calc(65% - 8px)" }}><img src="/img/first-letters/1.png" className="w-[100%]"/></div><div className="sm:w-[20%] mb-2 mr-2" style={{ maxWidth: "calc(35% - 8px)" }}><img src="/img/first-letters/2.png" className="w-[100%]"/></div><div className="sm:w-[35%] mb-2 mr-2" style={{ maxWidth: "calc(50% - 8px)" }}><img src="/img/first-letters/3.png" className="w-[100%]"/></div></div>
* A submission is similar to a [grand prize submission](https://scrollprize.org/grand_prize#submitting-your-result):
    * **Image.** Submissions must be in the form of an image of the virtually unrolled papyrus, showing visible and legible text. Specify which scroll the image came from and where in the scroll it was found.
    * **Methodology.** A detailed technical description of how your solution works. We need to be able to reproduce your work, so please make this as easy as possible:
        * For fully automated software, please create a Docker image that we can easily run to reproduce your work, and please include system requirements.
        * For software with a human in the loop, please provide written instructions and a video explaining how to use your tool. We’ll work with you to learn how to use it, but we’d like to have a strong starting point.
        * Plase include an easily accessible link from which we can download it.
    * **Hallucination mitigation.** If there is any risk of your model hallucinating results, please let us know how you mitigated that risk. Tell us why you are confident that the results you are getting are real.
    * **Other information.** Feel free to include any other things we should know.
* Your submission will be reviewed by the [Review Team](https://scrollprize.org/grand_prize#review-process) to verify technical validity and papyrological plausibility and legibility.
* Just as with the Grand Prize, please **do not** make your discovery public until winning the prize. We will work with you to announce your findings.
* By submitting you agree to make your method open source. It does not have to be open source at the time of submission, but you have to make it open source to accept the prize.
* The first team to make a valid submission by 11:59pm Pacific, December 31st, 2023 wins the $50,000.
* Make your submissions using [this form](https://forms.gle/s6f656m3KSTWkAtN8).

### How to get started?

We have a bunch of segments and surface volumes ready to apply your ink detection algorithms on (e.g. which you made for the [Ink Detection Prize on Kaggle](ink_detection)). See the [Data Organization page](data_organization) for more details. In particular, we recommend you trying out the Monster Segment (in Scroll 1), which is huge:

<figure>
  <img src="/img/first-letters/Scroll1_wrap_recto_smaller.png" className="w-[100%]"/>
  <figcaption className="mt-0">Monster Segment texture</figcaption>
</figure>

<figure>
  <img src="/img/first-letters/monster_slices.png" className="w-[100%]"/>
  <figcaption className="mt-0">Location of the Monster Segment in the scroll</figcaption>
</figure>
