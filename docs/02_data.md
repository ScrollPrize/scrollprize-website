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

<div>To learn more about the data, see the linked pages below. Also be sure to check out:</div>

* For the 2019 data: [“EduceLab-Scrolls: Verifiable Recovery of Text from Herculaneum Papyri using X-ray CT”](https://arxiv.org/abs/2304.02084).
* For the 2023 data: [“EduceLab Herculaneum Scroll Data (2023) Info Sheet”](https://drive.google.com/file/d/1BYkYC-4c_RveGrJHpscJimkoguizii6-/view?usp=drive_link).

<div>
  <table>
    <tbody>
      <tr>
        <td><a href="/data_scrolls">2019 Scrolls</a><br/>5.5TB</td>
        <td>
          <div className="mb-4">7.91µm 3D X-ray scans of two intact scrolls (top halves only), scanned in horizontal slices from bottom to top. Each half scroll scan is 14,000 .tif files, 120MB each. Each slice is 7.91µm tall, so this scroll half is 11.2cm tall. Both were scanned at 54keV, though we also released a smaller “slab” of Scroll 2 at 88keV. These are the scans you need to read to win the Grand Prize.</div>
          <div className="flex flex-wrap max-w-[500px]">
            <div className="sm:w-[45%] mb-2 mr-2"><img src="/img/overview/scroll1-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Scroll 1 (PHerc Paris 3)</figcaption></div>
            <div className="sm:w-[45%] mb-2"><img src="/img/overview/scroll2-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Scroll 2 (PHerc Paris 4)</figcaption></div>
            <div><img src="/img/data/07000.jpg" className="max-w-[300px]"/><br/><figcaption className="mt-[-6px]">Single slice from Scroll 1</figcaption></div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="/data_scrolls">2023 Scrolls</a><br/>?TB <span className="text-sm">(still processing)</span></td>
        <td>
          <div className="mb-4">New scans from 2023 (<a href="https://scrollprize.substack.com/p/new-scans-of-herculaneum-papyri-at">announcement</a>). 3.24µm and 7.91µm 3D X-ray scans of two partially unrolled scrolls, scanned in horizontal slices from bottom to top. Each scroll scan is ~25,000 .tif files, 170MB each. Each slice is 4µm tall, so each scroll is ~8cm long. Both were scanned at 53/70/88/105keV, for a total of 2*4=8 volumes each. Being released on an ongoing basis, as the data is being processed. You can also read these to win the Grand Prize.</div>
          <div className="flex flex-wrap max-w-[500px]">
            <div className="sm:w-[35.5%] mb-2 mr-2"><img src="/img/overview/PHerc0332.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Scroll 3 (PHerc 0332)</figcaption></div>
            <div className="sm:w-[55%] mb-2"><img src="/img/overview/PHerc1667.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Scroll 4 (PHerc 1667)</figcaption></div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="/data_segments">Segments</a><br/>300-400GB</td>
        <td>
          <div className="mb-4">Segmentation is the mapping of sheets of papyrus in a 3D X-ray volume. The resulting surface volumes can be used directly to look for ink.</div>
          <div className="flex flex-wrap max-w-[500px]">
            <div className="w-[100%] max-w-[400px] mb-4"><div className="overflow-hidden mb-2"><img loading="eager" src="/img/data/segmentation-animation.webp" className="w-[100%] mt-[-30px] mb-[-50px]"/></div><figcaption className="mt-[-6px]">Some segments from Scroll 1</figcaption></div>
            <div className="w-[100%] max-w-[484px]">
              <iframe width="484" height="293" className="w-[100%]" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRQxQefw-7rl3Hnt1Q7MFpI27FtzsvFo2x9q6egW8vN5am8QlQLE20BAjOSPZ2teztjdgMUOGc6FV7Y/pubchart?oid=1982586813&amp;format=interactive"></iframe>
              <figcaption classNameName="mt-0">Progress of mapping the scrolls, in area (cm²), from the <a href="https://docs.google.com/spreadsheets/d/1zC_5vkqWgb_5z4Q9BYsETF7_3r1BYPccdAnS_GRYOaQ/edit#gid=2051117465">Segment Directory spreadsheet</a></figcaption>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="/data_fragments">Fragments</a><br/>2.4TB</td>
        <td>
          <div className="mb-4">3D X-ray scans, infrared images, and hand-labeled ink masks for three broken-off fragments of papyrus. Each fragment scan is 7,000-14,000 .tif files. The 3D scans are in vertical slices from side to side. The 2019 scans (fragments 1-4) are 3.24µm and 54/88keV. 2023 scans (fragments 5-6) are 3.24/7.91µm and 53/70/88/105keV. These data are for use in training ink detection models.</div>
          <div className="flex flex-wrap">
            <div className="sm:w-[45%] max-w-[200px] mb-2 mr-2"><img src="/img/data/fr1.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 1 (PHerc Paris 2 Fr 47)</figcaption></div>
            <div className="sm:w-[45%] max-w-[200px] mb-2 mr-2"><img src="/img/data/fr2.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 2 (PHerc Paris 2 Fr 143)</figcaption></div>
            <div className="sm:w-[45%] max-w-[200px] mb-2 mr-2"><img src="/img/data/fr3.png" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 3 (PHerc Paris 1 Fr 34)</figcaption></div>
            <div className="sm:w-[45%] max-w-[200px] mb-2 mr-2"><img src="/img/data/fr4.png" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 4 (PHerc Paris 1 Fr 39)</figcaption></div>
            <div className="sm:w-[45%] max-w-[130px] mb-2 mr-2"><img src="/img/data/fr5.png" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 5 (PHerc 1667 Cr 1 Fr 3)</figcaption></div>
            <div className="sm:w-[45%] max-w-[220px] mb-2 mr-2"><img src="/img/data/fr6.png" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 6 (PHerc 51 Cr 4 Fr 48)</figcaption></div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="https://gist.github.com/janpaul123/280262ebce904f7366fe4cc155593e90">campfire.zip</a><br/>338MB</td>
        <td>
          <div className="mb-4">X-ray scans and images of the Campfire Scroll (used in tutorials).</div>
          <div className="flex flex-wrap">
            <div className="sm:w-[35%] max-w-[100px] sm:max-w-[1000px] mb-2 mr-2"><img src="/img/tutorials/campfire-rolled2.jpg" className="max-w-[100px]"/><br/><figcaption className="mt-[-6px]">Campfire scroll</figcaption></div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
