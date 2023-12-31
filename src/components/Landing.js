import React, { useEffect, useRef, useState } from "react";

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
        <div className="mb-8 max-w-3xl">
          In Herculaneum, twenty meters of hot mud and ash bury an enormous
          villa once owned by the father-in-law of Julius Caesar. Inside, there
          is a vast library of papyrus scrolls.
        </div>
        {inlineImage("/img/landing/rocio-espin-pinar-villa-papyri-small.jpg")}
        <div className="mb-8 max-w-3xl">
          The scrolls are carbonized by the heat of the volcanic debris. But
          they are also preserved. For centuries, as virtually every ancient
          text exposed to the air decays and disappears, the library of the
          Villa of the Papyri waits underground, intact.
        </div>
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
          A few are painstakingly unrolled by an Italian monk over several
          decades, and they are found to contain philosophical texts written in
          Greek. More than six hundred remain unopened and unreadable.
        </div>
        {inlineImage("/img/landing/scroll.jpg")}
        {inlineImage("/img/landing/herc-materials.jpg")}
        <div className="max-w-3xl mb-8">
          What's more, excavations were never completed, and many historians
          believe that thousands more scrolls remain underground.
        </div>

        <div className="max-w-3xl mb-8">
          Imagine the secrets of Roman and Greek philosophy, science,
          literature, mathematics, poetry, and politics, which are locked away
          in these lumps of ash, waiting to be read!{" "}
        </div>
      </>
    ),
    background: "/img/landing/story2.png",
  },
  {
    date: "2015 AD",
    text: "Dr. Brent Seales pioneers virtual unwrapping.",
    description: (
      <>
        <div className="max-w-3xl mb-8">
          Using X-ray tomography and computer vision, a team led by Dr. Brent
          Seales at the University of Kentucky reads the En-Gedi scroll without
          opening it. Discovered in the Dead Sea region of Israel, the scroll is
          found to contain text from the book of Leviticus.
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
        <div className="max-w-3xl mb-8">
          This achievement shows that a carbonized scroll can be digitally
          unrolled and read without physically opening it. Virtual unwrapping
          has since emerged as a growing field with multiple successes.
        </div>
        <div className="max-w-3xl mb-8">
          But the Herculaneum Papyri prove more challenging: unlike the denser
          inks used in the En-Gedi scroll, the Herculaneum ink is carbon-based,
          affording no X-ray contrast against the underlying carbon-based
          papyrus.
        </div>
      </>
    ),
    background: "/img/landing/story3.png",
  },
  {
    date: "2019 AD",
    text: "Enter the particle accelerator.",
    description: (
      <>
        <div className="max-w-3xl mb-8">
          Determined to apply virtual unwrapping to the Herculaneum Papyri, Dr.
          Seales and his team set out to test a new idea. Under infrared light,
          some detached fragments of the papyri are readable, and it seems
          possible that these can be used as ground truth data for a machine
          learning model that could detect otherwise invisible ink from X-rays.
        </div>
        {inlineImage("/img/landing/brent1.webp")}
        <div className="max-w-3xl mb-8">
          To get X-rays at the highest possible resolution, the team uses a
          particle accelerator to scan two full scrolls and several fragments.
          At 3-8µm resolution, with 16 bits of density data per voxel, they
          believe machine learning models can pick up subtle surface patterns in
          the papyrus that indicate the presence of carbon-based ink.
        </div>
        <div className="bg-black p-3 rounded-lg sepia-[0.2] opacity-60">
          <video
            // autoPlay
            playsInline
            loop
            muted
            className="w-[100%]"
            poster="img/landing/anim2b_4.png"
            ref={mlVideo}
          >
            <source src="/img/landing/anim2b_4.webm" type="video/webm" />
            <source src="/img/landing/anim2b_4.mp4" type="video/mp4" />
          </video>
        </div>
      </>
    ),
    background: "/img/landing/story4.png",
  },
  {
    date: "Today",
    text: "You can solve this ancient puzzle.",
    description: (
      <>
        <div className="max-w-3xl mb-8">
          In early 2023 Dr. Seales’s lab achieves a breakthrough: their machine
          learning model successfully recognizes ink from the X-ray scans,
          demonstrating that it is possible to apply virtual unwrapping to the
          Herculaneum scrolls using the scans obtained in 2019, and even
          uncovering some characters in hidden layers of papyrus.
        </div>
        <div className="flex rounded-lg overflow-hidden md:mb-8 mb-4 h-96 translate-x-0">
          <figure className="md:w-[26%] w-[46%] sepia-[.4] mb-0">
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
          </figure>
        </div>
        <div className="max-w-3xl mb-8">
          After 275 years, the ancient puzzle of the Herculaneum Papyri has been
          reduced to a software problem – one that you can help solve!
        </div>
      </>
    ),
    background: "/img/landing/story5.png",
  },
];

