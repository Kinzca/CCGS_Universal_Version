# Cons of WFC vs. more traditional procgen approaches? : r/proceduralgeneration - Reddit

Cons of WFC vs. more traditional procgen approaches? : r/proceduralgeneration

[Skip to main content](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/#main-content) Cons of WFC vs. more traditional procgen approaches? : r/proceduralgeneration

Open menu

Open navigation 

Go to Reddit Home 

r/proceduralgeneration

TRENDING TODAY

Get App

Get the Reddit app

[Log In](https://www.reddit.com/login/)

Log in to Reddit

Expand user menu

Open settings menu

[Skip to Navigation](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/#left-sidebar-container) [Skip to Right Sidebar](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/#right-sidebar-container)

Back

[Go to proceduralgeneration](https://www.reddit.com/r/proceduralgeneration/)

[r/proceduralgeneration](https://www.reddit.com/r/proceduralgeneration/)

•

3y ago

[Cosmotect](https://www.reddit.com/user/Cosmotect/)

Locked post

Stickied post

Archived post

Report

# Cons of WFC vs. more traditional procgen approaches?

When a new, promising "holy grail like" approach is found in a given field or subfield, this approach then tends becomes the go-to point for all, especially newcomers.

Think Perlin Noise, SDF, buffer-style data processing, etc. All made big splashes in the last 10 years. And each one seems to be "The One True Way" in their respective areas. But before them, other approaches existed and were effective (even if less so).

Today, Wave Function Collapse is a contender for "The One True Way to do ProcGen". Like other formal grammars (e.g. L-systems), WFC makes this relatively arcane field far more approachable by providing a perhaps more structured framework within which to generate. WFC solves other problems for beginners, like providing simple spatial subdivision of planar space with compact results.

But what are the **cons** associated with WFC as vs. more historical, grammarless approaches?

Upvote 8 Downvote 12 Go to comments Share

Sort by: Best

Open comment sort options

Best

Top

New

Controversial

Old

Q&A

Search Comments Expand comment search

Cancel

# Comments Section

[fgennari](https://www.reddit.com/user/fgennari/)

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/jak37zd/)

WFC isn't a direct replacement for all types of ProcGen. It requires extra input data such as tiles and constraints, and is therefore more restricted in use. It's also slower than some other approaches, in particular for large areas to be generated. And it's not guaranteed to complete successfully, especially for complex tilesets. WFC also doesn't directly apply to generating infinite worlds, at least not in a deterministic way when approaching the world from any direction.

Upvote 7 Downvote Reply Award Share

Report

Award

Share

[Sirisian](https://www.reddit.com/user/Sirisian/)

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/jaj2lf8/)

I think you're confused about the use cases here. WFC is local generation. It's not a global solution and doesn't work well with big picture rules. If you attempt to use it for larger scene generation with more rules (especially distance ones) you'll notice it hits uncollapsible states frequently requiring a lot of rollback and various strategies that doesn't always converge to a solution (or an ideal one).

To get a handle on when to use these requires experimenting. Higher level rule-based systems tend to be more powerful between global and local though. If you have a specific application it's easier to explain.

Upvote 4 Downvote Reply Award Share

Report

Award

Share

[Cosmotect](https://www.reddit.com/user/Cosmotect/)

OP

• [3y ago](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/jaldbzi/)

• Edited 3y ago

Not confused, but I admit some attempt in my question at shoehorning WFC in as a generalised basis for all world generation. I'm asking this on behalf of someone else who asked me whether or not they should start procgen by using WFC. (To which the only sane answer is: "Depends on your use case") But it got me thinking.

[There is at least one solution to the WFC global / local problem](https://www.boristhebrave.com/2020/02/08/wave-function-collapse-tips-and-tricks/), but it may be limited due to the broader manner in which WFC generates. A multi-resolution (mipmap / quadtree style) approach could be used from coarsest to finest when generating -- I've done exactly this without using WFCs.

Upvote 1 Downvote Reply Award Share

Report

Award

Share

[More replies](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/jaldbzi/?force-legacy-sct=1) 

[MediumBillHaywood](https://www.reddit.com/user/MediumBillHaywood/)

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/jahgvfl/)

This is a very difficult question due to its scope: I think its only meaningful to compare procgen methods with respect to some specific task. Each of the procgen methods you mentioned is like a tool in a programmer's toolbox: each has its use and is more or less useful depending on the job at hand.

Upvote 6 Downvote Reply Award Share

Report

Award

Share

[KdotJPG](https://www.reddit.com/user/KdotJPG/)

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/jao9ai6/)

Directional bias!

Grid neighborhood constraint satisfaction (Wave Function Collapse) is really good at creating many types of tilemaps, building layouts, and pixel art. However it's characteristically poor at modeling isotropic (directionally-unbiased) natural phenomena. The fundamental workings of its grid-based rulesets make it essentially impossible to create outputs that don't look like the underlying algorithm cared an awful lot more about the cardinal directions than the rest -- which is indeed what is happening. To fix this, we will need a WFC implementation that operates on an irregular mesh (e.g. Poisson -> Delaunay) rather than a grid. I haven't seen this implemented yet.

You also mention Perlin noise as a comparison. But Perlin is cardinally-biased, too, and not really the best candidate to represent its use cases to contrast WFC from... at least not without some fixes of its own in place. Domain-rotated Perlin and good Simplex noise implementations create better visual impressions of non-directional-bias in textures and terrain. (If we can get a fast+portable implementation of gradient noise on an irregular layout, that will be even better!) The PCG field will be in a healthier state once unmitigated Perlin is not so often counted as the default choice for noise. I wrote in more detail about this [here](https://noiseposti.ng/posts/2022-01-16-The-Perlin-Problem-Moving-Past-Square-Noise.html).

Upvote 2 Downvote Reply Award Share

Report

Award

Share 

[deleted]

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/japswk8/)

nice article

Upvote 2 Downvote Reply Award Share

Report

Award

Share

[More replies](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/japswk8/?force-legacy-sct=1)

[Cosmotect](https://www.reddit.com/user/Cosmotect/)

OP

• [3y ago](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/jb8qioj/)

• Edited 3y ago

You've misunderstood my mentioning Perlin, SDF, buffers etc. I could just as well have mentioned scene graphs as "the next big thing" 20+ years ago. Those have nothing to do with procedural generation per se, but rather to do with (dogmatic) trends in software engineering, or its subfields like game dev. I guess this is clearer to those who've been software engineers for many years.

We do agree on your final point about dogmatic adherence to the use of Perlin Noise. It's a bit tiresome and does not lead to innovation in the "how" aspect of PCG.

Upvote 1 Downvote Reply Award Share

Report

Award

Share

[More replies](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/jb8qioj/?force-legacy-sct=1)

[DeliciousWaifood](https://www.reddit.com/user/DeliciousWaifood/)

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/jb78kpm/)

• Edited 3y ago

In games, WFC does a good job of recreating patterns, but it requires expensive post-checks to make sure the results are a desired gameplay state and if not either re-run the algorithm or do post processing. WFC is a great tool for creating variance in patterns, but is usually better when used in conjunction with more predictable algorithms so you can have more control over what it is doing.

It also doesn't work for seeded infinite worlds because WFC results will change depending on in which areas are generated and the player is the one deciding that order in an infinite world.

I don't think WFC really replaces anything, it's just a cool tool that does something we couldn't do as effectively without it: generate patterns with high variance but constrained to the rules of a very simple and easy to produce input. In PCG you aren't going to find a "holy grail" it's a matter of collecting tools and combining them to produce specific results for your use-case.

Upvote 2 Downvote Reply Award Share

Report

Award

Share

[Cosmotect](https://www.reddit.com/user/Cosmotect/)

OP

• [3y ago](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/comment/jb8r0yc/)

Great answer.

In PCG you aren't going to find a "holy grail"

Agreed. It's not me you need to convince, it's the hordes of young programmers who are now getting the idea that WFC is "the fashionable thing", or "the only way" to do PCG.

Part of the thrust of my question was that dogmatic adherence to approaches without taking their pros and cons in mind, is not a good mindset for engineers of any kind.

Upvote 1 Downvote Reply Award Share

Report

Award

Share

New to Reddit?

Create your account and connect with a world of communities.

[Continue with Email](https://www.reddit.com/register/)

[Continue With Phone Number](https://www.reddit.com/login/)

By continuing, you agree to our [User Agreement](https://www.redditinc.com/policies/user-agreement) and acknowledge that you understand the [Privacy Policy](https://www.redditinc.com/policies/privacy-policy).

# Related Answers Section

Related Answers

[Software for creating procedural landscapes](https://www.reddit.com/answers/f39f3e64-836b-4a98-bc65-9cf524aed1d1/?q=Software+for+creating+procedural+landscapes&source=PDP)

[How procedural generation impacts game design](https://www.reddit.com/answers/88a9dcbe-deba-49aa-b766-e4ede7482188/?q=How+procedural+generation+impacts+game+design&source=PDP)

[Exploring randomness in procedural algorithms](https://www.reddit.com/answers/b1740668-a4f1-48f0-b81e-887e111caee8/?q=Exploring+randomness+in+procedural+algorithms&source=PDP)

[Techniques for generating realistic terrain](https://www.reddit.com/answers/187478fe-c807-405c-890f-9f67a4868539/?q=Techniques+for+generating+realistic+terrain&source=PDP)

[The future of procedural generation in gaming](https://www.reddit.com/answers/596d1720-503e-42b7-8795-665f98c00d36/?q=The+future+of+procedural+generation+in+gaming&source=PDP)

# More posts you may like

[This hits a little too close to home](https://www.reddit.com/r/IndieGameDevs/comments/1pj0ayb/this_hits_a_little_too_close_to_home/) [r/IndieGameDevs](https://www.reddit.com/r/IndieGameDevs/) • 4mo ago [

### This hits a little too close to home

](https://www.reddit.com/r/IndieGameDevs/comments/1pj0ayb/this_hits_a_little_too_close_to_home/)  222 upvotes · 39 comments

[Oversimplification goes BRRRRRRRRRRRRR](https://www.reddit.com/r/ParadoxExtras/comments/1ksfg5g/oversimplification_goes_brrrrrrrrrrrrr/) [r/ParadoxExtras](https://www.reddit.com/r/ParadoxExtras/) • 1y ago [

### Oversimplification goes BRRRRRRRRRRRRR

](https://www.reddit.com/r/ParadoxExtras/comments/1ksfg5g/oversimplification_goes_brrrrrrrrrrrrr/)  1.2K upvotes · 13 comments

[[OC] Did I succeed in making the most boring design possible?](https://www.reddit.com/r/characterdesign/comments/1shjf5e/oc_did_i_succeed_in_making_the_most_boring_design/) [r/characterdesign](https://www.reddit.com/r/characterdesign/) • 9d ago [

### [OC] Did I succeed in making the most boring design possible?

](https://www.reddit.com/r/characterdesign/comments/1shjf5e/oc_did_i_succeed_in_making_the_most_boring_design/)  2.8K upvotes · 346 comments

[Another thing I struggle with](https://www.reddit.com/r/Archiveofourownmemes/comments/1po8j0l/another_thing_i_struggle_with/) [r/Archiveofourownmemes](https://www.reddit.com/r/Archiveofourownmemes/) • 4mo ago [

### Another thing I struggle with

](https://www.reddit.com/r/Archiveofourownmemes/comments/1po8j0l/another_thing_i_struggle_with/)  692 upvotes · 29 comments

[Oops! Unintended World building!](https://www.reddit.com/r/Archiveofourownmemes/comments/1rn7tgk/oops_unintended_world_building/) [r/Archiveofourownmemes](https://www.reddit.com/r/Archiveofourownmemes/) • 1mo ago [

### Oops! Unintended World building!

](https://www.reddit.com/r/Archiveofourownmemes/comments/1rn7tgk/oops_unintended_world_building/)  4.9K upvotes · 150 comments

[I mean, yeah, I can tell](https://www.reddit.com/r/BadRPerStories/comments/1sdbytq/i_mean_yeah_i_can_tell/) [r/BadRPerStories](https://www.reddit.com/r/BadRPerStories/) • 13d ago [

### I mean, yeah, I can tell

](https://www.reddit.com/r/BadRPerStories/comments/1sdbytq/i_mean_yeah_i_can_tell/)  113 upvotes · 36 comments

[This is scary; it is a systemic failure.](https://www.reddit.com/r/GetMotivatedMindset/comments/1rxy1sr/this_is_scary_it_is_a_systemic_failure/) [r/GetMotivatedMindset](https://www.reddit.com/r/GetMotivatedMindset/) • 1mo ago [

### This is scary; it is a systemic failure.

](https://www.reddit.com/r/GetMotivatedMindset/comments/1rxy1sr/this_is_scary_it_is_a_systemic_failure/)  3K upvotes · 141 comments

[Friendly reminder to not do this!!](https://www.reddit.com/r/Archiveofourownmemes/comments/1s9bsf1/friendly_reminder_to_not_do_this/) [r/Archiveofourownmemes](https://www.reddit.com/r/Archiveofourownmemes/) • 18d ago [

### Friendly reminder to not do this!!

](https://www.reddit.com/r/Archiveofourownmemes/comments/1s9bsf1/friendly_reminder_to_not_do_this/) 290 upvotes · 64 comments

[And there's nothing wrong with that](https://www.reddit.com/r/Archiveofourownmemes/comments/1rlt9u5/and_theres_nothing_wrong_with_that/) [r/Archiveofourownmemes](https://www.reddit.com/r/Archiveofourownmemes/) • 1mo ago [

### And there's nothing wrong with that

](https://www.reddit.com/r/Archiveofourownmemes/comments/1rlt9u5/and_theres_nothing_wrong_with_that/)  47 upvotes · 7 comments

[Trying to make the most modern and advanced society possible](https://www.reddit.com/r/crusaderkings2/comments/1pwg62s/trying_to_make_the_most_modern_and_advanced/) [r/crusaderkings2](https://www.reddit.com/r/crusaderkings2/) • 4mo ago [

### Trying to make the most modern and advanced society possible

](https://www.reddit.com/r/crusaderkings2/comments/1pwg62s/trying_to_make_the_most_modern_and_advanced/)  211 upvotes · 22 comments

[First time being this blindsided](https://www.reddit.com/r/Archiveofourownmemes/comments/1qvsixj/first_time_being_this_blindsided/) [r/Archiveofourownmemes](https://www.reddit.com/r/Archiveofourownmemes/) • 2mo ago [

### First time being this blindsided

](https://www.reddit.com/r/Archiveofourownmemes/comments/1qvsixj/first_time_being_this_blindsided/)  326 upvotes · 21 comments

[Natural progression from exam world to real world](https://www.reddit.com/r/networkingmemes/comments/1q6m3bt/natural_progression_from_exam_world_to_real_world/) [r/networkingmemes](https://www.reddit.com/r/networkingmemes/) • 3mo ago [

### Natural progression from exam world to real world

](https://www.reddit.com/r/networkingmemes/comments/1q6m3bt/natural_progression_from_exam_world_to_real_world/)  1.4K upvotes · 43 comments

[The mind works in mysterious ways](https://www.reddit.com/r/Archiveofourownmemes/comments/1r5zf9k/the_mind_works_in_mysterious_ways/) [r/Archiveofourownmemes](https://www.reddit.com/r/Archiveofourownmemes/) • 2mo ago [

### The mind works in mysterious ways

](https://www.reddit.com/r/Archiveofourownmemes/comments/1r5zf9k/the_mind_works_in_mysterious_ways/)  86 upvotes · 12 comments

[I get tired of seeing the same comment on every AitF.](https://www.reddit.com/r/allinthefamily/comments/1r43puh/i_get_tired_of_seeing_the_same_comment_on_every/) [r/allinthefamily](https://www.reddit.com/r/allinthefamily/) • 2mo ago [

### I get tired of seeing the same comment on every AitF.

](https://www.reddit.com/r/allinthefamily/comments/1r43puh/i_get_tired_of_seeing_the_same_comment_on_every/) 41 upvotes · 32 comments

[The duality of Man](https://www.reddit.com/r/Archiveofourownmemes/comments/1rb8vmw/the_duality_of_man/) [r/Archiveofourownmemes](https://www.reddit.com/r/Archiveofourownmemes/) • 2mo ago [

### The duality of Man

](https://www.reddit.com/r/Archiveofourownmemes/comments/1rb8vmw/the_duality_of_man/)  107 upvotes · 7 comments

[technological progress](https://www.reddit.com/r/SmugIdeologyMan/comments/1oij5dk/technological_progress/) [r/SmugIdeologyMan](https://www.reddit.com/r/SmugIdeologyMan/) • 6mo ago [

### technological progress

](https://www.reddit.com/r/SmugIdeologyMan/comments/1oij5dk/technological_progress/)  284 upvotes · 12 comments

[Maybe I'm wrong but doesn't A mean anyone!?](https://www.reddit.com/r/BadRPerStories/comments/1s5hqxk/maybe_im_wrong_but_doesnt_a_mean_anyone/) [r/BadRPerStories](https://www.reddit.com/r/BadRPerStories/) • 22d ago [

### Maybe I'm wrong but doesn't A mean anyone!?

](https://www.reddit.com/r/BadRPerStories/comments/1s5hqxk/maybe_im_wrong_but_doesnt_a_mean_anyone/) 34 upvotes · 46 comments

[Well, I tried.](https://www.reddit.com/r/Archiveofourownmemes/comments/1sndz2h/well_i_tried/) [r/Archiveofourownmemes](https://www.reddit.com/r/Archiveofourownmemes/) • 2d ago [

### Well, I tried.

](https://www.reddit.com/r/Archiveofourownmemes/comments/1sndz2h/well_i_tried/)  2.3K upvotes · 52 comments

[I don't know if anyone thought of this argument yet](https://www.reddit.com/r/DefendingAIArt/comments/1sjcemv/i_dont_know_if_anyone_thought_of_this_argument_yet/) [r/DefendingAIArt](https://www.reddit.com/r/DefendingAIArt/) • 7d ago [

### I don't know if anyone thought of this argument yet

](https://www.reddit.com/r/DefendingAIArt/comments/1sjcemv/i_dont_know_if_anyone_thought_of_this_argument_yet/)  107 upvotes · 27 comments

[Budget constraints, amirite?](https://www.reddit.com/r/economicsmemes/comments/1si5gib/budget_constraints_amirite/) [r/economicsmemes](https://www.reddit.com/r/economicsmemes/) • 8d ago [

### Budget constraints, amirite?

](https://www.reddit.com/r/economicsmemes/comments/1si5gib/budget_constraints_amirite/)  333 upvotes · 12 comments

[A small pet peeve of mine (maybe more than small)](https://www.reddit.com/r/Archiveofourownmemes/comments/1sn4tp0/a_small_pet_peeve_of_mine_maybe_more_than_small/) [r/Archiveofourownmemes](https://www.reddit.com/r/Archiveofourownmemes/) • 3d ago [

### A small pet peeve of mine (maybe more than small)

](https://www.reddit.com/r/Archiveofourownmemes/comments/1sn4tp0/a_small_pet_peeve_of_mine_maybe_more_than_small/)  1.4K upvotes · 94 comments

[Not mutually exclusive](https://www.reddit.com/r/Ai_art_is_not_art/comments/1pu7arz/not_mutually_exclusive/) [r/Ai_art_is_not_art](https://www.reddit.com/r/Ai_art_is_not_art/) • 4mo ago [

### Not mutually exclusive

](https://www.reddit.com/r/Ai_art_is_not_art/comments/1pu7arz/not_mutually_exclusive/) 34 upvotes · 7 comments

[Isn't it allowed anymore to write something just because it looks cool?](https://www.reddit.com/r/worldjerking/comments/1sm9uw3/isnt_it_allowed_anymore_to_write_something_just/) [r/worldjerking](https://www.reddit.com/r/worldjerking/) • 3d ago [

### Isn't it allowed anymore to write something just because it looks cool?

](https://www.reddit.com/r/worldjerking/comments/1sm9uw3/isnt_it_allowed_anymore_to_write_something_just/) 35 upvotes · 11 comments

[Slow burn with great world building?](https://www.reddit.com/r/ScienceFictionRomance/comments/1sj0gcy/slow_burn_with_great_world_building/) [r/ScienceFictionRomance](https://www.reddit.com/r/ScienceFictionRomance/) • 7d ago [

### Slow burn with great world building?

](https://www.reddit.com/r/ScienceFictionRomance/comments/1sj0gcy/slow_burn_with_great_world_building/) 44 upvotes · 38 comments

## View Post in

[Português (Brasil)](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/?tl=pt-br)

[Français](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/?tl=fr)

[繁體中文](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/?tl=zh-hant)

[Tiếng Việt](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/?tl=vi)

See more See fewer

[Bahasa Melayu](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/?tl=ms)

[Magyar](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/?tl=hu)

[Română](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/?tl=ro)

[Svenska](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/?tl=sv)

[한국어](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/?tl=ko)

# Community Info Section

[r/proceduralgeneration](https://www.reddit.com/r/proceduralgeneration/)

Join

Procedural generation

This subreddit is about everything procedurally generated (media, techniques, ...)

Show more

Public

Anyone can view, post, and comment to this community

## Top Posts

[Reddit reReddit: Top posts of March 1, 2023](https://www.reddit.com/posts/2023/march-1-1/global/)

[Reddit reReddit: Top posts of March 2023](https://www.reddit.com/posts/2023/march/global/)

[Reddit reReddit: Top posts of 2023](https://www.reddit.com/posts/2023/global/)

[Reddit Rules](https://www.redditinc.com/policies/content-policy) [Privacy Policy](https://www.reddit.com/policies/privacy-policy) [User Agreement](https://www.redditinc.com/policies/user-agreement) [Your Privacy Choices](https://support.reddithelp.com/hc/articles/43980704794004) [Accessibility](https://support.reddithelp.com/hc/sections/38303584022676-Accessibility) [Reddit, Inc. © 2026. All rights reserved.](https://redditinc.com/)

Expand Navigation

Expand Navigation

Collapse Navigation

Collapse Navigation 

0cAFcWeA7z3cF5R2rJFIi5p92HDCfsOHQDDXDw2zS11pbQixkfa38sjY53jMm_xl99MhV1skcoeDa3x19zS6KS-Yw1lZiie9pyJl2sHs4TTU4D31IQBUBVa3A-8pxahcU_v-UmohewIDtXZynJb5kpv_Gxd5Phcco29wJZQ1d8fWimprZgz849BJFZCAq0q47JxV1ITETshkRXTpP4UhksupWM3SEtZjo-CWR6W-h5KKwLGH4lwVVM3CnfWu_BezNOPo90zGeH6ZOZmwde5NfyiTWQINaaIklsqNYLwo0f6IdVGDm9O9cePdVjoS8TJ7kGGMfzgU9DWKK3ZFOrvI8DgUOA5AYOwrzKeejeQ9p5ToD2JMH6HGP1VAyTSAfsrorfseW17P7lM-oAWWhymppM8njYTDVxts1rgJqO75WbtjyfpRmKY83yRYF0h3GHfu17evVMURkqw4vvpfEhVmnakTh--daxOh0rBjftuix087IVNS1q26kuPWYL_K0idOPIseNH6XblnFX2CjseqVQSMcWsrY6c3ZrYdqiBlVeosHQkfn7RRLqVpacZ6Nke0C6Vwvfz4LjWcEiJfzGvqgDBv7bHndvt4nY6dN4QgpTLbU6vglf2XTG5hRF9RDVBjcVsjcA5vptZnJg-SdgtIbmS3sN2l05ATatRKvKZNsIWeADfeTwH1VUsmTU56SL9SQ6QpFMiaiBvXDs6u4BxBVC9Px93kO_l5fvXv0k8CvupUYr1tb-jkTUDBqlh_-0LugNNXnQw756a_9pR7ZEkVfp7Eo4g5xSNvyK85ecHceJvDyyRoYEinhYmKrSpzaVDd1e4sJ11N-SivXnDq7MPL4ZpY3oRDhizbgMghkXwwrVTOFL44R6ZwGvD2QmgxDM6fQW_bEnORUIaKlDexl6aN4kd-FWK1x9ZyiELqdMPJoEWmFEGeWQYPbo427ia0vfgQd0I6-BvgPoRmMhg4EZZRONYPfqugDstbks6M9I7TOrowNrlbAHcnDoWyotFWhnjpsszDXe2zJpYpDdr2uEyND4iFE3ZRvMul9yafV88nw-Xep-v8FHeeMCeEv32h983HGxzXTD9sR-W80QELbpsKp_5aW6FYkZIIx05_v3KkcEwhKBY7ZWGIidz1bdY5fmBeXiCoyBMosuhsGmzAA2BWLHw9jzCQbTvXdB_db-4sqvuUKQ6q3KXNmIWmOG-fSLT_Y7svJSCyk77gaiwRBxWxalFPWShyQP-cKVhtDebI49zNMaCqSYr7bkW0ikwl4Gy_bLAzgLYQq4RfBpT4DwkMjg_CU6Xf-NTa1u-HNCtUsqS_BtY_beF2D-EOoYzWPtH4T8jHOU0cATXh6vAt6zW7SDIqDpPxE9BLTCiK38SRRGbWyl_tgRFkAKl-JLyELES9XJYqG6y48S2yivs6Wt4H2vkqo_9_-F2OlUuHFX1Gf63VIGD39JNJPG8G1XkUsOgVxTqlw8h_BSMppFPFPfMu7qSbPt9HVRR5YP3F3Dmw69rKPw8indPUWQ8cFkX-cjoyfSDWk2MBzy1hXN_cC56cNNvLc6ABWBfXEhj8-tPDXu5Ra1m60_-bXnY36mkqu_bpBm2cNw7sIH-fpNQBkjvs7KkQIE92NPUi3BjBypDZbwfyYU5lr2FyI1-6XVNVW8DllUS37kyEJZ9MUSPMg-sEhauCBXRH8Fmk_rdCnHQe1hv6jMRuYh7iY56z_2slR9wFp3apA-0kFdWoRSXh9GkkBnB2JqgRaMqOc8eTDSRPlHBEs-C34b9QiS3UNfiW0EfZ-7yPFtLAkdmlU6NfkNATXpim4pGagENVyIfA0bzFN505BCilfsfMXv2p0Dv1ZjwHINKz2kxO95vp9FMtp60LyeDmvoVMdrE60J8-z0Gf06ret_Jm55dPMGDN4GFDIHOKGVSYrsXHeGv_H5Fvx-XD9_MtJx-Hyloe4V5GaZnGh39rVhaJTYOEO3WROCIfubs7I3iTTkw19kbdSsQYILJai0G0qNRGtnn749Gsw8giXKZqsPTwfh1ZNcycWDENPiFN8F7NJjLxFrGxV1ws-__6B8ke-ge0FFuskna9_iQX_lOtbVEIzFl-vIEk0ttRLE4JuOseS3n0Pf3jtPTKmtDom2IpsNth9m2DY2vhAiKmcwJubxWN49QpTIcAqu1_WK3CvURCu69CP_dHmykFFc4Yf1pYqWr1LjYzmsLIw