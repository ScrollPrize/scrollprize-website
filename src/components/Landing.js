import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const inlineImage = (src) => (
  <div
    className="md:mb-8 mb-4 rounded-lg md:h-80 h-full md:w-auto w-full aspect-[4/3] sepia-[.4] inline-block mr-4"
    style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
  />
);

const stories = ({ unrollVideo, mlVideo, xrayVideo }) => [
  {
    date: "79 AD",
    text: "Mount Vesuvius erupts.",
    description: (
      <>
        <div className="mb-4 max-w-3xl">
          In Herculaneum, twenty meters of hot mud and ash bury an enormous
          villa once owned by the father-in-law of Julius Caesar. Inside, there
          is a vast library of papyrus scrolls.
        </div>
        <div className="mb-8 max-w-3xl">
          The scrolls are carbonized by the heat of the volcanic debris. But
          they are also preserved. For centuries, as virtually every ancient
          text exposed to the air decays and disappears, the library of the
          Villa of the Papyri waits underground, intact.
        </div>
        {inlineImage("/img/landing/rocio-espin-pinar-villa-papyri-small.jpg")}
      </>
    ),
    background: "/img/landing/story1.png",
  },
  {
    date: "1750 AD",
    text: "A farmer discovers the buried villa.",
    description: (
      <>
        <div className="max-w-3xl mb-8">
          While digging a well, an Italian farmworker encounters a marble
          pavement. Excavations unearth beautiful statues and frescoes – and
          hundreds of scrolls. Carbonized and ashen, they are extremely fragile.
          But the temptation to open them is great; if read, they would more
          than double the corpus of literature we have from antiquity.
        </div>
        <div className="max-w-3xl mb-8">
          Early attempts to open the scrolls unfortunately destroy many of them.
          A few are painstakingly unrolled by a monk over several
          decades, and they are found to contain philosophical texts written in
          Greek. More than six hundred remain unopened and unreadable.
        </div>
        {inlineImage("/img/landing/scroll.jpg")}
        {inlineImage("/img/landing/herc-materials.jpg")}
        {/* <div className="max-w-3xl mb-8">
          What's more, excavations were never completed, and many historians
          believe that thousands more scrolls remain underground.
        </div>

        <div className="max-w-3xl mb-8">
          Imagine the secrets of Roman and Greek philosophy, science,
          literature, mathematics, poetry, and politics, which are locked away
          in these lumps of ash, waiting to be read!{" "}
        </div> */}
      </>
    ),
    background: "/img/landing/story2.png",
  },
  {
    date: "2015 AD",
    text: "Dr. Brent Seales pioneers virtual unwrapping.",
    description: (
      <>
        <div className="max-w-3xl mb-4">
          Using X-ray tomography and computer vision, a team led by Dr. Brent
          Seales at the University of Kentucky reads the En-Gedi scroll without
          opening it. Discovered in the Dead Sea region of Israel, the scroll is
          found to contain text from the book of Leviticus.
        </div>
        <div className="max-w-3xl mb-8">
          Virtual unwrapping has since emerged as a growing field with multiple
          successes. Their work went on to show the elusive carbon ink of
          the Herculaneum scrolls can also be detected using X-ray tomography,
          laying the foundation for the Vesuvius Challenge.
        </div>
        <video
          // autoPlay
          playsInline
          loop
          muted
          className="md:mb-8 mb-4 rounded-lg md:h-80 h-full md:w-auto w-full aspect-[4/3] sepia-[.8] inline-block mr-4 object-cover"
          poster="/img/landing/engedi5.jpg"
          ref={unrollVideo}
        >
          <source src="/img/landing/engedi5.webm" type="video/webm" />
          <source src="/img/landing/engedi5.mp4" type="video/mp4" />
        </video>
        {inlineImage("/img/landing/brent1.webp")}
        {/* <div className="max-w-3xl mb-8">
          But the Herculaneum Papyri prove more challenging: unlike the denser
          inks used in the En-Gedi scroll, the Herculaneum ink is carbon-based,
          affording no X-ray contrast against the underlying carbon-based
          papyrus.
        </div> */}
      </>
    ),
    background: "/img/landing/story3.png",
  },
  // {
  //   date: "2019 AD",
  //   text: "Enter the particle accelerator.",
  //   description: (
  //     <>
  //       <div className="max-w-3xl mb-8">
  //         Determined to apply virtual unwrapping to the Herculaneum Papyri, Dr.
  //         Seales and his team set out to test a new idea. Under infrared light,
  //         some detached fragments of the papyri are readable, and it seems
  //         possible that these can be used as ground truth data for a machine
  //         learning model that could detect otherwise invisible ink from X-rays.
  //       </div>
  //       {inlineImage("/img/landing/brent1.webp")}
  //       <div className="max-w-3xl mb-8">
  //         To get X-rays at the highest possible resolution, the team uses a
  //         particle accelerator to scan two full scrolls and several fragments.
  //         At 3-8µm resolution, with 16 bits of density data per voxel, they
  //         believe machine learning models can pick up subtle surface patterns in
  //         the papyrus that indicate the presence of carbon-based ink.
  //       </div>
  //       <div className="bg-black p-3 rounded-lg sepia-[0.2] opacity-60">
  //         <video
  //           // autoPlay
  //           playsInline
  //           loop
  //           muted
  //           className="w-[100%]"
  //           poster="img/landing/anim2b_4.png"
  //           ref={mlVideo}
  //         >
  //           <source src="/img/landing/anim2b_4.webm" type="video/webm" />
  //           <source src="/img/landing/anim2b_4.mp4" type="video/mp4" />
  //         </video>
  //       </div>
  //     </>
  //   ),
  //   background: "/img/landing/story4.png",
  // },
  {
    date: "2023",
    text: "A remarkable breakthrough.",
    description: (
      <>
        <div className="max-w-3xl mb-8">
          The Vesuvius Challenge was launched in March 2023 to bring the world
          together to read the Herculaneum scrolls. Along with smaller
          progress prizes, a Grand Prize was issued for the first team to
          recover 4 passages of 140 characters from a Herculaneum scroll.
        </div>
        <div className="max-w-3xl mb-8">
          Following a year of remarkable progress, the prize was claimed. After 275
          years, the ancient puzzle of the Herculaneum Papyri has been solved.
          But the quest to uncover the secrets of the scrolls is just beginning.
        </div>
        <div className="flex overflow-hidden rounded-lg md:mb-8 mb-4 h-96 relative bg-black">
          <img
            src="/img/landing/scroll-full-min.jpg"
            className="pan-horizontal max-w-none"
          />
        </div>
        {/* <figure className="md:w-[26%] w-[46%] sepia-[.4] mb-0">
            <img
              src="/img/landing/fragment-zoomed.jpg"
              className="h-full object-cover w-full"
            />
          </figure>
          <figure className="w-[40.5%] sepia-[.8] mb-0 md:block hidden">
            <video
              autoPlay
              playsInline
              loop
              muted
              className="w-[100%] h-full object-cover"
              poster="/img/landing/model-input3.jpg"
            >
              <source src="/img/landing/model-input3.webm" type="video/webm" />
              <source src="/img/landing/model-input3.mp4" type="video/mp4" />
            </video>
          </figure>
          <figure className="md:w-[33.4%] w-[54%] sepia-[.4] mb-0">
            <video
              // autoPlay
              playsInline
              loop
              muted
              className="w-[100%] h-full object-cover"
              poster="/img/landing/fragment-training2.jpg"
              ref={xrayVideo}
            >
              <source
                src="/img/landing/fragment-training2.webm"
                type="video/webm"
              />
              <source
                src="/img/landing/fragment-training2.mp4"
                type="video/mp4"
              />
            </video>
          </figure> */}
        {/* <div className="max-w-3xl mb-8">
          After 275 years, the ancient puzzle of the Herculaneum Papyri has been
          reduced to a software problem – one that you can help solve!
        </div> */}
      </>
    ),
    background: "/img/landing/story5.png",
  },
];