const prizes = [
  {
    title: "Grand Prize",
    prizeMoney: "$700,000",
    description: "First team to read a scroll by December 31st 2023",
    requirement: "Success requires that the Review Team can:",
    won: false,
    qualifications: [
      "Read at least 4 separate passages of continuous and plausible text from the scrolls, each at least 140 characters long",
      "Qualifying submissions reviewed by team of developers and papyrologists for legitimacy and plausibility",
    ],
  },
  {
    title: "First Letters Prize",
    prizeMoney: "$50,000",
    description: "Detect 10 letters in a 4 cm² area in a scroll",
    requirement: "",
    won: true,
    qualifications: [
      "First team to find 10 legible letters in a 4 cm² area wins $40,000, second prize $10,000",
      "Also reviewed by developers and papyrologists",
    ],
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
      name: "JP Posma",
      title: "Project Lead",
      href: "https://janpaulposma.nl/",
    },
    {
      name: "Dr. Stephen Parsons",
      title: "Research Advisor",
      href: "https://www2.cs.uky.edu/dri/stephen-parsons/",
    },
    {
      name: "Daniel Havíř",
      title: "Machine Learning Advisor",
      href: "https://danielhavir.com/",
    },
    {
      name: "Ben Kyles",
      title: "Segmentation Team Lead",
      href: "https://twitter.com/ben_kyles",
    },
    {
      name: "David Josey",
      title: "Segmentation Team Member",
      href: "https://www.linkedin.com/in/davidsjosey/",
    },
    {
      name: "Konrad Rosenberg",
      title: "Segmentation Team Member",
      href: "https://www.linkedin.com/in/konradrosenberg/",
    },
    {
      name: "Chris Frangione",
      title: "Prize Advisor",
      href: "https://www.linkedin.com/in/chrisfrangione/",
    },
    {
      name: "Ian Janicki",
      title: "Design Advisor",
      href: "https://ianjanicki.com/",
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
      name: "Robert Fowler",
      title:
        "Fellow of the British Academy;  Professor Emeritus of Classics, Bristol University",
      href: "https://www.thebritishacademy.ac.uk/fellows/robert-fowler-FBA/",
    },
    {
      name: "Tobias Reinhardt",
      title:
        "Corpus Christi Professor of the Latin Language and Literature, Oxford",
      href: "https://www.classics.ox.ac.uk/people/professor-tobias-reinhardt",
    },
    {
      name: "Federica Nicolardi",
      title: "Professor of Classics, University of Naples Federico II",
      href: "https://www.docenti.unina.it/federica.nicolardi",
    },
    {
      name: "Gianluca Del Mastro",
      title:
        "Professor of Papyrology, l’Università della Campania «L. Vanvitelli»",
      href: "https://www.facebook.com/GianlucaDelMastroSindaco",
    },
    {
      name: "Daniel Delattre",
      title: "Emeritus Research Director and Papyrologist, CNRS and IRHT",
      href: "https://www.irht.cnrs.fr/fr/annuaire/delattre-daniel",
    },
    {
      name: "Richard Janko",
      title:
        "Fellow of the American Academy of Arts and Sciences; Professor of Classics, University of Michigan",
      href: "https://lsa.umich.edu/classics/people/departmental-faculty/rjanko.html",
    },
  ],
  more_sponsors: [
    {
      name: "Joseph Jacks",
      title: "$250,000",
      href: "https://twitter.com/JosephJacks_",
    },
    {
      name: "Alex Gerko",
      title: "$250,000",
      href: "https://twitter.com/AlexanderGerko",
    },
    {
      name: "Nat Friedman",
      title: "$225,000",
      href: "https://nat.org/",
    },
    {
      name: "Daniel Gross",
      title: "$225,000",
      href: "https://dcgross.com/",
    },
    {
      name: "John & Patrick Collison",
      title: "$125,000",
      href: "https://stripe.com/",
    },
    {
      name: "Matt Mullenweg",
      title: "$125,000",
      href: "https://ma.tt/",
    },
    {
      name: "Bastian Lehmann",
      title: "$75,000",
      href: "https://twitter.com/Basti",
    },
    {
      name: "Tobi Lutke",
      title: "$50,000",
      href: "https://twitter.com/tobi",
    },
    {
      name: "Guillermo Rauch",
      title: "$50,000",
      href: "https://rauchg.com/",
    },
    {
      name: "Arthur Breitman",
      title: "$50,000",
      href: "https://ex.rs/",
    },
    {
      name: "Matt Huang",
      title: "$50,000",
      href: "https://twitter.com/matthuang",
    },
    {
      name: "Julia DeWahl & Dan Romero",
      title: "$50,000",
      href: "https://twitter.com/natfriedman/status/1637959778558439425",
    },
    {
      name: "Anonymous",
      title: "$50,000",
      href: "https://www.youtube.com/watch?v=JqrJ4wGid4Y",
    },
    {
      name: "Aaron Levie",
      title: "$25,000",
      href: "https://twitter.com/levie",
    },
    {
      name: "Akshay Kothari",
      title: "$25,000",
      href: "https://twitter.com/akothari",
    },
    {
      name: "Anjney Midha",
      title: "$25,000",
      href: "https://twitter.com/AnjneyMidha",
    },
    {
      name: "Mark Cummins",
      title: "$25,000",
      href: "https://twitter.com/mark_cummins",
    },
    {
      name: "Jamie Cox & Gary Wu",
      title: "$15,000",
      href: "https://www.fluidstack.io/",
    },
    {
      name: "Mike Mignano",
      title: "$15,000",
      href: "https://mignano.co/",
    },
    {
      name: "Ivan Zhao",
      title: "$10,000",
      href: "https://twitter.com/ivanhzhao",
    },
    {
      name: "Stephanie Sher",
      title: "$10,000",
      href: "https://twitter.com/stephxsher",
    },
    {
      name: "Brandon Reeves",
      title: "$10,000",
      href: "https://www.luxcapital.com/people/brandon-reeves",
    },
    {
      name: "Raymond Russell",
      title: "$10,000",
      href: "https://twitter.com/raymondopolis",
    },
    {
      name: "Vignan Velivela",
      title: "$10,000",
      href: "https://vignanv.com/",
    },
    {
      name: "Brandon Silverman",
      title: "$10,000",
      href: "https://twitter.com/brandonsilverm",
    },
    {
      name: "Katsuya Noguchi",
      title: "$10,000",
      href: "https://twitter.com/kn",
    },
    {
      name: "Aravind Srinivas",
      title: "$10,000",
      href: "https://twitter.com/AravSrinivas",
    },
    {
      name: "Shariq Hashme",
      title: "$10,000",
      href: "https://shar.iq/",
    },
    {
      name: "Sahil Chaudhary",
      title: "$10,000",
      href: "https://twitter.com/csahil28",
    },
    {
      name: "Matias Nisenson",
      title: "$10,000",
      href: "https://twitter.com/MatiasNisenson",
    },
    {
      name: "Amjad Masad",
      title: "$5,000",
      href: "https://twitter.com/amasad",
    },
    {
      name: "Conor White-Sullivan",
      title: "$5,000",
      href: "https://twitter.com/Conaw",
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
    className="mb-40 md:h-full h-auto"
    style={{
      // Temporarily disable fading
      // opacity: 0,
      opacity: 1,
      ...(index === 0 && {
        // opacity: !globalThis.width || window.innerWidth < 960 ? 1 : 0,
        // Temporarily disable fading
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

const Prize = ({ prize }) => (
  <div
    className={`flex-1 flex flex-col border-2 border-solid md:p-6 p-4 lg:aspect-square rounded-2xl relative ${
      prize.won ? `border-[#F5653F]` : `border-white`
    }`}
    style={{
      boxShadow: prize.won
        ? "0px 3.26536px 2.21381px 0px rgba(70, 23, 11, 0.08), 0px 7.84712px 5.32008px 0px rgba(70, 23, 11, 0.11), 0px 14.77543px 10.01724px 0px rgba(70, 23, 11, 0.14), 0px 26.35684px 17.86905px 0px rgba(70, 23, 11, 0.16), 0px 49.29758px 33.42209px 0px rgba(70, 23, 11, 0.19), 0px 118px 80px 0px rgba(70, 23, 11, 0.27)"
        : "",
    }}
  >
    {prize.won && (
      <div
        className="absolute top-0 right-0 p-8 md:p-10 rounded-full bg-[#1C1A1D] flex items-center justify-center rotate-6 -m-4 md:-m-5 border-[#F5653F] border-2 border-solid"
        style={{
          boxShadow:
            prize.won &&
            "0px 3.26536px 2.21381px 0px rgba(70, 23, 11, 0.08), 0px 7.84712px 5.32008px 0px rgba(70, 23, 11, 0.11), 0px 14.77543px 10.01724px 0px rgba(70, 23, 11, 0.14), 0px 26.35684px 17.86905px 0px rgba(70, 23, 11, 0.16), 0px 49.29758px 33.42209px 0px rgba(70, 23, 11, 0.19), 0px 118px 80px 0px rgba(70, 23, 11, 0.27)",
        }}
      >
        <p className="text-[#e5502b] m-0 text-3xl md:text-4xl uppercase font-black tracking-tighter">
          won
        </p>
      </div>
    )}
    <h2 className="text-4xl md:text-6xl lg:w-3/4 font-black !mb-0 leading-none tracking-tighter !mt-0">
      {prize.title}
    </h2>
    <h3
      className="text-3xl md:text-5xl font-black leading-none tracking-tighter"
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
    <p className="flex-1 md:text-xl text-lg font-medium opacity-60 leading-none tracking-tight mb-16">
      {prize.description}
    </p>
    <div className="flex flex-col gap-2">
      <p className="md:text-md text-sm uppercase font-bold opacity-40 mb-1">
        {prize.requirement}
      </p>
      {prize.qualifications.map((q) => (
        <div
          style={{ backgroundColor: "rgb(255,255,255,.05)" }}
          className="p-3 rounded-md"
          key={q}
        >
          <p className="mb-0 md:text-lg text-sm leading-none opacity-60">{q}</p>
        </div>
      ))}
    </div>
    <p className="text-sm font-medium opacity-60 leading-none tracking-tight mb-0">
      {prize.prizeDescription}
    </p>
  </div>
);

const Creator = ({ creator }) => (
  <a
    className="block flex-1 text-white no-underline hover:no-underline"
    href={creator.href}
  >
    <img
      src={creator.image}
      className="md:w-48 md:h-48 w-36 h-36 rounded-full saturate-0"
    />
    <h2 className="text-2xl md:text-4xl font-black mb-0 leading-none tracking-tighter mix-blend-exclusion">
      {creator.name}
    </h2>
  </a>
);

const TeamMember = ({ member }) => (
  <div>
    <a
      className=" text-white hover:no-underline inline-block fit-content"
      href={member.href}
    >
      <h3 className="mb-0 text-xl font-medium">
        {member.name}&nbsp;&nbsp;
        <span className="opacity-70">{member.title}</span>
      </h3>
    </a>
  </div>
);

const Funder = ({ funder }) => {
  const FunderText = <h3 className="mb-0 text-lg font-black">{funder.name}</h3>;

  if (!funder.href) {
    return <div>{FunderText}</div>;
  }

  return (
    <div>
      <a
        className=" text-white hover:no-underline inline-block fit-content"
        href={funder.href}
      >
        {FunderText}
      </a>
    </div>
  );
};

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

const romanize = (num) => {
  if (isNaN(num)) return NaN;
  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman = "",
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
};

const deadline = Math.round(new Date("2024-01-01T00:00:00") / 1000);

const autoPlay = (ref) =>
  ref &&
  ref.current
    .play()
    .then(() => {})
    .catch((err) => {
      // Video couldn't play, low power play button showing.
    });

export function Landing() {
  const [timeLeft, setTimeLeft] = useState("");
  const [hover, setHover] = useState(false);
  const heroVideo = useRef(null);
  const unrollVideo = useRef(null);
  const mlVideo = useRef(null);
  const xrayVideo = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(deadline - Math.round(new Date() / 1000));
    }, 1000);
    setTimeLeft(deadline - Math.round(new Date() / 1000));
    return () => clearInterval(intervalId);
  }, [setTimeLeft]);

  // Math is slightly wrong but it's close enough and at least this way it won't since there are no floating
  // point computations causing jumps / glitches.
  const timeLeftText = hover
    ? romanize(Math.floor(timeLeft / 86400))
    : Math.floor(timeLeft / 86400) +
      "." +
      String(timeLeft % 86400).padStart(5, "0");

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
      const opacities = storyBounds.map((bounds) =>
        getOpacity({ y: bounds.y, height: bounds.height * 1.3 })
      );
      const backgroundOpacities = storyBounds.map((bounds) =>
        getBackgroundOpacity({
          y: bounds.y - window.innerHeight / 2,
          height: bounds.height,
        })
      );
      // Temporarily disable fading
      // storyDivs.forEach(
      //   (story, index) =>
      //     (story.style.opacity = window.innerWidth < 960 ? 1 : opacities[index])
      // );
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
    autoPlay(mlVideo);
    autoPlay(xrayVideo);
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0 md:block hidden">
        {stories({ unrollVideo, mlVideo, xrayVideo }).map((s, index) => (
          <StoryBackground story={s} key={s.date} index={index} />
        ))}
      </div>
      <div className="text-white ">
        <div className="z-20 relative">
          {/* Hero */}
          <section
          // style={{
          //   minHeight: "75vh",
          // }}
          >
            <div className="container mx-auto z-20 relative">
              <div className="md:pt-20 pt-6 max-w-3xl">
                <h1 className="text-4xl md:text-7xl font-black !mb-2 leading-none tracking-tighter mix-blend-exclusion">
                  Resurrect an ancient library from the ashes of a volcano.
                  <br />
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
                    Win $1,000,000.
                  </span>
                </h1>
                <p className="max-w-xl md:text-2xl text-lg font-medium mb-8 md:opacity-60 md:w-full w-4/5 opacity-80 leading-none tracking-tight">
                  The Vesuvius Challenge is a machine learning and computer
                  vision competition to read the Herculaneum Papyri.
                </p>
                <a className="cursor-pointer group hover:no-underline" href="/firstletters">
                  <div
                    className="max-w-2xl relative rounded-3xl py-4 md:py-5 px-5 md:px-7 border-solid border-2 border-[#F5653F] flex overflow-hidden"
                    style={{
                      background:
                        "radial-gradient(circle at bottom right, #FFF 0%, #F5653F 28%, #4D2514 63.02%, #0F0400 100%)",
                      boxShadow:
                        "0px 3.26536px 2.21381px 0px rgba(70, 23, 11, 0.08), 0px 7.84712px 5.32008px 0px rgba(70, 23, 11, 0.11), 0px 14.77543px 10.01724px 0px rgba(70, 23, 11, 0.14), 0px 26.35684px 17.86905px 0px rgba(70, 23, 11, 0.16), 0px 49.29758px 33.42209px 0px rgba(70, 23, 11, 0.19), 0px 118px 80px 0px rgba(70, 23, 11, 0.27)",
                    }}
                  >
                    <div className="flex flex-col">
                      <p className="text-sm uppercase text-white font-bold opacity-80 tracking-wider mb-2">
                        breaking
                      </p>
                      <h3 className="text-3xl md:text-5xl text-white my-0 tracking-tighter mb-6 leading-[87%] flex-grow">
                        First Word Discovered
                      </h3>
                      <div className="flex">
                        <div className="hidden sm:block uppercase font-bold tracking-wider mr-1 group-hover:mr-3 transition-all">
                          Read the Announcement
                        </div>
                        <div className="block sm:hidden uppercase font-bold tracking-wider mr-1">
                          Announcement
                        </div>
                        <img src="/img/landing/arrow-right.svg" />
                      </div>
                    </div>
                    <img
                      src="/img/landing/progress-snippet.png"
                      className="-mr-7 -mb-5 scale-75 md:scale-100 origin-bottom-right"
                    />
                    <div
                      className="absolute inset-0 opacity-20 mix-blend-overlay"
                      style={{
                        background: "url(/img/landing/grid.png)",
                      }}
                    />
                  </div>
                </a>
              </div>
            </div>
            <div
              className="absolute inset-0 h-[75vh] z-10"
              style={{
                background:
                  "linear-gradient(90deg, rgba(28, 26, 29, 0.4) 0%, rgba(28, 26, 29, 0) 64.42%),linear-gradient(0deg, #1C1A1D 1%, rgba(28, 26, 29, 0) 30%)",
              }}
            />
            <div className="absolute inset-0 h-[75vh] z-0">
              <video
                // autoPlay
                playsInline
                loop
                muted
                poster="/img/landing/vesuvius.jpg"
                className="w-full h-full object-cover object-[50%]"
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
          {stories({ unrollVideo, mlVideo, xrayVideo }).map((s, index) => (
            <Story story={s} key={s.date} index={index} />
          ))}
          {/* Prize */}
          <section className="mb-24 md:mb-36">
            <div className="container mx-auto z-30 relative">
              <div className="py-10 md:py-20 max-w-3xl">
                <h1 className="text-4xl md:text-7xl font-black mb-2 leading-none tracking-tighter mix-blend-exclusion">
                  The Vesuvius Challenge
                </h1>
              </div>
              <div className="flex flex-col gap-3 max-w-7xl">
                <div className="flex lg:flex-row flex-col gap-3 max-w-6xl">
                  {prizes.map((p, i) => (
                    <Prize prize={p} key={i} />
                  ))}
                </div>
                <div className="flex flex-col md:py-6 py-4">
                  <h2
                    className="text-4xl md:text-6xl font-black mb-0 leading-none tracking-tighter"
                    style={{ color: "#8D8C8E" }}
                  >
                    <span
                      className="text-4xl md:text-6xl font-black leading-none tracking-tighter mb-0"
                      style={{
                        background:
                          "radial-gradient(53.44% 245.78% at 13.64% 46.56%, #F5653F 0%, #D53A17 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                      }}
                    >
                      $100,000+
                    </span>{" "}
                    more in prizes & TBA
                  </h2>
                </div>
              </div>
            </div>
          </section>
          {/* Team */}
          <section>
            <div className="container mx-auto z-30 relative">
              <div className="mb-6 md:mb-10">
                <h1 className="mb-16 text-4xl md:text-7xl font-black leading-none tracking-tighter  mix-blend-exclusion">
                  Created By
                </h1>
                <div className="flex md:flex-row flex-col gap-8 max-w-[1000px]">
                  {creators.map((c, i) => (
                    <Creator creator={c} key={i} />
                  ))}
                </div>
              </div>
              <div className="py-10 md:py-20">
                <h1 className="hidden md:block text-4xl md:text-7xl font-black leading-none tracking-tighter  mix-blend-exclusion">
                  Team
                </h1>
                <div className="flex flex-wrap">
                  <div className="flex-1 flex-col lg:gap-0 gap-2 mt-8 min-w-[100%] md:min-w-[50%] pr-4 lg:pr-12">
                    <h3 className="text-3xl font-black tracking-tighter">
                      Vesuvius Challenge Team
                    </h3>
                    {team.challenge.map((t, i) => (
                      <TeamMember member={t} key={i} />
                    ))}
                  </div>
                  <div className="flex-1 flex-col lg:gap-0 gap-2 mt-8 min-w-[100%] md:min-w-[50%] pr-4 lg:pr-12">
                    <h3 className="text-3xl font-black tracking-tighter">
                      EduceLab Team
                    </h3>
                    {team.educe.map((t, i) => (
                      <TeamMember member={t} key={i} />
                    ))}
                  </div>
                  <div className="flex-1 flex-col lg:gap-0 gap-2 mt-8 min-w-[100%] md:min-w-[50%] pr-4 lg:pr-12">
                    <h3 className="text-3xl font-black tracking-tighter text=[--ifm-color-primary]">
                      Papyrology Team
                    </h3>
                    {team.papyrology.map((t, i) => (
                      <TeamMember member={t} key={i} />
                    ))}
                  </div>
                  <div className="flex-1 flex-col lg:gap-0 gap-2 mt-8 min-w-[100%] md:min-w-[50%] pr-4 lg:pr-12">
                    <h3
                      className="text-3xl font-black tracking-tighter text=[--ifm-color-primary]"
                      id="sponsors"
                    >
                      Sponsors
                    </h3>
                    {team.more_sponsors.map((t, i) => (
                      <TeamMember member={t} key={i} />
                    ))}
                  </div>
                </div>
                &nbsp;
                <br />
                <Funder
                  funder={{
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
                    <h3 className="text-3xl font-black tracking-tighter" id="educelab-funders">
                      EduceLab funders
                    </h3>
                    {educelabFunders.map((t, i) => (
                      <Funder funder={t} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Timer */}
          {/*<section className="md:py-24 py-8">
            <div
              className="container mx-auto pt-24 pb-36"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <p className="text-5xl md:text-9xl font-black leading-none tracking-tighter mb-0">
                {timeLeftText}
              </p>
              <p
                className="text-3xl md:text-7xl font-black tracking-tighter"
                style={{
                  background:
                    "radial-gradient(53.44% 245.78% at 13.64% 46.56%, #F5653F 0%, #D53A17 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  lineHeight: "110%",
                }}
              >
                Days Remaining
              </p>
            </div>
          </section>*/}
        </div>
      </div>
    </>
  );
}
