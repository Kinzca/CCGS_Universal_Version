# Low Poly 3D with Pixel Effect: Advice? : r/Unity3D - Reddit

Low Poly 3D with Pixel Effect: Advice? : r/Unity3D

[Skip to main content](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/low_poly_3d_with_pixel_effect_advice/#main-content) Low Poly 3D with Pixel Effect: Advice? : r/Unity3D

Open menu

Open navigation 

Go to Reddit Home 

r/Unity3D

TRENDING TODAY

Get App

Get the Reddit app

[Log In](https://www.reddit.com/login/)

Log in to Reddit

Expand user menu

Open settings menu

[Skip to Navigation](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/low_poly_3d_with_pixel_effect_advice/#left-sidebar-container) [Skip to Right Sidebar](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/low_poly_3d_with_pixel_effect_advice/#right-sidebar-container)

Back

[Go to Unity3D](https://www.reddit.com/r/Unity3D/)

[r/Unity3D](https://www.reddit.com/r/Unity3D/)

•

1y ago

[Tom_Bombadil_Ret](https://www.reddit.com/user/Tom_Bombadil_Ret/)

Locked post

Stickied post

Archived post

Report

# Low Poly 3D with Pixel Effect: Advice?

[Question](https://www.reddit.com/r/Unity3D/?f=flair_name%3A%22Question%22)

This video cannot be played.

0:00 0:00 / 0:45

720p 480p 360p 240p 144p Auto

I have been working on a small diorama style puzzle platformer inspired by Captain Toad: Treasure Tracker. I decided I wanted to attempt to create it in the a pixelated low poly look inspired by A Short Hike. However, now that I have implemented it, I am not sure I am sold on it. Perhaps it the grey box prototype being so low contract that is making it unclear, perhaps I don't haven't gotten the aspect ratios right, or maybe it is something else. Does anyone have any thoughts on I could improve this visually?

Upvote 103 Downvote 27 Go to comments Share

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

[Thorixim](https://www.reddit.com/user/Thorixim/)

•

[1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr3xq8i/)

When you want to create games using this aproach i would highly consider working with moods which the levels / game would portray. Working with light, effects, textures, shading and so on. Thats of power of detail abstraction 🙂

Upvote 24 Downvote Reply Award Share

Report

Award

Share 

[Tom_Bombadil_Ret](https://www.reddit.com/user/Tom_Bombadil_Ret/)

OP

• [1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr3zcw7/)

Agreed. Those broad strokes of color and texture will likely make a big difference on the readability of the scene.

Upvote 7 Downvote Reply Award Share

Report

Award

Share

[Sunfished](https://www.reddit.com/user/Sunfished/)

•

[1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr3xtjz/)

i feel like a puzzle game like captain toad would like a teensy more detail in the environment just so the player can visually understand ehat theyre looking at. id personally reduce the pixellization and make sure that game elements wouldnt get "lost" in the resolution.

otherwise, i think the concept is cute

Upvote 4 Downvote Reply Award Share

Report

Award

Share 

[Tom_Bombadil_Ret](https://www.reddit.com/user/Tom_Bombadil_Ret/)

OP

• [1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr3ymf8/)

Yeah this is purely just a gameplay prototype to see if I could get my player controller and pixelation effect working.

The more I look at ti the more I think that the issues I am having with the visuals is just an effect of this being a completely detail-less prototype.

Upvote 2 Downvote Reply Award Share

Report

Award

Share 

[Dolly-Dagger](https://www.reddit.com/user/Dolly-Dagger/)

•

[1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr3yim5/)

Maybe have a series of fixed isometric camera positions at 90 degree increments. For me the orthographic camera only works at set positions. Design the level flow around these angles.

Try fleshing out the grey boxing with some minimal colour and lighting. I think shadows will really help.

Upvote 3 Downvote Reply Award Share

Report

Award

Share 

[Tom_Bombadil_Ret](https://www.reddit.com/user/Tom_Bombadil_Ret/)

OP

• [1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr3yx5s/)

Using fixed angled (with the levels designed around those angles would probably help with the clarity issues. There are some angles currently where objects become indistinguishable.

I agree. Some basic shadowing and colors may make this instantly more readable.

Upvote 3 Downvote Reply Award Share

Report

Award

Share 

[Kenoji_](https://www.reddit.com/user/Kenoji_/)

•

[1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr4tdds/)

I love to play games like this but please keep the levels simple and direct this art style is great but if you make the levels to complicated where the user can not see some details or gameplay it becomes a disaster and returned game

Upvote 3 Downvote Reply Award Share

Report

Award

Share 

[ecstacy98](https://www.reddit.com/user/ecstacy98/)

•

[1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr6g9mi/)

I'm not sure if it interests you or is in line with the artistic style you wish to go in - but you could try using mip maps with any textures you may introduce. This should remove any jagged edges from the textures themselves, while keeping your geometries jaggies. I personally think the balance of the two is quite charming and can come accross quite well but it's really up to you. The main benefit being that you get to keep the lo-fi look while maintaining a clarity of content.

Upvote 2 Downvote Reply Award Share

Report

Award

Share 

[Low_Engineering_3301](https://www.reddit.com/user/Low_Engineering_3301/)

•

[1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr41x6w/)

If you are adding jumping make sure to add a dark shadow under the player so its easier to tell the distance off y the player is at.

Upvote 1 Downvote Reply Award Share

Report

Award

Share 

[Tom_Bombadil_Ret](https://www.reddit.com/user/Tom_Bombadil_Ret/)

OP

• [1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr43wi4/)

Great advice. The plan is for there to be no jumping at all but I can see how that would help manage understanding the vertical space.

Upvote 2 Downvote Reply Award Share

Report

Award

Share

[More replies](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr43wi4/?force-legacy-sct=1) 

[VirtualAdhesiveness](https://www.reddit.com/user/VirtualAdhesiveness/)

•

[1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr43b99/)

Funny to see a Kay (maybe also Kenney) asset used in such an ultra-pixelated way.

A bit too pixelated for my own tastes, but I'm the kind to reduce such shaders/style even in R.E.P.O. or Lethal Company, so... Maybe I'm the only one, I don't know.

For example I just love Octopath Traveler style, but it's super detailed 2.5D. In an very other way, I love the old Mario or Celest, but it's bright and colorful 2D.

Here it feels like a very old GameBoy Advance game and I wasn't enthusiast about such style already at the time.

Upvote 1 Downvote Reply Award Share

Report

Award

Share 

[Tom_Bombadil_Ret](https://www.reddit.com/user/Tom_Bombadil_Ret/)

OP

• [1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr44v5g/)

Yeah this was made using the Kay Prototyping Kit.

I think if you're going to go with this style it needs to be full of bright colors with high contrast similar to A Short Hike. I may try adding some of Kay's other free packs to see if the added color makes it more readable.

Upvote 1 Downvote Reply Award Share

Report

Award

Share

[More replies](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr44v5g/?force-legacy-sct=1) 

[MikeSifoda](https://www.reddit.com/user/MikeSifoda/)

•

[1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr44tnv/)

It looks fantastic! Just slap a CRT filter on top of it and you're golden, it will look like PS1 graphics!

Upvote 1 Downvote Reply Award Share

Report

Award

Share 

[Tom_Bombadil_Ret](https://www.reddit.com/user/Tom_Bombadil_Ret/)

OP

• [1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr48pwy/)

Honestly, that is not a bad idea. perhaps make it slightly less pixelated and add a CRT filter.

Upvote 2 Downvote Reply Award Share

Report

Award

Share 

[loftier_fish](https://www.reddit.com/user/loftier_fish/)

•

[1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr4lvh2/)

I think you just need colors. The blueish gray is depressing. It also kinda looks like you have some wonky normals, or funky vertex shadows that really don't contribute.

Upvote 1 Downvote Reply Award Share

Report

Award

Share 

[Tom_Bombadil_Ret](https://www.reddit.com/user/Tom_Bombadil_Ret/)

OP

• [1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr5a5l1/)

Yeah the gray is just for prototyping but I think it's hard to judge if the effect is good without color.

Upvote 1 Downvote Reply Award Share

Report

Award

Share 

[destinedd](https://www.reddit.com/user/destinedd/)

•

[1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr5gcr3/) 

Top 1% Commenter

outlines, edge highlights and cell shading would all make it look better.

Upvote 1 Downvote Reply Award Share

Report

Award

Share 

[Tom_Bombadil_Ret](https://www.reddit.com/user/Tom_Bombadil_Ret/)

OP

• [1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr5is6m/)

Cell shading and outlines are the top of my list of things to try. If I can figure out how to get them to work that is.

Upvote 1 Downvote Reply Award Share

Report

Award

Share

[More replies](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr5is6m/?force-legacy-sct=1)

[lukkasz323](https://www.reddit.com/user/lukkasz323/)

•

[1y ago](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/comment/mr7fbkl/)

Better shading would definitely help.

Upvote 1 Downvote Reply Award Share

Report

Award

Share

New to Reddit?

Create your account and connect with a world of communities.

[Continue with Email](https://www.reddit.com/register/)

[Continue With Phone Number](https://www.reddit.com/login/)

By continuing, you agree to our [User Agreement](https://www.redditinc.com/policies/user-agreement) and acknowledge that you understand the [Privacy Policy](https://www.redditinc.com/policies/privacy-policy).

# More posts you may like

[PixelArt vs Low Poly - in terms of time consumption.](https://www.reddit.com/r/gamedev/comments/6mfl32/pixelart_vs_low_poly_in_terms_of_time_consumption/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 9y ago [

### PixelArt vs Low Poly - in terms of time consumption.

](https://www.reddit.com/r/gamedev/comments/6mfl32/pixelart_vs_low_poly_in_terms_of_time_consumption/) 88 upvotes · 35 comments

[Low poly or realistic?](https://www.reddit.com/r/IndieGaming/comments/1gqgavh/low_poly_or_realistic/) [r/IndieGaming](https://www.reddit.com/r/IndieGaming/) • 1y ago [

### Low poly or realistic?

](https://www.reddit.com/r/IndieGaming/comments/1gqgavh/low_poly_or_realistic/)  6 upvotes · 12 comments

[Tips for combining low poly with pixelated textures?](https://www.reddit.com/r/gamedev/comments/y0mebf/tips_for_combining_low_poly_with_pixelated/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 4y ago [

### Tips for combining low poly with pixelated textures?

](https://www.reddit.com/r/gamedev/comments/y0mebf/tips_for_combining_low_poly_with_pixelated/) 4 upvotes · 13 comments

[How do people learn low poly? I want to get better but I don't understand why triangles are used for certain areas like this picture?](https://www.reddit.com/r/blender/comments/157ighb/how_do_people_learn_low_poly_i_want_to_get_better/) [r/blender](https://www.reddit.com/r/blender/) • 3y ago [

### How do people learn low poly? I want to get better but I don't understand why triangles are used for certain areas like this picture?

](https://www.reddit.com/r/blender/comments/157ighb/how_do_people_learn_low_poly_i_want_to_get_better/)  347 upvotes · 35 comments

[Any low poly/simplistic 3D modeling software?](https://www.reddit.com/r/gamedev/comments/ue2qiw/any_low_polysimplistic_3d_modeling_software/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 4y ago [

### Any low poly/simplistic 3D modeling software?

](https://www.reddit.com/r/gamedev/comments/ue2qiw/any_low_polysimplistic_3d_modeling_software/) 18 upvotes · 51 comments

[Experimenting with low poly 3D + Pixel Art!](https://www.reddit.com/r/Unity3D/comments/1fzpapl/experimenting_with_low_poly_3d_pixel_art/) [r/Unity3D](https://www.reddit.com/r/Unity3D/) • 2y ago [

### Experimenting with low poly 3D + Pixel Art!

](https://www.reddit.com/r/Unity3D/comments/1fzpapl/experimenting_with_low_poly_3d_pixel_art/)  0:11 273 upvotes · 16 comments

[I tried making a low poly pixel 3d model!](https://www.reddit.com/r/blender/comments/1mdm3cm/i_tried_making_a_low_poly_pixel_3d_model/) [r/blender](https://www.reddit.com/r/blender/) • 9mo ago [

### I tried making a low poly pixel 3d model!

](https://www.reddit.com/r/blender/comments/1mdm3cm/i_tried_making_a_low_poly_pixel_3d_model/)  0:05 108 upvotes · 5 comments

[The 3D Low Poly Generator has been released and is now live! Thanks to everyone on this sub who helped with their feedback!](https://www.reddit.com/r/3Dprinting/comments/rz5dcs/the_3d_low_poly_generator_has_been_released_and/) [r/3Dprinting](https://www.reddit.com/r/3Dprinting/) • 4y ago [

### The 3D Low Poly Generator has been released and is now live! Thanks to everyone on this sub who helped with their feedback!

](https://www.reddit.com/r/3Dprinting/comments/rz5dcs/the_3d_low_poly_generator_has_been_released_and/)  572 upvotes · 19 comments

[My low-poly Marty with pixel-art textures!](https://www.reddit.com/r/PixelArt/comments/lgqzui/my_lowpoly_marty_with_pixelart_textures/) [r/PixelArt](https://www.reddit.com/r/PixelArt/) • 5y ago [

### My low-poly Marty with pixel-art textures!

](https://www.reddit.com/r/PixelArt/comments/lgqzui/my_lowpoly_marty_with_pixelart_textures/)  445 upvotes · 20 comments

[What's your favourite Low Poly Art Style/Graphics?](https://www.reddit.com/r/gamedev/comments/1fhoshn/whats_your_favourite_low_poly_art_stylegraphics/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 2y ago [

### What's your favourite Low Poly Art Style/Graphics?

](https://www.reddit.com/r/gamedev/comments/1fhoshn/whats_your_favourite_low_poly_art_stylegraphics/) 1 upvote · 2 comments

[3d Pixel low poly](https://www.reddit.com/r/gamedesign/comments/15g9855/3d_pixel_low_poly/) [r/gamedesign](https://www.reddit.com/r/gamedesign/) • 3y ago [

### 3d Pixel low poly

](https://www.reddit.com/r/gamedesign/comments/15g9855/3d_pixel_low_poly/) 10 comments

[Pixel Art: Low-res vs 'medium-res' vs high-res](https://www.reddit.com/r/gamedev/comments/377igc/pixel_art_lowres_vs_mediumres_vs_highres/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 11y ago [

### Pixel Art: Low-res vs 'medium-res' vs high-res

](https://www.reddit.com/r/gamedev/comments/377igc/pixel_art_lowres_vs_mediumres_vs_highres/) 182 upvotes · 142 comments

[Low Poly 3D Assets for Free](https://www.reddit.com/r/gamedev/comments/qve7zr/low_poly_3d_assets_for_free/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 4y ago [

### Low Poly 3D Assets for Free

](https://www.reddit.com/r/gamedev/comments/qve7zr/low_poly_3d_assets_for_free/) 10 upvotes · 2 comments

[Is 3D low poly art easy enough to get into compared to 2D? Is it too difficult to make something unique with it?](https://www.reddit.com/r/gamedev/comments/1e2a80l/is_3d_low_poly_art_easy_enough_to_get_into/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 2y ago [

### Is 3D low poly art easy enough to get into compared to 2D? Is it too difficult to make something unique with it?

](https://www.reddit.com/r/gamedev/comments/1e2a80l/is_3d_low_poly_art_easy_enough_to_get_into/) 7 comments

[Im a programmer and I can create low poly 3d models but not much else](https://www.reddit.com/r/gamedev/comments/1ol0wfz/im_a_programmer_and_i_can_create_low_poly_3d/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 6mo ago [

### Im a programmer and I can create low poly 3d models but not much else

](https://www.reddit.com/r/gamedev/comments/1ol0wfz/im_a_programmer_and_i_can_create_low_poly_3d/) 7 comments

[I am experimenting with a very low pixel count, and am wondering if something like this could work in a game? I'm afraid it won't look good when it's zoomed in on fullscreen](https://www.reddit.com/r/PixelArt/comments/jyq4av/i_am_experimenting_with_a_very_low_pixel_count/) [r/PixelArt](https://www.reddit.com/r/PixelArt/) • 5y ago [

### I am experimenting with a very low pixel count, and am wondering if something like this could work in a game? I'm afraid it won't look good when it's zoomed in on fullscreen

](https://www.reddit.com/r/PixelArt/comments/jyq4av/i_am_experimenting_with_a_very_low_pixel_count/)  3 upvotes · 16 comments

[I've made 150 free Low-poly nature models you can use in any game!](https://www.reddit.com/r/gamedev/comments/c9ff0d/ive_made_150_free_lowpoly_nature_models_you_can/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 7y ago [

### I've made 150 free Low-poly nature models you can use in any game!

](https://www.reddit.com/r/gamedev/comments/c9ff0d/ive_made_150_free_lowpoly_nature_models_you_can/) 1.6K upvotes · 85 comments

[Low Res pixel art](https://www.reddit.com/r/PixelArt/comments/z0iuk0/low_res_pixel_art/) [r/PixelArt](https://www.reddit.com/r/PixelArt/) • 3y ago [

### Low Res pixel art

](https://www.reddit.com/r/PixelArt/comments/z0iuk0/low_res_pixel_art/)  3 48 upvotes · 4 comments

[Low poly 3D](https://www.reddit.com/r/apps/comments/1l3ts9c/low_poly_3d/) [r/apps](https://www.reddit.com/r/apps/) • 1y ago [

### Low poly 3D

](https://www.reddit.com/r/apps/comments/1l3ts9c/low_poly_3d/) 2 upvotes · 5 comments

[He has entered the 3rd Dimension…](https://www.reddit.com/r/limbuscompany/comments/1rsim0g/he_has_entered_the_3rd_dimension/) [r/limbuscompany](https://www.reddit.com/r/limbuscompany/) • 1mo ago [

### He has entered the 3rd Dimension…

](https://www.reddit.com/r/limbuscompany/comments/1rsim0g/he_has_entered_the_3rd_dimension/)  3K upvotes · 66 comments

[Tried to make a low pixel font ... it's hard](https://www.reddit.com/r/PixelArt/comments/1c7vbyn/tried_to_make_a_low_pixel_font_its_hard/) [r/PixelArt](https://www.reddit.com/r/PixelArt/) • 2y ago [

### Tried to make a low pixel font ... it's hard

](https://www.reddit.com/r/PixelArt/comments/1c7vbyn/tried_to_make_a_low_pixel_font_its_hard/)  6 454 upvotes · 44 comments

[Is there a time/cost benefit to making low poly as opposed to high def?](https://www.reddit.com/r/gamedev/comments/118re5v/is_there_a_timecost_benefit_to_making_low_poly_as/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 3y ago [

### Is there a time/cost benefit to making low poly as opposed to high def?

](https://www.reddit.com/r/gamedev/comments/118re5v/is_there_a_timecost_benefit_to_making_low_poly_as/) 2 upvotes · 11 comments

[I made a 3D Low Poly Generator, perfect for making Low Poly models for 3D printing! Try it yourself!](https://www.reddit.com/r/3Dprinting/comments/r6hxgr/i_made_a_3d_low_poly_generator_perfect_for_making/) [r/3Dprinting](https://www.reddit.com/r/3Dprinting/) • 4y ago [

### I made a 3D Low Poly Generator, perfect for making Low Poly models for 3D printing! Try it yourself!

](https://www.reddit.com/r/3Dprinting/comments/r6hxgr/i_made_a_3d_low_poly_generator_perfect_for_making/)  0:12 432 upvotes · 46 comments

[Roadmap for Low Poly Modeling?](https://www.reddit.com/r/blender/comments/1k2obds/roadmap_for_low_poly_modeling/) [r/blender](https://www.reddit.com/r/blender/) • 1y ago [

### Roadmap for Low Poly Modeling?

](https://www.reddit.com/r/blender/comments/1k2obds/roadmap_for_low_poly_modeling/) 2 upvotes · 3 comments

[What's are good programs for simple (low-poly) 3d modelling/texturing?](https://www.reddit.com/r/gamedev/comments/lysi0/whats_are_good_programs_for_simple_lowpoly_3d/) [r/gamedev](https://www.reddit.com/r/gamedev/) • 15y ago [

### What's are good programs for simple (low-poly) 3d modelling/texturing?

](https://www.reddit.com/r/gamedev/comments/lysi0/whats_are_good_programs_for_simple_lowpoly_3d/) 41 upvotes · 52 comments

## View Post in

[Français](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/low_poly_3d_with_pixel_effect_advice/?tl=fr)

[Português (Brasil)](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/low_poly_3d_with_pixel_effect_advice/?tl=pt-br)

[हिन्दी](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/low_poly_3d_with_pixel_effect_advice/?tl=hi)

See more See fewer

[Deutsch](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/low_poly_3d_with_pixel_effect_advice/?tl=de)

[Italiano](https://www.reddit.com/r/Unity3D/comments/1kh4gqg/low_poly_3d_with_pixel_effect_advice/?tl=it)

# Community Info Section

[r/Unity3D](https://www.reddit.com/r/Unity3D/)

Join

Unity 3D - News, Help, Resources, and Showcase

A subreddit for News, Help, Resources, and Conversation regarding Unity, the game engine. Do NOT use your phone to take screenshots. Video and photos of computer screens taken by phones are NOT allowed. All screenshots must be grabbed from the computer itself.

Show more

Public

Anyone can view, post, and comment to this community

## Top Posts

[Reddit reReddit: Top posts of May 7, 2025](https://www.reddit.com/posts/2025/may-7-1/global/)

[Reddit reReddit: Top posts of May 2025](https://www.reddit.com/posts/2025/may/global/)

[Reddit reReddit: Top posts of 2025](https://www.reddit.com/posts/2025/global/)

[Reddit Rules](https://www.redditinc.com/policies/content-policy) [Privacy Policy](https://www.reddit.com/policies/privacy-policy) [User Agreement](https://www.redditinc.com/policies/user-agreement) [Your Privacy Choices](https://support.reddithelp.com/hc/articles/43980704794004) [Accessibility](https://support.reddithelp.com/hc/sections/38303584022676-Accessibility) [Reddit, Inc. © 2026. All rights reserved.](https://redditinc.com/)

Expand Navigation

Expand Navigation

Collapse Navigation

Collapse Navigation 

0cAFcWeA5oajDOUL6Ry5qQ6ZDX8XIiVbR6VKu9vR5A_JozS46qblUI0hkCnDlqHQNLxvETtk-eJSlkbxk_Z4ypB3vxO1eA2OaVQYK5Gl9LjUPT1esXKn4KmdKw0txj9uDQXitE3yQz5JNbdyBG7uygZ5EPm_naW86e_yXHiq1LfIYok9QXEOcDUUUGuH7WWMj6WDLYjq_Ik6pMcbpnIAOSOFT4du_0GK8uG3Tsj5dSuUS5Vsyjjqou1XMSQ_NArhzZn_EzRcQGtKFKmoV5MXqrb30F6Hyqss2bNaVw8IMBOw8cmvqm5XESChMALBGWyIoAbCz9wbq_a-i9dHt2yfwjmNeUjd8Rij1KrQs6PKvzQ6T3X62xhkRe2B6W1ZhmNg35x2lQBmk0AucSYFpwblhuheQimDHFymIskeQzv4at2IjANjKLa2b7DkmntH5d3OnA2Ad5Uak_sdPJW122Cf6BFte-N9jUCcVkd98OgYVOjy1nuhfZ_GvyzKCxdn8NbuYTyMhSbfxkiVwSBH2-1JVJuULUmSbtYO6euNRUyh7ZVzhSjGRXsFiLxRawfkOEFE_wtZaiRh2TnVDxRaOgOZ7wZml0RCXv7xwCcdqs1dS33IWjWCnejHQtdDq5DOs7I5Q6IF3u6SFkxX0RB03E7ea1dizy1GArjlI29YatK8YG0xAv2Nnk5kVo_tZAzR-mWREQF2n-wwKG6mNtYCfApxbAOmF5g1HAfx69ugj1WkU6fKIPokzkHQxVKbF7R8y5TeLG_i5rtXIXN6xX3tGob7iNAt-UAhkVOUiSK2nNw1xnGiwuVxr09z8TwJFzjMGudbB-NGE71TzC8_kseGoGDlyCr_l1WydbO0wDFFCiMNKwMtBBA3rUZgrP5zoqm_CMcA4CcYvLMXKK9N9rdu5YnJbKqjLO8nE561lcAVXU_khhqaE0xCpbOsV5gatCgvALhfCXVm2Gv5ya4xwxYDIJOVkLuG8Y9oDkTb1X8fv1eC8iv-QcZuGsEOwuh4W9xRBvuDkllex97CBJ8Y6Xi2YTTkaFu_q7EZW20-gFShndL5XVJP48Wj3k7T68UwgRCLxShqdhojVOYLe2VxXzvi0YmqJ4FT-cG7P6rDVZQkh4LtXKzCFvohvCPFBXKQcKMkKo2xZj59xumV0K7RHAwqkXEdq4fxccqZjlUJEfpdCaomOzFUaOs4WytrznRPE2gJ3Mn9az-lpyyscdIWzf7h1ReUYNktW0mYsY4DXajhx5fjDcSDUIJ_dZk32kB-foS9GwMVwKmhtds0Ai9OswsbwoAlL_0H-pCTx_2k8eHrNeHXAAu6HOOORxdZTqVW30YTodAUJY1ezFTRUAPfrclKmbAYrRfV5qaMj9HipTheI6YRGjp4y_DyJhq20GIWDclgbB6SpTa605MdlJeNPb_Q8Nd4v6WtVfvcq8_x3NfOyGGvtQzpO7G98sW_5_fn0-2J7-D8lPZ5gznMfjZXuZlinqH5OlSEjAQlPD6hYMUcOGAfRQeugP9tesXmcURj08_mPxbpCR5DhxE6Jik68aVMC4jWLF-dzgEdCkAvrhaXKa_zk-nRgMYwFBBpR_oD6Dj9pJZOIRumfhXqpPX-XJgU762uZUy7EH5dQnytq7mipp5YLh1GJrkUezDa5I0hYTomLVZfEH3lCL1dxplJ5oxniArM8Gw1g0_JScTRI_HZLUZrOCofijL00q7AkHdspO93Ws0nZXQBhCgVmJGra6VS8O-dozVbHQ4ByLtFJgTKwrZ-MUuIxpFhF8It1pyDHD5vtO7TY0iI09cC2vJXs1U_SnVUUz_nMJFTOfm9BwRpVSOJlUJ3YRxxEsnMDKjWHunBF7h14dslRpyaWqSqkBFHlJd_GDEfiCXVAvzUab2bFplKOsM53bamlVHzG-bqKtQuGcCBFDpe92Qb5rjmgsZOm9MhBsvs9JGLFs3ptXfHhjUBf7RcQ7-_CqtcREnTDMtHMLJ4fRfdCvM0Vt_pObShQD7iEJm0Vt1sphjVQ-q_yGBU_ZBkB4NUvYhADDIhYZUCMRidqQIJKPTdXc1yNZo9qbxlAmTqJOavf7RYEG04mOeFqYtCjMo71LDRU2H3kjdhNB7CoquMmqscDmSw66dnB8W-48TUhBsgfGL5h36A