const prizes = [
  {
    title: "Grand Prize",
    prizeMoney: "$850,000",
    description: "First team to read a scroll by December 31st 2023",
    requirement: "Success requires that the Review Team can:",
    winnersLabel: "4 Winning Teams",
    winners: [
      {
        name: "Youssef Nader",
        image: "/img/landing/youssef.jpg",
      },
      {
        name: "Luke Farritor",
        image: "/img/landing/luke.jpg",
      },
      {
        name: "Julian Schilliger",
        image: "/img/landing/julian.jpg",
      },
    ],
    bannerImage: "/img/landing/grand-prize-preview.png",
    href: "/grandprize",
  },
  {
    title: "First Letters & First Ink",
    prizeMoney: "$60,000",
    description: "Detect 10 letters in a 4 cm² area in a scroll",
    requirement: "",
    winners: [
      {
        name: "Luke Farritor",
        image: "/img/landing/luke.jpg",
      },
      {
        name: "Youssef Nader",
        image: "/img/landing/youssef.jpg",
      },
      {
        name: "Casey Handmer",
        image: "/img/landing/casey.jpg",
      },
    ],
    bannerImage: "/img/landing/first-letters.png",
    href: "/firstletters",
  },
  {
    title: "Ink Detection Prizes",
    prizeMoney: "$112,000",
    description: "Detect 10 letters in a 4 cm² area in a scroll",
    requirement: "",
    winnersLabel: "16 Winners",
    winners: [
      {
        name: "Yannick Kirchoff",
        image: "/img/landing/yannick.jpg",
      },
      {
        name: "tattaka",
        image: "/img/landing/tattaka.jpg",
      },
      {
        name: "Ryan Chesler",
        image: "/img/landing/ryan.jpg",
      },
      {
        name: "Felix Yu",
        image: "/img/landing/felix.jpg",
      },
    ],
    href: "/winners",
  },
  {
    title: "Segmentation Prizes",
    prizeMoney: "$90,000",
    description: "Detect 10 letters in a 4 cm² area in a scroll",
    requirement: "",
    winnersLabel: "12 Winners",
    winners: [
      {
        name: "Ahron Wayne",
        image: "/img/landing/ahron.jpg",
      },
      {
        name: "Julian Schilliger",
        image: "/img/landing/julian.jpg",
      },
      {
        name: "Santiago Pelufo",
        image: "/img/landing/santiago.jpg",
      },
      {
        name: "Yao Hsiao",
        image: "/img/landing/yao.jpg",
      },
    ],
    won: true,
    href: "/winners",
  },
  {
    title: "Open Source Prizes",
    prizeMoney: "$47,000",
    description: "Detect 10 letters in a 4 cm² area in a scroll",
    requirement: "",
    winnersLabel: "18 Winners",
    winners: [
      // {
      //   name: "Philip Algaier",
      //   image: "https://pbs.twimg.com/profile_images/460039964365836288/n6b-1m3K_400x400.jpeg",
      // },
      // {
      //   name: "Chuck",
      //   image: "https://avatars.githubusercontent.com/u/133787404?v=4",
      // },
      // {
      //   name: "Sean Johnsson",
      //   image: "https://avatars.githubusercontent.com/u/120566210?v=4",
      // },
      {
        name: "Giorgio Angelotti",
        image: "/img/landing/giorgio.jpg",
      },
      {
        name: "Yao Hsiao",
        image: "/img/landing/yao.jpg",
      },
      {
        name: "Brett Olsen",
        image: "/img/landing/brett.jpg",
      },
      // {
      //   name: "Dalufishe",
      //   image: "https://avatars.githubusercontent.com/u/118270401?v=4",
      // },
      // {
      //   name: "Santiago Pelufo",
      //   image: "https://avatars.githubusercontent.com/u/1312203?v=4",
      // },
      {
        name: "Moshe Levy",
        image: "/img/landing/moshe.jpg",
      },
    ],
    won: true,
    href: "/winners",
  },
  {
    title: "2024 Grand Prize",
    prizeMoney: "$100,000",
    description: "Detect 10 letters in a 4 cm² area in a scroll",
    requirement: "",
    href: "2024_prizes",
  },
  {
    title: "Progress Prize 1",
    prizeMoney: "$25,000",
    description: "Detect 10 letters in a 4 cm² area in a scroll",
    requirement: "",
    href: "2024_prizes",
  },
  {
    title: "Progress Prize 2",
    prizeMoney: "$25,000",
    description: "Detect 10 letters in a 4 cm² area in a scroll",
    requirement: "",
    href: "",
    tba: true,
  },
];

