# Computational Group theory

Computational Group theory

# Jaap's Puzzle Page

# Computational Group theory

On this page I will try to explain how computers can be used in analysing the permutation groups that occur in puzzles. It is different from the [Computer Puzzling](https://www.jaapsch.net/puzzles/compcube.htm) page, as it is not strictly about searching for optimal solutions but about modelling a puzzle's group as a whole using the Schreier-Sims algorithm, and in the process finding non-optimal solutions to the puzzle.

**[Puzzle Algorithms](https://www.jaapsch.net/puzzles/schreier.htm#algs)

[Stabiliser chains](https://www.jaapsch.net/puzzles/schreier.htm#stab)

[Example](https://www.jaapsch.net/puzzles/schreier.htm#exam)

[Improvements](https://www.jaapsch.net/puzzles/schreier.htm#improv)**

## Puzzle Algorithms

The Rubik's cube has 43· 10 18 positions. We know this because we can

count all the possible positions that occur when taking apart and putting together the puzzle.

prove various restrictions on parity, edge flip and corner twist.

Give an algorithm to solve any position satisfying those restrictions.

How can we have a computer do something like this? It would be nice if we could just tell the computer how many pieces there are and what moves are possible, and that it could deduce from that how many positions there are, and how to solve it.

It would be exceptionally hard for it to do step 2 above, to literally find what restrictions there are and prove them. Instead, what is normally done is to get the computer to do only step 3, find an algorithm, and to do it in such a way that it is certain that it is complete, that there are no reachable positions that cannot be solved by that algorithm.

Now, let's see what a fixed Rubik's Cube algorithm might look like for a computer. It would have to be specified in every detail. Suppose for example that the algorithm would first put the correct edge piece at the UF position. There are 24 ways the edge can be situated (12 locations times 2 orientations), only one of which is correct. The first phase of the algorithm could simply be a list of 24 move sequences for all those cases, where one of the move sequences is empty (i.e. 'do nothing'). The next phase could be a list of 22 move sequences for the next edge piece, and so on all the way to the last piece of the cube. The last piece is automatically correct, so its list contains only the empty move sequence.

If you have an algorithm of this form, and if you somehow know it is complete, then there are many useful things you (or your computer) can do with it, such as:

Find the number of possible positions. Just count the number of options in each phase, and multiply them together.

Test if a particular position is solvable. Simply try to solve it with the algorithm. If in some phase the piece being solved lies at a location for which there is no sequence on the list for solving it, then the starting position was not legal. If it can be solved, then the algorithm gives an explicit method for solving it.

Describe any position succinctly. Use the algorithm to solve it, and simply note which option is used in each phase. You can use the techniques explained in the indexing section of the computer cubing page to convert this into a single integer between 0 and the total number of positions.

Generate any random solvable position, with each position equally probable. Just go through the algorithm, and at each phase choose one of the options on the list at random.

There now remains only the question of finding such a complete algorithm. For this we will need a little group theory.

## Stabiliser chains

Let G be the permutation group of the puzzle. After the first phase of the puzzle algorithm, one of the pieces has been placed correctly, but the rest hasn't. What remains can be seen as a smaller puzzle, with a permutation group G 1. Clearly G 1 is a subgroup of G, and it consists of all permutations in G that don't move that first solved piece. G 1 is called the **stabiliser** of that piece.

Thus the algorithm we are looking for consists of a sequence of nested groups: G > G 1 > G 2 > .... > G n = I. Each group stabilises one more piece than the previous, and this is called a Stabiliser Chain.

Each phase of the puzzle algorithm also calls for a list of move sequences, one sequence for each possible location of the piece being solved. If we have solved i pieces so far, what is left is a permutation in G i. We should be able to solve the next piece, so one of the move sequences on the list for phase i will leave us with a permutation in G i+1. If the list of move sequences for phase i is r i1, r i2, r i3, ... then this means that every element in G i lies in r ik G i+1 for some k. Thus the cosets r i1 G i+1, r i2 G i+1, r i3 G i+1, ... together form the whole of G i, or the r ik are a complete set of coset representatives for the cosets of G i+1 in G i.

Given the generators of G i, it is relatively easy to find the set of coset representatives r ij. Suppose for the moment that the piece you are solving next is already correct. Simply by trying all combinations of the generators of G i, you fairly quickly find ways to get that piece to any other place that it could be. By looking at it in reverse, you have found ways to put the piece in its correct position wherever it may be. In the next section this process will be illustrated with an example.

If we now had a way to find a set of generators for G i+1, once we had the generators of G i and had found the coset representative r ij of that phase, then we could build up a stabiliser chain from left to right. This can be done because of the Schreier subgroup lemma.

**Schreier subgroup lemma:**

Let G be a group with a set of generators S. Let H be a subgroup of G, and let R be the set of coset representatives of H in G. For any g in G, let [g] denote the element of R that represents the coset gH, i.e. [g]H = gH, and [g] lies in R.

Then H is generated by the set { [sr] -1 (sr) | r in R, s in S }.

**Proof:**

Let h be any element of H. Then it also lies in G, so h = s 1 s 2 s 3...s k for some sequence of generators s i in S.

Let t i = [s i+1...s k], the coset representative of s i+1...s k.

Note that t k = [e] = e by definition, and t 0 = [s 1..s k] = [h] = e.

So we can therefore rewrite h as h = (t 0 -1 s 1 t 1)(t 1 -1 s 2 t 2) ...(t k-1 -1 s k t k).

We also find that (s i t i)H = s i(t i H) = s i ( s i+1..s k H) = (s i s i+1..s k)H = t i-1 H so [s i t i] = [t i-1] = t i-1.

We use this to rewrite h once again, to get h = ([s 1 t 1] -1 s 1 t 1)([s 2 t 2] -1 s 2 t 2) ...([s k t k] -1 s k t k).

The t i are coset representatives (by definition) so clearly each factor in the above expression is of the form [sr] -1 (sr) with s in S and r in R.

Furthermore these factors are in H because [sr] -1 (sr) H = [sr] -1 (sr H) = [sr] -1 ([sr]H) = ([sr] -1 [sr])H = eH = H.

Any element h in H is a product of such factors, so it follows that the set { [sr] -1 (sr) | r in R, s in S } will generate exactly H.

The construction of this stabiliser chain as described here is the **Schreier-Sims algorithm**, and it forms the basis of all computational group theory.

## Example

Let's illustrate it with a small example that we can work out completely, namely the Rubik's Cheese. The six pieces are labelled A to F, and suppose we hold F still, and solve the other 5 pieces relative to it. The three generators of the group are the moves B (turning over ABC), C (turning over BCD) and D (turning over CDE).

In the first phase we will solve location E, so we have to determine where the piece that belongs there could be. This is easy to find out by doing the reverse - start with the correct piece at location E, try out all single moves to see where the piece ends up. For each of those locations again try out every move, to get all the locations that can be reached in two moves. Then another move, and so on until you find no more new locations for the piece. In this way we get the orbit of the piece, and in this example we get the following list:

E→E: -

E→c: D

E→C: DC

E→A: DB

E→a: DCB

E→e: DCD

I have used lower case letters to indicate when the piece is flipped. Note that applying a further move to any of these will not lead to another location, so no other locations can be reached by the piece.

Invert these sequences, and we can solve the first piece:

E→E: -

c→E: D

C→E: CD

A→E: BD

a→E: BCD

e→E: DCD

Now we have to apply Schreier's lemma to get generators for the group that remains. In this case we have to combine the 3 generators of G with the 6 coset representatives from the list above. For example, let's combine the generator D with the coset representative BCD. Multiplying them gives DBCD, which is denoted by sr in the lemma. We have to find which coset representative this permutation is similar to, so we have to see which piece this permutation brings to location E. The sequence DBCD brings the piece at location a to location E, and representative that does the same thing is BCD. The lemma then says that (BCD)' DBCD, or DCBDBCD is one of the generators of the group G 1, the stabiliser subgroup of G that keeps E fixed. You can easily check that the move sequence indeed does not affect the piece at location E.

If we work out all 3×6 generators for G 1, then some of them will be the identity, and there will no doubt be many duplicates. The lemma only guarantees that together they generate the group G 1, not that they form a nice minimal set of generators. The table below shows the results:

|  |  |  |  |  |  |  |

| --- | --- | --- | --- | --- | --- | --- |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

The generators from this table are therefore:

B

C

DBCBD

DBDBD

DCBDBCD = B

DCDCDCD = C

DCBCBCD = DBCBD

DCDBDCD = DBDBD

Note that the last four are identical in effect to the first four, so they can safely be ignored.

The next phase is to solve piece D using these four generators. As before, we find all the locations that piece D can get to if it were to start at its correct location by applying the four generators.

D→D: -

D→b: C, or DBCBD

D→B: CB

D→d: CBC, or DBDBD

Inverting these gives the solution sequences for phase 2 of our algorithm.

D→D: -

b→D: C

B→D: BC

d→D: CBC

Again we apply Schreier's Lemma to get the generators of the remaining group.

|  |  |  |  |  |  |  |  |  |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

|  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |

There are apparently 10 different generators in this table, but after removing those that have the same effect as a shorter one, we are left with only three:

B

CDBCBD

CDBDBDC

The third phase is trying to solve piece C using these generators.

C→C: -

C→a: B

C→c: CDBCBD

C→A: CDBDBDC

Inverting these we get the solution sequences for this third phase:

C→C: -

a→C: B

c→C: DBCBDC

A→C: CDBDBDC

Once more we apply Schreier's lemma to get the generators of the remaining group.

|  |  |  |  |  |  |  |

| --- | --- | --- | --- | --- | --- | --- |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

It turns out that these generators all have no effect so the remaining group is trivial, and the last two pieces will automatically be solved now. Our complete chain now looks like this:

|  |  |  |  |  |

| --- | --- | --- | --- | --- |

|  |  |  |  |  |

|  |  |  |  |  |

|  |  |  |  |  |

|  |  |  |  |  |

|  |  |  |  |  |

This shows that the Cheese has exactly 96 positions, and gives us a way to solve it in at most 13 moves, with an average of 6.83 moves.

## Improvements

Let's see what happens with a more difficult puzzle, the Rubik's Cube. The generators of G are of course the face turns of the cube. Let's solve the UF location first. As before we can easily find all the different places the UF edge piece can placed, and by doing the inverse of those move sequences we put the correct piece at UF wherever it may be. In this example you would find a list such as this:

UF→UF: -

UF→UR: U

UF→UB: U2

UF→UL: U'

UF→LF: F

UF→DF: F2

UF→RF: F'

UF→FR: RU

UF→DR: R2U (or D'F2)

UF→BR: R'U

UF→RB: BU2 (or R2F')

UF→DB: B2U2 (or D2F2)

UF→LB: B'U2 (or L2F)

UF→BL: LU'

UF→DL: L2U' (or DF2)

UF→FL: L'U'

UF→LU: LF

UF→LD: L'F

UF→RD: RF'

UF→RU: R'F'

UF→FD: FL'U' (or F'RU, DRF', D'L'F)

UF→FU: FRU (or F'L'U', ULF, U'R'F')

UF→BU: BLU' (or B'R'U, U'LF, UR'F')

UF→BD: B'LU' (or BR'U, D'RF', DL'F)

We can now apply the Schreier lemma to find generators of the group that remains once this first piece has been solved.

|  |  |  |  |  |  |  |

| --- | --- | --- | --- | --- | --- | --- |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

As you can see, there is a problem with Schreier's Lemma. The number of generators for each successive G i increases exponentially. For example, the lemma gives about 624 generators for G 1 as seen above, and then 624*22 generators for G 2, and so on. Most of these generators are redundant, i.e. we can make do with far fewer of them. For a practical method to build a solving algorithm, we need a way to reduce the number of these generators.

When we build up the list of generators, we want to know if the next one we add is already in the group generated by the ones already on the list. If so, we don't need to add it after all as it is superfluous. Now, how do we check whether some permutation is in a group? We can do this if we had a complete stabiliser chain for that group, because then we can just see if it is a solvable permutation or not. Therefore instead of building each stage of the stabiliser chain separately, it is better to setup the whole chain first, initially with each stage containing no generators and only the identity as a coset representative. As we fill in the first stages, we update the later stages too. Each time we can test whether or not to add generator to a stage, as it either is already solvable and need not be added, or it is not solvable and will result in a new coset representative at some point along the way.

In this way we can gradually expand the lists of coset representatives and generators for each stage in the stabiliser chain. The process ends when for every stage all the generators from the Schreier lemma have been tested and shown to be solvable. At that point the chain must represent the whole group. This is called the **Incremental Schreier-Sims algorithm**. There are other techniques to limit the number of generators, such as Jerrum's Filter which still allows you to build the chain from left to right but uses fewer than n generators where n is the number of pieces remaining.

There is a second problem with Schreier's Lemma. The length of the coset representatives and generators approximately doubles at each stage. If you are only interested in the group itself, for example its size and structure, rather than how each element can be decomposed as a sequence of moves then there is no problem. You need only keep track of permutations, not how they are represented. This way you can still test whether any permutation is in the group or not, and find the group's size.

There are many techniques for reducing the length of the generators and representatives. Take any fairly short scramble. If you try to solve this position by taking it through the stabiliser chain, there might be a point where the number of moves done so far (the scramble plus the moves solving the previous stages) is shorter than the coset representative for this position in the current stage. In that case you can replace that coset representative with the (inverse of) the move sequence done so far.

This is not likely to happen with any random position, as the average length of a coset representatives at any stage is approximately equal to the sum of the average lengths of all the previous stages. Nevertheless it can happen, especially if you try short commutators that move only few pieces that are solved in the later stages. It can therefore be beneficial to test all short move sequences, as well as all conjugated commutators ABCB'C'A' for all very short move sequences A, B, and C.

The order in which the pieces are solved can make a difference too. On the cube it is probably best to first solve a 2×2×2 block, because that still leaves three generators that do not affect the solved pieces. This allows the later stages to be done with combinations of those single-move generators rather than generators consisting of move sequences produced by the Schreier Lemma.

Even if the coset representatives are short, the solution method represented by a stabliser chain will generally not be very short, because it solves the pieces one by one in a fixed order. Short solutions are simply not what Schreier-Sims is good for.

[Home](https://www.jaapsch.net/puzzles/)

[Links](https://www.jaapsch.net/puzzles/puzzlink.htm)

[Guestbook](https://www.jaapsch.net/puzzles/guest.htm)