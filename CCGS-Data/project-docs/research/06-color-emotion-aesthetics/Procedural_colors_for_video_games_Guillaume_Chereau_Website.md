# Procedural colors for video games | Guillaume Chereau Website

Procedural colors for video games | Guillaume Chereau Website

[Guillaume Chereau Website](https://gcher.com/)

[About](https://gcher.com/about/)

# Procedural colors for video games

2014 October 6

Recently I have been spending a lot of time thinking about how to use procedural colors in my -still unnamed- incoming video game.

[ **edit**]: The game is done now, it is called [Blowfish Rescue](http://noctua-software.com/blowfish-rescue/get), and you can play it for free on Android of iOS.

This is a problem that I am sure many other indie game developers have been thinking about, and there are not so many resources about it online, so I though I would share my experience so far on the subject.

# The problem[#](https://gcher.com/posts/2014-10-06-procedural-colors-for-game/#the-problem)

The question I asked myself is the following one: from a random seed value, how to generate a set of RGB colors to assign to the elements of my game, such that the final rendering will look reasonably good.

The algorithm should also allow to specify some extra constraints for certain element color (for example I want the sky to alway look more or less blue).

And of course, I want to get as much variation as possible in the generated sets of colors.

# HSV color space[#](https://gcher.com/posts/2014-10-06-procedural-colors-for-game/#hsv-color-space)

The first thing I realized is that the RGB color representation used by most graphics API is not well suited for this kind of problem. Humans perceive colors in term of hue, value, and saturation or chroma. So just like in many mathematical problems, the solution comes from choosing a better referential.

My first choice was to use the HSV color space, since it is very easy to convert back and forth between RGB and HSV. Also gimp color selector allows to enter values in HSV, making it easier to make tests.

However I soon realized that HSV actually match rather poorly our actual perception of Hue Saturation and Value. That is, changing the hue component of the HSV representation of a color will also change it perceived lightness and saturation. At first I though that it wouldn't be a problem for my algorithm, but in fact it makes a substantial difference. For example here is a screen shot of the chapter menu of my game where each button color has a fixed HSV saturation and value, and the hue is uniformly incremented: 

We can see that the red button looks darker than the other buttons.

Here is the same menu, using this time the LCH color representation with fixed chroma and lightness: 

# LCH color space[#](https://gcher.com/posts/2014-10-06-procedural-colors-for-game/#lch-color-space)

HSV (or the related HSL) are not really suitable for actual representation of color components in term of hue, lightness and saturation. So instead I used the more advanced CIE LCH color space (Light, Chroma, Hue).

LCH is based on the CIE Lab color space and closely match our perception of hue, light and chroma. The algorithm to convert from RGB to LCH and reverse can be found on the [great website of Bruce Lindbloom](http://www.brucelindbloom.com/).

Let's compare two color wheels of HSV and LCH:  

The colors in the LCH wheel look more uniform. You might think that they also look a bit boring, but this is in fact the feeling you would expect when all the colors differ only by their hue.

Now, the problem with the LCH color space is that many LCH values don't map to a RGB color. For example here is the LCH color wheel with different Lightness values 

Some colors are missing, specially when the lightness value gets to close to 0 or 100.

Since this might be a problem for our algorithm, and I don't need to get perfect values, I decided to fill the gap using an interpolation between the closest valid RGB value and the HSL value. 

This is not perfect, but will do for the purpose of my algorithm.

# Color harmony[#](https://gcher.com/posts/2014-10-06-procedural-colors-for-game/#color-harmony)

Many resources online about color theory mention the color harmonies rules. The idea is that some colors will look better placed next to each other if their hue are placed at specified relative position within the color wheel.

What few resources point out is that the implicit color wheel used for this is the paint mixing color wheel, where blue is the opposite to orange, and green is opposite to red.

This is not really the case in my LCH color wheel, so I deformed the hue values of my color wheel to make it look closer to the paint mixing color wheel. 

And this is my final color wheel, so to summarized, I started from the default LCH color wheel, fixed the wholes using HSL values, and deformed the hue to match more closely to the color mixing wheel. Here are a few examples for different chroma values: 

# Color distance[#](https://gcher.com/posts/2014-10-06-procedural-colors-for-game/#color-distance)

My color generation algorithm will use the notion of color distance (either to force a color to be close to a referential color, either to force two colors not to look too close). The formula to compute LCH color distance can also be found on Bruce Lindbloom website.

# The algorithm[#](https://gcher.com/posts/2014-10-06-procedural-colors-for-game/#the-algorithm)

And finally, here is the algorithm I use so far:

# results[#](https://gcher.com/posts/2014-10-06-procedural-colors-for-game/#results)

I might still try to change the algorithm in order to get more color variation, or to simplify the color wheel generation, but the results I got so far are not that bad, at least none of the level look too ugly.

Here are some screen shots of different levels of the game:            

# Additional resources[#](https://gcher.com/posts/2014-10-06-procedural-colors-for-game/#additional-resources)

Here are a few link to resources that I found useful when developing my algorithm:

[Bruce Lindbloom website](http://www.brucelindbloom.com/): All the algorithm to convert between many color space.

[Devmag](http://devmag.org.za/2012/07/29/how-to-choose-colours-procedurally-algorithms/): Interesting blog post covering some other ideas to procedurally generate colors.

[tigercolor](http://www.tigercolor.com/color-lab/color-theory/color-harmonies.htm): description of the different color harmonies.

[ryb pdf](http://threekings.tk/mirror/ryb_TR.pdf): paper explaining how to convert from RYB to RGB.

[« Prev 10 C99 tricks](https://gcher.com/posts/2015-02-13-c-tricks/) [Next » Named parameters in C](https://gcher.com/posts/2014-07-14-named-parameters-in-c/)      

© 2024 [Guillaume Chereau Website](https://gcher.com/) Powered by [Hugo](https://gohugo.io/) & [PaperMod](https://github.com/adityatelange/hugo-PaperMod/)