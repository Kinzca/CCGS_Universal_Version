# Wave Function Collapse in game dev. - Expectation vs Reality : r/proceduralgeneration

Wave Function Collapse in game dev. - Expectation vs Reality : r/proceduralgeneration

[Skip to main content](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/#main-content) Wave Function Collapse in game dev. - Expectation vs Reality : r/proceduralgeneration

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

[Skip to Navigation](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/#left-sidebar-container) [Skip to Right Sidebar](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/#right-sidebar-container)

Back

[Go to proceduralgeneration](https://www.reddit.com/r/proceduralgeneration/)

[r/proceduralgeneration](https://www.reddit.com/r/proceduralgeneration/)

•

3y ago

[deleted]

Locked post

Stickied post

Archived post

Report

# Wave Function Collapse in game dev. - Expectation vs Reality

So for those who wants to try Wave Function Collapse (WFC) algorithm. We at Catiger Studio were inspired by Townscaper success and decided to implement WFC for our game.

Our takeaways:

There are a lot of ready made implementations. We tried a couple of them from Unity Asset Store, they are working fine for certain use cases.

Even though there are a lot of ready made implementations of WFC, In reality you most likely won't be able to use them out-of-the-box and you will have to modify them for your needs. For example - you may want to limit what tiles will be spawned in a certain area. You also may want to introduce certain player interactions with the map and make sure that whenever there is a local change, that local change stays locally, instead of propagating through the whole map (Default behavior in almost all implementations). Performance is a big issue. Most WFC are drawing random numbers and they are not supporting using previous known solution. (So basically Townscaper's behavior is not typical for most WFC algorithms that are out there).

WFC blows the minds of almost all junior developers and what is unfortunate - all artists as well. The artist should be super technical to understand the complexity of the problem and being able to produce required assets. Our live-hack to this problem: the person on your team who understands WFC algorithm produces all necessary assets in a very simple form, makes sure that they are compatible and they covers all required cases, then the artist tries to "beatify" these tiles (Artist still struggled after that because you need to track compatibility of the tiles, keep equal forms and so on).

It is really long and difficult. Every single member on our team stacked at least once for several hours starring at "no solution" error to finally find out what tile or case or permutation or connection was missing.

Main Takeaway: think twice if you really need WFC for your project.

Follow us on twitter:

[https://twitter.com/catigerstudio](https://twitter.com/catigerstudio)

Upvote 42 Downvote 6 Go to comments Share

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

[RogueGuardianStudios](https://www.reddit.com/user/RogueGuardianStudios/)

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/comment/jusekbe/)

Wave Function Collapse is a good tool for filling in the gaps. You are 100% correct when it comes to getting artist to wrap their heads around how to set up the modules / what a minimum set of modules are required.

I find that the best way of handling this is to have a full prototype set full marked up. Use this set for development then an artist made set/ sets when building levels.

The true power of WFC comes from a feature I don't see implemented very often, (although I'm only looking at Youtube tutorials not the assets in the store) is the ability to partially fill in the grid space, both before and after the initial collapse and have the grid "heal" itself.

Upvote 12 Downvote Reply Award Share

Report

Award

Share

[Bmandk](https://www.reddit.com/user/Bmandk/)

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/comment/jusyds5/)

I just took the [original implementation](https://github.com/mxgmn/WaveFunctionCollapse) and it's been flexible enough to work very well for me.

WFC is not a full on map generator. If you expected it to generate everything in your map, then that's because you've been misinformed. What I've found is that it's very good when layered. Imagine: You have a map that you want to be 100x100. You can start by splitting it into 10x10 grids, and run WFC on those 10x10 big grids to generate which biomes they are. Then each biome can have different WFC that generate the full map for you. This way you can get very expressive map generation without it being too complicated. I also extended my WFC with something I call multitiles, where I can predesign bigger tiles, say a shop, that is made up of multiple tiles. It's then inserted in my map before I run WFC so it knows about those tiles and can correctly place other tiles in there. It was fairly easy to extend the original implementation to do this. I don't currently spawn enemies with WFC, because I need some more global rules for spawning enemies. What I'm trying to say with this is that you shouldn't use WFC for everything, but use it where it makes sense.

Did you show your artists Oskar's ["Wave"](https://oskarstalberg.com/game/wave/wave.html)? It clicked super quickly when I saw this. Even viewing all the images of the original implementation really explains everything. But even then, working with procedural generation generally takes a pretty technical team. This is not just true for WFC, but for all procedurally generated content.

I recommend to be able to visualize every step of your WFC if possible, just like OskSta's Wave. It really helps with debugging these kinds of issues.

I feel like all these issues have solutions, although I do believe that the hardest issue you listed here is having a team that understands how it works. Procedural generation isn't for everyone.

Upvote 10 Downvote Reply Award Share

Report

Award

Share

[RogueGuardianStudios](https://www.reddit.com/user/RogueGuardianStudios/)

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/comment/jut78fl/)

The trick is how do you tie it all together. I found that if you use a prototype set for everything. Then use a skinning index to swap out assets based on biome and a little shader magic to hide the seams. This way new content areas is just re weighing the probabilities of the tiles and adding a asset index.

Upvote 2 Downvote Reply Award Share

Report

Award

Share 

[gHx4](https://www.reddit.com/user/gHx4/)

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/comment/jusvrug/)

• Edited 3y ago

Seems like a reasonable analysis. WFC is a useful algorithm, but honestly poses a challenge when designing the input assets. It takes a fairly large scope before this becomes considerably better than artists placing tiles themselves.

I think it can be useful for high level procgen like "spawn a treasure room after a boss room". But I think artists and non-WFC algorithms work better for low-level rules like "this wall connects to the gate and other walls" because they have better domain-knowledge. I would trust other processes to design the actual rooms for the game, and let WFC handle the gameplay flow of those assets.

When you get an error with no solution, it's usually a serviceable game area. Instead of throwing the work away, consider completing the game area. Then identify if a basic set of constraints are satisfied, such as "does a route from the entrance to each key item and the exit exist?".

Upvote 3 Downvote Reply Award Share

Report

Award

Share 

[curiouscuriousmtl](https://www.reddit.com/user/curiouscuriousmtl/)

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/comment/jut4mpj/)

It definitely always seemed like an insanely asset heavy way to do things. Not a problem if you can make multiple versions of the same tile etc. And it definitely makes sense that you could easily have some problems if a designer isn't completely knowledgeable.

Upvote 2 Downvote Reply Award Share

Report

Award

Share

[green_meklar](https://www.reddit.com/user/green_meklar/)

•

[3y ago](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/comment/juuj7v8/)

Thanks for posting this. I feel like WFC gets way more hype than it deserves. Yes, a few people came up with really cool-looking results with it. But for almost all practical PCG there are other, more flexible and better-performing algorithms available. I wouldn't recommend that beginners get into PCG by starting with WFC, or really that anyone use it for anything other than exactly what it's good for.

Upvote 2 Downvote Reply Award Share

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

[Wave Function Collapse algorithm explanation](https://www.reddit.com/answers/eaff4a93-471d-4ce4-9d35-6d675da37814/?q=Wave+Function+Collapse+algorithm+explanation&source=PDP)

[Wave Function Collapse in Godot](https://www.reddit.com/answers/d63852c9-c59d-41de-aab6-89aa2b52ee7e/?q=Wave+Function+Collapse+in+Godot&source=PDP)

[Best tools for creating procedural landscapes](https://www.reddit.com/answers/cca7d351-e1a7-47e6-9535-2d0f40a79499/?q=Best+tools+for+creating+procedural+landscapes&source=PDP)

[Techniques for generating realistic terrain](https://www.reddit.com/answers/8b0df1e8-47e1-4dee-9b58-3dedfee07ef4/?q=Techniques+for+generating+realistic+terrain&source=PDP)

[Procedural generation in film and animation](https://www.reddit.com/answers/3cafa740-644e-4e6e-bba2-d45e8a135c5c/?q=Procedural+generation+in+film+and+animation&source=PDP)

# More posts you may like

[After some feedback from yesterday, I ask you, you would?](https://www.reddit.com/r/LatentSpaceClub/comments/1sbfohk/after_some_feedback_from_yesterday_i_ask_you_you/) [r/LatentSpaceClub](https://www.reddit.com/r/LatentSpaceClub/) • 16d ago [

### After some feedback from yesterday, I ask you, you would?

](https://www.reddit.com/r/LatentSpaceClub/comments/1sbfohk/after_some_feedback_from_yesterday_i_ask_you_you/)  3 1.4K upvotes · 50 comments

[Expectation vs Reality...](https://www.reddit.com/r/discdyeing/comments/1mpp2mc/expectation_vs_reality/) [r/discdyeing](https://www.reddit.com/r/discdyeing/) • 8mo ago [

### Expectation vs Reality...

](https://www.reddit.com/r/discdyeing/comments/1mpp2mc/expectation_vs_reality/)  2 38 upvotes · 7 comments

[Something I've been working on](https://www.reddit.com/r/IndieGameDevs/comments/1s1tumo/something_ive_been_working_on/) [r/IndieGameDevs](https://www.reddit.com/r/IndieGameDevs/) • 26d ago [

### Something I've been working on

](https://www.reddit.com/r/IndieGameDevs/comments/1s1tumo/something_ive_been_working_on/)  1:06 51 upvotes · 12 comments

[Been working on this for two years now, looking for any feedback](https://www.reddit.com/r/LinguisticMaps/comments/1pwnjwv/been_working_on_this_for_two_years_now_looking/) [r/LinguisticMaps](https://www.reddit.com/r/LinguisticMaps/) • 4mo ago [

### Been working on this for two years now, looking for any feedback

](https://www.reddit.com/r/LinguisticMaps/comments/1pwnjwv/been_working_on_this_for_two_years_now_looking/)  4 1.1K upvotes · 276 comments

[Two Ways to Solve the Same Problem.](https://www.reddit.com/r/MathJokes/comments/1rhxqhp/two_ways_to_solve_the_same_problem/) [r/MathJokes](https://www.reddit.com/r/MathJokes/) • 2mo ago [

### Two Ways to Solve the Same Problem.

](https://www.reddit.com/r/MathJokes/comments/1rhxqhp/two_ways_to_solve_the_same_problem/)  420 upvotes · 89 comments

[Concept to Reality](https://www.reddit.com/r/SS13/comments/1p3hnib/concept_to_reality/) [r/SS13](https://www.reddit.com/r/SS13/) • 5mo ago [

### Concept to Reality

](https://www.reddit.com/r/SS13/comments/1p3hnib/concept_to_reality/)  2 84 upvotes · 19 comments

[Have you ever felt like](https://www.reddit.com/r/LatentSpaceClub/comments/1r2svxa/have_you_ever_felt_like/) [r/LatentSpaceClub](https://www.reddit.com/r/LatentSpaceClub/) • 2mo ago [

### Have you ever felt like

](https://www.reddit.com/r/LatentSpaceClub/comments/1r2svxa/have_you_ever_felt_like/)  27 upvotes · 7 comments

[How it started vs how it's going](https://www.reddit.com/r/softwareWithMemes/comments/1p8lyy0/how_it_started_vs_how_its_going/) [r/softwareWithMemes](https://www.reddit.com/r/softwareWithMemes/) • 5mo ago [

### How it started vs how it's going

](https://www.reddit.com/r/softwareWithMemes/comments/1p8lyy0/how_it_started_vs_how_its_going/)  1.5K upvotes · 12 comments

[We Made it!!!](https://www.reddit.com/r/LatentSpaceClub/comments/1rs9c53/we_made_it/) [r/LatentSpaceClub](https://www.reddit.com/r/LatentSpaceClub/) • 1mo ago [

### We Made it!!!

](https://www.reddit.com/r/LatentSpaceClub/comments/1rs9c53/we_made_it/)  32 upvotes · 13 comments

[OH COME ON!](https://www.reddit.com/r/techgore/comments/1sdzaz5/oh_come_on/) [r/techgore](https://www.reddit.com/r/techgore/) • 13d ago [

### OH COME ON!

](https://www.reddit.com/r/techgore/comments/1sdzaz5/oh_come_on/)  266 upvotes · 37 comments

[Average dev after discovering prompt engineering](https://www.reddit.com/r/devhumormemes/comments/1ps2hdg/average_dev_after_discovering_prompt_engineering/) [r/devhumormemes](https://www.reddit.com/r/devhumormemes/) • 4mo ago [

### Average dev after discovering prompt engineering

](https://www.reddit.com/r/devhumormemes/comments/1ps2hdg/average_dev_after_discovering_prompt_engineering/)  430 upvotes · 12 comments

[Not too proud of this one, might need to remove the failed eyes](https://www.reddit.com/r/wastelandwarfare/comments/1ova0zl/not_too_proud_of_this_one_might_need_to_remove/) [r/wastelandwarfare](https://www.reddit.com/r/wastelandwarfare/) • 5mo ago [

### Not too proud of this one, might need to remove the failed eyes

](https://www.reddit.com/r/wastelandwarfare/comments/1ova0zl/not_too_proud_of_this_one_might_need_to_remove/)  2 50 upvotes · 15 comments

[guys... i think something is wrong](https://www.reddit.com/r/gamedevscreens/comments/1s12t5p/guys_i_think_something_is_wrong/) [r/gamedevscreens](https://www.reddit.com/r/gamedevscreens/) • 27d ago [

### guys... i think something is wrong

](https://www.reddit.com/r/gamedevscreens/comments/1s12t5p/guys_i_think_something_is_wrong/)  0:17 26 upvotes · 9 comments

[More realisticly: Developer when they finally show up to fix something they themselves broke.](https://www.reddit.com/r/DelusionsOfAdequacy/comments/1onan4u/more_realisticly_developer_when_they_finally_show/) [r/DelusionsOfAdequacy](https://www.reddit.com/r/DelusionsOfAdequacy/) • 6mo ago [

### More realisticly: Developer when they finally show up to fix something they themselves broke.

](https://www.reddit.com/r/DelusionsOfAdequacy/comments/1onan4u/more_realisticly_developer_when_they_finally_show/)  654 upvotes · 10 comments

[quick-switching between weapons is handy!](https://www.reddit.com/r/ps1graphics/comments/1scbv7r/quickswitching_between_weapons_is_handy/) [r/ps1graphics](https://www.reddit.com/r/ps1graphics/) • 15d ago [

### quick-switching between weapons is handy!

](https://www.reddit.com/r/ps1graphics/comments/1scbv7r/quickswitching_between_weapons_is_handy/)  0:25 148 upvotes · 24 comments

[Glitch Architecture](https://www.reddit.com/r/LatentSpaceClub/comments/1seiu8w/glitch_architecture/) [r/LatentSpaceClub](https://www.reddit.com/r/LatentSpaceClub/) • 12d ago [

### Glitch Architecture

](https://www.reddit.com/r/LatentSpaceClub/comments/1seiu8w/glitch_architecture/)  65 upvotes · 10 comments

[I think I may have made a mistake…](https://www.reddit.com/r/pacmanfrog/comments/1qn5t1b/i_think_i_may_have_made_a_mistake/) [r/pacmanfrog](https://www.reddit.com/r/pacmanfrog/) • 3mo ago [

### I think I may have made a mistake…

](https://www.reddit.com/r/pacmanfrog/comments/1qn5t1b/i_think_i_may_have_made_a_mistake/)  4 103 upvotes · 17 comments

[It's evolving.. Just backwards](https://www.reddit.com/r/CustomMarvelSnap/comments/1s1vrh7/its_evolving_just_backwards/) [r/CustomMarvelSnap](https://www.reddit.com/r/CustomMarvelSnap/) • 26d ago [

### It's evolving.. Just backwards

](https://www.reddit.com/r/CustomMarvelSnap/comments/1s1vrh7/its_evolving_just_backwards/)  33 upvotes · 7 comments

[I make More Complex stuff](https://www.reddit.com/r/madnesscombat/comments/1qq0dmz/i_make_more_complex_stuff/) [r/madnesscombat](https://www.reddit.com/r/madnesscombat/) • 3mo ago [

### I make More Complex stuff

](https://www.reddit.com/r/madnesscombat/comments/1qq0dmz/i_make_more_complex_stuff/)  0:06 130 upvotes · 13 comments

[An old project I needed to put on hold a long time ago](https://www.reddit.com/r/ps1graphics/comments/1rubw42/an_old_project_i_needed_to_put_on_hold_a_long/) [r/ps1graphics](https://www.reddit.com/r/ps1graphics/) • 1mo ago [

### An old project I needed to put on hold a long time ago

](https://www.reddit.com/r/ps1graphics/comments/1rubw42/an_old_project_i_needed_to_put_on_hold_a_long/)  0:16 632 upvotes · 29 comments

[Ḻ̶͍̬̺͕͈̠͉̦͕̱̲̓͂ͅÊ̶̞̙̤̰̜̦̯̮̰̟̝̳͇̜̭̞̙̦̣̹̥̮̻̘̩͈̳̩̇͆͒͆͒̂̒͆̈́͛͜ͅĢ̵̡̦̰͔̻̰͔̳̲̺͇͉̹̹̮͉͋͒̾̊̓ͅI̶̧̢̧̛̤̦̩̙͓͉̠͉̫̼̝̰͔͍̝̮͙̥̭̪͚͎͈̫̖͌͌̌̈́̄̉̋̾̔̄͗̑̈́͌̈́̑̐̌̎̕̕͜͠Ŏ̸̧̧̥̙̲͇̫̜̗̹͇͖͉̺͇͔̠̪̣̰͚̠̠̀͗̈́͛ͅǸ̵̘̩͇̩̾̐́̊͆̀̆͗̐̎͗̋͗̀͌͗͝](https://www.reddit.com/r/IronManMains/comments/1pyckil/legion/) [r/IronManMains](https://www.reddit.com/r/IronManMains/) • 4mo ago [

### Ḻ̶͍̬̺͕͈̠͉̦͕̱̲̓͂ͅÊ̶̞̙̤̰̜̦̯̮̰̟̝̳͇̜̭̞̙̦̣̹̥̮̻̘̩͈̳̩̇͆͒͆͒̂̒͆̈́͛͜ͅĢ̵̡̦̰͔̻̰͔̳̲̺͇͉̹̹̮͉͋͒̾̊̓ͅI̶̧̢̧̛̤̦̩̙͓͉̠͉̫̼̝̰͔͍̝̮͙̥̭̪͚͎͈̫̖͌͌̌̈́̄̉̋̾̔̄͗̑̈́͌̈́̑̐̌̎̕̕͜͠Ŏ̸̧̧̥̙̲͇̫̜̗̹͇͖͉̺͇͔̠̪̣̰͚̠̠̀͗̈́͛ͅǸ̵̘̩͇̩̾̐́̊͆̀̆͗̐̎͗̋͗̀͌͗͝

](https://www.reddit.com/r/IronManMains/comments/1pyckil/legion/)  325 upvotes · 29 comments

[what factors would cause this to evolve](https://www.reddit.com/r/SpecEvoJerking/comments/1rc6zke/what_factors_would_cause_this_to_evolve/) [r/SpecEvoJerking](https://www.reddit.com/r/SpecEvoJerking/) • 2mo ago [

### what factors would cause this to evolve

](https://www.reddit.com/r/SpecEvoJerking/comments/1rc6zke/what_factors_would_cause_this_to_evolve/) 455 upvotes · 18 comments

[What?](https://www.reddit.com/r/techgore/comments/1slkt9f/what/) [r/techgore](https://www.reddit.com/r/techgore/) • 4d ago [

### What?

](https://www.reddit.com/r/techgore/comments/1slkt9f/what/)  43 upvotes · 11 comments

[Sometimes I think the Universe was procedurally generated](https://www.reddit.com/r/proceduralgeneration/comments/1kt2p2c/sometimes_i_think_the_universe_was_procedurally/) [r/proceduralgeneration](https://www.reddit.com/r/proceduralgeneration/) • 1y ago [

### Sometimes I think the Universe was procedurally generated

](https://www.reddit.com/r/proceduralgeneration/comments/1kt2p2c/sometimes_i_think_the_universe_was_procedurally/)  0:20 135 upvotes · 41 comments

[This is a learning curve](https://www.reddit.com/r/woodworkingtools/comments/1ob38om/this_is_a_learning_curve/) [r/woodworkingtools](https://www.reddit.com/r/woodworkingtools/) • 6mo ago [

### This is a learning curve

](https://www.reddit.com/r/woodworkingtools/comments/1ob38om/this_is_a_learning_curve/)  230 upvotes · 102 comments

## View Post in

[Português (Brasil)](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/?tl=pt-br)

[Français](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/?tl=fr)

[简体中文](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/?tl=zh-hans)

[Русский](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/?tl=ru)

[Tiếng Việt](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/?tl=vi)

[日本語](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/?tl=ja)

See more See fewer

[Português (Portugal)](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/?tl=pt-pt)

[Magyar](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/?tl=hu)

[ไทย](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/?tl=th)

[Deutsch](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/?tl=de)

[Norsk (Bokmål)](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/?tl=no)

# Community Info Section

[r/proceduralgeneration](https://www.reddit.com/r/proceduralgeneration/)

Join

Procedural generation

This subreddit is about everything procedurally generated (media, techniques, ...)

Show more

Public

Anyone can view, post, and comment to this community

## Top Posts

[Reddit reReddit: Top posts of August 4, 2023](https://www.reddit.com/posts/2023/august-4-1/global/)

[Reddit reReddit: Top posts of August 2023](https://www.reddit.com/posts/2023/august/global/)

[Reddit reReddit: Top posts of 2023](https://www.reddit.com/posts/2023/global/)

[Reddit Rules](https://www.redditinc.com/policies/content-policy) [Privacy Policy](https://www.reddit.com/policies/privacy-policy) [User Agreement](https://www.redditinc.com/policies/user-agreement) [Your Privacy Choices](https://support.reddithelp.com/hc/articles/43980704794004) [Accessibility](https://support.reddithelp.com/hc/sections/38303584022676-Accessibility) [Reddit, Inc. © 2026. All rights reserved.](https://redditinc.com/)

Expand Navigation

Expand Navigation

Collapse Navigation

Collapse Navigation 

0cAFcWeA7nujwNRvBig_lNgAOE05pgjdwPrnpwoxspcalS5AODf1hP_5IbAXZpclOxf3oi8lhYwIPKhdyF7qDcJDlWx-CKl1g2y0XzmS_l0GE9Zg4XMNShxxi29xeZOGPxGfwhzK1yJ9iuErHRfJpuAMOYNesq6TJSXH2s5UwhiTYQ47EGIOVBNOJjLoJ3O7vzbBdvv4R_R082irjAnv6ZwDJK5NRsM6HndTPTf6AhSWgqi11J8nJSLGyr4g2iTuFk2wg7KWWLZ_M__LkPlgB6sGprc9U0Uq-ho6rzWQNocupQ9U8CXeQ7-mIXCV04PPrQN_p7WbF5QQRwk52HSZOCjh7oEA5EBRoa0DvoYnyqb4ksiQxijx_PVdC8NQmrEv3dijtpNl7pbkTh6AX32ityYyUEM5WUiTI0_H5XIO1EyTyRR3v7SBuzuD0e5y37ZmwxRqvEnj4rm_47eFOLKJ0mZMzxB5Bh5-aBdbq6qzn-kkDAd-1AKMCFju7bjylcM9C78jYlb_bJsDiiRthSh3xGGVHOSNUbZ8wXN12RcFXVANt8dFa2Nm921UVHb-gHkDm4BwQSNMxz19un3nlybPTMeNcYfe8K5zj0AIWb2F3aboTQbqCSxu7-pQHhmVUH90yRD6o8OgvX0LntjDvFuy0tOT4mfebCOCEWaIhvQmBsSbu61SfKxPo2-blDPeiWpN4LpVCupsj51ZL7VL4SQIHvR-bA--QJeUEFAzAnrPThOpC-MlAFtYZi8UOAlp4gLLBUaR48Q5MCTE53jM1z-JL6T1BuQtPaSEgERVTvunDmbBoW5nJm5uxr_00XxjCjHcONQmMYgk6UAZDtEcuTYCQLKg24_zT6z9a2LqoaTeFO5s6-XqkZ_dgZH65KBrUhi8_0gbORtYfHqnlPpUbZV8KbypEWkaP2i4ZDfIPZAlz1TWMTPbKPXZEhIBz9KkfuvBsA_NqE8et1R-caucyoo4yyKB_dvxjPwZA59K044ZoFyALcCtqolh63Ae9cdKFf4lrmw5KPfxgfQd6IdOB_1gyHWi8upWTmwk-lXSCMe6q3pSQXyxNSYO1bVr8yFQEsyEHF1xwuMLQ1QS6vmAWmQVl42u17UPcDug2rs7V0UedDKjSzh05FI2LTgvyMH4E8eNbGUiDYoiyRFeZ3tZVLOtTkdAxdpURMeGkytTGIDfufxFMCYr-Z7-JxpCT6vI-CqfBoYe7Fontk5pEKKdcgeRNxyjLjt0e2o5yZsRFmKP8Fa_adVvOLJoHyLSKjVZ1KtpyThFBHKTz1YqzzULGS5ODkjdPoV479xafIApUHylqIW_1T74iD26slUiZiUfUNf44mwZxljyYfLl1An57QIuknvIMIcP0Dp61a3ReMDDl11LVPWk4bZ5gHDq-usN7twGgs6lV799B_P-xRmaIvpHv5sH_hyvA3y8SERIBUeLg-WEm0Wlxqvn6TjAe3GzUHHh0G1wnsC-3mqzvluE9icsx-b6w9ahJVDvQMgqIAsDY6zW_52efmJ4vZ1R0GAFdmF7yEhDEfptBoogJ9JWDrLd78HHdZJ6okPzBUP2GHM7MYnOYamO7G-OeWy6Vmb3ogx_mUirkg09xfNTga8gynqU1H6zf8FcisW7Jab3XSy9i0l5QsCaOBEr68pUYUAoatvzicF3x4yfSCq_3TpKo0oEjwNiJWeldYQJLqmioK1OG3Q_XINX2GPsJK8XJyVb10MkU-VWA1yJeBBjqjluPuVmVLc-_q1398JR4qPs7IpQY3WC03175M0Zfr1Dr-ZBeiVL6gVFPGI5h_ifBWTj3nhxJnE-g_QqNEuLgmkwMwY28Xi6wMsvAeY-6VNdCudKvuYhTszzcHqe19V94w9f5hxbkoNjebXWNAtCSQKiBB3Q0o4PFK-bl1M113ywIt8ED_kyxoFl0DH2rZ_LjcQ2ChJvLzM8RkPb3tFncT6bbiCzfGMAWqe-FwUfRYutRp7TMlAx4G3ZQWZoacNLL_q2-vybZbq7ypgxu3FVdh2dsklPYYLBUfFCqwUXdvqcjeYs0xKE5_pJ3m6LOusy2073_Hgp7Svfjzj0AGeau5vc8oiQLMJBXKb5VDUInY5MNrMotgnid1WjpLGnU0T9o56Fp_XbZCbTAWC6thh4Fpo3Nt2zvlD8h9WGfOdZJrV9HG_tDrT6JcC9g6L6FXyv0LfkBArgCUUnz0dmvPW-T0SA