const creators = [
  {
    name: "Nat Friedman",
    image: "/img/landing/nat.jpg",
    href: "https://nat.org/",
  },
  {
    name: "Daniel Gross",
    image: "/img/landing/daniel.jpg",
    href: "https://dcgross.com/",
  },
  {
    name: "Dr. Brent Seales",
    image: "/img/landing/brent.jpg",
    href: "https://educelab.engr.uky.edu/w-brent-seales",
  },
];

const sponsors = [
  {
    name: "Alex Gerko",
    amount: 450000,
    href: "https://www.xtxmarkets.com/",
    image: "/img/landing/gerko.jpg",
  },
  {
    name: "Joseph Jacks",
    amount: 250000,
    href: "https://twitter.com/JosephJacks_",
    image: "/img/landing/Joseph Jacks.jpg",
  },
  {
    name: "Nat Friedman",
    amount: 225000,
    href: "https://nat.org/",
    image: "/img/landing/nat.jpg",
  },
  {
    name: "Daniel Gross",
    amount: 225000,
    href: "https://dcgross.com/",
    image: "/img/landing/daniel.jpg",
  },
  {
    name: "Matt Mullenweg",
    amount: 150000,
    href: "https://ma.tt/",
    image: "/img/landing/Matt_Mullenweg.jpg",
  },
  {
    name: "John & Patrick Collison",
    amount: 125000,
    href: "https://stripe.com/",
    image: ["/img/landing/collison1.jpg", "/img/landing/collison2.jpg"],
  },
  {
    name: "Bastian Lehmann",
    amount: 75000,
    href: "https://twitter.com/Basti",
    image: "/img/landing/Bastian Lehmann.jpg",
  },
  {
    name: "Tobi Lutke",
    amount: 50000,
    href: "https://twitter.com/tobi",
    image: "/img/landing/Tobi Lutke.jpg",
  },
  {
    name: "Guillermo Rauch",
    amount: 50000,
    href: "https://rauchg.com/",
    image: "/img/landing/Guillermo Rauch.jpg",
  },
  {
    name: "Arthur Breitman",
    amount: 50000,
    href: "https://ex.rs/",
    image: "/img/landing/Arthur Breitman.jpg",
  },
  {
    name: "Matt Huang",
    amount: 50000,
    href: "https://twitter.com/matthuang",
    image: "/img/landing/Matt Huang.jpg",
  },
  {
    name: "Julia DeWahl & Dan Romero",
    amount: 50000,
    href: "https://twitter.com/natfriedman/status/1637959778558439425",
    image: [
      "/img/landing/Julia DeWahl.jpg",
      "/img/landing/Dan Romero.png",
    ],
  },
  {
    name: "Anonymous",
    amount: 50000,
    href: "https://www.youtube.com/watch?v=JqrJ4wGid4Y",
    image: "/img/landing/mystery.jpg",
  },
  {
    name: "Aaron Levie",
    amount: 25000,
    href: "https://twitter.com/levie",
    image: "/img/landing/Aaron Levie.jpg",
  },
  {
    name: "Akshay Kothari",
    amount: 25000,
    href: "https://twitter.com/akothari",
    image: "/img/landing/Akshay Kothari.jpg",
  },
  {
    name: "Anjney Midha",
    amount: 25000,
    href: "https://twitter.com/AnjneyMidha",
    image: "/img/landing/Anjney Midha.jpg",
  },
  {
    name: "Mark Cummins",
    amount: 25000,
    href: "https://twitter.com/mark_cummins",
    image: "/img/landing/Mark Cummins.jpg",
  },
  {
    name: "Jamie Cox & Gary Wu",
    amount: 15000,
    href: "https://www.fluidstack.io/",
    image: ["/img/landing/Jamie Cox.jpg", "/img/landing/Gary Wu.jpg"],
  },
  {
    name: "Mike Mignano",
    amount: 15000,
    href: "https://mignano.co/",
    image: "/img/landing/Mike Mignano.jpg",
  },
  {
    name: "Ivan Zhao",
    amount: 10000,
    href: "https://twitter.com/ivanhzhao",
    image: "/img/landing/Ivan Zhao.jpg",
  },
  {
    name: "Stephanie Sher",
    amount: 10000,
    href: "https://twitter.com/stephxsher",
    image: "/img/landing/Stephanie Sher.jpg",
  },
  {
    name: "Brandon Reeves",
    amount: 10000,
    href: "https://www.luxcapital.com/people/brandon-reeves",
    image: "/img/landing/Brandon Reeves.jpg",
  },
  {
    name: "Raymond Russell",
    amount: 10000,
    href: "https://twitter.com/raymondopolis",
    image: "/img/landing/Raymond Russell.jpg",
  },
  {
    name: "Vignan Velivela",
    amount: 10000,
    href: "https://vignanv.com/",
    image: "/img/landing/Vignan Velivela.jpg",
  },
  {
    name: "Brandon Silverman",
    amount: 10000,
    href: "https://twitter.com/brandonsilverm",
    image: "/img/landing/Brandon Silverman.jpg",
  },
  {
    name: "Katsuya Noguchi",
    amount: 10000,
    href: "https://twitter.com/kn",
    image: "/img/landing/Katsuya Noguchi.jpg",
  },
  {
    name: "Aravind Srinivas",
    amount: 10000,
    href: "https://twitter.com/AravSrinivas",
    image: "/img/landing/Aravind Srinivas.jpg",
  },
  {
    name: "Shariq Hashme",
    amount: 10000,
    href: "https://shar.iq/",
    image: "/img/landing/Shariq Hashme.jpg",
  },
  {
    name: "Sahil Chaudhary",
    amount: 10000,
    href: "https://twitter.com/csahil28",
    image: "/img/landing/Sahil Chaudhary.jpg",
  },
  {
    name: "Matias Nisenson",
    amount: 10000,
    href: "https://twitter.com/MatiasNisenson",
    image: "/img/landing/Matias Nisenson.jpg",
  },
  {
    name: "Amjad Masad",
    amount: 5000,
    href: "https://twitter.com/amasad",
    image: "/img/landing/Amjad Masad.jpg",
  },
  {
    name: "Conor White-Sullivan",
    amount: 5000,
    href: "https://twitter.com/Conaw",
    image: "/img/landing/Conor White-Sullivan.jpg",
  },
];

