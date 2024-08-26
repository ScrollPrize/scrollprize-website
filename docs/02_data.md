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

**To download:** Fill out the [registration form](https://forms.gle/HV1J6dJbmCB2z5QL8) and then visit the [data server](https://dl.ash2txt.org) ([LICENSE](https://dl.ash2txt.org/LICENSE.txt)).

Our datasets are 3D X-ray micro-CT scans of Herculaneum scrolls and fragments. Segments are extracted from scroll or fragment scans. Scroll 1 scans and segments were used to win the 2023 Grand Prize.

To access the data in 1-2 lines of Python without navigating the data server or large downloads, see the [vesuvius](https://github.com/scrollprize/vesuvius) library.

<div>
  <table>
    <tbody>
      <tr>
        <td><a href="/data_scrolls">Scrolls</a></td>
        <td>
          <div className="flex flex-wrap max-w-[500px]">
            <div className="sm:w-[45%] mb-2 mr-2"><img src="/img/overview/scroll1-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Scroll 1 (PHerc. Paris. 4)</figcaption></div>
            <div className="sm:w-[45%] mb-2"><img src="/img/overview/scroll2-small-actual.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Scroll 2 (PHerc. Paris. 3)</figcaption></div>
            <div className="sm:w-[35.5%] mb-2 mr-2"><img src="/img/overview/PHerc332.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Scroll 3 (PHerc. 332)</figcaption></div>
            <div className="sm:w-[55%] mb-2"><img src="/img/overview/PHerc1667.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Scroll 4 (PHerc. 1667)</figcaption></div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="/data_segments">Segments</a></td>
        <td>
          <div className="flex flex-wrap max-w-[500px]">
            <div className="w-[100%] max-w-[400px] mb-4"><div className="overflow-hidden mb-2"><img loading="eager" src="/img/data/segmentation-animation.webp" className="w-[100%] mt-[-30px] mb-[-50px]"/></div><figcaption className="mt-[-6px]">Some segments from Scroll 1</figcaption></div>
            <div className="w-[100%] max-w-[484px]">
              <iframe width="484" height="293" className="w-[100%]" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRQxQefw-7rl3Hnt1Q7MFpI27FtzsvFo2x9q6egW8vN5am8QlQLE20BAjOSPZ2teztjdgMUOGc6FV7Y/pubchart?oid=1982586813&amp;format=interactive"></iframe>
              <figcaption className="mt-0">Progress of mapping the scrolls, in area (cm²), from the <a href="https://docs.google.com/spreadsheets/d/1zC_5vkqWgb_5z4Q9BYsETF7_3r1BYPccdAnS_GRYOaQ/edit#gid=2051117465">Segment Directory spreadsheet</a></figcaption>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="/data_fragments">Fragments</a></td>
        <td>
          <div className="flex flex-wrap">
            <div className="sm:w-[45%] max-w-[200px] mb-2 mr-2"><img src="/img/data/fr1.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 1 (PHerc. Paris. 2 Fr 47)</figcaption></div>
            <div className="sm:w-[45%] max-w-[200px] mb-2 mr-2"><img src="/img/data/fr2.jpg" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 2 (PHerc. Paris. 2 Fr 143)</figcaption></div>
            <div className="sm:w-[45%] max-w-[200px] mb-2 mr-2"><img src="/img/data/fr3.png" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 3 (PHerc. Paris. 1 Fr 34)</figcaption></div>
            <div className="sm:w-[45%] max-w-[200px] mb-2 mr-2"><img src="/img/data/fr4.png" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 4 (PHerc. Paris. 1 Fr 39)</figcaption></div>
            <div className="sm:w-[45%] max-w-[130px] mb-2 mr-2"><img src="/img/data/fr5.png" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 5 (PHerc. 1667 Cr 1 Fr 3)</figcaption></div>
            <div className="sm:w-[45%] max-w-[220px] mb-2 mr-2"><img src="/img/data/fr6.png" className="w-[100%]"/><figcaption className="mt-[-6px]">Fragment 6 (PHerc. 51 Cr 4 Fr 48)</figcaption></div>
          </div>
        </td>
      </tr>
      <tr>
        <td><a href="https://dl.ash2txt.org/other/campfire.zip">campfire.zip</a><br/>338MB</td>
        <td>
          <div className="flex flex-wrap">
            <div className="sm:w-[35%] max-w-[100px] sm:max-w-[1000px] mb-2 mr-2"><img src="/img/tutorials/campfire-rolled2.jpg" className="max-w-[100px]"/><br/><figcaption className="mt-[-6px]">Campfire scroll</figcaption></div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
