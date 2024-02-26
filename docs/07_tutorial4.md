---
title: "Tutorial 4: Ink Detection"
sidebar_label: "4. Ink Detection"
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

import { TutorialsTop } from '@site/src/components/TutorialsTop';

<TutorialsTop highlightId={4} />

This tutorial gives a high-level overview on ink detection methods, followed by a more hands-on tutorial [on Kaggle as a notebook](https://www.kaggle.com/code/jpposma/vesuvius-challenge-ink-detection-tutorial).
Since this tutorial was written, ink detection has successfully recovered text from inside the rolled scrolls.
The technical principles remain the same as what is described here.

Ink detection is the task of taking data from a 3D X-ray scan around a papyrus surface, and identifying the locations of the inked parts of the papyrus.

This is where one of the difficulties of the Herculaneum Papyri comes in: the ink and the papyrus have very similar densities, making it hard to detect ink in 3D X-ray scans.

* **Campfire & En-Gedi scrolls:** Dense ink shows up as brighter voxels in 3D X-ray scans, so ink detection can be done by taking the brightest pixel in some voxel region.
* **Herculaneum scrolls & fragments:** Ink is less directly visible in 3D X-ray scans, but there does seem to be data there. Machine learning models can detect it, and humans can sometimes see subtle textural patterns in the data.

In the video below Dr. Seales talks about how ink detection got started for the Herculaneum scrolls:

<iframe className="w-[100%] aspect-video mb-4" src="https://www.youtube.com/embed/g-7-Xg75CCI?start=5930" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>

Not only can machine learning models detect the ink, on occasion we can see the ink directly in the 3D X-ray volumes. Here are some examples, with slices from the 3D surface volumes on the left, and infrared photos showing ink on the right (from the [data paper](https://arxiv.org/abs/2304.02084)):

<figure className="">
  <img src="/img/tutorials/ink2-alpha.png" />
</figure>

<figure className="">
  <img src="/img/tutorials/ink1-alpha.png" />

  <figcaption className="mt-0">Ink visible in 3D surface volumes (left: 3D volume slice; right: infrared photo), found by Stephen Parsons</figcaption>
</figure>

You have to look closely, but the shapes are visible!

Discoveries from the community have found widespread examples of visible ink like this inside the intact scrolls. In particular the [“crackle pattern”](https://caseyhandmer.wordpress.com/2023/08/05/reading-ancient-scrolls/) discovered by Casey Handmer has proven useful, and inspired a number of labeling approaches that successfully produce models capable of detecting ink in the scrolls.

For the purposes of the tutorial, we will use the fragment datasets, which contain ground truth ink labels made using infrared photography of the exposed writing on the surface.

At a high level, training on a fragment works like this:

<figure className="">
  <img src="/img/tutorials/ml-overview-alpha.png" />
</figure>

From a fragment (a) we obtain a 3D volume (b), from which we segment a mesh (c), around which we sample a surface volume (d). We also take an infrared photo (e) of the fragment, which we align (f) with the surface volume, and then manually turn into a binary label image (g).

We train this model by picking a pixel in the binary label image, and sampling a subvolume around the same coordinates from the surface volume. We then backpropagate the known label data to update the model weights:

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] " poster="/img/tutorials/ink-training-anim3-dark.jpg">
    <source src="/img/tutorials/ink-training-anim3-dark.webm" type="video/webm"/>
    <source src="/img/tutorials/ink-training-anim3-dark.mp4" type="video/mp4"/>
  </video>
</figure>

We can then use the model to predict what a label image would have looked like, from different input data than you have trained on.

<figure>
  <video autoPlay playsInline loop muted className="w-[100%]" poster="/img/tutorials/ink-detection-anim3-dark.jpg">
    <source src="/img/tutorials/ink-detection-anim3-dark.webm" type="video/webm"/>
    <source src="/img/tutorials/ink-detection-anim3-dark.mp4" type="video/mp4"/>
  </video>
</figure>

Of course, in reality the label image on the right doesn’t come out perfectly. Stephen Parsons’ [ink-id](https://github.com/educelab/ink-id/) program is one example of an ML-based approach. It produces outputs like this (showing different training epochs in k-fold training/prediction):

<figure>
  <video autoPlay playsInline loop muted className="w-[100%] max-w-[238px]" poster="/img/landing/fragment-training2.jpg">
    <source src="/img/landing/fragment-training2.webm" type="video/webm"/>
    <source src="/img/landing/fragment-training2.mp4" type="video/mp4"/>
  </video>
  <figcaption className="mt-0">A model learning to detect ink on a fragment, showing different training epochs</figcaption>
</figure>

When running ink-id on all the public fragments, the results look like this (prediction left, infrared right):

<figure className="">
  <table className="w-[100%] max-w-[400px]">
    <tr><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f1_composite.png" /></td><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f1_ir.png" /></td></tr>
    <tr><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f2_composite.png" /></td><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f2_ir.png" /></td></tr>
    <tr><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f3_composite.png" /></td><td className="w-50%"><img className="w-[100%]" src="/img/tutorials/f3_ir.png" /></td></tr>
  </table>
  <figcaption className="mt-0">Predicted label images from ink-id (left); infrared photos (right)</figcaption>
</figure>

As you can see, some letters can be clearly seen, others not at all, and a lot of letters are somewhere in between. All fragments also have “hidden layers”: pieces of papyrus that are fused to the backs of the fragments. Running the machine model on those reveals some previously unseen letters:

<div className="flex flex-wrap items-end max-w-[500px] mb-4">
  <figure className="w-[33%]">
    <img src="/img/tutorials/f1_hidden_composite.png"/>
  </figure>
  <figure className="w-[33%]">
    <img src="/img/tutorials/f2_hidden_composite.png"/>
  </figure>
  <figure className="w-[33%]">
    <img src="/img/tutorials/f4_hidden_composite_partially_redacted.png"/>
  </figure>
  <figcaption className="mt-0">“Hidden layers” of papyrus, partially revealed by machine learning.</figcaption>
</div>

The [Ink Detection Progress Prize on Kaggle](https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/) was all about creating the best possible machine learning model for detecting ink within the fragments. Since then newer models have successfully uncovered ink in full scrolls (the [First Letters Prize](firstletters), and then the [2023 Grand Prize](grandprize)).

So how can a machine learning model detect ink? In the electron microscope images below (from the paper [From invisibility to readability: Recovering the ink of Herculaneum](https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0215775&type=printable)), you can clearly see the difference between the inked and non-inked regions. We suspect that machine learning models are able to learn some of these features from the 3D X-ray scans.

<figure>
  <a href="/img/tutorials/sem.png" target="_blank"><img src="/img/tutorials/sem-alpha.png"  className="w-[100%]"/></a>
  <figcaption className="mt-0">Electron microscope pictures from the top (A and B) and the side (C) <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0215775">(source)</a></figcaption>
</figure>

<div>The main challenges for ink detection are:</div>

* Model performance, getting more letters to be legible.
* Applying these models to the full scrolls.
* Reverse engineering the models to better understand the kind of patterns they are using to detect ink.
* Creating more ground truth data (e.g. “campfire scrolls” or synthetic data).

Now let’s create a model! This part of the tutorial is over [on Kaggle as a notebook](https://www.kaggle.com/code/jpposma/vesuvius-challenge-ink-detection-tutorial).

To run more advanced models on the [scroll segments](data_segments), check out the winning code from the [First Letters Prize](firstletters) and the [2023 Grand Prize](grandprize).

To run the Grand Prize winning model: 

1. Create a folder somewhere on your machine you'd like to store both the model and also the segment data and open a terminal from within it
2. Clone the Grand Prize repo:

```bash
git clone https://github.com/younader/Vesuvius-Grandprize-Winner.git
cd Vesuvius-Grandprize-Winner
```
3. Download and install anaconda or miniconda from: https://www.anaconda.com/download

4. Create a new Conda env and activate it

```bash
conda create -n vesuviusgp
conda activate vesuviusgp
```
5. Install the requirements

```bash
pip install -r requirements.txt
```

At this point you have the model and all the requirements on your pc. The current inference and training scripts use relative paths, all starting from the directory from which you cloned the repository.

What this means is that when you run the inference or training scripts, they are starting from that directory, and looking for the folders from there. 

The following directory structure is required, unless you want to modify the paths in the script. Note that the segment name and the _mask.png and _inklabels.png must match.  
.
└── Vesuvius-Grandprize-Winner-main/
    ├── eval_scrolls/
    │   └── segment1/
    │       ├── layers/
    │       │   └── 00.tif
    │       └── segment1_mask.png
    └── train_scrolls/
        └── segment1/
            ├── layers/
            │   └── 00.tif
            ├── segment1_mask.png
            └── segment1_inklabels.png

For inference; 
There are some defaults in the InferenceArgumentParser class, but it also accepts them as inputs

```bash
    segment_id: list[str] =['20230925002745'] #this accepts multiple segments, just keep in mind all these must exist in eval_scrolls, unless you change the segment_path
    segment_path:str='./eval_scrolls' #the path to the segments
    model_path:str= 'outputs/vesuvius/pretraining_all/vesuvius-models/valid_20230827161847_0_fr_i3depoch=7.ckpt' #the path to the checkpoint you downloaded or created and want to use for inference
    out_path:str="" #path to output predictions
    stride: int = 2 #the amount of pixels to skip when sliding the window, default is 2, you can run this up to 32 with no real difference in quality but a substantial increase to speed
    start_idx:int=15 
    workers: int = 4 #number of threads to use, increase or decrease depending on your specs, not to exceed number of threads avail
    batch_size: int = 512 #increase or decrease depending on hardware, would have some difficulty above 512 on regular consumer hardware. if you get CUDA: out of memoery errors, lower this or increase stride, or both
    size:int=64 #window size
    reverse:int=0 #use to reverse the order of the layers during inference
    device:str='cuda' #change to cpu or mps if on device with no gpu or apple device, respectively
```
these all can be passed as arguments. ex: `python inference_timesformer.py --segment_id 20231210121321 20231221180251 --segment_path $(pwd)/train_scrolls --model_path timesformer_wild15_20230702185753_0_fr_i3depoch=12.ckpt`

advanced: to change the number of layers the model runs inference on, you must change the following:

```bash

    in the read_image_mask function, where it is defined

    read_image_mask(fragment_id,start_idx=18,end_idx=38,rotation=0) #modify the start_idx and the end_idx

    in the RegressionPLModel class, in the self.backbone=TimeSformer attributes,

    num_frames = 30 #change this to the number of images you want to use. TimeSformer is just treating each image as a frame in a video

```
For training: 

```bash

    in the CFG class,

    valid_id = '20230820203112' #change this to the segment you want to use as a validation segment

    in the get_train_valid_dataset function

    under for fragment_id_ink [] #insert the segments you want to use for training that you have located in train_scrolls, including your valid segment

    towards the bottom under fragments=['20231005123336'] #change this to include each valid segment you want to use in a fold, so for if you have 1 you will have 1 valid segment and it will run the number of defined epochs with that valid. if you have 2 here it will do 2 full training runs with two different valid sets

```



train_timesformer_og.py and train_timesformer_deduped.py do not accept any arguments, but most of the parameters are the same as described above.