const team = {
  challenge: [
    {
      name: "Nat Friedman",
      title: "Instigator & Founding Sponsor",
      href: "https://nat.org/",
    },
    {
      name: "Daniel Gross",
      title: "Founding Sponsor",
      href: "https://dcgross.com/",
    },
    {
      name: "Dr. Stephen Parsons",
      title: "Project Lead",
      href: "https://www2.cs.uky.edu/dri/stephen-parsons/",
    },
    {
      name: "Ben Kyles",
      title: "Segmentation Team Lead",
      href: "https://twitter.com/ben_kyles",
    },
    {
      name: "Dr. David Josey",
      title: "Segmentation Team Member",
      href: "https://www.linkedin.com/in/davidsjosey/",
    },
    {
      name: "Konrad Rosenberg",
      title: "Segmentation Team Member",
      href: "https://www.linkedin.com/in/konradrosenberg/",
    },
    {
      name: "Julian Schilliger",
      title: "Software Engineer",
      href: "https://www.linkedin.com/in/julian-schilliger-963b21294/",
    },
    {
      name: "JP Posma",
      title: "Technical Advisor, former Project Lead",
      href: "https://janpaulposma.nl/",
    },
    {
      name: "Daniel Havíř",
      title: "Machine Learning Advisor",
      href: "https://danielhavir.com/",
    },
    {
      name: "Ian Janicki",
      title: "Design Advisor",
      href: "https://ianjanicki.com/",
    },
    {
      name: "Chris Frangione",
      title: "Prize Advisor",
      href: "https://www.linkedin.com/in/chrisfrangione/",
    },
    {
      name: "Dr. Garrett Ryan",
      title: "Classics Advisor",
      href: "https://toldinstone.com/",
    },
    {
      name: "Dejan Gotić",
      title: "3d Animator",
      href: "https://www.instagram.com/dejangotic_constructology/",
    },
    {
      name: "Jonny Hyman",
      title: "2d Animator",
      href: "https://jonnyhyman.com/",
    },
  ],
  educe: [
    {
      name: "Dr. Brent Seales",
      title: "Principal Investigator",
      href: "https://educelab.engr.uky.edu/w-brent-seales",
    },
    {
      name: "Seth Parker",
      title: "PhD candidate",
      href: "https://www2.cs.uky.edu/dri/seth-parker/",
    },
    {
      name: "Christy Chapman",
      title: "Research & Partnership Manager",
      href: "https://educelab.engr.uky.edu/christy-chapman",
    },
    {
      name: "Mami Hayashida",
      title: "Research Staff",
      href: "https://www.ccs.uky.edu/about-ccs/staff-directory/mami-hayashida/",
    },
    {
      name: "Dr. James Brusuelas",
      title: "Associate Professor of Classics",
      href: "https://mcl.as.uky.edu/users/jbr454",
    },
    {
      name: "Beth Lutin",
      title: "College Business Analyst",
      href: "https://www.engr.uky.edu/directory/lutin-elizabeth",
    },
    {
      name: "Dr. Roger Macfarlane",
      title: "Professor of Classical Studies",
      href: "https://hum.byu.edu/directory/roger-macfarlane",
    },
  ],
  papyrology: [
    {
      name: "Daniel Delattre",
      title: "Emeritus Research Director and Papyrologist, CNRS and IRHT",
      href: "https://www.irht.cnrs.fr/fr/annuaire/delattre-daniel",
    },
    {
      name: "Gianluca Del Mastro",
      title:
        "Professor of Papyrology, l’Università della Campania «L. Vanvitelli»",
      href: "https://www.facebook.com/GianlucaDelMastroSindaco",
    },
    {
      name: "Robert Fowler",
      title:
        "Fellow of the British Academy;  Professor Emeritus of Classics, Bristol University",
      href: "https://www.thebritishacademy.ac.uk/fellows/robert-fowler-FBA/",
    },
    {
      name: "Richard Janko",
      title:
        "Fellow of the American Academy of Arts and Sciences; Professor of Classics, University of Michigan",
      href: "https://lsa.umich.edu/classics/people/departmental-faculty/rjanko.html",
    },
    {
      name: "Federica Nicolardi",
      title: "Professor of Classics, University of Naples Federico II",
      href: "https://www.docenti.unina.it/federica.nicolardi",
    },
    {
      name: "Tobias Reinhardt",
      title:
        "Corpus Christi Professor of the Latin Language and Literature, Oxford",
      href: "https://www.classics.ox.ac.uk/people/professor-tobias-reinhardt",
    },
  ],
};

const partners = [
  {
    icon: "/img/landing/educe.svg",
    href: "https://educelab.engr.uky.edu/",
  },
  {
    icon: "/img/landing/institute.svg",
    href: "https://www.institutdefrance.fr/en/home/",
  },
  {
    icon: "/img/landing/diamond.svg",
    href: "https://www.diamond.ac.uk/",
  },
  {
    icon: "/img/landing/biblioteca.svg",
    href: "https://www.bnnonline.it/",
  },
  {
    icon: "/img/landing/getty.svg",
    href: "https://www.getty.edu/",
  },
  {
    icon: "/img/landing/kaggle.svg",
    href: "https://www.kaggle.com/",
  },
];

