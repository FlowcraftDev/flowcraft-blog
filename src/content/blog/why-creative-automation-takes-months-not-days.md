---
title: Why Creative Automation Takes Months, Not Days (Despite What You See on LinkedIn)
author: Vlad Bodi
pubDatetime: 2025-07-28T00:00:00Z
slug: why-creative-automation-takes-months-not-days
featured: false
draft: false
tags:
  - tools
  - operations
description: >
  We went from 100–200 ads per month to 30,000+ in 8 months — but it took
  6 months to get there, not 6 days. The technology was the easy part.
  Here's what nobody tells you about creative automation at scale.
canonicalURL: https://blog.flowcraft.ventures/why-creative-automation-takes-months-not-days-despite-what-you-see-on-linkedin/
---

Back in 2018, our creative team was drowning. We were producing 100-200 ads per month manually, and every campaign launch meant two days of frantic design work. Fast forward 8 months, and we were generating **30,000+ personalized ads monthly** while our design team worked 2-3 hours per week on campaign prep instead of 2 days.

But here's what I don't see people talking about: it took _**6 months**_ to get there, not 6 days. And honestly? **The technology was the easy part.**

## Table of contents

## The Scale Challenge That Broke Our Process

Our creative bottleneck was killing us. We were running ads for our marketplace with hundreds of clients and thousands of services every month across 4 countries in Latin America. The math was brutal: hundreds of different service providers × 4 countries × multiple service categories × various ad formats = thousands of unique ads needed monthly. And each client wanted their services promoted differently.

Our design team would spend Monday and Tuesday of every campaign week just cranking out variations. Same layout, different business name. Same concept, different service offerings. Same message, different local market adaptations. It was mind-numbing work, but it had to be pixel-perfect because these were going live representing hundreds of different businesses across multiple countries.

By Wednesday, everyone was exhausted and we hadn't even launched yet. But here's where it got worse – Wednesday we would start from scratch for the topical campaigns. Mother's Day, Cyber Monday, Valentine's Day – every seasonal event meant hundreds more variations because now every dentist in Mexico City needed a Mother's Day version of their ad, plus every restaurant in São Paulo needed a Valentine's Day promotion, plus every beauty salon across all four countries needed Cyber Monday messaging.

By the time we hit 200 ads per month, our designers were basically production machines. No creativity, no strategy work, just endless variations promoting different service providers across different markets, multiplied by whatever seasonal campaign was coming up. Every dentist in Mexico City needed a slightly different ad than every dentist in São Paulo, but the core process was identical – and then we'd do it all over again for the next holiday or shopping event.

That was our breaking point. We could hire more designers and keep doing the same thing, or we could figure out how to turn our creative process into something scalable for hundreds of marketplace clients. I'd built companies before – I knew that throwing more people at a broken process just gets you more expensive broken processes.

## The 2-Week PoC That Taught Us Everything

We started with Cloudinary's image transformation API. The concept was simple: upload a base template, feed it data from a spreadsheet, and automatically generate variations. Logo swaps, text overlays, color changes – all the stuff our designers were doing manually.

The proof of concept took about two weeks to build. I remember the first time we successfully generated 50 ad variations from one Excel file – it felt like magic. Upload the template, run the script, and boom: 50 perfectly formatted ads ready to go.

But here's what we learned during those two weeks: the technology working didn't mean the process worked.

Our designers looked at the output and immediately spotted issues we hadn't thought about. Business names that looked fine for a quick service business were too long for a professional services layout. Color combinations that worked for restaurants looked unprofessional for medical practices. Font weights that worked for local businesses looked too casual for enterprise service providers.

The PoC proved we could automate the mechanical stuff. But it also showed us that moving from 50 test ads to 30,000 ads for hundreds of different businesses across multiple markets was going to require completely rethinking how our creative team worked.

## The 6-Month Implementation Journey (Or: Why We Didn't Launch in Week 3)

### Months 1-2: The Template Revolution

The hardest part wasn't the technology setup – it was convincing our design team that their jobs were getting better, not eliminated.

I sat down with each designer individually. "Instead of spending your time copying and pasting text into layouts, what if you spent that time creating the templates that generate thousands of ads?" It took a while for that to sink in.

