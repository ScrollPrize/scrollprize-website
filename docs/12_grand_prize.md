---
title: "$700,000 grand prize (December 31st)"
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


The Grand Prize will go to the first team to read four passages of text from the inside of the two intact scrolls. More details on the qualifying criteria are available [here](/participate).

Here are the scrolls in question:

<div className="flex w-[100%]">
    <div className="w-[100%] mb-2 mr-2"><img src="/img/overview/scroll1-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-0">Scroll 1</figcaption></div>
    <div className="w-[100%] mb-2"><img src="/img/overview/scroll2-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-0">Scroll 2</figcaption></div>
</div>

We have provided you with 8µm 3D X-ray scans of each of these scrolls, which you can find [here](/data). Your job is to extract the text from these scans.

You can approach this challenge through any means necessary: machine learning, computer vision, or machine-assisted tools operated by humans.

<figure>
  <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/overview/scroll-inside-animation-4.jpg">
    <source src="/img/overview/scroll-inside-animation-4.webm" type="video/webm"/>
    <source src="/img/overview/scroll-inside-animation-4.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">3D X-ray scan of a scroll <a href="https://www.youtube.com/watch?v=PpNq2cFotyY">(source)</a></figcaption>
</figure>

#### Why is this difficult?

As you will read in the [tutorials](/tutorial1), advanced tools and techniques exist for virtually unwrapping papyrus scrolls. This was demonstrated in 2015 when Dr. Seales's team [unwrapped the En-Gedi scroll](https://www2.cs.uky.edu/dri/the-scroll-from-en-gedi/), and in their recent result [identifying ink from 3D X-ray scans in the Herculaneum scrolls](https://arxiv.org/abs/2304.02084).

<div>But the Herculaneum scrolls have proved more challenging. The remaining challenges include:</div>

- Segmenting the scrolls. The Herculaneum scrolls are especially long, tightly wrapped, damaged, and distorted. To date, no one has successfully done a large-scale segmentation of these scrolls to identify the surfaces of all the rolled layers.
- Finding the ink. The ink used in the Herculaneum scrolls is [radiolucent](https://en.wikipedia.org/wiki/Radiodensity), making it difficult to see in the scans. Recently, Dr. Seales's team has trained a machine learning model which can detect the ink from subtle patterns in the 3D X-rays. This works in the fragments, but these models are not yet perfect and will probably need to be improved to work at the scale of an entire scroll.
- Putting it all together. Applying the ink detection models to the segmented scroll has not yet been successfully demonstrated.

Based on the [landmark results](https://arxiv.org/abs/2304.02084) that Dr. Seales and his team have recently produced, we believe that it is possible to read the Herculaneum scrolls using the [scans](/data) that we already have and the tools and tecniques that they have developed. And that is the Vesuvius Challenge!

The Grand Prize deadline is 11:59pm Pacific, December 31st, 2023.