const educelabFunders = [
  {
    name: "The National Science Foundation",
    href: "https://www.nsf.gov/",
  },
  {
    name: "The National Endowment for the Humanities",
    href: "https://www.neh.gov/",
  },
  {
    name: "The Andrew W. Mellon Foundation",
    href: "https://www.mellon.org/",
  },
  {
    name: "The Digital Restoration Initiative",
    href: "https://www2.cs.uky.edu/dri/",
  },
  {
    name: "The Arts & Humanities Research Council",
    href: "https://www.ukri.org/councils/ahrc/",
  },
  {
    name: "The Lighthouse Beacon Foundation — Stanley and Karen Pigman",
    href: undefined,
  },
  {
    name: "John & Karen Maxwell",
    href: undefined,
  },
  {
    name: "Lee & Stacie Marksbury",
    href: undefined,
  },
];

const Story = ({ story, index }) => (
  <section
    id={`story-section-${index}`}
    className="mb-30 md:h-full h-auto"
    style={{
      opacity: 1,
      ...(index === 0 && {
        background:
          "linear-gradient(360deg, rgba(28, 26, 29, 0) 59.11%, #1C1A1D 99.36%)",
      }),
    }}
  >
    <div className="container mx-auto z-30 relative">
      <div className="py-10 md:py-20 max-w-4xl">
        <h1 className="text-3xl md:text-6xl font-black mb-2 leading-none tracking-tighter">
          <span
            style={{
              background:
                "radial-gradient(53.44% 245.78% at 13.64% 46.56%, #F5653F 0%, #D53A17 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            {story.date}
          </span>
          <br />
          {story.text}
        </h1>
        <div className="md:text-xl text-lg font-medium mb-8 text-[rgba(255,255,255,0.7)] leading-6 tracking-tight whitespace-pre-line">
          {story.description}
        </div>
      </div>
    </div>
  </section>
);

const StoryBackground = ({ story, index }) => (
  <div
    className="fixed inset-0 z-0"
    id={`story-image-${index}`}
    style={{
      background: `url(${story.background})`,
      backgroundSize: "60%",
      backgroundPosition: "center right",
      backgroundRepeat: "no-repeat",
      opacity: 0,
    }}
  />
);

const Winners = ({ winners, large }) => (
  <div className={`flex ml-3 ${large ? "h-10" : "h-8"}`}>
    {winners.map((winner, i) => (
      <React.Fragment key={i}>
        <div className="-ml-3" style={{ zIndex: (100-i)}}>
          <img
            src={winner.image}
            className={`${large ? "h-10" : "h-8"} rounded-full border-2 ${
              large ? "border-[#272222]" : "border-[#1C1A1D]"
            } border-solid`}
          />
        </div>
      </React.Fragment>
    ))}
  </div>
);

const Prize = ({ prize }) => (
  <a
    href={!prize.tba ? prize.href : "#"}
    className={`text-white hover:text-white hover:no-underline group ${
      prize.tba ? "opacity-40" : ""
    }`}
  >
    <div
      className={`flex flex-col bg-[#131114bf] border border-solid h-full ${
        prize.bannerImage ? "" : "md:p-6 p-4"
      } rounded-2xl relative ${
        prize.winners ? `border-[#F5653F40]` : `border-[#FFFFFF40]`
      }  hover:-translate-y-2 transition-transform ease-in-out duration-300 overflow-hidden`}
      style={{
        boxShadow:
          "0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.09), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.13), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.16), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.19), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.23), 0px 100px 80px 0px rgba(0, 0, 0, 0.32)",
      }}
    >
      <div className={`${!prize.bannerImage ? "" : "md:p-6 p-4"}`}>
        {prize.winners && (
          <p
            className={`font-bold uppercase text-[var(--ifm-color-primary)] ${
              prize.bannerImage ? "!mb-2 text-sm" : "!mb-0 text-xs"
            }`}
          >
            won
          </p>
        )}
        <h2
          className={`${
            prize.bannerImage ? "text-2xl lg:text-4xl " : "text-xl md:text-2xl "
          } font-black !mb-0 !leading-none tracking-tighter !my-0`}
        >
          {prize.title} {prize.tba && <span className="opacity-60">TBA</span>}
        </h2>
        <h3
          className={`${
            prize.bannerImage ? "text-xl lg:text-3xl " : "text-lg md:text-2xl"
          } font-black !leading-none tracking-tighter !mb-0`}
          style={{
            background:
              "radial-gradient(53.44% 245.78% at 13.64% 46.56%, #F5653F 0%, #D53A17 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          {prize.prizeMoney}
        </h3>
        {(!prize.winners || prize.bannerImage) && !prize.tba && (
          <div className="pt-2">
            <AnimatedArrow
              text={prizes.winners ? "Read the announcement" : "Learn more"}
            />
          </div>
        )}
      </div>
      {prize.winners && !prize.bannerImage && (
        <div className="flex gap-2 items-center pt-2">
          <Winners
            winners={prize.winners}
            winnersLabel={prize.winnersLabel}
            large={prize.bannerImage ? true : false}
          />
          <h3 className="!mb-0 opacity-60">
            {prize.winnersLabel
              ? prize.winnersLabel
              : `${prize.winners.length} Winners`}
          </h3>
        </div>
      )}
      {/* {!prize.winners && (
        <>
          <div className="flex flex-col gap-2">
            <p className="md:text-md text-sm uppercase font-bold opacity-40 mb-1">
              {prize.requirement}
            </p>
          </div>
           <p className="flex-1 md:text-xl text-lg font-medium opacity-60 leading-none tracking-tight mb-16">
          {prize.description}
        </p>
        </>
      )} */}
      {prize.bannerImage && (
        <div className="bg-[#232222] h-full flex flex-col justify-between">
          <div className="flex gap-2 items-center md:px-6 px-4 py-3">
            <Winners
              winners={prize.winners}
              large={prize.bannerImage ? true : false}
            />
            <h3 className="!mb-0 opacity-60">
              {prize.winnersLabel
                ? prize.winnersLabel
                : `${prize.winners.length} Winners`}
            </h3>
          </div>
          <img
            src={prize.bannerImage}
            className={`block max-h-16 ${
              prize.href === "/firstletters"
                ? "object-contain object-right -mt-6"
                : "object-cover"
            }`}
          />
          {/* <div className="">
          </div> */}
        </div>
      )}
    </div>
  </a>
);

const Creator = ({ creator }) => (
  <a
    href={creator.href}
    className="text-white hover:text-white hover:no-underline"
  >
    <div className="flex items-center gap-3 rounded-2xl bg-[#131114bf] border border-solid h-full md:p-6 p-4 border-[#FFFFFF40] hover:bg-[#292525d6] transition-color ease-in-out duration-300">
      <img
        src={creator.image}
        className="md:w-20 md:h-20 w-12 h-12 rounded-full saturate-0"
      />
      <h2 className="text-2xl md:text-4xl font-black !mb-0 !leading-[90%] tracking-tighter !my-0">
        {creator.name}
      </h2>
    </div>
  </a>
);

const Sponsor = ({ sponsor }) => {
  let image = "";
  let name = "";
  let amount = "";
  let padding = "";
  let radius = "";
  let level = "";
  let multipleScale = "";
  if (sponsor.amount >= 200000) {
    image = "w-16 h-16";
    name = "text-xl md:text-2xl";
    amount = "text-lg md:text-xl";
    padding = "md:p-3 p-2";
    radius = "rounded-2xl";
    level = "text-[#E8A42F]";
    multipleScale = "xl:scale-[0.65]";
  } else if (sponsor.amount >= 50000 && sponsor.amount < 200000) {
    image = "w-12 h-12";
    name = "text-lg md:text-xl";
    amount = "text-sm md:text-md";
    padding = "p-2";
    radius = "rounded-xl";
    level = "text-[#8658ED]";
    multipleScale = "xl:scale-[0.65]";
  } else {
    image = "w-8 h-8";
    name = "text-sm md:text-md";
    amount = "text-xs";
    padding = "md:p-2 p-1";
    radius = "rounded-lg";
    level = "text-[#F5653F]";
    multipleScale = "xl:scale-[0.85]";
  }

  return (
    <a
      href={sponsor.href}
      className={`text-white hover:text-white hover:no-underline`}
      target="_blank"
    >
      <div
        className={`${padding} ${radius} flex items-center gap-2 bg-[#131114bf] border border-solid h-full border-[#FFFFFF40] hover:bg-[#292525d6] transition-color ease-in-out duration-300`}
      >
        {!sponsor.image ? (
          <></>
        ) : typeof sponsor.image === "object" ? (
          <div className={`flex ${multipleScale} origin-left`}>
            {sponsor.image.map((img, i) => (
              <img
                key={i}
                src={img}
                className={`${image} ${
                  i === 1 ? "-ml-3" : ""
                } rounded-full saturate-0 border-2 border-solid border-[#272222]`}
                style={{ zIndex: (100-i) }}
              />
            ))}
          </div>
        ) : (
          <img
            src={sponsor.image}
            className={`${image} rounded-full saturate-0`}
          />
        )}
        <div className="flex flex-col z-[1000]">
          <h2
            className={`${name} font-black !mb-0 !leading-[90%] tracking-tighter !my-0`}
          >
            {sponsor.name}
          </h2>
          <h3
            className={`${amount} ${level} font-bold !leading-none tracking-tighter !mb-0`}
          >
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumSignificantDigits: 3,
            }).format(sponsor.amount)}
          </h3>
        </div>
      </div>
    </a>
  );
};

