# Resolving contradictions in WFC more efficiently than naive backtracking

performance - Resolving contradictions in WFC more efficiently than naive backtracking - Game Development Stack Exchange

By clicking “Sign up”, you agree to our [terms of service](https://gamedev.stackexchange.com/legal/terms-of-service/public) and acknowledge you have read our [privacy policy](https://gamedev.stackexchange.com/legal/privacy-policy).

Sign up with Google

# OR

Email

Password

Sign up

Already have an account? [Log in](https://gamedev.stackexchange.com/users/login)

[Skip to main content](https://gamedev.stackexchange.com/questions/178443/resolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking#content)

1.

Stack Internal Stack Overflow for Teams is now called **Stack Internal**. Bring the best of human thought and AI automation together at your work. [Try for free](https://stackoverflowteams.com/teams/create/free/?utm_medium=referral&utm_source=gamedev-community&utm_campaign=side-bar&utm_content=explore-teams) [Learn more](https://stackoverflow.co/internal/?utm_medium=referral&utm_source=gamedev-community&utm_campaign=side-bar&utm_content=explore-teams)

[Stack Internal](javascript:void(0))

Bring the best of human thought and AI automation together at your work. [Learn more](https://stackoverflow.co/internal/?utm_medium=referral&utm_source=gamedev-community&utm_campaign=side-bar&utm_content=explore-teams-compact)

**Stack Internal**

Knowledge at work

Bring the best of human thought and AI automation together at your work.

[Explore Stack Internal](https://stackoverflow.co/internal/?utm_medium=referral&utm_source=gamedev-community&utm_campaign=side-bar&utm_content=explore-teams-compact-popover)

Stack Exchange Network

Stack Exchange network consists of 183 Q&A communities including [Stack Overflow](https://stackoverflow.com/), the largest, most trusted online community for developers to learn, share their knowledge, and build their careers.

[Visit Stack Exchange](https://stackexchange.com/)

Loading…

[Tour Start here for a quick overview of the site](https://gamedev.stackexchange.com/tour)

[Help Center Detailed answers to any questions you might have](https://gamedev.stackexchange.com/help)

[Meta Discuss the workings and policies of this site](https://gamedev.meta.stackexchange.com/)

[About Us Learn more about Stack Overflow the company, and our products](https://stackoverflow.co/)

### [current community](https://gamedev.stackexchange.com/)

[Game Development](https://gamedev.stackexchange.com/) [help](https://gamedev.stackexchange.com/help) [chat](https://chat.stackexchange.com?tab=site&host=gamedev.stackexchange.com)

[Game Development Meta](https://gamedev.meta.stackexchange.com/)

### your communities

[Sign up](https://gamedev.stackexchange.com/users/signup?ssrc=site_switcher&returnurl=https%3a%2f%2fgamedev.stackexchange.com%2fquestions%2f178443%2fresolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking) or [log in](https://gamedev.stackexchange.com/users/login?ssrc=site_switcher&returnurl=https%3a%2f%2fgamedev.stackexchange.com%2fquestions%2f178443%2fresolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking) to customize your list.

### [more stack exchange communities](https://stackexchange.com/sites)

[company blog](https://stackoverflow.blog/) 4. 5. [Log in](https://gamedev.stackexchange.com/users/login?ssrc=head&returnurl=https%3a%2f%2fgamedev.stackexchange.com%2fquestions%2f178443%2fresolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking) 6. [Sign up](https://gamedev.stackexchange.com/users/signup?ssrc=head&returnurl=https%3a%2f%2fgamedev.stackexchange.com%2fquestions%2f178443%2fresolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking)

# [Resolving contradictions in WFC more efficiently than naive backtracking](https://gamedev.stackexchange.com/questions/178443/resolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking)

[Ask Question](https://gamedev.stackexchange.com/questions/ask)

Asked 6 years, 3 months ago

Modified [2 years, 8 months ago](https://gamedev.stackexchange.com/questions/178443/resolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking?lastactivity)

Viewed 2k times

This question shows research effort; it is useful and clear

5

Save this question. 

Show activity on this post.

I just recently got started with the **Wave-function-collapse Algorithm (WFC)** in 3-dimensional space. I got the fundamentals working and wanted to now move on to let the algorithm automatically resolve possible upcoming contradictions/error-states.

For this, I (inspired by this [Tweet from Oskar Stålberg](https://twitter.com/OskSta/status/793806535898136576)) created a [highly constricted Tileset](https://i.sstatic.net/3wbDQ.jpg) that will run into such contradictions quite often.

(Some [examples](https://i.sstatic.net/9Z4fw.jpg) of constructed Levels in a (3x3x3)-Grid using this tileset.)

Note that this tileset will, for example, always run into a contradiction if the number of bottom contacts is odd since every pipe that comes out must also finish at the bottom.I've now implemented basic (naive) backtracking, which means whenever the algorithm runs into a contradiction, it goes back to the last decision made undoes it and tries another. This does work, however, because the possibility space for placed modules can become huge, it may resolve in a really slow generation trying out every possibility before having backtracked far enough to resolve the modules that caused this contradiction. ( [Gif 1](https://i.sstatic.net/7WJH1.jpg), [Gif 2](https://i.sstatic.net/jJjBU.jpg))

### Now I'm looking to optimize this algorithm.

I thought about using [Backjumping](https://en.wikipedia.org/wiki/Backjumping) instead of Backtracking with a quadratically increasing jumping distance each time it runs into **the same** contradiction again (first time we jump back 1, then 2, then 4, 8, 16, ...). But I'm not sure how to detect the overcoming of the first contradiction to be able to then reset the jumping distance.

I also don't get [Oskar Stålberg's](https://twitter.com/OskSta/status/793806535898136576) [solution to this](https://twitter.com/OskSta/status/793806535898136576). In the post's comments, he speaks of cutting out Chunks to try and resolve the contradiction but how does he calculate these chunks?

[performance](https://gamedev.stackexchange.com/questions/tagged/performance)

[procedural-generation](https://gamedev.stackexchange.com/questions/tagged/procedural-generation)

[Share](https://gamedev.stackexchange.com/q/178443)

Share a link to this question https://gamedev.stackexchange.com/q/178443

Copy link [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

Follow

Follow this question to receive notifications

[edited Jun 16, 2020 at 10:15](https://gamedev.stackexchange.com/posts/178443/revisions)

[Community](https://gamedev.stackexchange.com/users/-1/community) Bot

1

asked Jan 17, 2020 at 19:17

[atalantus](https://gamedev.stackexchange.com/users/122307/atalantus)

153 5 5 bronze badges

1

Just for future references my [Reddit post also got a useful answer](https://www.reddit.com/r/proceduralgeneration/comments/eq2vxh/resolving_error_states_in_wfc_more_efficiently/). atalantus – [atalantus](https://gamedev.stackexchange.com/users/122307/atalantus) 2022-02-17 22:38:30 +00:00 [Commented Feb 17, 2022 at 22:38](https://gamedev.stackexchange.com/questions/178443/resolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking#comment362351_178443)

[Add a comment](https://gamedev.stackexchange.com/questions/178443/resolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking) |

## 3 Answers 3

Sorted by: [Reset to default](https://gamedev.stackexchange.com/questions/178443/resolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking?answertab=scoredesc#tab-top)

Highest score (default)

Date modified (newest first)

Date created (oldest first)

This answer is useful

7

Save this answer. 

Show activity on this post.

[I went ahead and replied to Oskar Stålberg's tweet about this technique to ask for clarification](https://twitter.com/D_M_Gregory/status/1218321820379746304). (Try it yourself! Most game developers who post about their work on Twitter are happy to share more details & insights with their peers)

[Here's what he said](https://twitter.com/OskSta/status/1218477384095141889):

In an old implementation of WFC I used to rebuild the possibility space around a contradiction. But I don't think that solution is good in most cases. You can't know when the seeds of the contradiction were sowed. Its usually **faster to reset the whole thing**.

[Another developer, Ebyan Alvarez-Buylla, agreed](https://twitter.com/Nolithius/status/1218534693903138818):

I have only used WFC in prototypes but yeah the lazy “ **just scrap everything and start over**” seemed simple and performant. Similarly with Markov Chain generators, which I'm more familiar with.

So: attempting to identify the specific root cause of the contradiction, by backtracking or even just estimating its location, may be more trouble than it's worth. Bits that appear salvageable might not be, due to long chains of implications that will inevitably lead to the same or new contradictions. Even a perfect solver might spend a lot of time evaluating what to keep, and end up keeping very little for all that trouble.

These devs find it's faster to start over with a blank canvas. The first round of generation is fast to re-do anyway, and it keeps your solution simple. Or as Ripley would say,

Based on their expertise, I'd recommend that you only try to do a more localized backtrack/reset if you have domain-specific knowledge that you can use to bound the problem for the specific tileset you're using.

Say, if you were generating islands in the ocean, and you know contradictions can't occur in ocean tiles because the set of possible adjacencies in your tileset is complete for those cases. In such a case, when a contradiction occurs in one island, it suffices to clear only that one island: flood-filling (erasing) outward until you reach an ocean tile, and leaving the rest of the archipelago intact.

Or in the absence of a hard guarantee like this, if your tilesets tend to exhibit a behavior where "local" contradictions are common, you could apply an escalating response. The first time you encounter a contradiction (with x/n collapsed tiles), erase & reset a 3x3x3 cube around the site of the contradiction and resume. If you hit a second contradiction with (x+f)/n or fewer tiles collapsed, assume it's from the same cause and you needed to undo more: double the size of the region to erase this time. Continue this way, doubling the size of the erased region each time until you manage to get further than (x+f)/n or you've completely reset the map, then bring your eraser size back to the default for the next contradiction you encounter. This lets you solve small touch-ups without massive regeneration, but still falls back on a full wipe in only a logarithmic number of attempts when the "local" heuristic fails you.

But without these types of domain-specific guidance, solving the problem of bounding the contradiction in the most general case seems likely to fail or perform poorly.

[Share](https://gamedev.stackexchange.com/a/178542)

Share a link to this answer https://gamedev.stackexchange.com/a/178542

Copy link [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

Follow

Follow this answer to receive notifications

[edited Jan 22, 2020 at 19:49](https://gamedev.stackexchange.com/posts/178542/revisions)

answered Jan 22, 2020 at 17:45

[DMGregory](https://gamedev.stackexchange.com/users/39518/dmgregory)

♦

141k 23 23 gold badges 258 258 silver badges 405 405 bronze badges

[Add a comment](https://gamedev.stackexchange.com/questions/178443/resolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking) |

This answer is useful

4

Save this answer. 

Show activity on this post.

I've found the same issues you have with backtracking, and restarting is often not an acceptable approach for larger generations.

I think backjumping is a fruitful avenue, but I've not seen it expored.

One process that seems to work ok is "Modifying by blocks", which is a specific form of doing WFC in chunks. Unlike more naive reparation approaches, it "locks in" chunks that actually work, which sometimes is better than just guessing where contradictions are.

More information can be found on the authors website, or the writeup on my blog:

[https://paulmerrell.org/model-synthesis/](https://paulmerrell.org/model-synthesis/)

[https://www.boristhebrave.com/2021/10/26/model-synthesis-and-modifying-in-blocks/](https://www.boristhebrave.com/2021/10/26/model-synthesis-and-modifying-in-blocks/)

[Share](https://gamedev.stackexchange.com/a/198763)

Share a link to this answer https://gamedev.stackexchange.com/a/198763

Copy link [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

Follow

Follow this answer to receive notifications

answered Jan 8, 2022 at 23:55

[BorisTheBrave](https://gamedev.stackexchange.com/users/131254/boristhebrave)

131 1 1 silver badge 2 2 bronze badges

[Add a comment](https://gamedev.stackexchange.com/questions/178443/resolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking) |

This answer is useful

4

Save this answer. 

Show activity on this post.

The problem with "scraping everything and starting over" is that if the problem instance is big enough, you might always, or very nearly always, get into a contradiction.

One solution is to use a "block based method". That is, like the original question suggests, earmark a sub-chunk of the original space, re-allow all possible tiles at each of those locations, then run WFC as normal to try and find a solution. If no solution is found, revert to the old chunk, otherwise accept it.

(image above taken from [github.com/merrell42/model-synthesis](https://github.com/merrell42/model-synthesis/blob/master/figures/blocks.jpg))

The question of what chunk size to use will dependent on the tile set and rules involved. I believe there's a "characteristic length" for any given tile set, potentially complicated by whether it's near a boundary or in the middle-bulk section, where the probability of finding a valid configuration rapidly drops beyond it. Finding the characteristic length for a given tile set it probably difficult so practically this should be done empirically.

Implicit in this algorithm is that you can start from a valid "known good" state. Many tile sets in question have an "empty" tile, so the "all empty" configuration is often a valid one to start from. This might not be a drawback but if an initial condition is needed that's constrained the grid in a certain way, normal WFC might be better suited as solving the initial state might be as much work as finding another, valid, configuration.

Merrell, the original researcher behind/inspiration for WFC, talks about this in his "Model Synthesis" thesis [0], and even has code available [1]. Boris the brave also has an article on using the block based method for a trickier "escher-esque" like tile set [2]. Below is an example from BorisTheBrave.com of an overlapping blocks method on a grass and path tile set:

(image above taken from [boristhebrave.com](https://www.boristhebrave.com/2021/10/26/model-synthesis-and-modifying-in-blocks/))

["Model Synthesis" thesis by Paul C. Merrell](https://paulmerrell.org/wp-content/uploads/2021/06/thesis.pdf)

[github.com/merell42/model-synthesis](https://github.com/merrell42/model-synthesis)

["Model Synthsis and Modifying in Blocks" at boristhebrave.com](https://www.boristhebrave.com/2021/10/26/model-synthesis-and-modifying-in-blocks/)

[Share](https://gamedev.stackexchange.com/a/206898)

Share a link to this answer https://gamedev.stackexchange.com/a/206898

Copy link [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

Follow

Follow this answer to receive notifications

answered Aug 16, 2023 at 21:13

[abetusk](https://gamedev.stackexchange.com/users/126593/abetusk)

196 4 4 bronze badges

[Add a comment](https://gamedev.stackexchange.com/questions/178443/resolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking) |

## You must [log in](https://gamedev.stackexchange.com/users/login?ssrc=question_page&returnurl=https%3A%2F%2Fgamedev.stackexchange.com%2Fquestions%2F178443) to answer this question.

Start asking to get answers

Find the answer to your question by asking.

[Ask question](https://gamedev.stackexchange.com/questions/ask)

Explore related questions

[performance](https://gamedev.stackexchange.com/questions/tagged/performance)

[procedural-generation](https://gamedev.stackexchange.com/questions/tagged/procedural-generation)

See similar questions with these tags.

The Overflow Blog

[No country left behind with sovereign AI](https://stackoverflow.blog/2026/04/17/no-country-left-behind-with-sovereign-ai/?cb=1)

[Human input needed: take our survey on AI agents](https://stackoverflow.blog/2026/04/15/human-input-needed-take-our-survey-on-ai-agents/?cb=1)

Report this ad

Related

[7](https://gamedev.stackexchange.com/questions/83382/why-does-accessing-a-uniform-float-make-my-shader-more-than-twice-as-slow?rq=1)

[Why does accessing a uniform float make my shader more than twice as slow?](https://gamedev.stackexchange.com/questions/83382/why-does-accessing-a-uniform-float-make-my-shader-more-than-twice-as-slow?rq=1)

[1](https://gamedev.stackexchange.com/questions/144754/unity-engine-memory-usage-issue-taking-up-more-than-it-should?rq=1)

[Unity engine memory usage issue - taking up more than it should](https://gamedev.stackexchange.com/questions/144754/unity-engine-memory-usage-issue-taking-up-more-than-it-should?rq=1)

[8](https://gamedev.stackexchange.com/questions/149914/why-is-the-for-loop-more-efficient-than-the-for-each-loop-in-unity?rq=1)

[Why is the for loop more efficient than the for each loop in Unity?](https://gamedev.stackexchange.com/questions/149914/why-is-the-for-loop-more-efficient-than-the-for-each-loop-in-unity?rq=1)

[4](https://gamedev.stackexchange.com/questions/154654/why-does-an-emulator-use-more-ram-than-the-original-system?rq=1)

[Why does an emulator use more RAM than the original system?](https://gamedev.stackexchange.com/questions/154654/why-does-an-emulator-use-more-ram-than-the-original-system?rq=1)

[2](https://gamedev.stackexchange.com/questions/156522/how-to-render-a-large-tile-based-2d-world-efficiently-using-javafx-scalafx-or-m?rq=1)

[How to render a large tile-based 2D world efficiently (using JavaFX/ScalaFX or more generally)](https://gamedev.stackexchange.com/questions/156522/how-to-render-a-large-tile-based-2d-world-efficiently-using-javafx-scalafx-or-m?rq=1)

[Hot Network Questions](https://stackexchange.com/questions?tab=hot)

[Does the category of metrizable spaces have filtered colimits?](https://mathoverflow.net/questions/510316/does-the-category-of-metrizable-spaces-have-filtered-colimits)

[Who was S.A. Jayawardene, historian of mathematics and science?](https://hsm.stackexchange.com/questions/19374/who-was-s-a-jayawardene-historian-of-mathematics-and-science)

[How to insert this bearing in wheel with axle inside?](https://bicycles.stackexchange.com/questions/100204/how-to-insert-this-bearing-in-wheel-with-axle-inside)

["Yesterday the doomsday cult said the world would end tomorrow." Is there a concise descriptive term for the ambiguity in which day the end is?](https://english.stackexchange.com/questions/639511/yesterday-the-doomsday-cult-said-the-world-would-end-tomorrow-is-there-a-conc)

[Can the new legislative supermajority in Hungary get rid of president Sulyok before his term ends, even if he doesn't voluntarily resign?](https://politics.stackexchange.com/questions/94546/can-the-new-legislative-supermajority-in-hungary-get-rid-of-president-sulyok-bef)

[Can a constant current LED driver be used with 12V or 24V incandescent bulbs?](https://electronics.stackexchange.com/questions/768144/can-a-constant-current-led-driver-be-used-with-12v-or-24v-incandescent-bulbs)

[Is this sentence a compliment or a criticism?](https://ell.stackexchange.com/questions/374569/is-this-sentence-a-compliment-or-a-criticism)

[Getting parent device node from partition device node](https://unix.stackexchange.com/questions/805499/getting-parent-device-node-from-partition-device-node)

[Sort strings containing valid and invalid substrings by substring groups](https://codereview.stackexchange.com/questions/301903/sort-strings-containing-valid-and-invalid-substrings-by-substring-groups)

[Why did Peter want to build 3 huts in Mark 9:5?](https://hermeneutics.stackexchange.com/questions/115975/why-did-peter-want-to-build-3-huts-in-mark-95)

[What is the effect of having the Flagellant talent multiple times?](https://rpg.stackexchange.com/questions/219108/what-is-the-effect-of-having-the-flagellant-talent-multiple-times)

[providing a mathchancery alphabet](https://tex.stackexchange.com/questions/762011/providing-a-mathchancery-alphabet)

[Get debug symbols for ubuntu kernel](https://unix.stackexchange.com/questions/805516/get-debug-symbols-for-ubuntu-kernel)

[Dethy Mafia: Guaranteed path to victory for town](https://puzzling.stackexchange.com/questions/137697/dethy-mafia-guaranteed-path-to-victory-for-town)

[Is a zero inflated beta regression model the right fit for my longitudinal proportion data?](https://stats.stackexchange.com/questions/675652/is-a-zero-inflated-beta-regression-model-the-right-fit-for-my-longitudinal-propo)

[Who determines what breaker size is acceptable for a device like a bathroom exhaust fan?](https://diy.stackexchange.com/questions/330100/who-determines-what-breaker-size-is-acceptable-for-a-device-like-a-bathroom-exha)

[Use of the phrase "cold on their heels"](https://english.stackexchange.com/questions/639497/use-of-the-phrase-cold-on-their-heels)

[Translate Roman numerals to integer: Part 2](https://codereview.stackexchange.com/questions/301885/translate-roman-numerals-to-integer-part-2)

[Identifying returning paths](https://codegolf.stackexchange.com/questions/287884/identifying-returning-paths)

[Does individual citizen access to guns lower the risk of government-perpetrated killings of civilians?](https://politics.stackexchange.com/questions/94556/does-individual-citizen-access-to-guns-lower-the-risk-of-government-perpetrated)

[Replace the matching pattern with equal number of n characters](https://unix.stackexchange.com/questions/805483/replace-the-matching-pattern-with-equal-number-of-n-characters)

[ICs devices expecting crystal to have a particular load capacitance value](https://electronics.stackexchange.com/questions/768155/ics-devices-expecting-crystal-to-have-a-particular-load-capacitance-value)

[Golf Numerical Representations in Compressed Barbrack](https://codegolf.stackexchange.com/questions/287867/golf-numerical-representations-in-compressed-barbrack)

[To what extent has Christianity "appropriated" from Greek philosophy, and what did it borrow?](https://philosophy.stackexchange.com/questions/137844/to-what-extent-has-christianity-appropriated-from-greek-philosophy-and-what-d)

[Question feed](https://gamedev.stackexchange.com/feeds/question/178443)

# Subscribe to RSS

Question feed

To subscribe to this RSS feed, copy and paste this URL into your RSS reader. https://gamedev.stackexchange.com/feeds/question/178443 

default

# Why are you flagging this comment?

[-] 20

It contains harassment, bigotry or abuse.

This comment attacks a person or group. Learn more in our [Abusive behavior policy](https://gamedev.stackexchange.com/conduct/abusive-behavior). [-] 40

It's unfriendly or unkind.

This comment is rude or condescending. Learn more in our [Code of Conduct](https://gamedev.stackexchange.com/conduct/abusive-behavior). [-] 39

Not needed.

This comment is not relevant to the post.

Enter at least 6 characters [-] 19

Something else.

A problem not listed above. Try to be as specific as possible.

Enter at least 6 characters

Flag comment Cancel

You have 0 flags left today

# Hang on, you can't upvote just yet.

You'll need to complete a few actions and gain 15 reputation points before being able to upvote. **Upvoting** indicates when questions and answers are useful. [What's reputation and how do I get it?](https://stackoverflow.com/help/whats-reputation)

Instead, you can save this post to reference later.

Save this post for later Not now

[Game Development](https://gamedev.stackexchange.com/)

[Tour](https://gamedev.stackexchange.com/tour)

[Help](https://gamedev.stackexchange.com/help)

[Chat](https://chat.stackexchange.com?tab=site&host=gamedev.stackexchange.com)

[Contact](https://gamedev.stackexchange.com/contact)

[Feedback](https://gamedev.meta.stackexchange.com/)

[Company](https://stackoverflow.co/)

[Stack Overflow](https://stackoverflow.com/)

[Stack Internal](https://stackoverflow.co/internal/)

[Stack Data Licensing](https://stackoverflow.co/data-licensing/)

[Stack Ads](https://stackoverflow.co/advertising/)

[About](https://stackoverflow.co/)

[Press](https://stackoverflow.co/company/press/)

[Legal](https://stackoverflow.com/legal)

[Privacy Policy](https://stackoverflow.com/legal/privacy-policy)

[Terms of Service](https://stackoverflow.com/legal/terms-of-service/public)

Your Privacy Choices

[Cookie Policy](https://policies.stackoverflow.co/stack-overflow/cookie-policy)

[Stack Exchange Network](https://stackexchange.com/)

[Technology](https://stackexchange.com/sites#technology)

[Culture & recreation](https://stackexchange.com/sites#culturerecreation)

[Life & arts](https://stackexchange.com/sites#lifearts)

[Science](https://stackexchange.com/sites#science)

[Professional](https://stackexchange.com/sites#professional)

[Business](https://stackexchange.com/sites#business)

[API](https://api.stackexchange.com/)

[Data](https://data.stackexchange.com/)

[Blog](https://stackoverflow.blog?blb=1)

[Facebook](https://www.facebook.com/officialstackoverflow/)

[Twitter](https://twitter.com/stackoverflow)

[LinkedIn](https://linkedin.com/company/stack-overflow)

[Instagram](https://www.instagram.com/thestackoverflow)

Site design / logo © 2026 Stack Exchange Inc; user contributions licensed under [CC BY-SA](https://stackoverflow.com/help/licensing) . rev 2026.4.16.42124

By continuing to use this website, you agree Stack Exchange can store cookies on your device and disclose information in accordance with our [Cookie Policy](https://policies.stackoverflow.co/stack-overflow/cookie-policy/). By exiting this window, default cookies will be accepted. To reject cookies, select an option from below.

Necessary cookies only

Customize settings 

## Cookie Consent Preference Center

When you visit any of our websites, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences, or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and manage your preferences. Please note, blocking some types of cookies may impact your experience of the site and the services we are able to offer.

[Cookie Policy](https://policies.stackoverflow.co/stack-overflow/cookie-policy/)

Accept all cookies

### Manage Consent Preferences

Strictly Necessary Cookies

Always Active

These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.

Targeting Cookies

[x]

Targeting Cookies

These cookies are used to make advertising messages more relevant to you and may be set through our site by us or by our advertising partners. They may be used to build a profile of your interests and show you relevant advertising on our site or on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device.

Performance Cookies

[x]

Performance Cookies

These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.

Functional Cookies

[x]

Functional Cookies

These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.

### Cookie List

Clear

[-] checkbox label label

Apply Cancel

Consent Leg.Interest [-]

checkbox label label [-]

checkbox label label [-]

checkbox label label

Necessary cookies only Confirm My Choices

Report this ad 