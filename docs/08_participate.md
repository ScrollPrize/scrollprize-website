---
title: "Grand Prize Entry"
hide_table_of_contents: true
---

<head>
  <html data-theme="dark" />

  <meta
    name="description"
    content="A $250,000 machine learning and computer vision competition"
  />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://scrollprize.org" />
  <meta property="og:title" content="Vesuvius Challenge" />
  <meta
    property="og:description"
    content="A $250,000 machine learning and computer vision competition"
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
    content="A $250,000 machine learning and computer vision competition"
  />
  <meta
    property="twitter:image"
    content="https://scrollprize.org/img/social/opengraph.jpg"
  />
</head>

The **Grand Prize** ($150,000) will be awarded to the first team to render either one of the fully-scanned scrolls readable by 11:59pm Pacific, December 31st 2023.

### Grand Prize Qualifying Criteria

A [Review Team](/participate#review-process) made up of technical experts and [papyrologists](https://en.wikipedia.org/wiki/Papyrology) will assess all Grand Prize submissions to ensure that they can:
- Read at least 4 separate passages from the two scrolls, each containing at least 140 characters of continuous text
- Verify that each passage contains no more than 15% of characters which are missing or illegible
- Confirm that submissions contain legitimate and linguistically plausible text
- Independently reproduce and verify your results using your code and documented techniques

To qualify for the grand prize, you must have registered at the time you downloaded the data. The registration form can be found on the [data page](/data).

We will work with the Grand Prize winners to verify their results, put them in a historical context, and co-publish them in academic venues. The winning code will be made public under a permissive open source license, so that others can reproduce and build on your work.

### Submitting your result

<div>If you have a qualifying result, submit it for considertion by sending an email to <a href="mailto:grandprize@scrollprize.org">grandprize@scrollprize.org</a> and provide the following:</div>

* **Images.** Submissions must be in the form of images of the virtuall unrolled papyrus, showing visible and legible text. Specify which scroll each image came from and where in the scroll they were found.
* **Methodology.** A detailed technical description of how your solution works. We need to be able to reproduce your work, so please make this as easy as possible:
    * For fully automated software, please create a Docker image that we can easily run to reproduce your work, and please include system requirements.
    * For software with a human in the loop, please provide written instructions and a video explaining how to use your tool. We’ll work with you to learn how to use it, but we’d like to have a strong starting point.
    * Either attach your code/video directly to the email, or include an easily accessible link from which we can download it.
* **Hallucination mitigation.** If there is any risk of your model hallucinating results, please let us know how you mitigated that risk. Tell us why you are confident that the results you are getting are real.
* **Other information.** Feel free to include any other things we should know.

If you’re competing as a team, please have your team leader submit your results. We will communicate with the team leader exclusively, and any prize money will be distributed according to the instructions of the team leader. You’d have to sort out within your team how to split any prizes.

### Review process

All submissions will be assessed by the Review Team, which consists of a technical team to review your methodology, and an independent team of papyrologists to review your results.

Technical team
- Dr. Brent Seales
- Nat Friedman
- Stephen Parsons
- JP Posma
- Daniel Havíř

Papyrology Team
- Robert Fowler, Fellow of the British Academy; Professor Emeritus of Classics, Bristol University
- Tobias Reinhardt, Corpus Christi Professor of the Latin Language and Literature, Oxford
- Richard Janko, Professor of Classics, University of Michigan
- Federica Nicolardi, Professor of Classics, University of Naples Federico II
- Gianluca Del Mastro, Professor of Papyrology, l’Università della Campania «L. Vanvitelli»
- Daniel Delattre, Emeritus Research Director and Papyrologist, CNRS and IRHT

We will process your submission as follows:

<div><strong>1. Technical assessment.</strong> The technical team will look at your method, and try to reproduce your results independently. We may also try to apply your techniques to the held-back part of the scrolls to see if they are able to generate new results there.</div>

  * We want to make sure that your method doesn’t hallucinate, so please let us know how you mitigated this risk.
  * We will work with you on reproducing your solution. We might have questions, such as how your code works, how to use your manual tools (if applicable), and so on. Please make it as easy for us to run your code as reasonably possible, but also don’t wait until your solution is perfect. If you have any questions, or if you’re wondering if you’re ready to submit, just reach out!
  * We will acknowledge having received your submission within a week. Depending on the difficulty of verifying your methodology, it might take longer until we are able to make our final assessment.
  * In case there are multiple teams that submit qualifying results, the team that submitted first will win (independent of how long our assessment takes).

<div><strong>2. Papyrological assessment.</strong> Once we are reasonably confident that your solution is technically valid and appears to meet the qualifications, we will share your results with the papyrology team, who will judge if the text is plausible and legitimate.</div>

### Ink Detection

For the **Ink Detection Progress Prize**, please follow the instructions on [Kaggle](https://www.kaggle.com/competitions/vesuvius-challenge-ink-detection/).