const Link = ({ link }) => (
  <div>
    <a
      className=" text-white hover:no-underline inline-block fit-content"
      href={link.href}
    >
      <h3 className="mb-0 text-xl font-medium">
        {link.name}&nbsp;&nbsp;
        <span className="opacity-70">{link.title}</span>
      </h3>
    </a>
  </div>
);

const crossfadeHeight = 150;

const getBounds = (div) => div.getBoundingClientRect();
const getOpacity = ({ y, height }) =>
  Math.max(0, Math.min(1, (1 - Math.abs(y) / height) * 1.5));
const getBackgroundOpacity = ({ y, height }) => {
  if (y > -height - crossfadeHeight && y < crossfadeHeight) {
    // top transition
    if (y < crossfadeHeight && y > -crossfadeHeight) {
      return (1 - y / crossfadeHeight) / 2;
      // bottom transition
    } else if (y < -height + crossfadeHeight && y > -height - crossfadeHeight) {
      return (y + height + crossfadeHeight) / (crossfadeHeight * 2);
    } else {
      return 1;
    }
  } else {
    return 0;
  }
};

const autoPlay = (ref) =>
  ref &&
  ref.current
    .play()
    .then(() => {})
    .catch((err) => {
      // Video couldn't play, low power play button showing.
    });

// const RevealOnScroll = ({ children, delay }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const domRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => setIsVisible(entry.isIntersecting));
//       },
//       {
//         threshold: 0.1, // Adjust this value based on your needs
//       }
//     );

//     const currentElement = domRef.current;
//     if (currentElement) {
//       observer.observe(currentElement);
//     }

//     return () => {
//       if (currentElement) {
//         observer.unobserve(currentElement);
//       }
//     };
//   }, []);

//   const delayClass = delay ? `delay-${delay}` : "";
//   console.log(delayClass);
//   return (
//     <div
//       ref={domRef}
//       className={`transition ease-in duration-500 ${delayClass} ${
//         isVisible
//           ? "opacity-100 translate-y-0"
//           : "opacity-0 transform translate-y-3"
//       }`}
//     >
//       {children}
//     </div>
//   );
// };

// export default RevealOnScroll;

const AnimatedArrow = ({ text, button }) => (
  <div className={`flex ${button ? "" : "opacity-60"} text-sm`}>
    <div className="hidden sm:block uppercase font-bold tracking-wider mr-1 group-hover:mr-3 transition-all ease-in-out duration-300">
      {text}
    </div>
    <div className="block sm:hidden uppercase font-bold tracking-wider mr-1">
      {text}
    </div>
    <img
      src={
        button
          ? "/img/landing/arrow-right.svg"
          : "/img/landing/arrow-right-white.svg"
      }
    />
  </div>
);

