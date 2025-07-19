---
title: "Italian fiascos: PiracyShield"
date: "2024-10-09"
description: "The big red button to nuke the internet."
coverImage: "images/chronicles/2025-shield.webp"
tags:
  - Cybersecurity
  - Infrastructure
---

> The July 14th 2023 law no. 93, which came into force on August 8th, grants new powers to the Authority to strengthen its functions for a more effective and timely counteraction against online piracy related to live broadcast events.

([Piracy Shield's website](https://www.agcom.it/competenze/antipirateria-e-piracy-shield/piattaforma-piracy-shield))

Born to "protect" football broadcasters and risen to fame after blocking access to Google and CloudFlare, **Piracy Shield** is pushed as the new Italian horizon in the war against internet piracy. But is it really? Does it even work? And what does football have to do with blocking CloudFlare?

I don't really follow football, but I find this an excellent cautionary tale about good security practices and bad political ideas. This story is pieced together from personal experience and online sources. **_I will update this as the story develops._**

## ACT 1, Piracy Shield: origins

### The money trail

[Giovanni Falcone](https://en.wikipedia.org/wiki/Giovanni_Falcone), Italian magistrate notorious for his fight against the Sicilian mafia, used to "follow the money trail". This forensic technique can also be applied to understand Piracy Shield.

In October 2023 [@WEB:C23] [DAZN](https://en.wikipedia.org/wiki/DAZN) and [Sky](https://en.wikipedia.org/wiki/Sky_Italia) bought the 2024-2029 exclusive rights to [Italian A-series](https://en.wikipedia.org/wiki/Serie_A) football games for 900M Euros. Aurelio De Laurentiis, chair of the Napoli Football Club, prophetically commented:

> It’s a defeat for Italian football. [...] DAZN is not competent and is not good for Italian football, just as Sky isn’t either.

But they were unfazed, and publicly set a goal of 1000M in revenue each year [@WEB:C23].

### War preparations

DAZN and Sky increased the cost of their subscriptions, but it was not enough. They made ready for war against pirates, those illegally broadcasting live football games. The reader might not be familiar with the _"pezzotto"_, which even has a dictionary entry:

> **Pezzotto.** A specific decoder used to illegally access the content of Italian and foreign pay-TV channels.

([Treccani Encyclopedia](<https://www.treccani.it/vocabolario/neo-pezzotto_(Neologismi)/>))

They teamed up with a legal partner: enter [_Studio Previti_](https://www.previti.it/) ("Studio Previti Associazione Professionale"), a large Rome-based law firm founded by Cesare Previti, former politician, convicted in 2006 for judicial corruption and permanently disqualified from holding public office and practice law. The law firm is now run by his son.

Their strategy? They planned to construct their own Death Star, a super-weapon to annihilate all pirate websites from the web. Well, the Italian web, at least.

![Plans for Piracy Shield](/images/chronicles//2025-shield-plans.webp)

### Coding Piracy Shield

Sp Tech Legal is an IT company connected to Studio Previti: It was their job to develop the ultimate weapon.

> [Sp Tech Legal](https://www.sptechlegal.com/) offers integrated legal tech solutions for the protection of copyrights, trademarks, and other distinctive signs, in collaboration with Studio Previti.

([SP Tech's website](https://www.sptechlegal.com/))

The idea is simple. Large copyright holders (Sky, DAZN, [Rti-Mediaset](<https://it.wikipedia.org/wiki/RTI_(azienda)>), Lega Serie A, [Lega Serie B](https://en.wikipedia.org/wiki/Lega_B)) will monitor the web and create takedown tickets, containing information such as:

- website IP or its Fully Qualified Domain Name (FQDN); for example `www.leonardoerrati.com.` is my FQDN
- some proof of presence of pirated content

The final product is a cloud-based webpage running on Microsoft Azure, only reachable via a Virtual Private Network (VPN) and containing takedown tickets for all Italian Internet Service Providers (ISPs) to see.
ISPs are then forced to _completely halt any flux of information from the targets_ within 30 minutes.

> Access service providers, search engine operators, and information society service providers involved in any capacity in the accessibility of the website or illegal services must implement the Authority's directive without delay and, in any case, within a maximum of 30 minutes from notification.

(July 14th 2023 law no. 93, Article 2, Comma 5)

In July 2024, IT recruiting agency [DECKX](https://deckx.app/it/assumi-sviluppatori-e-sviluppatrici/) published [a job posting](https://www.simplyhired.it/job/qHcu2mLSe4o6etzqlj3N-7vcAvVAx3BHyjLjHMbPZwIJ-f1VJnN3aw):

> The specific project we are working on is anti-piracy software for Lega Calcio. We collaborate very closely with DAZN, Sky, and all the organizations and companies that broadcast football matches. [...] During the week, the _Super Junior_ will be responsible for monitoring pirate streaming networks, and during matches on weekends (3/4 weekends per month are required, for a total of one hour per day, not the entire weekend), they will eliminate them using Piracy Shield.

This allegedly belongs to SP Tech Legal, and gives an insight in their potential team:

- Lorenzo Foti, CEO with a technical background (PHP) as a developer
- Two super-seniors: one focuses on development in Go and is a former pirate, the other handles system operations and is the forensic expert (online investigations, evidence collection, support legal teams)
- The operational team: a junior developer and a junior focused on technical relations and monitoring.
- A group coordinator

Sp Tech Legal was displeased,

> SP Tech Legal s.r.l. hereby states that the job advertisement [...] was erroneously published by the recruiting company Deckx s.r.l. without any assignment from SP Tech Legal s.r.l. itself. The text and content of the advertisement are, therefore, in no way attributable to SP Tech Legal s.r.l., which further specifies that it has promptly taken legal action against Deckx s.r.l. to protect its rights, which have been severely infringed by this unlawful conduct.

and we never heard of this kerfuffle again.

![Piracy Shield under development](/images/chronicles//2025-shield-coding.webp)

## ACT 2, Piracy Shield in action

### The first cracks

Lega Serie A gifted Piracy Shield to the governative agency [AGCOM](https://en.wikipedia.org/wiki/Autorit%C3%A0_per_le_Garanzie_nelle_Comunicazioni) (_Autorità per le Garanzie nelle Comunicazioni_, in English _"Italian Communications Regulatory Authority"_). It went live between February 1st and 2nd 2024 [@WEB:HDB24a], with a budgeted operational cost of 1.9M in 2024.

A first mishap occurred while providing VPN credentials. For instance, the username given to DAZN would be `dazn@piracyshield.net`. This is just an id, not an e-mail address. Usernames and passwords were allegedly sent as plain text via e-mail in a .zip compressed file; moreover in a few days an anonymous bought the `piracyshield.net` domain, so e-mails from addresses like `info@piracyshield.net` are now a threat.

Right on point, Piracy Shield's code, interface, and documentation [were leaked](https://github.com/fuckpiracyshield) three mere weeks after deployment, allowing for some insight. For instance, one must be sure the Death Star does not destroy important
websites (like `www.google.com`) or components: how would you implement it? Most likely, not like this.

![A code snippet from Piracy Shield.](/images/chronicles//2025-shield-code.webp)

This code just checks whether the name contains `cloudflare`, `namecheap`, `amazon` or `google`. Absolutely unexploitable.
Regarding the leak,

> [...] Piracy Shield was absolutely not hacked; rather, some confidential information was merely shared on GitHub, [...] this did not affect its functionality in any way. An investigation into this leak is currently underway by the competent authorities.

(Massimiliano Capitanio, AGCOM, [in an interview](https://www.tomshw.it/altro/dicono-di-aver-bloccato-10mila-siti-illegali-ma-la-verita-su-piracy-shield-e-diversa))

We will be meeting Massimiliano Capitanio again, keep him in mind.

And what about government websites? Well, the platform has [an hardcoded list of 11 thousand sensible websites](https://www.wired.it/article/piracy-shield-nuovo-emendamenti-carcere-agcom-white-list/), including those of the government.

### Heretics

Some took notice, few took action. In October 2023 [Assoprovider](https://it.wikipedia.org/wiki/Assoprovider), an association of over 250 Italian IT providers, filed an appeal with the Regional Administrative Court (TAR) against July 2023 law no. 93 (the anti-piracy law). [@WEB:PI24a]

They had their request rejected in January 2024, as

> Assoprovider's appeal lacked grounds, there are no real dangers for providers in implementing the new procedure. Moreover, the platform has been successfully tested in the previous months.

(Federico Bagnoli Rossi, president of [FAPAV](https://it.wikipedia.org/wiki/Federazione_anti-pirateria_audiovisiva), a federation of copyright holders [@WEB:PI24b])

Internet Service Providers were forced to block content at an unsustainable rate, with questionable techniques and under serious legal threats; this is the result of bad design and bad politics. All pieces were set and catastrophe was inevitable.

![Piracy Shield is ready](/images/chronicles//2025-shield-ready.webp)

### Patient zero

On February 15th 2024, Piracy Shield blocked access to Zenlayer's whole Content Distribution Network (CDN). A CDN is a network of strategically distributed servers, connecting you to the closest one to improve connection speed.
What happened, and how?

A Zenlayer-hosted website was likely (and illegally) streaming movies or football games, copyright holders produced a takedown ticket and Service Providers received it; we can only speculate on what happens after this step.

- If Piracy Shield provides an IP address, Service Providers probably block them. This means Italian users will be unable to view them.
- If Piracy Shield provides the FQDN instead, like `www.leonardoerrati.com.`, Service Providers allegedly try to find and block all connected IPs. For instance, my website has four (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and they would probably all be blocked.

In most cases CDN-hosted websites share IP address, meaning that if you block the IP of one you block all. Blocking that pirate website caused the whole CDN to be unavailable from Italy.

As far as I know, Zenlayer is the first large victim of Piracy Shield.

![Piracy Shield activated](/images/chronicles//2025-shield-fire.webp)

### Friendly fire

Incidents have been so many that it's best to just use a table and stick to the largest ones. I will include all that came to my attention. If I manage to find reliable sources, I will also add the downtime.

| date | downtime | friendly target                                                                                                                                                        |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2024-02-15 |          | [Zenlayers's CDN](https://torrentfreak.com/piracy-shield-iptv-blocks-reportedly-hit-zenlayer-cdns-innocent-customers-240215/)                                          |
| 2024-02-24 |          | [Cloudflare's CDN](https://www.dday.it/redazione/48554/piracyshield-ci-ricasca-bloccate-decine-di-siti-leciti-dietro-un-ip-di-cloudflare-danni-collaterali-o-illecito) |
| 2024-08-18 | 37d      | [Samsung's IPTV](https://www.hdblog.it/internet/articoli/n599152/dazn-piracy-shield-blocco-smartone-lg-tizen/)                                                         |
| 2024-08-18 | 37d      | [LG's IPTV](https://www.hdblog.it/internet/articoli/n599152/dazn-piracy-shield-blocco-smartone-lg-tizen/)                                                              |
| 2024-10-19 | 6h       | [Google's & YouTube's CDN](https://www.lastampa.it/sport/2024/10/20/news/piracy_shield_agcom_blocca_google_drive-14734331/)                                            |
| 2024-10-19 | 6h       | [Imperva's CDN](https://www.giornalettismo.com/altri-ip-bloccati-da-piracy-shield-imperva/)                                                                            |
| 2024-12-01 |          | [DDay's CDN](https://www.dday.it/redazione/51374/piracy-shield-oscura-dday-la-piattaforma-agcom-blocca-un-ip-della-cdn-usata-dal-nostro-sito)                          |

Non-malicious websites could technicaly request to be unblocked by AGCOM, but the service was unavailable for the first few weeks, and wouldn't cover any kind of damage anyway.

## ACT 3, Piracy Shield versus the backlash

This is a short act. With voices about "Piracy Shield v2" coming from AGCOM - I kid you not - our story is not over yet. Still, what happened after Piracy Shield took out Google, CloudFlare, and such?

AGCOM is ruled by a board of four commissioners, elected from either the Senate or the Parliament. Our old friend Massimiliano Capitanio is currently one of them; he leads the Piracy Shield project and strongly defended it [in various occasions](https://www.youtube.com/watch?v=2CUzcZZQZSs).

> These are absolutely false and unfounded claims. [...] Since the platform's launch, no DNS or IP address owner has, as provided by law, submitted a request to AGCOM to have a site reinstated. There is such a rigorous procedure for those who report issues that, to my knowledge, no Public Administration websites have been blocked in these weeks.

(Massimiliano Capitanio [@WEB:A24])

Some politicians [@WEB:F24a] and AGCOM commissioners [@WEB:F24b], however, are starting to disagree. Further, in June 2025, the European Commission raised concerns to Italian Foreign Minister [Antonio Tajani](https://en.wikipedia.org/wiki/Antonio_Tajani) about Piracy Shield, whose mechanism they defined as "crude" and "rough". The Commission adds that due to concerns for freedom of expression and the lack of proper procedures (such as short timeframes for appeals and absence of independent oversight) the platform might be in violation of the Digital Services Act. Capitanio promptly answered:

> These issues appear to be already addressed and resolved in previous consultations [...]. I don’t see any weakening or anything particularly obstructive in view of the final regulation which, once again, places Italy at the forefront globally in the fight against piracy mafias and illegal streaming.

(Massimiliano Capitanio [@WEB:Corriere2025])

## (Partial) conclusion

Famous politician [Niccolò Machiavelli](https://en.wikipedia.org/wiki/Niccol%C3%B2_Machiavelli) once wrote that "the end justifies the means". He would probably have a change of heart knowing about Piracy Shield. Its end is reasonable, but its means are inherently flawed: due to the structure of the web it will perhaps never work as intended.

While experts agree on this, commissar Capitanio [says this is "fake news"](https://www.hdblog.it/mercato/articoli/n578790/piracy-shield-siti-legali-blocchi-agcom-polemica/). The worst part? Allegedly, it is not even solving the original money problem as A-Series rights holders have seen [no increase in revenue](https://www.tomshw.it/hardware/piracy-shield-non-sta-funzionando-i-risultati-sono-deludenti-2025-01-20). We are sure there must be a lesson in all this.

![Piracy Shield waiting...](/images/chronicles//2025-shield-next.webp)
