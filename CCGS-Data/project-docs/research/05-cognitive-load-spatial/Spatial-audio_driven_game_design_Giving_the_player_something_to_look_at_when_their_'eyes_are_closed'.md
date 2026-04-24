# Spatial-audio driven game design: Giving the player something to look at when their 'eyes are closed' in-game? : r/gamedev - Reddit

Spatial-audio driven game design: Giving the player something to look at when their 'eyes are closed' in-game? : r/gamedev

[Skip to main content](https://www.reddit.com/r/gamedev/comments/1ri5vyd/spatialaudio_driven_game_design_giving_the_player/#main-content) Spatial-audio driven game design: Giving the player something to look at when their 'eyes are closed' in-game? : r/gamedev

Open menu

Open navigation 

Go to Reddit Home 

r/gamedev

TRENDING TODAY

Get App

Get the Reddit app

[Log In](https://www.reddit.com/login/)

Log in to Reddit

Expand user menu

Open settings menu

[Skip to Navigation](https://www.reddit.com/r/gamedev/comments/1ri5vyd/spatialaudio_driven_game_design_giving_the_player/#left-sidebar-container) [Skip to Right Sidebar](https://www.reddit.com/r/gamedev/comments/1ri5vyd/spatialaudio_driven_game_design_giving_the_player/#right-sidebar-container)

Back

[Go to gamedev](https://www.reddit.com/r/gamedev/)

[r/gamedev](https://www.reddit.com/r/gamedev/)

•

2mo ago

[LoyalMussy](https://www.reddit.com/user/LoyalMussy/)

Locked post

Stickied post

Archived post

Report

# Spatial-audio driven game design: Giving the player something to look at when their 'eyes are closed' in-game?

[Discussion](https://www.reddit.com/r/gamedev/?f=flair_name%3A%22Discussion%22)

Hello,

I'm making a game that is spatial audio driven. Quick context is that you're in the center of a 5x5 grid and listen to a figure walking around you, making specific sounds in specific locations, on which you have to place the correct item during the 'placement' phase.

Now, the in-game character closes their eyes during this 'listening' phase, aside from some UI elements, the entire screen is dark with the diegetic eyelids. There is a little bit of transparency that light can shine through (you can tell when you're looking directly at a light source as opposed to a pitch black area), but it's very subtle.

You can open your eyes slightly, for a very limited time, to get a blurry visual indication of where the entitity might be around you, but I've found that the most efficient way to play the game is to honestly just sit with your in-game head still, and even close your eyes in real life to hear the sounds.

This is a good thing, right? Mission accomplished, yes? First thought that might come up is to kill my darling and just get rid of the 'peeking' mechanic altogether, but it can provide some useful information of you've failed to follow the path of the sound clues.

But my main concern is that the player doesn't have anything to look at during this phase. Is a relatively pitch black screen a bad thing in an audio game? Even if I added some detail, like went hogwild with eye veins or something, the screen would still be static. (Note: Whw you turn your head, the grid and your field of vision cone briefly pop up on screen to show your orientation and then fade away after a second or two).

The game is round based, and between the listening and placement phases, we're looking at probably a 50/50 split of screen time, with 30-60 seconds of each alternating, so it's not like the screen is dark the whole time.

Anyway, maybe I'm way over thinking this, but looking forward to any thoughts or opinions on it. I'm worried about the potential streamability of a game that has a large chunk of gameplay with no visuals, but at this point the game is so close to release that I'm in in-it-to-win-it mode.

Last thing is that I have not had negative feedback from the limited amount of players that I've had play this game in the past, but you know, it's the kind of stuff that keeps you up at night. :)

Thanks!

Upvote 1 Downvote 14 Go to comments Share

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

[ActuallyNotSparticus](https://www.reddit.com/user/ActuallyNotSparticus/)

•

[2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o83oqqy/)

I think it's a great opportunity to enhance other senses that aren't usually conveyed visually. If the user is in the water, you could have some subtle blue and wavy caustic light glowing on the screen. If the player is warm or near a fire, you can have some heat waves that distort the colors/UI.

Find a nice texture (like crumpled paper or wood grain) to cast these effects onto. Just make sure the center is relatively featureless or blurred so that the player has something to fixate on while they are flexing their other senses.

Upvote 5 Downvote Reply Award Share

Report

Award

Share

[LoyalMussy](https://www.reddit.com/user/LoyalMussy/)

OP

• [2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o83us8z/)

Yeah, that's a good point. The player is kneeling in the middle of the room surrounded by candles so I am trying to emphasize a little bit of candle glow in there. It also doubles as a bit of a help because you can see when that candle light is occluded. I'll try to lean into this.

Upvote 4 Downvote Reply Award Share

Report

Award

Share

[NeatEmergency725](https://www.reddit.com/user/NeatEmergency725/)

•

[2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o83nug5/)

Sound visualizer? Like waves or pulses when audio occurs, could be simple or complex and psychedelic

Upvote 3 Downvote Reply Award Share

Report

Award

Share

[LoyalMussy](https://www.reddit.com/user/LoyalMussy/)

OP

• [2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o83veq5/)

This is a great idea. When the "enemy" makes an important sound, there a white border flash that plays for some user feedback, but I really like this idea, because even the material of the footsteps are important clues to mental map the path out. Thanks!

Upvote 1 Downvote Reply Award Share

Report

Award

Share

[breakfastcandy](https://www.reddit.com/user/breakfastcandy/)

•

[2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o8477ad/)

This is a game fully playable by blind players: [https://store.steampowered.com/app/989790/The_Vale_Shadow_of_the_Crown/](https://store.steampowered.com/app/989790/The_Vale_Shadow_of_the_Crown/)

They use a floating particle effect as a visual for sighted players. It doesn't provide any hints about the environment, since the point of the game is that your character can't see either. But when you turn or move around the particles move relative to you, so you can see that you're moving, which is a helpful anchor.

Upvote 3 Downvote Reply Award Share

Report

Award

Share

[LoyalMussy](https://www.reddit.com/user/LoyalMussy/)

OP

• [2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o84clu7/)

That's awesome, I'll definitely check it out, thanks! I love the idea of the particles moving relative to you. Right now I have a horizontal slider that shows your relative head turn, but I like this method much better.

Upvote 2 Downvote Reply Award Share

Report

Award

Share 

[ChampagneRobot](https://www.reddit.com/user/ChampagneRobot/)

•

[2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o83ua0x/)

Try to depict phosphenes that reacts to motion

Upvote 2 Downvote Reply Award Share

Report

Award

Share

[LoyalMussy](https://www.reddit.com/user/LoyalMussy/)

OP

• [2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o83v20d/)

Good idea and I'd like to get into something like that. I've experimented with phosphene like things before but they came out kinda goofy but I'll keep at it!

Upvote 2 Downvote Reply Award Share

Report

Award

Share 

[Snark_Daily](https://www.reddit.com/user/Snark_Daily/)

•

[2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o83zj9t/)

I don't think the lack of visual cues is a problem in a game like this. Maybe instead of having eye veins, just have very very blurry shapes instead? A lot of blind ppl can see light/shadow so it would make it more realistic too. I would market this as an Audio game and make sure it can be played by a visually-impaired person easily, since they are probably your target audience.

Upvote 2 Downvote Reply Award Share

Report

Award

Share

[LoyalMussy](https://www.reddit.com/user/LoyalMussy/)

OP

• [2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o84089y/)

Yeah you can "Peek" a bit to see bloomed out candle light to get a visual sense of direction if you want to. There is a relic placement phase (the "response" counterpart to the "call") that is visual, where you are actually placing items on the grid, but you make the same sounds moving around the room as the entity does, so you could technically do that blind. Only thing I'd have to look into is differentiating to the player what relic you are choosing. Interesting to think about though... Thanks!

Upvote 2 Downvote Reply Award Share

Report

Award

Share

[way2lazy2care](https://www.reddit.com/user/way2lazy2care/)

•

[2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o84ebgv/)

Maybe a way to take relevant notes would be cool? Less of a, "this is what your sensing," thing and more of a, "this is what your character is thinking/imagining," kind of thing.

Upvote 2 Downvote Reply Award Share

Report

Award

Share

[LoyalMussy](https://www.reddit.com/user/LoyalMussy/)

OP

• [2mo ago](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o84r18i/)

Like a visual note on the grid when a sound happens? I've experimented with stuff like that. Even thought of making peeking at the right time determine which sound goes with which relic, but I'm always afraid to stray further away from the spatial audio system I've created. Food for thought though!

Upvote 1 Downvote Reply Award Share

Report

Award

Share

[More replies](https://www.reddit.com/r/gamedev/comments/1ri5vyd/comment/o84r18i/?force-legacy-sct=1)

New to Reddit?

Create your account and connect with a world of communities.

[Continue with Email](https://www.reddit.com/register/)

[Continue With Phone Number](https://www.reddit.com/login/)

By continuing, you agree to our [User Agreement](https://www.redditinc.com/policies/user-agreement) and acknowledge that you understand the [Privacy Policy](https://www.redditinc.com/policies/privacy-policy).

# Related Answers Section

Related Answers

[Best practices for game level design](https://www.reddit.com/answers/1389a799-f1ea-44d9-86f5-233d0bf15c73/?q=Best+practices+for+game+level+design&source=PDP)

[How to create compelling game narratives](https://www.reddit.com/answers/025dce9d-5fef-45cd-8465-570c292ce206/?q=How+to+create+compelling+game+narratives&source=PDP)

[Essential tools for indie game developers](https://www.reddit.com/answers/daf9e432-115f-4985-9941-190645f955f6/?q=Essential+tools+for+indie+game+developers&source=PDP)

[Tips for successful game marketing strategies](https://www.reddit.com/answers/2715ad87-e913-41ba-af62-4b709f13a0cd/?q=Tips+for+successful+game+marketing+strategies&source=PDP)

[Unique art styles in indie games](https://www.reddit.com/answers/44804662-3aed-44b7-a403-3df41b718e50/?q=Unique+art+styles+in+indie+games&source=PDP)

# More posts you may like

[What's up with spatial audio in games?](https://www.reddit.com/r/gamedev/comments/16elqro/whats_up_with_spatial_audio_in_games/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 3y ago [

### What's up with spatial audio in games?

](https://www.reddit.com/r/gamedev/comments/16elqro/whats_up_with_spatial_audio_in_games/) 5 upvotes · 16 comments

[Spatial audio importance](https://www.reddit.com/r/gaming/comments/oqgbdc/spatial_audio_importance/) [r/gaming](https://www.reddit.com/r/gaming/) • 5y ago [

### Spatial audio importance

](https://www.reddit.com/r/gaming/comments/oqgbdc/spatial_audio_importance/) 1 upvote · 4 comments

[As a new Game Dev, I've realized how dumb players actually are.](https://www.reddit.com/r/gamedev/comments/1s0zmpo/as_a_new_game_dev_ive_realized_how_dumb_players/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 27d ago [

### As a new Game Dev, I've realized how dumb players actually are.

](https://www.reddit.com/r/gamedev/comments/1s0zmpo/as_a_new_game_dev_ive_realized_how_dumb_players/) 631 upvotes · 260 comments

[What 30+ years in game design taught me about real-time thinking](https://www.reddit.com/r/gamedev/comments/1see4cn/what_30_years_in_game_design_taught_me_about/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 12d ago [

### What 30+ years in game design taught me about real-time thinking

](https://www.reddit.com/r/gamedev/comments/1see4cn/what_30_years_in_game_design_taught_me_about/) 33 comments

[4 years into Game Dev, no finished projects, and feeling like an imposter. Is this normal?](https://www.reddit.com/r/gamedev/comments/1rfnul0/4_years_into_game_dev_no_finished_projects_and/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 2mo ago [

### 4 years into Game Dev, no finished projects, and feeling like an imposter. Is this normal?

](https://www.reddit.com/r/gamedev/comments/1rfnul0/4_years_into_game_dev_no_finished_projects_and/) 82 upvotes · 60 comments

[Four game development patterns I've found consistently useful over the last 10 years.](https://www.reddit.com/r/gamedev/comments/1sf409c/four_game_development_patterns_ive_found/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 11d ago [

### Four game development patterns I've found consistently useful over the last 10 years.

](https://www.reddit.com/r/gamedev/comments/1sf409c/four_game_development_patterns_ive_found/) 411 upvotes · 83 comments

[How do we do this gamedev stuff sustainably?](https://www.reddit.com/r/gamedev/comments/1sgk5dz/how_do_we_do_this_gamedev_stuff_sustainably/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 10d ago [

### How do we do this gamedev stuff sustainably?

](https://www.reddit.com/r/gamedev/comments/1sgk5dz/how_do_we_do_this_gamedev_stuff_sustainably/) 20 upvotes · 31 comments

[How I composed my own game music as an indie (no AI, no formal training)](https://www.reddit.com/r/gamedev/comments/1qofaq9/how_i_composed_my_own_game_music_as_an_indie_no/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 3mo ago [

### How I composed my own game music as an indie (no AI, no formal training)

](https://www.reddit.com/r/gamedev/comments/1qofaq9/how_i_composed_my_own_game_music_as_an_indie_no/) 377 upvotes · 68 comments

[What aspects of gamedev must be learned before actually making a game?](https://www.reddit.com/r/gamedev/comments/1rj28o0/what_aspects_of_gamedev_must_be_learned_before/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 2mo ago [

### What aspects of gamedev must be learned before actually making a game?

](https://www.reddit.com/r/gamedev/comments/1rj28o0/what_aspects_of_gamedev_must_be_learned_before/) 50 upvotes · 53 comments

[I love game dev but it sounds impossible to make it](https://www.reddit.com/r/gamedev/comments/1r5brzi/i_love_game_dev_but_it_sounds_impossible_to_make/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 2mo ago [

### I love game dev but it sounds impossible to make it

](https://www.reddit.com/r/gamedev/comments/1r5brzi/i_love_game_dev_but_it_sounds_impossible_to_make/) 247 upvotes · 207 comments

[Voice chat (discord alternative or VTT module) that has spatial audio? [system agnostic]](https://www.reddit.com/r/FoundryVTT/comments/1r8mb76/voice_chat_discord_alternative_or_vtt_module_that/) [r/FoundryVTT](https://www.reddit.com/r/FoundryVTT/) • 2mo ago [

### Voice chat (discord alternative or VTT module) that has spatial audio? [system agnostic]

](https://www.reddit.com/r/FoundryVTT/comments/1r8mb76/voice_chat_discord_alternative_or_vtt_module_that/) 30 upvotes · 12 comments

[Where your dreams and hopes crashed by reality in Game Development?](https://www.reddit.com/r/gamedev/comments/1ndhbyl/where_your_dreams_and_hopes_crashed_by_reality_in/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 7mo ago [

### Where your dreams and hopes crashed by reality in Game Development?

](https://www.reddit.com/r/gamedev/comments/1ndhbyl/where_your_dreams_and_hopes_crashed_by_reality_in/) 91 upvotes · 92 comments

[What's something you only learned after working on a “real” game project?](https://www.reddit.com/r/gamedev/comments/1s3dmig/whats_something_you_only_learned_after_working_on/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 25d ago [

### What's something you only learned after working on a “real” game project?

](https://www.reddit.com/r/gamedev/comments/1s3dmig/whats_something_you_only_learned_after_working_on/) 89 upvotes · 79 comments

[Is this very common to experience a cycle of game dev?](https://www.reddit.com/r/gamedev/comments/1rtkcd1/is_this_very_common_to_experience_a_cycle_of_game/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 1mo ago [

### Is this very common to experience a cycle of game dev?

](https://www.reddit.com/r/gamedev/comments/1rtkcd1/is_this_very_common_to_experience_a_cycle_of_game/) 49 upvotes · 37 comments

[Thinking about building an AI for game audio — would you use something like that?](https://www.reddit.com/r/gamedev/comments/1lxwe4w/thinking_about_building_an_ai_for_game_audio/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 9mo ago [

### Thinking about building an AI for game audio — would you use something like that?

](https://www.reddit.com/r/gamedev/comments/1lxwe4w/thinking_about_building_an_ai_for_game_audio/) 21 comments

[For Those Who Hav Been Developing for a While, Do You Enjoy Game Dev?](https://www.reddit.com/r/gamedev/comments/1qyie6d/for_those_who_hav_been_developing_for_a_while_do/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 2mo ago [

### For Those Who Hav Been Developing for a While, Do You Enjoy Game Dev?

](https://www.reddit.com/r/gamedev/comments/1qyie6d/for_those_who_hav_been_developing_for_a_while_do/) 48 upvotes · 65 comments

[What's the most frustrating part of game development for you?](https://www.reddit.com/r/gamedev/comments/1scdf8j/whats_the_most_frustrating_part_of_game/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 14d ago [

### What's the most frustrating part of game development for you?

](https://www.reddit.com/r/gamedev/comments/1scdf8j/whats_the_most_frustrating_part_of_game/) 39 upvotes · 61 comments

[Sharing my experiences for what has worked for my game](https://www.reddit.com/r/godot/comments/1rdvmma/sharing_my_experiences_for_what_has_worked_for_my/) [r/godot](https://www.reddit.com/r/godot/) • 2mo ago [

### Sharing my experiences for what has worked for my game

](https://www.reddit.com/r/godot/comments/1rdvmma/sharing_my_experiences_for_what_has_worked_for_my/)  327 upvotes · 24 comments

[How on earth does one become a game writer/ narrative designer?](https://www.reddit.com/r/gamedev/comments/1rqbp6u/how_on_earth_does_one_become_a_game_writer/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 1mo ago [

### How on earth does one become a game writer/ narrative designer?

](https://www.reddit.com/r/gamedev/comments/1rqbp6u/how_on_earth_does_one_become_a_game_writer/) 20 comments

[Non-generative AI in indie dev? No idea what to do.](https://www.reddit.com/r/gamedev/comments/1scgefm/nongenerative_ai_in_indie_dev_no_idea_what_to_do/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 14d ago [

### Non-generative AI in indie dev? No idea what to do.

](https://www.reddit.com/r/gamedev/comments/1scgefm/nongenerative_ai_in_indie_dev_no_idea_what_to_do/) 25 comments

[Lessons learned developing an AI game.](https://www.reddit.com/r/gamedev/comments/1rciwdj/lessons_learned_developing_an_ai_game/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 2mo ago [

### Lessons learned developing an AI game.

](https://www.reddit.com/r/gamedev/comments/1rciwdj/lessons_learned_developing_an_ai_game/) 24 comments

[What is your opinion about AI soundtracks especially in indie games?](https://www.reddit.com/r/gamedev/comments/1q3qloo/what_is_your_opinion_about_ai_soundtracks/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 3mo ago [

### What is your opinion about AI soundtracks especially in indie games?

](https://www.reddit.com/r/gamedev/comments/1q3qloo/what_is_your_opinion_about_ai_soundtracks/) 25 comments

[I thought I would never be a real game dev. Then this happened.](https://www.reddit.com/r/godot/comments/1oihnww/i_thought_i_would_never_be_a_real_game_dev_then/) [r/godot](https://www.reddit.com/r/godot/) • 6mo ago [

### I thought I would never be a real game dev. Then this happened.

](https://www.reddit.com/r/godot/comments/1oihnww/i_thought_i_would_never_be_a_real_game_dev_then/) 207 upvotes · 37 comments

[Best feeling in game dev, looking how far u have come in development](https://www.reddit.com/r/godot/comments/1o878xm/best_feeling_in_game_dev_looking_how_far_u_have/) [r/godot](https://www.reddit.com/r/godot/) • 6mo ago [

### Best feeling in game dev, looking how far u have come in development

](https://www.reddit.com/r/godot/comments/1o878xm/best_feeling_in_game_dev_looking_how_far_u_have/)  0:48 121 upvotes · 11 comments

[What's a piece of game dev trivia that's stuck with you for years?](https://www.reddit.com/r/gamedev/comments/1sjdu5p/whats_a_piece_of_game_dev_trivia_thats_stuck_with/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 7d ago [

### What's a piece of game dev trivia that's stuck with you for years?

](https://www.reddit.com/r/gamedev/comments/1sjdu5p/whats_a_piece_of_game_dev_trivia_thats_stuck_with/) 405 upvotes · 160 comments

## View Post in

[Português (Brasil)](https://www.reddit.com/r/gamedev/comments/1ri5vyd/spatialaudio_driven_game_design_giving_the_player/?tl=pt-br)

[Français](https://www.reddit.com/r/gamedev/comments/1ri5vyd/spatialaudio_driven_game_design_giving_the_player/?tl=fr)

[हिन्दी](https://www.reddit.com/r/gamedev/comments/1ri5vyd/spatialaudio_driven_game_design_giving_the_player/?tl=hi)

See more See fewer

[ไทย](https://www.reddit.com/r/gamedev/comments/1ri5vyd/spatialaudio_driven_game_design_giving_the_player/?tl=th)

[Español (Latinoamérica)](https://www.reddit.com/r/gamedev/comments/1ri5vyd/spatialaudio_driven_game_design_giving_the_player/?tl=es-419)

# Community Info Section

[r/gamedev](https://www.reddit.com/r/gamedev/)

Join

Game Development Discussions on Reddit

The subreddit covers various game development aspects, including programming, design, writing, art, game jams, postmortems, and marketing. It serves as a hub for game creators to discuss and share their insights, experiences, and expertise in the industry.

Show more

Public

Anyone can view, post, and comment to this community

[Reddit Rules](https://www.redditinc.com/policies/content-policy) [Privacy Policy](https://www.reddit.com/policies/privacy-policy) [User Agreement](https://www.redditinc.com/policies/user-agreement) [Your Privacy Choices](https://support.reddithelp.com/hc/articles/43980704794004) [Accessibility](https://support.reddithelp.com/hc/sections/38303584022676-Accessibility) [Reddit, Inc. © 2026. All rights reserved.](https://redditinc.com/)

Expand Navigation

Expand Navigation

Collapse Navigation

Collapse Navigation 

0cAFcWeA5n3aqk56Pqpois-aMkTNlupJ-tbMj2E-h1aN8X2Yg6cS6fjNJ3EUvsUchjyzdQsQR0ZpCR2wYUgjnXFWac5ReXXjtOduT3skTV2xFff6qtZtxpAeIDtxWz06ODiX0c5NZP34Tcy1vhHovntXTEpVkIiqATaaRXDjeA8qVlD1itBU-PN--ElQ_tDY1AaCg8WGv6quZXao_XU3ak_QAE7UnbehoAw7KSU5qR1USvzPTEB0gJhsbMCAMRVJTcmQp_pi8TxLxFQi5bPfCwwgNV_kKF61iVWbgwrUHCCqf6qdSduCnShDQCZf-8-2asmav-824fr966823gUDmwzy80erKTFtl5rO_pzhGeg0jZyz5QSjiG8TV_ZBeuG2-qkvHl5IQ2JJeHJN70Xw05yOFUFk8K7Cl68lH7oErAi-fe5EAI2uGiXNsxmuZxGFjaJiVFOXLc8YOGP3f_EOYF9VXRSkcDjsr89qKfcd3YoYRKEEmf8t5htondCp9mUZRIioDJgRjSNno2xe2D_O-lXgQHBpABJrL9wovlcsH7WfXCMx1E5McNxyuAtD5ZvwtOAsdC02RQV686yJXlH8M8t0cozZ4oHu6Rl6pkT8WRPIGXr6p1A_bsYuLRzale7kYdVIVoKGRjHHjKKG0ZC5KtWyfhIbbAuEKxhehCNauufIx75TQtBLzXrVyqkuxO9p2RgeyyWlMuAYwnQWRxdd9oavEDkXIqgpYMGY1g3yQDat-jPuJsPA6lcgwIi8WqnTuSneJwK8G7TRgR0SCkORQ97pMQXqtDyGIQi6a39eCk84HY2FO2tpJbwytjZ41Z8QairpK7DGvh1nikqEsTS2jnoWIEJb2Eta1Cb81E2CD-2VLjkjv-W6dzeDZvZ37sq4TohoPRX9t7gI-KCw894FNVBdlY1T9vrbHGQU4IFAbsv3VQlSHaCwHlstf4NCGa0sNszcVXRRVIVAXXUTnmOyjYx3nnNziJCAS-lGcgc-UTdP4XRs0d9_4ScSguE92GiIAX9niluelEt68GtZWYWHkRPCoMn6yR5nEz2EIbRacjxX_zhE40K-bOsOmRpBHZCmGrkLZnhaUvFsDJKo5zSS8ZWcrqTHKACqoZDQo48YmiFyJo1QhzGD38JZtR0YHnCirlvb5YVyP0MGCMhfMOTuRhRxxYtcXMatEhJm1bGCVY3GJ9_Iatn7FI-BN5UvidgyJe_9d3Nh0WXDbx-wygTvADZt893f8UXJdWO9zwm4MvLP27XzEFpy6xL392Kh-o2UJzr7zmxAH_5y12hfJEarhw3xVuSVnObJhGQ-fOFJ_-CCJvdkj11iIIk3bU94qj9_ACuo-wLtHjAKcE3c6mstTyU6Qz-BOuUY4pkOv4IAzE1lUUXzHGGYOYkj_LsZyrYVvaex9JqzObcsII_WoWmVpQcqr7P1OoQqbGksB4yIDVBo02okYGHvJmGp2ltYNu2GxXemUoaV21MX4b1JU10Lmmd5S-Cz7hK6l7XMT2GZXY6DDnGltZe9K520h0C3hsn5flo4M62FjRfp0dz4nJGujddwUNpzOks2lJcVBFiOXLwwL8knl3uwRqS-MKD-fMGjEsKL-yJ1bA1AwKf2iRQ_f4iesdHMVOLiJA-ub7-GHCXL9QhUzmuMO0rJXlSBn6k8O2sKOq4-EKeCNOjg61Hjbwi66qpHMbg18zO01GxYSaaFjbQghgemUVUozm5NFXcbZx-sApl5wsxOzNEJEzyTGS2Cv0X3mRe_fkhnwAeOgemVybNYNRjwLFp9rLBeQONx2Ghni1EWxI2GiamMACYf1PBVYejzDonKqQvm4G5EOUASEEW0pQjwV1NF059XCLw-Pet3iOTNrYaXMN53oeliNbdCYju8wpiRMqSF_jmQhk6BX_8bHdVvenJd8mt3-82QDSiKCQ_TkRX93kZ89NMAc8Roh_G5HKz7lb6ukE-27gDpDdGWAiukrVey6IgVVgL-y9gf0w4A3nOEYT8Nz_FiMIYqgTg_L749DmFNycWa5dzIx75800BRHErM5vA4tK20vVLC-6c3KLpXgm2DnP10Ww8kIk3uXWXVqLBHbfb1gML9ejnxD4BAT9iQRyMQO9UbQOvRj5KYbwz6JM21ECv-R6hzsWyFB89tZolO-7bQQmndWrphmZHWZcnps