export function Landing() {
  const heroVideo = useRef(null);
  const unrollVideo = useRef(null);
  // const mlVideo = useRef(null);
  // const xrayVideo = useRef(null);

  useEffect(() => {
    if (!globalThis.window) {
      return;
    }
    const storyDivs = Array.from(
      document.querySelectorAll("[id^='story-section']")
    );
    const imageDivs = Array.from(
      document.querySelectorAll("[id^='story-image']")
    );
    const onScroll = () => {
      const storyBounds = storyDivs.map((div) => getBounds(div));
      const backgroundOpacities = storyBounds.map((bounds) =>
        getBackgroundOpacity({
          y: bounds.y - window.innerHeight / 2,
          height: bounds.height,
        })
      );
      imageDivs.forEach(
        (story, index) =>
          (story.style.opacity = backgroundOpacities[index] * 0.4)
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    autoPlay(heroVideo);
    autoPlay(unrollVideo);
    // autoPlay(mlVideo);
    // autoPlay(xrayVideo);
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0 md:block hidden">
        {stories({ unrollVideo }).map((s, index) => (
          <StoryBackground story={s} key={s.date} index={index} />
        ))}
      </div>
      <div className="text-white ">
        <div className="z-20 relative">
          {/* Hero */}
          <section>
            <div className="container mx-auto z-20 relative mb-12">
              <div className="md:pt-20 pt-8 mb-4">
                <h1 className="text-4xl md:text-7xl font-black !mb-4 tracking-tighter mix-blend-exclusion !leading-[90%] transition-opacity">
                  <div className="max-w-3xl">Resurrect an ancient library from the ashes of a volcano.</div>
                  <span
                    className="text-3xl md:text-6xl drop-shadow-lg"
                    style={{
                      background:
                        "radial-gradient(53.44% 245.78% at 13.64% 46.56%, #F5653F 0%, #D53A17 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                  >
                    <span className="whitespace-nowrap">
                      Win $100,000.&nbsp;
                    </span>&nbsp;
                    <span className="whitespace-nowrap">Make History.&nbsp;</span>
                  </span>
                </h1>
                <p className="max-w-lg md:text-xl text-lg font-medium mb-8 !leading-[110%] tracking-tight">
                  <span className=" opacity-80 md:opacity-60">
                    The Vesuvius Challenge is a machine learning and computer
                    vision competition that in{" "}
                  </span>
                  <span className="opacity-100">
                    2023 cracked the riddle of the Herculanum Papyri & awarded
                    over $1,000,000 in prizes.
                  </span>
                  <br /> <br />
                  <span className=" opacity-80 md:opacity-60">
                    2024's challenge is to go from reading a few passages to entire scrolls.
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-4 items-stretch max-w-7xl">
                <a
                  className="cursor-pointer group hover:no-underline hover:-translate-y-2 transition-transform ease-in-out duration-300"
                  href="/grandprize"
                >
                  <div
                    className="relative rounded-2xl border-solid text-white border border-[#FFFFFF20] bg-[#131114bf] flex flex-col overflow-hidden"
                    style={{
                      boxShadow:
                        "0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.09), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.13), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.16), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.19), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.23), 0px 100px 80px 0px rgba(0, 0, 0, 0.32)",
                    }}
                  >
                    <div className="flex flex-col py-4 md:py-5 px-5 md:px-7 ">
                      <h3 className="text-xl md:text-3xl text-white mt-0 mb-1 tracking-tighter !leading-[90%] flex-grow">
                        2023 Grand Prize Won
                      </h3>
                      <AnimatedArrow text="Read the announcement" />
                    </div>
                    <img
                      className=""
                      src="/img/landing/grand-prize-preview.png"
                    />
                    <Marquee
                      autoFill
                      className="py-1 md:py-2 text-xs md:text-sm font-bold text-[#E34E29] bg-[#68140160]"
                    >
                      BREAKING&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;THE SCROLLS
                      HAVE BEEN READ&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
                    </Marquee>
                  </div>
                </a>
                <a
                  className="cursor-pointer group hover:no-underline hover:-translate-y-2 transition-transform ease-in-out duration-300"
                  href="/master_plan"
                >
                  <div
                    className="relative rounded-2xl border-solid text-white border border-[#FFFFFF20] bg-[#131114bf] flex flex-col overflow-hidden"
                    style={{
                      height: "100%",
                      boxShadow:
                        "0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.09), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.13), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.16), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.19), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.23), 0px 100px 80px 0px rgba(0, 0, 0, 0.32)",
                    }}
                  >
                    <div className="flex flex-col py-4 md:py-5 px-5 md:px-7 z-10">
                      <h3 className="text-xl md:text-3xl text-white mt-0 mb-1 tracking-tighter !leading-[90%] flex-grow">
                        Read the Master Plan
                      </h3>
                      <AnimatedArrow text="Read the post" />
                    </div>
                    <img
                      className="absolute top-[50px] right-0 max-w-[190px]"
                      src="/img/landing/fragment.png"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div
              className="absolute inset-0 h-[75vh] z-10"
              style={{
                background:
                  "linear-gradient(90deg, rgba(28, 26, 29, 0.8) 20%, rgba(28, 26, 29, 0) 80%),linear-gradient(0deg, #1C1A1D 1%, rgba(28, 26, 29, 0) 30%)",
              }}
            />
            <div className="absolute inset-0 h-[75vh] z-0">
              <video
                // autoPlay
                playsInline
                loop
                muted
                poster="/img/landing/vesuvius.jpg"
                className="w-full h-full object-cover object-[45%]"
                ref={heroVideo}
              >
                <source
                  src="img/landing/vesuvius-flipped-min.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </section>
          {/* Stories */}
          {stories({ unrollVideo }).map((s, index) => (
            <Story story={s} key={s.date} index={index} />
          ))}
          {/* Prize */}
          <section className="mb-24 md:mb-36">
            <div className="container mx-auto z-30 relative">
              <div className="pt-10 md:pt-20 max-w-3xl">
                <h1 className="text-4xl md:text-7xl font-black !mb-2 leading-none tracking-tighter">
                  The Vesuvius Challenge
                </h1>
                <p className="max-w-xl md:text-xl text-lg font-medium !mb-8 md:w-full w-4/5  !leading-[110%] tracking-tight opacity-60">
                  2023 was a milestone year that gave us unprecedented access to
                  scrolls that have not been read in two millennia. Incredible
                  teams of engineers helped us unlock these secrets. Learn more
                  about their accomplishments.
                </p>
              </div>
              <div className="flex flex-col gap-3 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl">
                  {prizes
                    .filter((p) => p.winners && p.bannerImage)
                    .map((p, i) => (
                      <Prize prize={p} key={i} />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 max-w-6xl">
                  {prizes
                    .filter((p) => p.winners && !p.bannerImage)
                    .map((p, i) => (
                      <Prize prize={p} key={i} />
                    ))}
                </div>
              </div>
              <div className="flex flex-col py-8 md:py-16 ">
                <h1 className="text-3xl md:text-6xl font-black !mb-2 leading-none tracking-tighter">
                  <span
                    className="font-black leading-none tracking-tighter mb-0"
                    style={{
                      background:
                        "radial-gradient(53.44% 245.78% at 13.64% 46.56%, #F5653F 0%, #D53A17 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                  >
                    2024
                  </span>
                  <br />
                  The Challenge Continues
                </h1>
                <p className="max-w-xl md:text-xl text-lg font-medium !mb-8 md:w-full w-4/5  !leading-[110%] tracking-tight opacity-60">
                  Due to the overwhelming success from the past year, the
                  Vesuvius Challenge moves onto its next stage of reading 90%
                  of all four scrolls. Read more about the prizes below, and on how
                  they contribute towards the <a href="master_plan">The Master Plan</a>.
                </p>
                <div className="flex flex-col gap-3 max-w-7xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 max-w-6xl">
                    {prizes
                      .filter((p) => !p.winners)
                      .map((p, i) => (
                        <Prize prize={p} key={i} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Team */}
          <section>
            <div className="container mx-auto z-30 relative">
              <div className="mb-6 md:mb-24 max-w-6xl">
                <h1 className="mb-16 text-4xl md:text-7xl font-black leading-none tracking-tighter ">
                  Created By
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-2">
                  {creators.map((c, i) => (
                    <Creator creator={c} key={i} />
                  ))}
                </div>
              </div>
              <div className="mb-6 md:mb-10 max-w-6xl">
                <h1 className="mb-16 text-4xl md:text-7xl font-black leading-none tracking-tighter " name="sponsors" id="sponsors">
                  Sponsors
                </h1>
                <h2 className="text-3xl md:text-5xl text-[#E8A42F]">Caesars</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 auto-rows-fr  gap-2 pb-8">
                  {sponsors
                    .filter((s) => s.amount >= 200000)
                    .map((s, i) => (
                      <Sponsor sponsor={s} key={i} />
                    ))}
                </div>
                <h2 className="text-3xl md:text-5xl text-[#8658ED]">
                  Senators
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-fr gap-2 pb-8">
                  {sponsors
                    .filter((s) => s.amount >= 50000 && s.amount < 200000)
                    .map((s, i) => (
                      <Sponsor sponsor={s} key={i} />
                    ))}
                </div>
                <h2 className="text-3xl md:text-5xl text-[#F5653F]">
                  Citizens
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-2">
                  {sponsors
                    .filter((s) => s.amount < 50000)
                    .map((s, i) => (
                      <Sponsor sponsor={s} key={i} />
                    ))}
                </div>
                <div className="flex justify-center py-8">
                  <a href="mailto:nat@nat.org">
                    <button
                      className="px-4 py-3 uppercase font-bold rounded-full border-[#F5653F] border-solid text-[#F5653F] bg-transparent cursor-pointer group
                    "
                    >
                      <AnimatedArrow text="Become a sponsor" button />
                    </button>
                  </a>
                </div>
              </div>
              <div className="py-10 md:py-20">
                <h1 className="hidden md:block text-4xl md:text-7xl font-black leading-none tracking-tighter ">
                  Team
                </h1>
                <div className="flex flex-wrap">
                  <div className="flex-1 flex-col lg:gap-0 gap-2 mt-8 min-w-[100%] md:min-w-[50%] pr-4 lg:pr-12">
                    <h3 className="text-3xl font-black tracking-tighter">
                      Vesuvius Challenge Team
                    </h3>
                    {team.challenge.map((t, i) => (
                      <Link link={t} key={i} />
                    ))}
                  </div>
                  <div className="flex-1 flex-col lg:gap-0 gap-2 mt-8 min-w-[100%] md:min-w-[50%] pr-4 lg:pr-12">
                    <h3 className="text-3xl font-black tracking-tighter">
                      EduceLab Team
                    </h3>
                    {team.educe.map((t, i) => (
                      <Link link={t} key={i} />
                    ))}
                  </div>
                  <div className="flex-1 flex-col lg:gap-0 gap-2 mt-8 min-w-[100%] md:min-w-[50%] pr-4 lg:pr-12">
                    <h3 className="text-3xl font-black tracking-tighter text=[--ifm-color-primary]">
                      Papyrology Team
                    </h3>
                    {team.papyrology.map((t, i) => (
                      <Link link={t} key={i} />
                    ))}
                  </div>
                </div>
                &nbsp;
                <br />
                <Link
                  link={{
                    name: "Villa dei Papiri art by Rocío Espín",
                    href: "https://www.artstation.com/rocioespin",
                  }}
                />
              </div>
              <div className="py-10 md:py-20">
                <h1 className="mb-16 text-4xl md:text-7xl font-black leading-none tracking-tighter  mix-blend-exclusion">
                  Partners
                </h1>
                <div className="flex lg:flex-row flex-col lg:gap-12 gap-6 lg:items-center items-start">
                  {partners.map((p, i) => (
                    <a key={i} href={p.href}>
                      <img src={p.icon} className={`h-${i === 1 ? 28 : 12}`} />
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap">
                  <div className="flex-1 flex-col lg:gap-0 gap-2 mt-8 min-w-[100%] md:min-w-[50%] pr-4 lg:pr-12">
                    <h3
                      className="text-3xl font-black tracking-tighter"
                      id="educelab-funders"
                    >
                      EduceLab funders
                    </h3>
                    {educelabFunders.map((t, i) => (
                      <Link link={t} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
