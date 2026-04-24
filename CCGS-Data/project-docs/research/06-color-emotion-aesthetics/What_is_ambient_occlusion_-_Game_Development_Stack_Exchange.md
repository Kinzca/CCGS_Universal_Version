# What is ambient occlusion? - Game Development Stack Exchange

graphics - What is ambient occlusion? - Game Development Stack Exchange

By clicking “Sign up”, you agree to our [terms of service](https://gamedev.stackexchange.com/legal/terms-of-service/public) and acknowledge you have read our [privacy policy](https://gamedev.stackexchange.com/legal/privacy-policy).

Sign up with Google

# OR

Email

Password

Sign up

Already have an account? [Log in](https://gamedev.stackexchange.com/users/login)

[Skip to main content](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion#content)

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

[Sign up](https://gamedev.stackexchange.com/users/signup?ssrc=site_switcher&returnurl=https%3a%2f%2fgamedev.stackexchange.com%2fquestions%2f23%2fwhat-is-ambient-occlusion) or [log in](https://gamedev.stackexchange.com/users/login?ssrc=site_switcher&returnurl=https%3a%2f%2fgamedev.stackexchange.com%2fquestions%2f23%2fwhat-is-ambient-occlusion) to customize your list.

### [more stack exchange communities](https://stackexchange.com/sites)

[company blog](https://stackoverflow.blog/) 4. 5. [Log in](https://gamedev.stackexchange.com/users/login?ssrc=head&returnurl=https%3a%2f%2fgamedev.stackexchange.com%2fquestions%2f23%2fwhat-is-ambient-occlusion) 6. [Sign up](https://gamedev.stackexchange.com/users/signup?ssrc=head&returnurl=https%3a%2f%2fgamedev.stackexchange.com%2fquestions%2f23%2fwhat-is-ambient-occlusion)

# [What is ambient occlusion?](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion)

[Ask Question](https://gamedev.stackexchange.com/questions/ask)

Asked 15 years, 9 months ago

Modified [6 years ago](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion?lastactivity)

Viewed 145k times

This question shows research effort; it is useful and clear

66

Save this question. 

Show activity on this post.

I've heard about ambient occlusion and it looks nice, but what exactly is it?

[graphics](https://gamedev.stackexchange.com/questions/tagged/graphics)

[rendering](https://gamedev.stackexchange.com/questions/tagged/rendering)

[terminology](https://gamedev.stackexchange.com/questions/tagged/terminology)

[Share](https://gamedev.stackexchange.com/q/23)

Share a link to this question https://gamedev.stackexchange.com/q/23

Copy link [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

Follow

Follow this question to receive notifications

[edited Dec 14, 2015 at 12:55](https://gamedev.stackexchange.com/posts/23/revisions)

[Anko](https://gamedev.stackexchange.com/users/7804/anko)

13.5k 10 10 gold badges 56 56 silver badges 82 82 bronze badges

asked Jul 14, 2010 at 19:21

[Dr. Snoopy](https://gamedev.stackexchange.com/users/35/dr-snoopy)

5,115 10 10 gold badges 35 35 silver badges 36 36 bronze badges

1

Just want to add information about Ambient occlusion (AO) made by VR game developers: [Ambient Occlusion: An Extensive Guide on Its Algorithms and Use in VR](https://vr.arvilab.com/blog/ambient-occlusion) Pylypenko Elena – [Pylypenko Elena](https://gamedev.stackexchange.com/users/122573/pylypenko-elena) 2018-11-26 10:06:02 +00:00 [Commented Nov 26, 2018 at 10:06](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion#comment293932_23)

[Add a comment](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion) |

## 6 Answers 6

Sorted by: [Reset to default](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion?answertab=scoredesc#tab-top)

Highest score (default)

Date modified (newest first)

Date created (oldest first)

This answer is useful

39

Save this answer. 

Show activity on this post.

Ambient occlusion is a method to approximate how bright light should be shining on any specific part of a surface, based on the light and it's environment. This is used to add realism.

[Wikipedia](http://en.wikipedia.org/wiki/Ambient_occlusion#Method_of_implementation) has a nice paragraph that explains what is done.

Ambient occlusion is most often calculated by casting rays in every direction from the surface. Rays which reach the background or “sky” increase the brightness of the surface, whereas a ray which hits any other object contributes no illumination. As a result, points surrounded by a large amount of geometry are rendered dark, whereas points with little geometry on the visible hemisphere appear light.

[Here is a highly technical article about it.](https://developer.nvidia.com/gpugems/gpugems/part-iii-materials/chapter-17-ambient-occlusion)

[Share](https://gamedev.stackexchange.com/a/54)

Share a link to this answer https://gamedev.stackexchange.com/a/54

Copy link [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

Follow

Follow this answer to receive notifications

[edited Apr 7, 2020 at 14:26](https://gamedev.stackexchange.com/posts/54/revisions)

[Pikalek](https://gamedev.stackexchange.com/users/33287/pikalek)

13.4k 5 5 gold badges 49 49 silver badges 54 54 bronze badges

answered Jul 14, 2010 at 19:32

[Ólafur Waage](https://gamedev.stackexchange.com/users/10/%C3%93lafur-waage)

3,673 1 1 gold badge 31 31 silver badges 32 32 bronze badges

1

7 While I realize you are quoting something, it describes ambient illumination, not ambient occlusion. While extremely similar, the logic is inverted (you remove light when rays hit nearby objects to achieve ambient occlusion) MickLH – [MickLH](https://gamedev.stackexchange.com/users/32649/micklh) 2014-02-21 18:49:24 +00:00 [Commented Feb 21, 2014 at 18:49](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion#comment127773_54)

[Add a comment](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion) |

This answer is useful

83

Save this answer. 

Show activity on this post.

Ambient light is a light type in computer graphics that is used to simulate global illumination. [Ambient occlusion](http://santisanchez28.wordpress.com/2011/07/16/ambient-occlusion-2/) is simply a simulation of the shadowing caused by objects blocking the ambient light. Because ambient light is environmental, unlike other types of lighting, ambient occlusion does not depend on light direction. As such, it can be pre-computed for static objects. 

Without AO (left) Note that the shadow in the left image is caused by directional light, with AO (right).

In traditional Ray Tracing ambient occlusion is simulated by sampling rays from a certain point, which takes a shape of a hemisphere, and then is checked for intersection with the scene (also called Object Space AO). 

Notice how ray samples are used to simulate AO integration. 

Notice the aliasing (dots) caused by ambient occlusion under-sampling.

Because the ray tracing sampling technique is too slow to be used in real time computer graphics, other methods emerged that simulate this behavior. One notable approach is called Screen Space Ambient Occlusion (SSAO).

SSAO is a screen-space technique developed by Crytek. The ambient occlusion is computed in a full-screen pass, using the Z-buffer as the only input.

The ambient occlusion factor `kA` of each pixel is estimated by testing a set of points distributed in a hemi-sphere around the pixel's location. This effectively simulates the traditional ray tracing approach in screen space.

The value of `kA` depends on the samples that are in front of the value in the Z-buffer. If half or more of the samples pass a depth test (that is, they arec closer to the camera than the center pixel), then `kA` receives a value of 1. A smaller number of samples result `kA` less than 1. 

SSAO component of a typical game scene

[Share](https://gamedev.stackexchange.com/a/66638)

Share a link to this answer https://gamedev.stackexchange.com/a/66638

Copy link [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

Follow

Follow this answer to receive notifications

[edited Jul 8, 2016 at 14:02](https://gamedev.stackexchange.com/posts/66638/revisions)

[3Dave](https://gamedev.stackexchange.com/users/2306/3dave)

3,141 1 1 gold badge 23 23 silver badges 37 37 bronze badges

answered Dec 1, 2013 at 17:16

[concept3d](https://gamedev.stackexchange.com/users/5440/concept3d)

12.8k 4 4 gold badges 47 47 silver badges 58 58 bronze badges

0

[Add a comment](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion) |

This answer is useful

7

Save this answer. 

Show activity on this post.

[http://en.wikipedia.org/wiki/Ambient_occlusion](http://en.wikipedia.org/wiki/Ambient_occlusion)

Ambient occlusion usually means applying data that represents how much ambient light hits a surface. That data is usually a gray scale texture or vertex colors depending on the implementation.

To compute the data the most common way is the render the scene with with a solid white texture and 1 point light multiple times, moving the point light each time to a different location on a sphere or hemisphere. The results of all the renders are averaged and that gives you the data about each particular location in the scene and how much light hits that location.

For example a place in the scene that in always bright no matter where you put the light will be bright where as a place that is dark no matter where you put the light will be dark. The result is that you get something that will put dark shadows in crevices and cracks and soft lighting where objects would generally cast a shadow.

[Share](https://gamedev.stackexchange.com/a/70)

Share a link to this answer https://gamedev.stackexchange.com/a/70

Copy link [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/)

Follow

Follow this answer to receive notifications

answered Jul 14, 2010 at 19:36

[gman](https://gamedev.stackexchange.com/users/79/gman)

850 1 1 gold badge 7 7 silver badges 17 17 bronze badges

[Add a comment](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion) |

This answer is useful

3

Save this answer. 

Show activity on this post.

Ambient occlusion is a method to compute lighting on a surface of an object that takes into account light brightness due to occlusion of the surface in relation to light source.

That is, ambient occlusion is a shading method that is global in nature which means light/illumination from each point in a scene can influence other points in a scene. In contrast with local shading methods like Phong/Blinn, this means shading with ambient occlusion adds more realism.

Here is a bit of a simplified explanation. Ambient occlusion is a neat trick way of simulating global lighting which is faster than other methods we have so far. Rays are cast from every direction from a surface point 'up' in relation to the surface. Rays that do not reach any object in its path, that is they reach the background void threshold (the 'sky'), increase the brightness of the surface. Rays which, on the other hand, hit geometry when cast from surface, add no brightness to surface. So surface points which are surrounded by lots of other geometry are kind of in a shade.

SSAO is just one way of doing ambient occlusion.

[Share](https://gamedev.stackexchange.com/a/66)

Share a link to this answer https://gamedev.stackexchange.com/a/66

Copy link [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/)

Follow

Follow this answer to receive notifications

answered Jul 14, 2010 at 19:35

[Keyframe](https://gamedev.stackexchange.com/users/19/keyframe)

2,331 1 1 gold badge 16 16 silver badges 22 22 bronze badges

1

1 "...in relation to light source" When you mention light sources it suggests direct illumination. Although ambient light comes from a source, like any other light, it is considered to be coming from all directions. muhuk – [muhuk](https://gamedev.stackexchange.com/users/91/muhuk) 2013-12-02 07:02:35 +00:00 [Commented Dec 2, 2013 at 7:02](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion#comment119353_66)

[Add a comment](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion) |

This answer is useful

-2

Save this answer. 

Show activity on this post.

Ambient occlusion means where the light doesn't reach. Creases, and crevices don't get any ambient light bouncing around so they are usually absent of most light creating "darkest darks" usually depending on the atmosphere.

[Share](https://gamedev.stackexchange.com/a/160126)

Share a link to this answer https://gamedev.stackexchange.com/a/160126

Copy link [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

Follow

Follow this answer to receive notifications

[edited Nov 26, 2018 at 18:04](https://gamedev.stackexchange.com/posts/160126/revisions)

[DMGregory](https://gamedev.stackexchange.com/users/39518/dmgregory)

♦

141k 23 23 gold badges 258 258 silver badges 405 405 bronze badges

answered Jun 25, 2018 at 16:14

[Jenay Elder](https://gamedev.stackexchange.com/users/117495/jenay-elder)

1

0

[Add a comment](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion) |

This answer is useful

-7

Save this answer. 

Show activity on this post.

Ambient Occlusion.. for those who are not really familiar with gaming graphics technology, ambient occlusion adds specific amount of light in every object in the scene. every polygons are rendered in different angle, in that case the amount of light is uneven that makes the game more realistic and appealing to eye

[Share](https://gamedev.stackexchange.com/a/66627)

Share a link to this answer https://gamedev.stackexchange.com/a/66627

Copy link [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

Follow

Follow this answer to receive notifications

answered Dec 1, 2013 at 11:21

[palanguejolly](https://gamedev.stackexchange.com/users/39501/palanguejolly)

3

2

12 I don't think you are contributing anything new worth mentioning. Lasse – [Lasse](https://gamedev.stackexchange.com/users/32955/lasse) 2013-12-01 14:03:11 +00:00 [Commented Dec 1, 2013 at 14:03](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion#comment119300_66627)

1 This answer appears to be describing "ambient light" not "ambient occlusion." Ambient occlusion reduces the light added by ambient lighting. DMGregory – [DMGregory](https://gamedev.stackexchange.com/users/39518/dmgregory) ♦ 2018-11-26 18:06:24 +00:00 [Commented Nov 26, 2018 at 18:06](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion#comment293963_66627)

[Add a comment](https://gamedev.stackexchange.com/questions/23/what-is-ambient-occlusion) |

## You must [log in](https://gamedev.stackexchange.com/users/login?ssrc=question_page&returnurl=https%3A%2F%2Fgamedev.stackexchange.com%2Fquestions%2F23) to answer this question.

Start asking to get answers

Find the answer to your question by asking.

[Ask question](https://gamedev.stackexchange.com/questions/ask)

Explore related questions

[graphics](https://gamedev.stackexchange.com/questions/tagged/graphics)

[rendering](https://gamedev.stackexchange.com/questions/tagged/rendering)

[terminology](https://gamedev.stackexchange.com/questions/tagged/terminology)

See similar questions with these tags.

The Overflow Blog

[No country left behind with sovereign AI](https://stackoverflow.blog/2026/04/17/no-country-left-behind-with-sovereign-ai/?cb=1)

[Human input needed: take our survey on AI agents](https://stackoverflow.blog/2026/04/15/human-input-needed-take-our-survey-on-ai-agents/?cb=1)

Report this ad

Linked

[-1](https://gamedev.stackexchange.com/questions/95453/what-are-ambient-lighting-illumination-occlusion?lq=1)

[What are 'ambient' lighting/illumination/occlusion?](https://gamedev.stackexchange.com/questions/95453/what-are-ambient-lighting-illumination-occlusion?noredirect=1&lq=1)

[9](https://gamedev.stackexchange.com/questions/288/how-to-implement-ssao-in-shader-model-3-dx9?lq=1)

[How to implement SSAO in Shader Model 3/ DX9?](https://gamedev.stackexchange.com/questions/288/how-to-implement-ssao-in-shader-model-3-dx9?noredirect=1&lq=1)

Related

[16](https://gamedev.stackexchange.com/questions/47/what-is-a-texture-atlas?rq=1)

[What is a texture atlas?](https://gamedev.stackexchange.com/questions/47/what-is-a-texture-atlas?rq=1)

[60](https://gamedev.stackexchange.com/questions/74/what-is-deferred-rendering?rq=1)

[What is deferred rendering?](https://gamedev.stackexchange.com/questions/74/what-is-deferred-rendering?rq=1)

[3](https://gamedev.stackexchange.com/questions/65849/are-ambient-diffuse-and-specular-light-or-material-properties?rq=1)

[Are ambient, diffuse and specular light or material properties?](https://gamedev.stackexchange.com/questions/65849/are-ambient-diffuse-and-specular-light-or-material-properties?rq=1)

[8](https://gamedev.stackexchange.com/questions/66945/how-many-rendering-passes-is-normal?rq=1)

[How many rendering passes is "normal"?](https://gamedev.stackexchange.com/questions/66945/how-many-rendering-passes-is-normal?rq=1)

[0](https://gamedev.stackexchange.com/questions/158952/what-is-morph-target-animation?rq=1)

[What is morph target animation?](https://gamedev.stackexchange.com/questions/158952/what-is-morph-target-animation?rq=1)

[2](https://gamedev.stackexchange.com/questions/188389/how-do-i-apply-ambient-occlusion-in-forward-rendering-to-the-ambient-term-only?rq=1)

[How do I apply Ambient Occlusion in Forward Rendering to the ambient term only?](https://gamedev.stackexchange.com/questions/188389/how-do-i-apply-ambient-occlusion-in-forward-rendering-to-the-ambient-term-only?rq=1)

[4](https://gamedev.stackexchange.com/questions/210536/what-are-n-buffers?rq=1)

[What are N-Buffers?](https://gamedev.stackexchange.com/questions/210536/what-are-n-buffers?rq=1)

[2](https://gamedev.stackexchange.com/questions/210716/what-does-being-conservative-mean-in-occlusion-culling?rq=1)

[What does 'being conservative' mean in occlusion culling?](https://gamedev.stackexchange.com/questions/210716/what-does-being-conservative-mean-in-occlusion-culling?rq=1)

[Hot Network Questions](https://stackexchange.com/questions?tab=hot)

[Is this sentence a compliment or a criticism?](https://ell.stackexchange.com/questions/374569/is-this-sentence-a-compliment-or-a-criticism)

[Who are Paka and Vala, slain by Indra?](https://hinduism.stackexchange.com/questions/69865/who-are-paka-and-vala-slain-by-indra)

[How does Voyager 1's plot of velocity vs distance look?](https://space.stackexchange.com/questions/70473/how-does-voyager-1s-plot-of-velocity-vs-distance-look)

["I have purpose"](https://german.stackexchange.com/questions/82212/i-have-purpose)

[Is passing NULL valid when array parameter uses [static 0] in C99?](https://stackoverflow.com/questions/79927531/is-passing-null-valid-when-array-parameter-uses-static-0-in-c99)

[Can the extra Radiant damage from True Strike be added to an attack with Graze?](https://rpg.stackexchange.com/questions/219114/can-the-extra-radiant-damage-from-true-strike-be-added-to-an-attack-with-graze)

[How to resolve "operation could not be completed because the vhdx is currently in use" for wsl despite prior wsl.exe --shutdown?](https://superuser.com/questions/1936864/how-to-resolve-operation-could-not-be-completed-because-the-vhdx-is-currently-i)

[How to robustly connect to Android phone with KDEConnect/GSConnect when travelling between different networks, just like Apple ecosystem?](https://askubuntu.com/questions/1565782/how-to-robustly-connect-to-android-phone-with-kdeconnect-gsconnect-when-travelli)

[Isn't the voltage divider on the right equivalent of the one on the left?](https://electronics.stackexchange.com/questions/768227/isnt-the-voltage-divider-on-the-right-equivalent-of-the-one-on-the-left)

[When Electrical Device Manufacturer's written and verbal instructions differ, which instructions should be followed?](https://diy.stackexchange.com/questions/330100/when-electrical-device-manufacturers-written-and-verbal-instructions-differ-wh)

[Reflections of a point with respect to the sides of a triangle lie on a conic passing through the triangle's vertices](https://math.stackexchange.com/questions/5133652/reflections-of-a-point-with-respect-to-the-sides-of-a-triangle-lie-on-a-conic-pa)

[Teaching arithmetic sum formula](https://matheducators.stackexchange.com/questions/30152/teaching-arithmetic-sum-formula)

[TikZ nodes within a scope are not projected](https://tex.stackexchange.com/questions/762044/tikz-nodes-within-a-scope-are-not-projected)

[What facts are being cited for, or against, claims that Netanyahu influenced Trump to start the current war with Iran?](https://politics.stackexchange.com/questions/94570/what-facts-are-being-cited-for-or-against-claims-that-netanyahu-influenced-tru)

[What are the pre-made solder pads seen in this video?](https://electronics.stackexchange.com/questions/768198/what-are-the-pre-made-solder-pads-seen-in-this-video)

[Is it discriminatory to require documentation for menstrual disorders?](https://law.stackexchange.com/questions/114612/is-it-discriminatory-to-require-documentation-for-menstrual-disorders)

[Does individual citizen access to guns lower the risk of government-perpetrated killings of civilians?](https://politics.stackexchange.com/questions/94556/does-individual-citizen-access-to-guns-lower-the-risk-of-government-perpetrated)

[111111111 made by 1234567890](https://puzzling.stackexchange.com/questions/137716/111111111-made-by-1234567890)

[What assurances does the public have that the DOJ will be independent in its defence of the government, when sued by the sitting president?](https://politics.stackexchange.com/questions/94561/what-assurances-does-the-public-have-that-the-doj-will-be-independent-in-its-def)

[Thinking of quitting postdoc, how to pivot safely?](https://academia.stackexchange.com/questions/226523/thinking-of-quitting-postdoc-how-to-pivot-safely)

[PDE textbooks and interpretations](https://math.stackexchange.com/questions/5133664/pde-textbooks-and-interpretations)

[Do verbs distribute under plural subject with the qualifier "Both"](https://english.stackexchange.com/questions/639521/do-verbs-distribute-under-plural-subject-with-the-qualifier-both)

[Is the is/ought gap the same as an is/fitting gap?](https://philosophy.stackexchange.com/questions/137860/is-the-is-ought-gap-the-same-as-an-is-fitting-gap)

[How do believers in ontological randomness explain why the universe follows stable laws at all?](https://philosophy.stackexchange.com/questions/137872/how-do-believers-in-ontological-randomness-explain-why-the-universe-follows-stab)

[Question feed](https://gamedev.stackexchange.com/feeds/question/23)

# Subscribe to RSS

Question feed

To subscribe to this RSS feed, copy and paste this URL into your RSS reader. https://gamedev.stackexchange.com/feeds/question/23 

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

Site design / logo © 2026 Stack Exchange Inc; user contributions licensed under [CC BY-SA](https://stackoverflow.com/help/licensing) . rev 2026.4.20.42210

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