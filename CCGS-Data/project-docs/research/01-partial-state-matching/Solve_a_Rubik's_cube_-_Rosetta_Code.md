# Solve a Rubik's cube - Rosetta Code

Solve a Rubik's cube - Rosetta Code

[Jump to content](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#bodyContent) [-]

Main menu

Main menu

move to sidebar hide

Social

[Discord](https://discord.gg/JUAQDevqaH)

[Facebook](https://www.facebook.com/rosettacode)

[Twitter](https://twitter.com/rosettacode)

Explore

[Languages](https://rosettacode.org/wiki/Category:Programming_Languages)

[Tasks](https://rosettacode.org/wiki/Category:Programming_Tasks)

[Random page](https://rosettacode.org/wiki/Special:Random)

[Rosetta Code](https://rosettacode.org/wiki/Rosetta_Code)

[Search](https://rosettacode.org/wiki/Special:Search)

Search [-]

Appearance

[Create account](https://rosettacode.org/wiki/Special:CreateAccount?returnto=Solve+a+Rubik%27s+cube)

[Log in](https://rosettacode.org/wiki/Special:UserLogin?returnto=Solve+a+Rubik%27s+cube) [-]

Personal tools

[Create account](https://rosettacode.org/wiki/Special:CreateAccount?returnto=Solve+a+Rubik%27s+cube)

[Log in](https://rosettacode.org/wiki/Special:UserLogin?returnto=Solve+a+Rubik%27s+cube)

Pages for logged out editors [learn more](https://rosettacode.org/wiki/Help:Introduction)

[Contributions](https://rosettacode.org/wiki/Special:MyContributions)

[Talk](https://rosettacode.org/wiki/Special:MyTalk)

[ [dismiss](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube)]

Join our Discord to discuss Rosetta Code!

## Contents

move to sidebar hide

[Beginning](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube)

[1 Go](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Go)

[2 JavaScript](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#JavaScript)

[3 Julia](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Julia)

[4 Kotlin](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Kotlin)

[5 Nim](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Nim)

[6 Phix](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Phix) Toggle Phix subsection

[6.1 cfop](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#cfop)

[6.2 thistlethwaite](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#thistlethwaite)

[7 Python](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Python)

[8 Raku](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Raku)

[9 Rust](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Rust)

[10 Wren](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Wren) [-]

Toggle the table of contents

# Solve a Rubik's cube

[Page](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube)

[Discussion](https://rosettacode.org/wiki/Talk:Solve_a_Rubik%27s_cube) [-]

English

[Read](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube)

[View source](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube?action=edit)

[View history](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube?action=history) [-]

Tools

Tools

move to sidebar hide

Actions

[Read](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube)

[View source](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube?action=edit)

[View history](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube?action=history)

[Refresh](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube?action=purge)

General

[What links here](https://rosettacode.org/wiki/Special:WhatLinksHere/Solve_a_Rubik%27s_cube)

[Related changes](https://rosettacode.org/wiki/Special:RecentChangesLinked/Solve_a_Rubik%27s_cube)

[Printable version](javascript:print();)

[Permanent link](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube?oldid=379282)

[Page information](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube?action=info)

[Cite this page](https://rosettacode.org/wiki/Special:CiteThisPage?page=Solve_a_Rubik%27s_cube&id=379282&wpFormIdentifier=titleform)

[Get shortened URL](https://rosettacode.org/wiki/Special:UrlShortener?url=https%3A%2F%2Frosettacode.org%2Fwiki%2FSolve_a_Rubik%2527s_cube)

[Browse properties](https://rosettacode.org/wiki/Special:Browse/:Solve-5Fa-5FRubik's-5Fcube)

Appearance

move to sidebar hide

From Rosetta Code

Solve a Rubik's cube is a **draft** programming task. It is not yet considered ready to be promoted as a complete task, for reasons that should be found in its [talk page](https://rosettacode.org/wiki/Talk:Solve_a_Rubik%27s_cube).

Task

Create a program that is capable of solving a Rubik's Cube as efficiently as possible.

Other names are:

Magic Cube

Speed Cube

Puzzle Cube

Cube

You may use any sort of input you wish.

## [Go](https://rosettacode.org/wiki/Category:Go)

As in the case of the Kotlin entry, this is a translation of the C++ competition code by Stefan Pochmann.

On the same machine, typical timings for the 100 line dataset are just over 200 milliseconds which is significantly slower than both the Kotlin and C++ code but still acceptable.

The relative slowness may be partly due to maps in Go not being able to accept reference types (such as slices) as a key because they don't support the '==' operator which tests for structural equality. I've therefore had to copy each slice returned by the 'id' function into a forty element array (a value type in Go) and use that as a key instead.

For the single line example, typical timings are around 240 milliseconds which is much faster than Kotlin due, no doubt, to JVM warm up time.

Output:

## [JavaScript](https://rosettacode.org/wiki/Category:JavaScript)

**Translation of**: [Kotlin](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Kotlin)

## [Julia](https://rosettacode.org/wiki/Category:Julia)

**Translation of**: [Kotlin](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Kotlin)

Output:

Using the 100-line database:

## [Kotlin](https://rosettacode.org/wiki/Category:Kotlin)

This is a translation of Stefan Pochmann's C++ entry in the 2004 competition which was linked to by the author of the Phix entry. This program won the Judge's prize, finished second overall and (as in the case of the winner) is based on Thistlethwaite's algorithm.

I've adjusted the code to accept input from a file whose name is supplied via a command line argument and, as in the case of the original competition, to calculate the average number of moves for each line in the file and the average time to process each one.

To aid readability I've also inserted spaces between each move in the results and added the total moves needed for each line.

Output:

Using the original dataset of 100 lines, the results were as follows (time doesn't mean much but is typical for my modest machine):

When run with a file containing the single line:

UL DL RF UB FD BR DB UF DR UR BL FL FDR BLU DLB URB RUF FLD BRD FUL

a typical result was:

## [Nim](https://rosettacode.org/wiki/Category:Nim)

**Translation of**: [Kotlin](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Kotlin)

Output:

We compiled the program with command `nim c -d:danger --gc:arc -d:lto` , which means no runtime checks, ARC memory management and link time optimization.

When run with the original dataset of 100 lines, we got:

When run with a file containing the single line:

UL DL RF UB FD BR DB UF DR UR BL FL FDR BLU DLB URB RUF FLD BRD FUL

a typical result was:

## [Phix](https://rosettacode.org/wiki/Category:Phix)

### cfop

Uses brute-force (width/highscore-first) Fridrich-steps (ie cross,f2l,oll,pll).

Not the fastest (see THRESHOLD) or shortest results (see thistlethwaite) but the code is pretty easy to follow.

The final stage (pll) would probably benefit the most from being replaced with standard algorithms.

While technically this works under pwa/p2js, you should expect a blank screen for nearly 3 minutes.

Output:

The "hardest case" from [http://www.cube20.org](http://www.cube20.org/) with a high threshold. You can try this manually. Disclaimer: the results are not always quite as good as this!

### thistlethwaite

Translation/de-golf(hrumph) of Tomas Sirgedas' winning entry from [http://tomas.rokicki.com/cubecontest](http://tomas.rokicki.com/cubecontest) as held in 2004.

Faster and shorter solutions (in most cases) than cfop, however probably nigh on impossible to debug/enhance...

Output:

The distributed copy of demo\rosetta\rubik_cfop.exw also contains routines to convert between my 136-character cube and reid notation, and demo\rosetta\rubik_tomas.exw also contains the full 100-long test set from the original competition.

## [Python](https://rosettacode.org/wiki/Category:Python)

**Translation of**: [Go](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Go)

## [Raku](https://rosettacode.org/wiki/Category:Raku)

This is a translation of the [Perl](https://tomas.rokicki.com/cubecontest/stefan2.txt) [competition](https://tomas.rokicki.com/cubecontest/) code, by Stefan Pochmann.

Output:

## [Rust](https://rosettacode.org/wiki/Category:Rust)

**Translation of**: [Kotlin](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Kotlin)

## [Wren](https://rosettacode.org/wiki/Category:Wren)

**Translation of**: [Kotlin](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube#Kotlin)

Wren has a similar problem to Go in that Lists cannot be used as Map keys. Worse still Wren doesn't support fixed size arrays so I've had to convert the Lists to space delimited Strings which is an expensive operation.

Despite this, the script is taking an average of just over a second to calculate the number of moves for each line which is probably not too bad for an interpreted language.

Output:

Using the original dataset of 100 lines, the results were as follows:

When run with a file containing the single line:

UL DL RF UB FD BR DB UF DR UR BL FL FDR BLU DLB URB RUF FLD BRD FUL

a typical result was:

Retrieved from " [https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube?oldid=379282](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube?oldid=379282)"

[Categories](https://rosettacode.org/wiki/Special:Categories):

[Draft Programming Tasks](https://rosettacode.org/wiki/Category:Draft_Programming_Tasks)

[Go](https://rosettacode.org/wiki/Category:Go)

[JavaScript](https://rosettacode.org/wiki/Category:JavaScript)

[Julia](https://rosettacode.org/wiki/Category:Julia)

[Kotlin](https://rosettacode.org/wiki/Category:Kotlin)

[Nim](https://rosettacode.org/wiki/Category:Nim)

[Phix](https://rosettacode.org/wiki/Category:Phix)

[Python](https://rosettacode.org/wiki/Category:Python)

[Raku](https://rosettacode.org/wiki/Category:Raku)

[Rust](https://rosettacode.org/wiki/Category:Rust)

[Wren](https://rosettacode.org/wiki/Category:Wren)

Cookies help us deliver our services. By using our services, you agree to our use of cookies.

[More information](https://meta.miraheze.org/wiki/Special:MyLanguage/Privacy_Policy#2._Cookies) OK

This page was last edited on 13 April 2025, at 12:25.

Content is available under GNU Free Document License 1.3 unless otherwise noted.

[Privacy policy](https://meta.miraheze.org/wiki/Special:MyLanguage/Privacy_Policy)

[About Rosetta Code](https://rosettacode.org/wiki/Rosetta_Code:About)

[Disclaimers](https://rosettacode.org/wiki/Rosetta_Code:General_disclaimer)

[Terms of Use](https://meta.miraheze.org/wiki/Special:MyLanguage/Terms_of_Use)

[Donate to Miraheze](https://meta.miraheze.org/wiki/Special:MyLanguage/Donate)

[Mobile view](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube?mobileaction=toggle_view_mobile)

Search

Search [-]

Toggle the table of contents

Solve a Rubik's cube

[Add topic](https://rosettacode.org/wiki/Solve_a_Rubik%27s_cube) 