We had to completely restructure their work. Instead of thinking about individual ads, they had to think about systems. Instead of "make this ad," it became "create a template that can hold 500 variations of this ad type considering what we now know about all the challenges with different business names, prices, service names, seasonal messaging, and local market preferences." That's a totally different skill set.

The learning curve was steep. Our best designers had to unlearn some of their instincts about controlling every pixel and learn to trust the automation for the repetitive stuff while focusing their creativity on the template design.

### Months 3-4: Excel Workflows and Data Pipeline Hell

Nobody talks about this part because it's not sexy, but this is where most automation projects die.

We needed a way for our marketing team to input campaign data that would automatically flow through to ad generation. Sounds simple, right? It wasn't.

First, we had to standardize all our client data across hundreds of service providers. Different businesses had different naming conventions, different image quality standards, different messaging preferences. A dental clinic in Buenos Aires wanted different copy than a dental clinic in Bogotá, even for the same service. Everything had to be consistent for the automation to work while still allowing for local market customization.

Then we had to build the **Google Spreadsheet** templates that would feed the system. We used Google Sheets – not because it was the ideal solution, but because we didn't have the tech availability to code a custom system, and _**we didn't have GenAI back then**_. We needed to show it could work and prove ROI before we invested in more advanced systems, so we went with what was available.

Not just "put the business name here," but detailed mapping of every variable: which service categories for which countries, which language variations for which markets, which regulatory compliance text for which locations, which call-to-action worked best for which type of service provider.

I spent weeks just documenting how we made creative decisions for different client types across different markets. Turns out, our designers were making hundreds of micro-decisions on every ad based on the client's business type, target market, and local competition – decisions they couldn't even articulate until we tried to automate them.

### Months 5-6: Full Deployment and Team Adaptation

By month 5, the technology was working perfectly. We could generate thousands of ads in minutes. But our team still needed time to adapt to the new workflow.

The marketing team had to learn to think in terms of scalable client data, not individual ad requests for each service provider. Instead of "can you make an ad for this new dental clinic?", it became "here's the structured onboarding data for 15 new service providers with all their market variations mapped out."

Our designers evolved from ad creators to template architects and quality controllers. They'd spend Monday creating or updating templates, Tuesday reviewing the automated output for quality, and the rest of the week on strategic creative work that actually required human insight.

The most surprising thing? Once we got the process right, quality actually improved. When you're not rushing to manually create 200 ads, you can spend more time perfecting the templates that generate thousands.

## The Results and What Actually Changed

The numbers were pretty dramatic: from **100-200 ads per month to 30,000+ personalized ads per month**. Campaign prep went from _**2 full days to 2-3 hours**_. But those metrics don't tell the real story.

The real change was in what our creative team could focus on. Instead of being a production bottleneck, they became **_creative strategists_**. They had time to think about messaging frameworks, test new creative concepts, analyze performance data to improve templates.

Our design team went from being order-takers to being creative partners with marketing. When you're not spending all your time on execution, you can actually contribute to strategy.

The business impact went beyond efficiency. We could promote more service providers simultaneously, customize ads for smaller local markets within each country, and launch campaigns faster when new clients joined the marketplace. Instead of telling potential clients "we can start promoting your services next month," we could onboard them within days.

Quality stayed high because we could put more thought into the templates that worked for different service categories and markets, rather than rushing through individual ad creation for each new client under deadline pressure.

## The Real Lesson (And Why Most Automation Fails)

Here's what I learned that I wish someone had told me at the beginning: automating creative work isn't about replacing human creativity – it's about amplifying it.

The _**6-month timeline**_ wasn't because the technology was complex. Cloudinary and Excel aren't exactly cutting-edge. The 6-month timeline was because **_changing how people work is much harder than changing what tools they use_**.

Most companies try to automate their existing process and wonder why it doesn't work. We had to redesign the entire creative workflow around what could be automated and what required human judgment.

**The technology took 2 weeks to build. The process redesign took 6 months.** And honestly? If we'd tried to rush it, the whole thing would have failed.

One take: successful automation isn't about replacing what people do – it's about elevating what people do. Our designers didn't become obsolete; they became more valuable because they could focus on the work that actually required creativity instead of the work that was just time-consuming.

---

_Curious about what processes in your business could benefit from this kind of human-centric automation? The patterns are probably more obvious than you think._
