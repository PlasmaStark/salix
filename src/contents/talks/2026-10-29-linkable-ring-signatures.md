---
title: "Linkable Ring Signatures from Group Actions"
date: "2026-10-29"
description: "Constructions, Pitfalls, and New Approaches"
tags:
  - signatures
  - group-actions
target: Advanced
---

## Abstract

**Ring signatures** are an advanced primitive, allowing users to sign on behalf of a set of public keys without revealing which key is their own. **Linkable** ring signatures additionally allow anonymous detection of repeated use of the same signing key. This combination allows for various applications: anonymous voting, double-spending detection, and so on. This talk introduces linkable ring signatures and their applications, focusing on those based on cryptographic group actions. We will present the framework by Beullens, Katsumata, and Pintore and discuss some weak instantiations, with attacks such as “Don’t Use It Twice”. Finally, we present an alternative linkability mechanism based on canonical liftings and outline its application to linear code equivalence.

## Notes
This talk was held at [Chalmers University of Technology](https://www.cse.chalmers.se/research/group/security/event/2026/2026-10-29-leonardo/), Göteborg. Below, all subsequent iterations.

## Material

- [slides](/pdfs/presentation_lrs_2026-10-29.pdf)