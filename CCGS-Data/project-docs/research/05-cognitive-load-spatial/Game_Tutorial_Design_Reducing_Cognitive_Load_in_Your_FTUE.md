# Game Tutorial Design: Reducing Cognitive Load in Your FTUE

Game Tutorial Design: Reducing Cognitive Load in Your FTUE

top of page 

[HOME](https://www.game-changr.com/)

[ABOUT](https://www.game-changr.com/about)

[SERVICES](https://www.game-changr.com/services)

[CONTACT](https://www.game-changr.com/contact)

[BLOG](https://www.game-changr.com/blog)

Menu

Close

[BOOK A CALL](https://calendar.app.google/JzFBTdtYjui4Yr7SA)

[All Posts](https://www.game-changr.com/blog)

# FTUE. Why Your Tutorial Overwhelms Players: Understanding Cognitive Load

 Raphael Doyen

Jul 11, 2025

6 min read

Updated: Mar 31 

John Sweller - Educational Psychologist

Cognitive Load Theory comes from educational psychology, developed by John Sweller in the 1980s. The core insight: **working memory is severely limited**.

You can only hold about 3-7 pieces of information in working memory at once. Try to add more, and earlier information gets pushed out.

More importantly for game design: Cognitive Load Theory identifies three types of load, and only one of them helps learning.

Intrinsic Load

This is the inherent complexity of what you're teaching. Chess has high intrinsic load as the strategic depth is genuinely complex. Tic-Tac-Toe has low intrinsic load as the game is fundamentally simple.

You can't reduce intrinsic load without simplifying the actual content. If your game has deep systems, those systems have intrinsic complexity.

**You can't eliminate this. But you can manage when and how you introduce it.**

Extraneous Load

This is cognitive load created by poor presentation. Confusing tutorials, cluttered UI, unclear feedback, wall-of-text explanations that add load without teaching anything.

**This is waste. You can and should eliminate it.**

Germane Load

This is the mental effort that actually builds understanding. When players are actively processing information, building mental models, connecting concepts, that's germane load.

**This is valuable. You want to maximize this while minimizing the others.**

**The art of good tutorial design:**

**minimize intrinsic load through careful sequencing, eliminate extraneous load through clear presentation, and maximize germane load by helping players build real understanding.** 

Cognitive load Photo: Jennifer Valcke

1.

## Games that manage cognitive load well

Into the Breach: Teaching complexity through simplicity

Into the Breach - 2018

Into the Breach is a tactically complex game. But it manages cognitive load brilliantly.

**Minimizing Intrinsic Load**:

First island: Only 3 enemy types, simple behaviors

Second island: Adds 2 new types, keeps 1 familiar

Each island adds complexity only after previous is comfortable

Tutorial introduces one new mechanic per mission

**Eliminating Extraneous Load**:

Perfect information (no hidden mechanics causing confusion)

Clear UI showing exactly what will happen

Undo button removes fear of experimentation

Grid-based clarity removes spatial ambiguity

**Maximizing Germane Load**:

You immediately apply what you learn

Each mission teaches through doing

Failure teaches clearly (you see what went wrong)

Success requires understanding, not memorization

The game is complex, but never overwhelming. Each new element builds on solid foundation.

If you want to learn more about this topic, I found this thesis from Yifang Liu from the Columbia University about the topic: [https://www.dpmlab.org/papers/Yifang_Thesis.pdf](https://www.dpmlab.org/papers/Yifang_Thesis.pdf)

Portal: The perfect teaching game

Portal is a masterclass in managing cognitive load.

**Early levels**:

Only blue portal (half the mechanic)

Only orange portal (other half)

Both portals, but simple spaces

Complex spaces, but familiar portal behavior

Each level introduces one new element. Never two simultaneously.

**Extraneous load elimination**:

GLaDOS the Mastermind that guides you, demonstrates before you try

Visual language is consistent

Spaces are clean and readable

No combat pressure during learning

**Germane load focus**:

You must understand portals to progress

Experimentation is encouraged

Each puzzle builds conceptual understanding

"Aha" moments come from genuine insight

By the time you reach complex puzzles, portal behaviour is integrated and used automatic. Your working memory is free to focus on puzzle-solving, not remembering controls.

1.

## Games that violate cognitive load principles

Dwarf Fortress: When complexity overwhelms

Dwarf Fortress - 2006

Dwarf Fortress is famous for being "impossible to learn." Not because it's actually impossible, but because cognitive load is mismanaged.

**Intrinsic Load**: Extremely high (deep simulation)

**Extraneous Load**: Massive (ASCII graphics, unclear UI, no guidance)

**Germane Load**: Lost in the noise (can't learn when overwhelmed)

The intrinsic complexity is part of the appeal. But the extraneous load (terrible interface, unclear feedback, no structured teaching) makes that complexity inaccessible.

Players who persist eventually build understanding. But most quit from cognitive overload long before reaching germane learning.

1.

## Techniques for managing cognitive load

Chunking

Break information into meaningful units.

Don't teach "Press A to jump, B to attack, X to dodge, Y to interact, RT to aim..."

Instead: "Movement and jumping" (one chunk), then later "Basic combat" (second chunk), then later "Advanced techniques" (third chunk).

Each chunk becomes a single unit in working memory once mastered, freeing capacity for new information.

Progressive Disclosure

Don't show everything at once. Reveal features gradually as players demonstrate readiness.

**Hollow Knight** does this beautifully:

Movement abilities unlock over hours

Each new ability opens new areas

By the time you have all abilities, early ones are automatic

Complex movement combinations emerge naturally

Reduce Split Attention

Information should be where players need it, when they need it. Not forcing them to look multiple places simultaneously.

**Don't**: Tutorial text at top of screen, action at bottom, controls in corner. Player must split attention between three locations while trying to execute.

**Do**: Contextual tooltips that appear exactly where relevant. The information and the action are unified, reducing cognitive load.

Visual Before Verbal

Show, don't tell. Visual demonstrations require less cognitive load than verbal explanations.

**Why**: Visual processing and verbal processing use different channels. You can show something while explaining it without overload. But two verbal explanations simultaneously create interference.

1.

## Applying cognitive load principles to your game

1.

Audit your tutorial

Go through your tutorial and categorize every element:

**Intrinsic Load: What concepts are genuinely necessary?**

Can you teach them separately?

What's the minimum viable sequence?

Which can wait until later?

**Extraneous Load: What's creating confusion without teaching?**

Unclear UI elements

Verbose explanations

Interrupting gameplay to explain

Multiple things happening simultaneously

**Germane Load: What's actually building understanding?**

Hands-on practice

Immediate feedback

Building on previous knowledge

Active problem-solving

**Then eliminate extraneous, sequence intrinsic, maximize germane.**

1.

The "one new thing" rule

Never introduce two unfamiliar elements simultaneously. If teaching a new mechanic, do it in a familiar environment. If showing a new area, use familiar mechanics.

**Portal** is again exemplary:

New portal color? Simple room.

New room type? Familiar portals.

Both new? Never happens.

This rule dramatically reduces intrinsic load at any given moment.

1.

Test for cognitive overload

Watch playtesters. Signs of cognitive overload:

Long pauses before acting

Checking controls/UI repeatedly

Visible frustration or confusion

Asking "wait, how do I...?" about things just explained

Can execute each step individually, fails when combining

These aren't signs of poor teaching. They're signs of overloaded working memory.

**Solution**: Reduce what you're teaching at once, or space it out more.

1.

The "teaching moment" structure

For each new concept:

**Introduce visually** (minimal load)

**Demonstrate** (show it working)

**Practice in isolation** (one thing at a time)

**Apply in simple context** (build confidence)

**Combine with previous learning** (only after automatic)

Never skip steps. Never combine steps. Each reduces cognitive load by building incrementally.

1.

## The paradox of helping too much

Here's something counterintuitive: too much explanation can increase cognitive load.

**Example**: "Press A to jump. Jumping lets you cross gaps and reach higher platforms. You'll need to jump throughout the game. Try jumping now by pressing A."

This seems helpful. But it's actually adding extraneous load.

Compare: Environmental gap appears. Player presses buttons, discovers jump. They've learned the same thing with minimal load.

**Trust players to discover when possible. Explain only when necessary.**

When to teach explicitly vs implicitly

**Teach explicitly when**:

The concept is invisible (internal game logic)

Failure is costly or frustrating

Discovery would take unreasonably long

Safety/avoidance mechanics (you need to know before encountering danger)

**Teach implicitly when**:

The concept is visible (physical, observable)

Failure is cheap (easy retry, no penalty)

Discovery is quick and satisfying

Exploration/adventure mechanics (finding things is the fun)

## Where this leads us

When players say "this is too complicated," they often mean "this exceeds my cognitive capacity right now." The solution isn't necessarily simplifying the game. It's managing cognitive load.

**Ask yourself**:

What's the intrinsic load? Can we sequence it better?

What's extraneous load? Can we eliminate it?

What's germane load? Can we maximize it?

Your game can be complex. Your systems can be deep. But **the rate at which players can absorb that complexity is fixed by human cognition.**

Respect that limit, and complexity becomes depth. **Ignore it, and depth becomes overwhelm.**

The difference between a game that's "hard to learn" and one that's "rewarding to master" is often just cognitive load management.

**About the author** 

Raphaël spent 18 years inside game development, as a studio lead, a publisher-side director, and a creative collaborator on more than 40 shipped titles.

He built Game Changr because he'd seen too many teams make expensive decisions without the player signal to justify them and too many research reports arrive too late to change anything. [https://www.linkedin.com/in/raphaeldoyen/](https://www.linkedin.com/in/raphaeldoyen/)

## Recent Posts

[See All](https://www.game-changr.com/blog)

[Metro, Work, Gaming: Why Context Changes Everything for Mobile Playtests](https://www.game-changr.com/post/metro-work-gaming-why-context-changes-everything-for-mobile-playtests)

[Stop Teaching, Start Seducing: How to Make Players Fall in Love in 10 Minutes](https://www.game-changr.com/post/stop-teaching-start-seducing-how-to-make-players-fall-in-love-in-10-minutes) 

[Repost Linkedin : 𝗗𝗼𝗻'𝘁 𝗪𝗮𝗶𝘁 𝗨𝗻𝘁𝗶𝗹 𝗬𝗼𝘂'𝗿𝗲 “𝗚𝗹𝗮𝘀𝘁𝗼𝗻𝗿𝗲𝗮𝗱𝘆” 𝘁𝗼 𝗠𝗲𝗲𝘁 𝗬𝗼𝘂𝗿 𝗙𝗮𝗻𝘀!](https://www.game-changr.com/post/repost-linkedin)

## Comments

Write a comment... Write a comment... 

London-based game playtesting and player research studio.

Founded by practitioners who have shipped 40+ titles across indie and AAA.

NAVIGATION

[HOME](https://www.game-changr.com/)

[ABOUT](https://www.game-changr.com/about)

[SERVICES](https://www.game-changr.com/services)

[CONTACT](https://www.game-changr.com/contact)

[BLOG](https://www.game-changr.com/blog)

Menu

Close

CONTACT

EMAIL

[Hello@game-changr.com](mailto:hello@game-changr.com?subject=Contact%20-%20site%20Game-changr.com)

BOOK A CALL

[Book a 30-min call](https://calendar.app.google/iwa9ckFrtPpTJNEH6)

LOCATION

LONDON AIX - EN PROVENCE

© 2026 Game-Changr. All rights reserved.

[HOME](https://www.game-changr.com/)

[ABOUT](https://www.game-changr.com/about)

[SERVICES](https://www.game-changr.com/services)

[CONTACT](https://www.game-changr.com/contact)

[BLOG](https://www.game-changr.com/blog)

bottom of page