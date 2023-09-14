---
title: "The Data"
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

**To download:** Fill out the [registration form](https://forms.gle/HV1J6dJbmCB2z5QL8) and you will be provided with a download link automatically. The license terms of the data are specified in the form.

To learn more about the data, see the linked pages below. Also be sure to check out the data paper [“EduceLab-Scrolls: Verifiable Recovery of Text from Herculaneum Papyri using X-ray CT”](https://arxiv.org/abs/2304.02084).

<div>
  <table>
    <tbody>
      <tr>
        <td><a href="/data_scrolls">Scrolls</a><br/>5.5TB</td>
        <td>
          <div className="mb-4">8µm 3D X-ray scans of two intact scrolls (top halves only), scanned in horizontal slices from bottom to top. Each half scroll scan is 14,000 .tif files, 120MB each. Each slice is 8µm tall, so this scroll half is 11.2cm tall. Both were scanned at 54keV, though we also released a smaller “slab” of Scroll 2 at 88keV. These are the scans you need to read to win the Grand Prize.</div>
          <div className="flex flex-wrap max-w-[500px]">
            <div className="sm:w-[45%] mb-2 mr-2"><img src="/img/overview/scroll1-small-actual.jpg" className="w-[100%]"/><figcaption class="mt-[-6px]">Scroll 1</figcaption></div>
            <div className="sm:w-[45%] mb-2"><img src="/img/overview/scroll2-small-actual.jpg" className="w-[100%]"/><figcaption class="mt-[-6px]">Scroll 2</figcaption></div>
            <div><img src="/img/data/07000.jpg" className="max-w-[300px]"/><br/><figcaption class="mt-[-6px]">Single slice from Scroll 1</figcaption></div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="/data_segments">Segments</a><br/>300-400GB</td>
        <td>
          <div className="mb-4">Segmentation is the mapping of sheets of papyrus in a 3D X-ray volume. The resulting surface volumes can be used directly to look for ink.</div>
          <div className="flex flex-wrap max-w-[500px]">
            <div className="w-[100%] max-w-[400px] mb-4"><div className="overflow-hidden mb-2"><img loading="eager" src="/img/data/segmentation-animation.webp" className="w-[100%] mt-[-30px] mb-[-50px]"/></div><figcaption class="mt-[-6px]">Some segments from Scroll 1</figcaption></div>
            <div className="w-[100%] max-w-[484px]">
              <iframe width="484" height="293" class="w-[100%]" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRQxQefw-7rl3Hnt1Q7MFpI27FtzsvFo2x9q6egW8vN5am8QlQLE20BAjOSPZ2teztjdgMUOGc6FV7Y/pubchart?oid=1982586813&amp;format=interactive"></iframe>
              <figcaption className="mt-0">Progress of mapping the scrolls, in area (cm²), from the <a href="https://docs.google.com/spreadsheets/d/1zC_5vkqWgb_5z4Q9BYsETF7_3r1BYPccdAnS_GRYOaQ/edit#gid=2051117465">Segment Directory spreadsheet</a></figcaption>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="/data_fragments">Fragments</a><br/>2.4TB</td>
        <td>
          <div className="mb-4">4µm 3D X-ray scans, infrared images, and hand-labeled ink masks for three broken-off fragments of papyrus. Each fragment scan is 7,000-14,000 .tif files. The 3D scans are in vertical slices from side to side. Both 54keV and 88keV volumes are a released for every fragment. These data are for use in training ink detection models.</div>
          <div className="flex flex-wrap max-w-[500px]">
            <div className="sm:w-[45%] mb-2 mr-2" style={{ maxWidth: "calc(50% - 8px)" }}><img src="/img/data/fr1.jpg" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 1</figcaption></div>
            <div className="sm:w-[45%] mb-2 mr-2" style={{ maxWidth: "calc(50% - 8px)" }}><img src="/img/data/fr2.jpg" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 2</figcaption></div>
            <div className="sm:w-[45%] mb-2 mr-2" style={{ maxWidth: "calc(50% - 8px)" }}><img src="/img/data/fr3.png" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 3</figcaption></div>
            <div className="sm:w-[45%] mb-2 mr-2" style={{ maxWidth: "calc(50% - 8px)" }}><img src="/img/data/fr4.png" className="w-[100%]"/><figcaption class="mt-[-6px]">Fragment 4</figcaption></div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="https://gist.github.com/janpaul123/280262ebce904f7366fe4cc155593e90">campfire.zip</a><br/>338MB</td>
        <td>
          <div className="mb-4">X-ray scans and images of the Campfire Scroll (used in tutorials).</div>
          <div className="flex flex-wrap">
            <div className="sm:w-[35%] max-w-[100px] sm:max-w-[1000px] mb-2 mr-2"><img src="/img/tutorials/campfire-rolled2.jpg" className="max-w-[100px]"/><br/><figcaption class="mt-[-6px]">Campfire scroll</figcaption></div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
