---
title: "$50,000 Segmentation Tooling 2 (August 28th / Sept 15th)"
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

“Segmentation” means identifying sheets of papyrus in a 3D scan of a scroll. Learn more in [“Tutorial 3: Segmentation and Flattening”](tutorial3).

We have a couple of contractors and volunteers who have been segmenting, and this is their progress so far.

<figure>
  <img src="/img/segmentation/leaderboard-2023-06-27.png" className="w-[100%] max-w-[700px]"/>
  <figcaption className="mt-0">Segmentation progress and leaderboard with data from 2023-06-27 <a href="https://docs.google.com/spreadsheets/d/1If_qi9H2zRmcW0rPo8Q0waP9suAuG2tmY7o2vs_VSZs/edit?usp=sharing">(source)</a></figcaption>
</figure>

We’d like to get to 1000-2000 cm<sup>2</sup> of high-quality segments, and for that we need better tools and algorithms. Good tools and algorithms make a huge difference: you can see the enourmous jump when UKy/EduceLab released their Monster Segment, which was enabled by their new tool, [Quick Segment](https://github.com/educelab/quick-segment).

After a successful [first round](https://scrollprize.substack.com/p/segmentation-tooling-winners-new) of the Segmentation Tooling Prize, we’re announcing another one! We are awarding prizes to make it easier and faster to segment the scrolls, with the ultimate goal of fully mapping both scrolls.

* $50,000 total, 7 prizes. 3x10k, 4x5k.
* Any tools, documentation, notebooks, analysis, to help with segmentation and flattening of the scrolls. Must be open source.
* We are heavily favoring submissions that:
  * help segment **large and/or hard segments**
    * We want people to read [passages](/grand_prize) of 140 characters, for which we need large segments.
      * For the [First Letters Prize](/first_letters) we're looking for 10 letters in 4cm<sup>2</sup>, so extrapolating, we might need segments of 14\*4=56cm<sup>2</sup>. This is a very rough estimate, because you might not find a properly aligned passage that way (so the required area might be higher), and we were pretty conservative in our estimate for the First Letters Prize (so the required area might be lower).
      * In any case, most of our current segments are 2-8cm<sup>2</sup>, so we need ways to make much larger segments.
    * To get large segments, we need to be able to better segment in hard regions.
    * Hard segments include those in regions without clear separation.
    * Hard segments might require operating in full 3D, or using semi-automated methods that can follow papyrus fibers.
  * are actually **used by segmenters**!
    * We discourage late submissions! Work with the segmenters early on (in Discord; ask in #general) to have them try out your tools, get their feedback, and iterate.
    * We encourage building on top of existing tools that are proven to work.
    * A list of feature requests from people actively segmenting [can be found here](https://docs.google.com/document/d/1r3FDJIUP1Kx3EamxFwPVX9O_-lGMoWQsbHbOrcoTSvk/edit?usp=sharing). We **strongly recommend** you to look at this list and get in touch with active segmenters on Discord. Let's make their life easier!
* You may make multiple submissions. We may award a single prize to a set of multiple submissions by one person or team.
* Your submission will be judged subjectively: the Technical Review Team will decide what they think are the best open source contributions.
* If you are submitting as a team, the team leader should make the submission, and is responsible for distributing the prize money among the team.
* Submissions are closed on **Monday August 28th 11:59pm PT**, after which there is some time to work with the segmenters to actually use your tools and get feedback. This period runs until **Friday September 15th 11:59pm PT**, after which the Review Team will select winners.
* Submit using [this form](https://forms.gle/miJiAwD6pcP2PnGEA).

To get a sense of what segmentation looks like right now, check out the segmentation videos linked in [Tutorial 5: Advanced Topics](tutorial5).

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] rounded-xl" poster="/img/tutorials/segmentation2.jpg">
    <source src="/img/tutorials/segmentation2.webm" type="video/webm"/>
    <source src="/img/tutorials/segmentation2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">Segmentation: finding a surface of papyrus.</figcaption>
</figure>
