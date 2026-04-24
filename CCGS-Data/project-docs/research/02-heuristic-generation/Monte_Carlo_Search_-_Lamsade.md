# Monte Carlo Search - Lamsade

Monte Carlo Search 

Tristan Cazenave 

LAMSADE CNRS Université Paris-Dauphine 

PSL 

Tristan.Cazenave@dauphine.fr

Outline 

 Monte Carlo Tree Search 

 Nested Monte Carlo Search 

 Nested Rollout Policy Adaptation 

 Playout Policy Adaptation 

 Zero Learning (Deep RL) 

 Imperfect Information Games

Monte Carlo Tree Search

Monte Carlo Tree Search 

Monte Carlo Tree Search, a method so bold, Exploring the tree, with its stories untold, Simulating the future, with random rolls, To find the path with the greatest goals. 

It starts with a root, and expands the tree, Each node a choice, a potential key, To unlock the door, to the desired goal, Monte Carlo guides, in finding the whole. 

It's not always perfect, with a fixed plan, But it adapts, to the situation at hand, With each simulation, it learns and it grows, To find the best move, with more and more those. 

Monte Carlo Tree Search, a powerful tool, To navigate the game, and be the cool, So let's explore the tree, and see what we find, And use Monte Carlo, to be one of a kind.

Monte Carlo Tree Search 

Monte Carlo Tree Search, a method so grand, A path to victory, with a strategic hand. 

It starts with a tree, and a game to play, Simulations to run, to find the best way. 

Each node a move, and each branch a choice, We explore them all, with a clear and steady voice. 

With randomness guiding us, and statistics to aid, We search for the path, that will surely lead the way. 

Monte Carlo Tree Search, a brilliant mind, With its power and wisdom, it will never be confined. 

It's a strategy that's proven, and a method that's sound, Monte Carlo Tree Search, will always be found. 

In the game of life, and the game of chance, Monte Carlo Tree Search, will always enhance, Our ability to win, to be victorious, It's a path to success, so mysterious.

Monte Carlo Go 

 1993 : first Monte Carlo Go program 

– Gobble, Bernd Bruegmann. – How nature would play Go ? – Simulated annealing on two lists of moves. – Statistics on moves. – Only one rule : do not fill eyes. – Result = average program for 9x9 Go. – Advantage : much more simple than alternative 

approaches.

Monte Carlo Go 

 1998 : first master course on Monte Carlo Go. 

 2000 : sampling based algorithm instead of 

simulated annealing. 

 2001 : Computer Go an AI Oriented Survey. 

 2002 : Bernard Helmstetter. 

 2003 : Bernard Helmstetter, Bruno Bouzy, 

Developments on Monte Carlo Go.

Monte Carlo Phantom Go 

 Phantom Go is Go when you cannot see the 

opponent's moves. 

 A referee tells you illegal moves. 

 2005 : Monte Carlo Phantom Go program. 

 Many Gold medals at computer Olympiad since 

then using flat Monte Carlo. 

 2011 : Exhibition against human players at 

European Go Congress.

UCT 

 UCT : Exploration/Exploitation dilemma for trees 

[Kocsis and Szepesvari 2006]. 

 Play random random games (playouts). 

 Exploitation : choose the move that maximizes the 

mean of the playouts starting with the move. 

 Exploration : add a regret term (UCB).

 UCT : exploration/exploitation dilemma. 

 Play the move that maximizes 

UCT

UCT

RAVE 

 A big improvement for Go, Hex and other 

games is Rapid Action Value Estimation (RAVE) [Gelly and Silver 2007]. 

 RAVE combines the mean of the playouts that start with the move and the mean of the playouts that contain the move (AMAF).

RAVE 

#  Parameter βm for move m is : 

# βm←pAMAFm / (pAMAFm + pm + bias × pAMAFm× pm) 

#  βm starts at 1 when no playouts and decreases as more playouts are played. 

#  Selection of moves in the tree : argmaxm((1.0 − βm) × meanm + βm × AMAFm)

GRAVE 

 Generalized Rapid Action Value Estimation 

(GRAVE) is a simple modification of RAVE. 

 It consists in using the first ancestor node 

with more than n playouts to compute the RAVE values. 

 It is a big improvement over RAVE for Go, Atarigo, Knightthrough and Domineering [Cazenave 2015].

Atarigo

Knightthrough

Domineering 

Go

RAVE vs UCT 

Game                                              Score 

Atarigo 8x8                                     94.2 % Domineering                                   72.6 % Go 9x9                                            73.2 % Knightthrough                                 56.2 % Three Color Go 9x9                        70.8 %

GRAVE vs RAVE 

Game                                              Score 

Atarigo 8x8                                     88.4 % Domineering                                   62.4 % Go 9x9                                            54.4 % Knightthrough                                 67.2 % Three Color Go 9x9                        57.2 %

Parallelization of MCTS 

 Root Parallelization. 

 Tree Parallelization (virtual loss). 

 Leaf Parallelization.

MCTS 

 Great success for the game of Go since 2007. 

 Much better than all previous approaches to 

computer Go.

AlphaGo Lee Sedol is among the strongest and most famous 9p Go 

player : 

AlphaGo has won 4-1 against Lee Sedol in March 2016 AlphaGo Master wins 3-0 against Ke Jie, 60-0 against pros. AlphaGo Zero wins 89-11 against AlphaGo Master in 2017.

General Game Playing 

 General Game Playing = play a new game just given the rules. 

 Competition organized every year by Stanford. 

 Ary world champion in 2009 and 2010. 

 All world champions since 2007 use MCTS.

Other two-player games 

 Hex : 2009 

 Amazons : 2009 

 Lines of Action : 2009

MCTS Solver 

 When a subtree has been completely 

explored the exact result is known. 

 MCTS can solve games. 

 Score Bounded MCTS is the extension of 

pruning to solving games with multiple outcomes.

Breakthrough 

#  Write the Board and Move classes for Breakthrough 5x5. 

#  Write the function for the possible moves. 

#  Write a program to play random games at Breakthrough 5x5.

Breakthrough 

#  The Move class contains the color, the starting and arriving 

# locations of a pawn. class Move(object):     def __init__(self, color, x1, y1, x2, y2):         self.color = color         self.x1 = x1         self.y1 = y1         self.x2 = x2         self.y2 = y2

Breakthrough 

 The Board class initializes the board with two rows of Black and two rows of White pawns: 

Dx = 5 Dy = 5 Empty = 0 White = 1 Black = 2 class Board(object):     def __init__(self):         self.h = 0         self.turn = White         self.board = np.zeros ((Dx, Dy))         for i in range (0, 2):             for j in range (0, Dy):                 self.board [i] [j] = White         for i in range (Dx - 2, Dx):             for j in range (0, Dy):                 self.board [i] [j] = Black

Breakthrough 

###  Test, in the Move class, if a move is valid for a given board: 

### def valid (self, board):         if self.x2 >= Dx or self.y2 >= Dy or self.x2 < 0 or self.y2 < 0:             return False         if self.color == White:             if self.x2 != self.x1 + 1:                 return False             if board.board [self.x2] [self.y2] == Black:                 if self.y2 == self.y1 + 1 or self.y2 == self.y1 - 1:                     return True                 return False             elif board.board [self.x2] [self.y2] == Empty:                 if self.y2 == self.y1 + 1 or self.y2 == self.y1 - 1 or self.y2 == self.y1:                     return True                 return False 

Breakthrough 

###         elif self.color == Black:             if self.x2 != self.x1 - 1:                 return False             if board.board [self.x2] [self.y2] == White:                 if self.y2 == self.y1 + 1 or self.y2 == self.y1 - 1:                     return True                 return False             elif board.board [self.x2] [self.y2] == Empty:                 if self.y2 == self.y1 + 1 or self.y2 == self.y1 - 1 or self.y2 == self.y1:                     return True                 return False         return False        

Breakthrough 

##  Generate the legal moves in the Board class: 

##     def legalMoves(self):         moves = []         for i in range (0, Dx):             for j in range (0, Dy):                 if self.board [i] [j] == self.turn:                     for k in [-1, 0, 1]:                         for l in [-1, 0, 1]:                             m = Move (self.turn, i, j, i + k, j + l)                             if m.valid (self):                                 moves.append (m)         return moves

 Write, in the Board class, a score function to score a game (1.0 if White wins, 0.0 else) and a terminal function to detect the end of the game. 

 Write, in the Board class, a playout function that plays a random game from the current state and returns the result of the random game. 

Playouts

    In the Board class : 

    def score (self):         for i in range (0, Dy):             if (self.board [Dx - 1] [i] == White):                 return 1.0            elif (self.board [0] [i] == Black):                 return 0.0         l = self.legalMoves ()         if len (l) == 0:             if self.turn == Black:                 return 1.0             else:                 return 0.0         return 0.5 

    def terminal (self):         if self.score () == 0.5:             return False         return True   

Playouts

In the Board class : 

def play (self, move):     self.board [move.x1] [move.y1] = Empty     self.board [move.x2] [move.y2] = move.color     if (self.turn == White):         self.turn = Black     else:         self.turn = White 

def playout (self):     while (True):         moves = self.legalMoves ()         if self.terminal ():             return self.score ()         n = random.randint (0, len (moves) - 1)         self.play (moves [n]) 

Playout

 For each move of the current state, do a fixed number of playouts starting with the move. 

 Calculate the number of playouts won after the move. 

 Play the move with the greatest number of playouts won. 

Flat Monte Carlo

def flat (board, n):     moves = board.legalMoves ()     bestScore = 0     bestMove = 0     for m in range (len(moves)):         sum = 0         for i in range (n // len (moves)):             b = copy.deepcopy (board)             b.play (moves [m])             r = b.playout ()             if board.turn == Black:                 r = 1 - r             sum = sum + r         if sum > bestScore:             bestScore = sum             bestMove = m     return moves [bestMove] 

Flat Monte Carlo

 Keep statistics for all the moves of the current state. 

 For each move of the current state, keep the number of playouts starting with the move and the number of playouts starting with the move that have been won. 

 Play the most simulated move when all the playouts are finished. 

UCB

Choose the first move at the root according to UCB before each playout: 

UCB

### def UCB (board, n):     moves = board.legalMoves ()     sumScores = [0.0 for x in range (len (moves))]     nbVisits = [0 for x in range (len(moves))]     for i in range (n):         bestScore = 0         bestMove = 0         for m in range (len(moves)):             score = 1000000             if nbVisits [m] > 0:                  score = sumScores [m] / nbVisits [m] + 0.4 * math.sqrt (math.log (i) / nbVisits [m])             if score > bestScore:                 bestScore = score                 bestMove = m 

UCB

        b = copy.deepcopy (board)         b.play (moves [bestMove])         r = b.playout ()         if board.turn == Black:             r = 1.0 - r         sumScores [bestMove] += r         nbVisits [bestMove] += 1     bestNbVisits = 0     bestMove = 0     for m in range (len(moves)):         if nbVisits [m] > bestNbVisits:             bestNbVisits = nbVisits [m]             bestMove = m     return moves [bestMove]  

UCB

 Transposition Table 

#  Each state is associated to a hash code. 

#  We use Zobrist hashing. 

#  Each piece for each cell is associated to a fixed 

# random number. 

#  The hashcode of a state is the XOR of the random 

# numbers of the pieces on the board. 

#  Why XOR ? 

#  How many random numbers for a chess board ?

 Transposition Table 

 XOR is used because: 

 XOR of uniformly distributed integers is an 

uniformly distributed integer. 

 XOR is fast. 

 (b XOR a) XOR a = b 

 To add or to remove a piece, just XOR with the 

associated fixed random number: the new hascode after a move is rapidly calculated.

 Transposition Table 

#  For chess: 

#  pieces * cells = 12 * 64 = 768 

#  Castling                                4 

#  prise en passant                 16 

#  turn                                       1 

#  total                                  789 

#  Breakthrough 5x5 :         50 + 1 for the turn                       

 Transposition Table 

##  Fixing the random numbers for Breakthrough 5x5 from 1 to 25 for 

## Black and 26 to 50 for White. 

##  The random number for the turn is 51 : 

##  Let h1 = 0 be the hashcode of the initial board ? 

##  What is the hashcode h2 of the board where the leftmost White 

## pawn moves forward?

 Transposition Table 

#                    h1 = 0                    h2 = h1 ^ 41 ^ 36 ^ 51 = 62 

 Transposition Table 

 Code to generate the fixed random number associated to the cells and the pawns. 

 Modification of the play function so that a board is always associated to a Zobrist hashcode.               

 Transposition Table 

### hashTable = [] for k in range (3):     l = []     for i in range (Dx):         l1 = []         for j in range (Dy):             l1.append (random.randint (0, 2 ** 64))         l.append (l1)     hashTable.append (l) hashTurn = random.randint (0, 2 ** 64)

Transposition Table 

    def play (self, move):         col = int (self.board [move.x2] [move.y2])         if col != Empty:             self.h = self.h ^ hashTable [col] [move.x2] [move.y2]         self.h = self.h ^ hashTable [move.color] [move.x2] [move.y2]         self.h = self.h ^ hashTable [move.color] [move.x1] [move.y1]         self.h = self.h ^ hashTurn         self.board [move.x2] [move.y2] = move.color         self.board [move.x1] [move.y1] = Empty         if (move.color == White):             self.turn = Black         else:             self.turn = White

 An entry of a state in the transposition table contains : 

 The hashcode of the stored state. 

 The total number of playouts of the state. 

 The number of playouts for each possible move. 

 The number of wins for each possible move. 

Transposition Table

#  First Option (C++ like) : – Write a class TranspoMonteCarlo containing the data 

# associated to a state. – Write a class TableMonteCarlo that contains a table of 

# list of entries. – Each entry is an instance of TranspoMonteCarlo. The 

# size of the table is 65535. The index in the table of a hashcode h is h & 65535. 

# – The TableMonteCarlo class also contains the functions : 

##  look (self, board) which returns the entry of board. 

##  add (self, t) which adds en entry in the table. 

Transposition Table

#  Alternative : use a Python dictionary with the hash as a key and lists as elements. 

#  Each list contains 3 elements : – the total numbers of playouts, – the list of the number of playouts for each move, – the list of the number of wins for each move. 

#  Write a function that returns the entry of the transposition table if it exists or else None. 

#  Write a function that adds an entry in the transposition table. 

Transposition Table

# MaxLegalMoves = 6 * Dx Table = {} 

# def add (board):     nplayouts = [0.0 for x in range (MaxLegalMoves)]     nwins = [0.0 for x in range (MaxLegalMoves)]     Table [board.h] = [0, nplayouts, nwins] 

# def look (board):    return Table.get (board.h, None) 

Transposition Table

UCT

UCT

UCT

UCT

#  Exercise : write the Python code for UCT. 

#  The available functions are: 

#  board.playout () that returns the result of a playout. 

#  board.legalMoves () that returns the list of legal moves for 

# the board. 

#  board.play (move) that plays the move on board. 

#  look (board) that returns the entry of the board in the 

# transposition table. 

#  add (board) that adds an empty entry for the board in the 

# transposition table. 

UCT

def UCT (board):     if board.terminal ():         return board.score ()     t = look (board)     if t != None:         bestValue = 0         best = 0         moves = board.legalMoves ()         for i in range (0, len (moves)):             val = 1000000.0             n = t [0]             ni = t [1] [i]             wi = t [2] [i]             if ni > 0:                 Q = wi / ni                 if board.turn == Black:                     Q = 1 - Q 

UCT

            if val > bestValue:                 bestValue = val                 best = i         board.play (moves [best])         res = UCT (board)         t [0] += 1         t [1] [best] += 1         t [2] [best] += res         return res     else:         add (board)         return board.playout () 

UCT

### def BestMoveUCT (board, n):     global Table     Table = {}     for i in range (n):         b1 = copy.deepcopy (board)         res = UCT (b1)     t = look (board)     moves = board.legalMoves ()     best = moves [0]     bestValue = t [1] [0]     for i in range (1, len(moves)):         if (t [1] [i] > bestValue):             bestValue = t [1] [i]             best = moves [i]     return best 

UCT

 Make UCT with 200 playouts play 100 games against Flat with 200 playouts. 

 Winrate ? 

 Tune the UCT constant (hint 0.4). 

UCT vs Flat

#  UCT is the fundamental algorithm for MCTS. 

#  In order to be sure you have understood how UCT works, 

# write the code for the sequential version of UCT. 

#  Use the pseudo code of Silver and Gelly that performs the 

# four phases sequentially to write the corresponding Python code. 

#  Test it to verify it does the same thing as the recursive version and that it plays on par with the recursive version. 

Sequential UCT

AMAF 

 All Moves As First (AMAF). 

 AMAF calculates for each possible move of 

a state the average of the playouts that contain this move.

#  Exercise : 

#  Write a playout function memorizing the played moves. 

#  Add an integer code for moves in the Move class. 

#  Add AMAF statistics to the Transposition Table entries. 

#  Update the AMAF statistics of the Transposition Table. 

AMAF

def playoutAMAF (board, played):     while (True):         moves = board.legalMoves ()         if len (moves) == 0 or board.terminal ():             return board.score ()         n = random.randint (0, len (moves) - 1)         played.append (moves [n].code (board))         board.play (moves [n]) 

AMAF

In the Move class: 

    def code (self, board):         direction = 0         if self.y2 > self.y1:             if board.board [self.x2] [self.y2] == Empty:                 direction = 1             else:                 direction = 2         if self.y2 < self.y1:              if board.board [self.x2] [self.y2] == Empty:                 direction = 3              else:                  direction = 4         if self.color == White:             return 5 * (Dy * self.x1 + self.y1) + direction         else:             return 5 * Dx * Dy + 5 * (Dy * self.x1 + self.y1) + direction 

AMAF

## MaxCodeLegalMoves = 2 * Dx * Dy * 5 

## def addAMAF (board):     nplayouts = [0.0 for x in range (MaxLegalMoves)]     nwins = [0.0 for x in range (MaxLegalMoves)]     nplayoutsAMAF = [0.0 for x in range (MaxCodeLegalMoves)]     nwinsAMAF = [0.0 for x in range (MaxCodeLegalMoves)]     Table [board.h] = [0, nplayouts, nwins, nplayoutsAMAF, nwinsAMAF] 

AMAF

AMAF def updateAMAF (t, played, res):     for i in range (len (played)):         if played [:i].count (played [i]) == 0:             t [3] [played [i]] += 1             t [4] [played [i]] += res

 Exercise : 

 Write the Flat AMAF player that computes AMAF 

statistics for the Flat Monte Carlo algorithm. 

 The Flat AMAF player plays the move that has the 

best AMAF statistics instead of the move that has the best statistics. 

 Make Flat AMAF play against Flat Monte Carlo with 30 playouts for both algorithms. 

AMAF

RAVE

RAVE

RAVE

RAVE

RAVE

RAVE

RAVE

 Exercise : 

 Compute the AMAF statistics for each node. 

 Modify the UCT code to implement RAVE. 

RAVE

def RAVE (board, played):     if (board.terminal ()):         return board.score ()     t = look (board)     if t != None:         bestValue = 0         best = 0         moves = board.legalMoves ()         bestcode = moves [0].code (board)         for i in range (0, len (moves)):             val = 1000000.0             code = moves [i].code (board)             if t [3] [code] > 0:                 beta = t [3] [code] / (t [1] [i] + t [3] [code] + 1e-5 * t [1] [i] * t [3] [code])                 Q = 1                 if t [1] [i] > 0:                     Q = t [2] [i] / t [1] [i]                     if board.turn == Black: 

RAVE

                AMAF = t [4] [code] / t [3] [code]                 if board.turn == Black:                     AMAF = 1 - AMAF                 val = (1.0 - beta) * Q + beta * AMAF             if val > bestValue:                 bestValue = val                 best = i                 bestcode = code         board.play (moves [best])         played.append (bestcode)         res = RAVE (board, played)         t [0] += 1         t [1] [best] += 1         t [2] [best] += res         updateAMAF (t, played, res)         return res     else:         addAMAF (board)         return playoutAMAF (board, played) 

RAVE

### def BestMoveRAVE (board, n):     global Table     Table = {}     for i in range (n):         b1 = copy.deepcopy (board)         res = RAVE (b1, [])     t = look (board)     moves = board.legalMoves ()     best = moves [0]     bestValue = t [1] [0]     for i in range (1, len(moves)):         if (t [1] [i] > bestValue):             bestValue = t [1] [i]             best = moves [i]     return best 

RAVE

 State of the art in General Game Playing (GGP) 

 Best AI of the Ludii system (https://ludii.games/) 

 Simple modification of RAVE 

 Uses statistics both for Black and White at all nodes 

 “In principle it is also possible to incorporate the 

AMAF values, from ancestor subtrees.  However, in our experiments, combining ancestor AMAF values did not appear to confer any advantage.” 

GRAVE

 Use the AMAF statistics of the last ancestor with more than n playouts instead of the AMAF statistics of the current node. 

 More accurate when few playouts. 

 Published at IJCAI 2015. 

 GRAVE is a generalization of RAVE since GRAVE 

with n=0 is RAVE. 

GRAVE

 Exercise : 

 Modify the RAVE code to implement GRAVE. 

GRAVE

def GRAVE (board, played, tref):     if (board.terminal ()):         return board.score ()     t = look (board)     if t != None:         tr = tref         if t [0] > 50:             tr = t         bestValue = 0         best = 0         moves = board.legalMoves ()         bestcode = moves [0].code (board)         for i in range (0, len (moves)):             val = 1000000.0             code = moves [i].code (board)             if tr [3] [code] > 0:                 beta = tr [3] [code] / (t [1] [i] + tr [3] [code] + 1e-5 * t [1] [i] * tr [3] [code])                 Q = 1                 if t [1] [i] > 0:                     Q = t [2] [i] / t [1] [i]                     if board.turn == Black: 

GRAVE

                AMAF = tr [4] [code] / tr [3] [code]                 if board.turn == Black:                     AMAF = 1 - AMAF                 val = (1.0 - beta) * Q + beta * AMAF             if val > bestValue:                 bestValue = val                 best = i                 bestcode = code         board.play (moves [best])         played.append (bestcode)         res = GRAVE (board, played, tr)         t [0] += 1         t [1] [best] += 1         t [2] [best] += res         updateAMAF (t, played, res)         return res     else:         addAMAF (board)         return playoutAMAF (board, played) 

GRAVE

def BestMoveGRAVE (board, n):     global Table     Table = {}     addAMAF (board)     for i in range (n):         root = look (board)         b1 = copy.deepcopy (board)         res = GRAVE (b1, [], root)     root = look (board)     moves = board.legalMoves ()     best = moves [0]     bestValue = root [1] [0]     for i in range (1, len(moves)):         if (root [1] [i] > bestValue):             bestValue = root [1] [i]             best = moves [i]     return best 

GRAVE

 Infinite number of moves 

 Progressive Widening 

 Action Decomposition (AD) 

 Constraints-based Selective Policy (CSP) 

 cRAVE and cGRAVE 

 Application : Biology 

Continuous MCTS

#  A new child state is sampled from state s every time the visitation count of s (n(s)) to the power of pw is greater than or equal to its number of children : n(s)pw ≥ s.children∣ ∣ 

#  pw is a problem dependent parameter that controls the number of actions allowed in s. 

#  While UCT ensures that the tree grows deeper in the promising regions of the search space by balancing exploration and exploitation, the PW strategy guarantees that it grows wider in those regions. 

Progressive Widening

cRAVE

cGRAVE

Action Decomposition

Hybrid Gene Regulatory Networks

cGRAVE

cGRAVE

cGRAVE

Mujoco : Humanoid

 Open the Humanoid notebook on the course page 

 Test UCT with 10 randomly chosen actions as the 

possible moves 

 Progressive widening for UCT 

 Action Decomposition (AD) 

 cGRAVE 

Continuous MCTS

PUCT

PUCT 

MCTS used in AlphaGo and AlphaZero. 

A neural network gives a policy and a value. 

No playouts, evaluation with the value at the leaves. 

P(s,a) = probability for move a of being the best. 

Bandit for the tree descent:

 Exercise : Modify the UCT code into PUCT. Suppose a random policy and a random value. 

PUCT

def PUCT (board):     if board.terminal ():         return board.score ()     t = look (board)     if t != None:         bestValue = -1000000.0         best = 0         moves = board.legalMoves ()         for i in range (0, len (moves)):             # t [4] = value from the neural network             Q = t [4]             if t [1] [i] > 0:                 Q = t [2] [i] / t [1] [i]             if board.turn == Black:                 Q = 1 - Q             # t [3] = policy from the neural network             val = Q + 0.4 * t [3] [i] * sqrt (t [0]) / (1 + t [1] [i])             if val > bestValue:                 bestValue = val                 best = i 

PUCT

###         board.play (moves [best])         res = PUCT (board)         t [0] += 1         t [1] [best] += 1         t [2] [best] += res         return res     else:         t = add (board)         return t [4] 

PUCT

Zero Learning

Zero Learning 

 AlphaGo 

 Golois 

 AlphaGo Zero 

 Alpha Zero 

 Mu Zero 

 Polygames 

 Athénan

#               David Silver                          Aja Huang

AlphaGo 

# Fan Hui is the european Go champion and a 2p  professional Go player : 

# AlphaGo Fan won 5-0 against Fan Hui in November 2015. 

# Nature, January 2016.

AlphaGo Lee Sedol is among the strongest and most famous 9p Go player : 

AlphaGo Lee won 4-1 against Lee Sedol in march 2016.

AlphaGo 

Ke Jie is the world champion of Go according to Elo ratings : 

AlphaGo Master won 3-0 against Ke Jie in may 2017.

AlphaGo 

 AlphaGo combines MCTS and Deep Learning. 

 There are four phases to the development of 

AlphaGo : 

 Learn strong players moves => policy network. 

 Play against itself and improve the policy network 

=> reinforcement learning. 

 Learn a value network to evaluate states from 

millions of games played against itself. 

 Combine MCTS, policy and value network.

AlphaGo

AlphaGo

AlphaGo 

 The policy network is a 13 layers network. 

 It uses either 128 or 256 feature planes. 

 It is fully convolutional. 

 It learns to predict moves from hundreds of 

thousands of strong players games. 

 Once it has learned, it finds the strong player 

move 57.0 % of the time. 

 It takes 3 ms to run.

AlphaGo 

 The value network is also a deep convolutional 

neural network. 

 AlphaGo played a lot of games and kept for each 

game a state and the corresponding terminal state. 

 It learns to evaluate states with the result of the 

terminal state. 

 The value network has learned an evaluation 

function that gives the probability of winning.

AlphaGo

AlphaGo

AlphaGo 

 The policy network is used as a prior to consider 

good moves at first. 

 Playouts are used to evaluate moves 

 The value network is combined with the statistics 

of the moves coming from the playouts. 

 PUCT :

AlphaGo

AlphaGo 

 AlphaGo has been parallelized using a distributed 

version. 

 40 search threads, 1,202 CPUs and 176 GPU.

AlphaGo

AlphaGo

AlphaGo

AlphaGo

AlphaGo

Golois

Golois 

#  I replicated the AlphaGo experiments with the policy 

# and value networks. 

#  Golois policy network scores 58.54% on the test set (57.0% for AlphaGo). 

#  Golois plays on the kgs internet Go server. 

#  It has a strong 4d ranking just with the learned policy network (AlphaGo policy network is 3d).

Data 

#  Learning set = games played on the KGS Go server 

# by players being 6d or more between 2000 and 2014. 

#  No handicap games. 

#  Each position is rotated to eight possible symmetric 

# positions. 

#  160 000 000 positions in the learning set. 

#  Test set = games played in 2015. 

#  100 000 different positions not mirrored.

Residual Nets 

 Residual Nets :

Evolution of the error

Evolution of the accuracy

Golois Policy Network 

 Using residual network enables to train deeper network. 

 It enables better accuracy than AlphaGo policy network. 

 It has a 4 dan level on kgs, playing moves instantly.

AlphaGo Zero

AlphaGo Zero 

#  AlphaGo Zero learns to play Go from scratch playing against itself. 

# After 40 days of self play it surpasses AlphaGo Master. 

# Nature, 18 october 2017. 

# It uses the raw representation of the board as input, even liberties are not used. 

# It has 15 input planes, 7 for the previous Black stones, 7 for the previous White Stones and 1 plane for the color to play.

AlphaGo Zero 

It plays against itself using PUCT and 1,600 tree 

descents per move. 

It uses a residual neural network with two heads. 

One head is the policy, the other head is the value.

AlphaGo Zero 

AlphaGo Zero 

After 4.9 million games against itself a 20 residual 

blocks neural network reaches the level of AlphaGo Lee (100-0). 

3 days of self play on the machines of DeepMind. 

Comparison : Golois searches 1,600 nodes in 10 

seconds on a 4 GPU machine. 

It would take Golois 466 years to play 4.9 million such 

games. 

AlphaGo Zero 

AlphaGo Zero 

AlphaGo Zero 

They used a longer experiment with a deeper network. 

40 residual blocks. 

40 days of self play on the machines of DeepMind. 

In the end it beats Master 89-11.

AlphaGo Zero 

AlphaGo Zero

AlphaGo Zero 

AlphaGo Zero uses 40 residual blocks instead of 20 blocks for AlphaGo Master. 

With 20 blocks learning stalls after 3 days. 

Master with 40 blocks better than AlphaGo Zero?

Alpha Zero

Alpha Zero 

Arxiv, 5 december 2017. 

Deep reinforcement learning similar to AlphaGo Zero. 

Same algorithm applied to two other games : Chess and Shogi. 

Learning from scratch without prior knowledge.

Alpha Zero 

Alpha Zero surpasse Stockfish at Chess after 4 hours of 

self-play. 

Alpha Zero surpasses Elmo at shogi after 2 hours of self play.

Alpha Zero 

5 000 first generation TPU for training. 

4 TPU for playing.

Mu Zero

Mu Zero 

Arxiv, december 2019. 

Similar to Alpha Zero without knowing the rules of the games. 

Atari, Go, Chess and Shogi. 

Learning from scratch without prior knowledge.

Polygames

Polygames 

Alpha Zero approach for many games. 

A common interface to all the games. 

Fully convolutional network, average pooling… 

Pytorch and C++. 

Open source !

Mathematics

 The state space is an AND/OR tree as in games. 

 Algorithms for solving games can be used to prove 

theorems. 

 MCTS has been used in some theorem provers. 

 Holophrasm [Daniel Whalen 2016]. 

 Tactictoe [Gauthier et al. 2021]. 

Automated Theorem Proving

Automated Theorem Proving

Code Generation

MCTS and Deep RL 

# Monte Carlo Tree Search and Deep Reinforcement Learning to discover new fast matrix multiplication algorithms:

MCTS and Deep RL 

# AlphaDev improves sorting algorithms:

Athénan and the Computer Olympiad

Athénan 

## 48 gold medals at the Computer Olympiads! 

Amazons, Arimaa, Ataxx, Breakthrough, Canadian Draughts, Chinese Chess, 

## Clobber, Havannah (8×8), Havannah (10×10), Hex (11×11), Hex (13×13), Hex (19×19), Lines of Action, Othello (10×10), Santorini, Surakarta.

Unbounded Minimax 

Principle = Extend the most promising leaf. 

Asymmetric growing of the search tree.

Descent 

Only uses a value network. 

Self play without prior knowledge. 

Learns the scores inside the trees developed by the Unbounded MiniMax. 

Minimax Strikes Back [Cohen-Solal & Cazenave 2023].

Descent

Athénan

Athénan

Athénan

Athénan

Athénan

Athénan

Athénan

Conclusion 

AlphaGo : supervised learning and self play. 

Golois : residual networks and Spatial Batch 

Normalization improve learning. 

AlphaGo Zero : reinforcement learning from self play 

with MCTS. Raw inputs. Residual networks and combined policy and value network. Better than Master. 

AlphaZero : Go, Chess and Shogi. 

MuZero : Atari, Go, Chess and Shogi. 

Polygames : many games. 

Athénan: Minimax Strikes Back.

Alpha Zero Project

Alpha Zero 

#  Define a network that takes as input the 

# Breakthrough board and gives as output the policy and the value for the board. 

#  Bias the MCTS with policy and value using PUCT. 

#  Make the network play games and record the results 

# of the Monte Carlo and the result of the games. 

#  Train the network on the results of the games. 

#  Iterate.

Alpha Zero 

#  The network takes 41 inputs with values 0 or 1, 20 inputs 

# for black pawns, 20 inputs for white pawns and one input for the color to play. 

#  Option: also use previous boards as inputs. 

#  The network has 60 outputs for the policy head (3 possible 

# moves for each cell), and 1 output for the value head. 

#  The architecture of the network can be completely 

# connected as a starting point. 

#  Option : convolutional network, residual network.

Alpha Zero 

# 1) Define the network 2) Implement the PUCT algorithm using the network. Use the same network for black and white, rotate the board for white so that moves are always forward. 3) Make the algorithm play against itself. 4) Record the Monte Carlo distributions and the result of self played games. 5) Train the network on the recorded data.

Monte Carlo Search with Imperfect Information

 The moves of the other players are not known 

 Application : Auctions 

Simultaneous Moves MCTS

Information Set MCTS 

 Flat Monte Carlo Search gives good results 

for Phantom Go. 

 Information Set MCTS. 

 Card games.

Counter Factual Regret Minimization 

#  Poker : Libratus (CMU), DeepStack (UofA). 

#  Approximation of the Nash Equilibrium. 

#  There are about 320 trillion “information sets” in heads-

# up limit hold’em. 

#  What the algorithm does is look at all strategies that do 

# not include a move, and count how much we “regret” having excluded the move from our mix. 

#  Combination with neural networks. 

#  Better than top professional players.

αμ 

 Bridge 

 Generate a set of possible worlds. 

 Solve each world exactly 

 Search multiple moves ahead 

 Strategy Fusion => joint search 

 Non Locality => Pareto fronts

PIMC 

For all possible moves     For all possible worlds         Exactly solve the world 

Play the move winning in the most worlds

Strategy Fusion 

 Problem = PIMC can play different moves in different worlds. 

 Whereas the player cannot distinguish between the different worlds.

Non Locality

Pareto Fronts 

###  A Pareto Front is a set of vectors. 

###  It maintains the set of vectors that are not dominated by other vectors. 

###  Consider the Pareto front {[1 0 0], [0 1 1]}. 

###  If the vector [0 0 1] is a candidate for entering the front, then the front stays 

### unchanged since [0 0 1] is dominated by [0 1 1]. 

###  If we add the vector [1 1 0] then the vector [1 0 0] is removed from the front since it is dominated by [1 1 0], and then [1 1 0] is inserted in the front. The new front becomes {[1 1 0], [0 1 1]}. 

###  It is useful to compare Pareto fronts. 

###  A Pareto front P1 dominates or is equal to a Pareto front P2 iff  v  P2 ,  v’  P1 ∀ ∈ ∃ ∈ 

### such that (v’ dominates v) or v’=v.

AlphaMu 

 At Max nodes each possible move returns a Pareto front. 

 The overall Pareto front is the union of all the Pareto fronts of the moves. 

 The idea is to keep all the possible options for Max, i.e. Max has the choice between all the vectors of the overall Pareto front.

AlphaMu 

 At Min nodes, the Min players can choose different moves in different possible worlds. 

 They take the minimum outcome over all the possible moves for a possible world. 

 When they can choose between two vectors they take for each index the minimum between the two values at this index of the two vectors.

AlphaMu 

#  When Min moves lead to Pareto fronts, the Max player can 

# choose any member of the Pareto front. 

#  For two possible moves of Min, the Max player can also choose 

# any combination of a vector in the Pareto front of the first move and of a vector in the Pareto front of the second move. 

#  Compute all the combinations of the vectors in the Pareto fronts of all the Min moves. 

#  For each combination the minimum outcome is kept so as to produce a unique vector. 

#  Then this vector is inserted in the Pareto front of the Min node.

Product of Pareto Fronts at Min nodes

The Early Cut

The Root Cut 

If a move at the root of αμ for M Max moves gives the same 

# probability of winning than the best move of the previous iteration of iterative deepening for M-1 Max moves, the search can safely be stopped since it is not possible to find a better move. 

# A deeper search will always return a worse probability than the previous search because of strategy fusion. 

# Therefore if the probability is equal to the one of the best move of the previous shallower search the probability cannot be improved and a better move cannot be found so it is safe to cut.

Experimental Results 

Comparison of the average time per move of different 

# configurations of αμ on deals with 52 cards for the 3NT contract.

Experimental Results 

# Comparison of αμ versus PIMC for the 7NT contract,  playing 10 000 games.

AlphaMu 

AlphaMu solves de strategy fusion and the non locality problems of PIMC up to a given depth. 

It maintains Pareto Fronts in its search tree. 

It improves on PIMC for the 7NT contract of 

Bridge.

Nook and Bridge

PIMC 

For all possible moves     For all possible worlds         Exactly solve the world 

Play the move winning in the most worlds

Strategy Fusion 

 Problem = PIMC can play different moves in different worlds. 

 Whereas the player cannot distinguish between the different worlds.

Nook 

Opponent Modeling 

Alpha-Beta on each possible world 

AlphaMu 

Rule based opening lead 

Contract : 1NT 2NT 3NT 

Declarer

Nook

Nook

Nook

Sequential Halving

Sequential Halving 

Sequential Halving, a method so wise Dividing tasks with great precision and size Starting from many, it reduces the few Towards a solution that's both true and true 

With each iteration, the choices do narrow Till the answer shines bright like a beacon so sparrow No guesses, no chances, no luck needed here Just a systematic approach, crystal clear 

From the simplest problems to the hardest of quest Sequential Halving never fails to impress A friend to all seekers, a guide in the night Bringing order to chaos, and making things right 

So let us embrace it, in all we embark With Sequential Halving, success is just a mark.

Sequential Halving 

 Sequential Halving [Karnin & al. 2013] is a 

bandit algorithm that minimizes the simple regret. 

 It has a fixed budget of arm pulls. 

 It gives the same number of playouts to all the 

arms. 

 It selects the best half. 

 Repeat until only one move is left

Sequential Halving

SHOT 

 SHOT is the acronym for Sequential 

Halving Applied to Trees [Cazenave 2015]. 

 When the search comes back to a node it 

considers the spent budget and the new budget as a whole. 

 It distributes the overall budget with Sequential Halving.

SHOT

SHOT

SHOT 

 SHOT gives good results for Nogo. 

 Combining SHOT and UCT : 

SHOT near the root UCT deeper in the tree 

 The combination gives good results for Atarigo, Breakthrough, Amazons and partially observable games.

 Exercise: 

 Write the code to perform Sequential Halving at the root on top of UCT. 

Sequential Halving

Sequential Halving 

def SequentialHalving (state, budget):     global Table     Table = {}     add (state)     moves = state.legalMoves ()     total = len (moves)     nplayouts = [0.0 for x in range (MaxCodeLegalMoves)]     nwins = [0.0 for x in range (MaxCodeLegalMoves)]     while (len (moves) > 1):         for m in moves:             for i in range (int (budget // (len (moves) * np.log2 (total)))):                 s = copy.deepcopy (state)                 s.play (m)                 res = UCT (s)                 nplayouts [m.code (state)] += 1                 if state.turn == White:                     nwins [m.code (state)] += res                 else:                     nwins [m.code (state)] += 1.0 - res         moves = bestHalf (state, moves, nwins, nplayouts)     return moves [0]

Sequential Halving 

def bestHalf (state, moves, nwins, nplayouts):    half = []    notused = list(np.full(MaxCodeLegalMoves,True))    for i in range (int(np.ceil(len (moves) / 2))):        best = -1.0        bestMove = moves [0]        for m in moves:             code = m.code (state)             if notused [code]:                 mu = nwins [code] / nplayouts [code]                 if mu > best:                     best = mu                     bestMove = m         notused [bestMove.code (state)] = False         half.append (bestMove)     return half

Sequential Halving Using Scores, A method to find the best of many, It starts with many choices, And narrows them down, through many voices. 

It divides the options in groups, And test them with different scores, Eliminating the ones that lag, Until the best one, it ensures. 

This method is efficient and fast, It saves time and resources, And finds the best solution, at last, Among many possible courses. 

Sequential Halving Using Scores, A powerful tool for decision, It helps us to find the right doors, And make the best decision. 

SHUSS

#  Sequential Halving combined with other statistics such as AMAF statistics. 

#  Instead of selecting the best half with the mean (mui), use: 

#                           mui + c * AMAFi / pi 

# with pi the number of playouts of move i and c ≥ 128. 

#  Combining SH with AMAF = SHUSS (Sequential Halving Using Scores) [Fabiano et al. 2021] 

SHUSS

SHUSS

SHUSS

 Exercise: 

Write the code to perform SHUSS at the root on top of GRAVE. 

SHUSS

SHUSS 

def SHUSS (state, budget):     global Table     Table = {}     addAMAF (state)     root = look (state)     moves = state.legalMoves ()     total = len (moves)     nplayouts = np.zeros(MaxCodeLegalMoves)     nwins = np.zeros(MaxCodeLegalMoves)     while (len (moves) > 1):         for m in moves:             for i in range (int(budget // (len (moves) * np.log2 (total)))):                 s = copy.deepcopy (state)                 s.play (m)                 code = m.code (state)                 played =  [code]                 res = GRAVE (s, played, root)                 updateAMAF (root, played, res)                 nplayouts [code] += 1                 if state.turn == White:                     nwins [code] += res                 else:                     nwins [code] += 1.0 - res         moves = bestHalfSHUSS (root, state, moves, nwins, nplayouts)     return moves [0]

SHUSS 

def bestHalfSHUSS (t, state, moves, nwins, nplayouts):     half = []     notused = list(np.full(MaxCodeLegalMoves,True))     c = 128     for i in range (int(np.ceil(len (moves) / 2))):         best = -1.0         bestMove = moves [0]         for m in moves:             code = m.code (state)             if notused [code]:                 AMAF = t [4] [code] / t [3] [code]                 if state.turn == Black:                     AMAF = 1 - AMAF                 mu = nwins [code] / nplayouts [code] + c * AMAF / nplayouts [code]                 if mu > best:                     best = mu                     bestMove = m         notused [bestMove.code (state)] = False         half.append (bestMove)     return half

Nested Monte Carlo Search

Nested Monte Carlo Search 

Nested Monte Carlo Search, a complex game, A method to find the best move, it can claim, It looks deeper, it goes beyond, To find the winning move, it has fond. 

It takes the Monte Carlo Tree Search, And adds another layer, to research, It explores the branches, with great care, To find the best outcome, with much flair. 

It simulates the game, again and again, And analyzes the data, to win. It's like a Russian doll, inside and out, Nested Monte Carlo Search, without a doubt. 

It's a powerful tool, for AI, To make machines better, that's its aim high, It's a step towards true intelligence, Nested Monte Carlo Search, a true excellence.

Single Agent Monte Carlo  UCT can be used for single-agent problems.  Nested Monte Carlo Search often gives better    results.  Nested Rollout Policy Adaptation is an  online learning variation that has beaten  world records.

Nested Monte-Carlo Search

 Play random games at level 0 

 For each move at level n+1, play the move then 

play a game at level n 

 Choose to play the move with the greatest 

associated score 

 Important : memorize and follow the best 

sequence found at each level 

Nested Monte-Carlo Search

Analysis 

 Analysis on two very simple abstract problems. 

 Search tree = binary tree. 

 In each state there are only two possible 

moves: going to the left or going to the right.

Analysis 

 The scoring function of the leftmost path 

problem consists in counting the number of moves on the leftmost path of the tree. 

Analysis 

 Sample search : probability 2-n of finding the 

best score of a depth n problem. 

 Depth-first search : one chance out of two of 

choosing the wrong move at the root, so the mean complexity > 2n-2. 

 A level 1 Nested Monte-Carlo Search will always find the best score, complexity is n(n-1). 

 Nested Monte-Carlo Search is appropriate for the leftmost path problem because the scores at the leaves are extremely correlated with the structure of the search tree.

Analysis 

 The scoring function of the left move 

problem consists in counting the number of moves on the left. 

Analysis 

 The probability distribution can be 

computed exactly with a recursive formula and dynamic programming. 

 A program that plays the left move problems has also been written and results with 100,000 runs are within 1% of the exact probability distribution.

Analysis 

 Distributions of the scores for a depth 60 

problem.

Analysis 

#  Mean score in real time

Morpion Solitaire 

 Morpion Solitaire is an NP-hard puzzle and the high score is inapproximable within n1-epsilon 

 A move consists in adding a circle such that a line containing five circles can be drawn. 

 In the disjoint version a circle cannot be a part of two lines that have the same direction. 

 Best human score is 68 moves. 

 Level 4 Search => 80 moves, after 5 hours of 

computation on a 64 cores cluster.

Morpion Solitaire 

#  80 moves :

Morpion Solitaire 

#  Distribution of the scores

Morpion Solitaire 

#  Mean scores in real-time

SameGame 

#  NP-complete puzzle. 

#  It consists in a grid composed of cells of different 

# colors. Adjacent cells of the same color can be removed together, there is a bonus of 1,000 points for removing all the cells. 

#  TabuColorRandom strategy: the color that has the most cells is set as the tabu color. 

#  During the playouts, moves of the tabu color are played only if there are no moves of the others colors or it removes all the cells of the tabu color.

Same Game

Same Game 

 SP-MCTS = restarts of the UCT algorithm 

 SP-MCTS scored 73,998 on a standard test 

set. 

 IDA* : 22,354 

 Darse Billings program : 72,816. 

 Level 2 without memorization : 44,731 

 Nested level 2 with memorization : 65,937 

 Nested level 3 : 77,934 

Application to Constraint Satisfaction 

 A nested search of level 0 is a playout. 

 A nested search of level 1 uses a playout 

to choose a value. 

 A nested search of level 2 uses nested 

search of level 1 to choose a value. 

 etc. 

 The score is always the number of free 

variables.

Sudoku 

 Sudoku is a popular NP-complete puzzle. 

 16x16 grids with 66% of empty cells. 

 Easy-Hard-Easy distribution of problems. 

 Forward Checking (FC) is stopped when 

the search time for a problem exceeds 20,000 s.

Sudoku 

 FC :     > 446,771.09 s. 

 Iterative Sampling :     61.83 s. 

 Nested level 1 :   1.34 s. 

 Nested level 2 :   1.64 s.

Kakuro           24    25    20    26    24 18       .       .        .       .       . 26       .       .        .       .       . 28       .       .        .       .       . 26       .       .        .       .       . 21       .       .        .       .       . 

A 5x5 grid

Kakuro          24     25     20    26    24 18       1      7       5       3      2 26      4       5       3       8      6 28      5       6       7       2      8 26      8       4       1       6      7 21      6       3       4       7      1 

Solution

Kakuro 

Algorithme              Solved problems              Time 

Forward Checking                 8/100        92,131.18 s. Iterative Sampling               10/100        94,605.16 s. Monte-Carlo level 1          100/100               78.30 s. Monte-Carlo level 2          100/100               17.85 s. 

8x8 Grids, 9 values, stop at 1,000 s.

Bus Regulation 

 Goal : minimize passengers waiting 

times by making buses wait at a stop. 

 Evaluation of an algorithm : sum of the waiting times for all passengers.

Regulation Algorithms 

 Rule-based regulation: The waiting time 

depends on the number of stop with the next bus 

 Monte-Carlo regulation : Choose the waiting time that has the best mean of random playouts 

 Nested Monte-Carlo regulation :  Use multiple levels of playouts

Rule-based regulation 

 : number of stop 

before the next bus. 

 w : waiting time if the 

next bus is at more than  . 

 No regulation : 171 

 Wait during 4 if more 

than 7 stops : 164

Monte-Carlo Regulation 

 165 for N = 100 

 154 for N = 1000 

 147 for N = 10000 

better than rule-based regulation (164).

Parallel Nested Monte-Carlo Search 

 Play the highest level sequentially 

 Play the lowest levels in parallel 

 Speedup = 56 for 64 cores at Morpion 

Solitaire 

 A more simple parallelization : play 

completely different searches in parallel (i.e. use a different seed for each search).

Monte Carlo Beam Search

Single-Agent General Game Playing 

 Nested Monte-Carlo search gives better results than UCT on average. 

 For some problems UCT is better. 

 Ary searches with both UCT and Nested 

Monte-Carlo search and plays the move that has the best score.

Snake in the box 

 A path such that for every node only two neighbors are in the path. 

 Applications: Electrical engineering, coding theory, computer network topologies. 

 World records with NMCS [Kinny 2012].

Multi-agent pathfinding 

 Find routes for the agents avoiding collisions. 

 Monte Carlo Fork Search enables to branch in the playouts. 

 It solves difficult problems faster than other algorithms [Bouzy 2013].

The Pancake Problem 

 Nested Monte Carlo Search has beaten world records using specialized playout policies [Bouzy 2015].

Software Engineering 

 Search based software testing [Feldt and Poulding 2015]. 

 Heuristic Model Checking [Poulding and Feldt 2015]. 

 Generating structured test data with specific properties [Poulding and Feldt 2014].

Inverse RNA Folding 

Find a sequence that has a given folding

Inverse RNA Folding 

 Molecule Design as a Search Problem 

 Find the sequence of nucleotides that gives 

a predefined structure. 

 A biochimist applied Nested Monte Carlo 

Search to this problem [Portela 2018]. 

 Better than the state of the art. 

 Transformers improve the policy

Refutation of Spectral Graph Theory Conjectures 

Monte Carlo Search better than Deep RL [Roucairol & Cazenave 2022]

Coalition Structure Generation 

Lazy Nested Monte Carlo Search with clever state space : 

 Find a set of chemical reactions that enable to synthetize a given molecule. 

 The state space is an AND/OR tree as in games. 

 DF-PN and MCTS have been used to find 

retrosynthesis pathways. 

 Alphachem [Segler et al. 2017]. 

 AiZynthFinder [Genheden et al. 2020]. 

Retrosynthesis

Retrosynthesis

DrugSynthMC 

#  Atom-Based Generation of Drug-like Molecules with Monte Carlo Search

DrugSynthMC 

Nested Monte Carlo Search : 

 Morpion Solitaire [Cazenave 2009] 

 SameGame [Cazenave 2009] 

 Sudoku [Cazenave 2009] 

 Expression Discovery [Cazenave 2010] 

 The Snake in the Box [Kinny 2012] 

 Cooperative Pathfinding [Bouzy 2013] 

 Software Testing [Poulding et al. 2014] 

 Heuristic Model-Checking [Poulding et al. 2015] 

 Pancake problem [Bouzy 2015] 

 Games [Cazenave et al. 2016] 

 Cryptography [Dwivedi et al. 2018] 

 Inverse RNA folding [Portela 2019] 

 Refutation of Spectral Graph Theory Conjectures [Roucairol & Cazenave 2022] 

 Retrosynthesis [Roucairol & Cazenave 2024] 

 De Novo Drug Design [Roucairol & Cazenave 2024] 

 … 

Applications

#  Write a Nested Monte Carlo Search for the left move problem. 

#  Functions to write : 

# legalMoves (state) play (state, move) terminal (state) score (state) playout (state) 

#  Then write a Nested Monte Carlo Search using these functions. 

Exercise

### import random import copy 

### def legalMoves (state):     return [0, 1] 

### def play (state, move):     state.append (move)     return state 

### def terminal (state):     return len (state) >= 60 

### def score (state):     return sum (state) 

Left Move Problem

Left Move Problem 

# def playout (state):     while not terminal (state):         moves = legalMoves (state)         move = moves [int(random.random () * len (moves))]         state = play (state, move)     return state      

Left Move Problem 

## def nested (state, n):     if (n == 0):        return playout (state)     bestSequence = []     while not terminal (state):         moves = legalMoves (state)         for m in moves:             s1 = copy.deepcopy (state)             s1 = play (s1, m)             s1 = nested (s1, n - 1)             if score (s1) >= score (bestSequence):                 bestSequence = s1         state = play (state, bestSequence [len (state)])     return state

Monte-Carlo Discovery of Expressions 

 Possible moves are pushing atoms. 

 Evaluation of a complete expression. 

 Better than Genetic Programming for some 

problems [Cazenave 2010, 2013].

Monte-Carlo Discovery of Expressions 

Prime Generating Polynomials: The score of an expression is the number of different primes it generates in a row for integer values of x starting at zero and increasing by one at each step. Nested Monte-Carlo search is better than UCT and Iterative Deepening search.

Monte-Carlo Discovery of Expressions

Monte-Carlo Discovery of Expressions

Monte-Carlo Discovery of Expressions

Monte-Carlo Discovery of Expressions 

#  N prisoners are assigned with either a 0 or a 1.  A prisoner can see the number assigned to the other prisoners but cannot see his own number.  Each prisoner is asked independently to guess if he is 0 or 1 or to pass.  The prisoners can formulate a strategy before beginning the game.  All the prisoners are free if at least one guesses correctly and none guess incorrectly.  A possible strategy is for example that one of the prisoners says 1 and the others pass, this strategy has fifty percent chances of winning.

Monte-Carlo Discovery of Expressions

Monte-Carlo Discovery of Expressions

Monte-Carlo Discovery of Expressions

Application to financial data 

 Data used to perform our empirical analysis 

are daily prices of European S&P500 index call options. 

 The sample period is from January 02, 2003 to August 29, 2003. 

 S&P500 index options are among the most actively traded financial derivatives in the world.

Atom Set 

### +         Addition                                         C/K Call Price/Strike Price 

### -         Subtraction                                    S/K  Index Price/Strike Price 

### *         Multiplication                                  tau  Time to Maturity 

### %       Protected Division  

### ln       Protected Natural Log  

### Exp    Exponential function  

### Sqrt    Protected Square Root  

### cos     Cosinus 

### sin      Sinus 

### Ncfd   Normal cumulative distribution 

Fitness function 

 Each formula found by NMCS or GP is 

evaluated to test whether it can accurately forecast the implied volatility for all entries in the training set. 

 Fitness = Mean Squared Error (MSE) between the estimated volatility and the target volatility.

Mean Square Error

Poor Fitted Observations

Exercise : 

 Possible atoms : 1, 2, 3, +, -

 Goal : find expressions containing less than 11 

atoms that have great evaluations. 

 Generate random expressions (i.e. list of atoms). 

 Evaluate an expression given as a list of atoms. 

 Use NMCS to generate expressions 

Expression Discovery

Expression Discovery 

# + 

# + 

# +2 

# 1 3 

# 1 

# + + 2 + 1 3 1

import random import copy 

atoms = [1, 2, 3, '+', '-'] children = [0, 0, 0, 2, 2] MaxLength = 11 

def legalMoves (state, leaves):     l = []     for a in range (len (atoms)):         if len (state) + leaves + children [a] <= MaxLength:             l.append (a)     return l 

def play (state, move, leaves):     state.append (move)     return [state, leaves - 1 + children [move]] 

def terminal (state, leaves):     return leaves == 0 

Expression Discovery

Expression Discovery 

# def playout (state, leaves):     while not terminal (state, leaves):         moves = legalMoves (state, leaves)         move = moves [int(random.random () * len (moves))]         [state, leaves] = play (state, move, leaves)     return state      

Expression Discovery 

# def score (state, i):     if children [state [i]] == 0:         return [atoms [state [i]], i + 1]     if children [state [i]] == 2:         a = atoms [state [i]]         [s1,i1] = score (state, i + 1)         [s2,i2] = score (state, i1)         if a == '+':             return [s1 + s2, i2]         if a == '-':             return [s1 - s2, i2]      

Expression Discovery 

### def nested (state, leaves, n):     bestSequence = []     bestScore = -10e9     while not terminal (state, leaves):         moves = legalMoves (state, leaves)         for m in moves:             s1 = copy.deepcopy (state)             [s1, leaves1] = play (s1, m, leaves)             if (n == 1):                 s1 = playout (s1, leaves1)             else:                 s1 = nested (s1, leaves1, n - 1)             [score1, i] = score (s1, 0)             if score1 > bestScore:                 bestScore = score1                 bestSequence = s1         [state, leaves] = play (state, bestSequence [len (state)], leaves)     return state

Expression Discovery 

### import sys 

### def printExpression (state):     for i in state:         sys.stdout.write (str (atoms [i]) + ' ')     sys.stdout.write ('\n')     def test ():     for i in range (10):         s = playout ([], 1)         printExpression (s)         print (score (s, 0) [0])     for i in range (10):         s = nested ([], 1, 2)         printExpression (s)         print (score (s, 0) [0]) 

Outline 

 Algorithm Discovery 

 Discovery of MCTS Algorithms 

 Discovery of SHUSS Exploration Terms 

 Conclusion

Algorithm Discovery

Algorithm Discovery 

#  Using an algorithm to discover an algorithm 

#  AlphaZero or MuZero can be used to play the game of 

# algorithm discovery.

Algorithm Discovery 

# Monte Carlo Tree Search and Deep Reinforcement Learning to discover new fast matrix multiplication algorithms [Fawzi & al. 2022]

Algorithm Discovery 

#  AlphaDev [Mankowitz & al. 2023]: 

# Faster sorting algorithms discovered using deep reinforcement learning 

LION 

# Automated discovery of optimization algorithms 

Discovery of MCTS Algorithms

Discovery of MCTS Algorithms 

 Evolving Monte-Carlo Tree Search Algorithms [Cazenave 2007] 

 Inventing new exploration terms for MCTS with Genetic Programming.

Discovery of MCTS Algorithms 

 Nested Monte Carlo Search can be used to discover mathematical expressions and algorithms [Cazenave 2010] 

 It can replace Genetic Programming to discover new Monte Carlo Search algorithms with a Monte Carlo Search algorithm

Discovery of SHUSS Exploration Terms

SHUSS

SHUSS 

 SHUSS with a policy network 

 Select the n best moves according to the policy 

 Perform Sequential Halving on this set of moves 

 Game : Go 

 Neural Network : Transformer trained on Katago 

games

SHUSS

Discovery of Exploration Terms

Discovery of Exploration Terms

Discovery of Exploration Terms

Conclusion 

 Sampling of Exploration Terms 

 The SHUSS dataset for evaluating exploration 

terms 

 SHUSS is improved using the automatically found 

exploration term 

 SHUSS using the discovered exploration term 

becomes competitive with PUCT for small budgets

#  The quality of information propagated during the search can be increased via a discounting heuristic, leading to a better move selection for the overall algorithm. 

#  Improving the cost-effectiveness of the algorithm without changing the resulting policy by using safe pruning criteria. 

#  Long-term convergence to an optimal strategy can be guaranteed by wrapping NMCS inside a UCT-like algorithm. 

Nested Monte-Carlo Search for Two-player Games

 The discounting heuristic turns a win/loss game into a game with a wide range of outcomes by having the max player preferring short wins to long wins, and long losses to short losses. 

 A playout returns v(st) / (t + 1) with v(st) in {-1,1} 

Nested Monte-Carlo Search for Two-player Games

Nested Monte-Carlo Search for Two-player Games

Nested Monte-Carlo Search for Two-player Games

 Modify Breakthrough to play Misere Breakthrough. 

 Modify playouts for discounted rewards. 

 Nested playouts. 

 UCT with nested discounted playouts. 

 Compare to standard UCT. 

Exercise

def misereScore (self):     s = self.score ()     if s == 1:         return -1     if s == 0:         return 1     return s 

Discounted Playout

def discountedPlayout (self, t):     while (True):         moves = self.legalMoves ()         if self.terminal ():             return self.misereScore () / (t + 1)         n = random.randint (0, len (moves) - 1)         self.play (moves [n])         t = t + 1 

Discounted Playout

def nestedDiscountedPlayout (self, t):     while (True):         if self.terminal ():             return self.misereScore () / (t + 1)         moves = self.legalMoves ()         bestMove = moves [0]         best = -2         for i in range (len (moves)):             b = copy.deepcopy (self)             b.play (moves [i])             s = b.discountedPlayout (t + 1)             if self.turn == Black:                s = -s             if s > best:                 best = s                 bestMove = moves [i]         self.play (bestMove)         t = t + 1 

Nested Discounted Playout

def UCTNested (board, t1):     if board.terminal ():         return board.misereScore () / (t1 + 1)     t = look (board)     if t != None:         bestValue = -1000000.0         best = 0         moves = board.legalMoves ()         for i in range (len (moves)):             val = 1000000.0             if t [1] [i] > 0:                 Q = t [2] [i] / t [1] [i]                 if board.turn == Black:                     Q = -Q                 val = Q + 0.4 * sqrt (log (t [0]) / t [1] [i])             if val > bestValue:                 bestValue = val                 best = i 

UCT Nested Discounted

###         board.play (moves [best])         res = UCTNested (board, t1 + 1)         t [0] += 1         t [1] [best] += 1         t [2] [best] += res         return res     else:         add (board)         return board.nestedDiscountedPlayout (t1) 

UCT Nested Discounted

Nested Rollout Policy Adaptation

Nested Rollout Policy Adaptation 

#  NRPA [Rosin 2011] is NMCS with policy learning. 

#  It uses sampling with a softmax of the move 

# weights as a playout policy. 

#  It adapts the weights of the moves according to the 

# best sequence of moves found so far. 

#  During adaptation each weight of a move of the 

# best sequence is incremented and all possible moves in the same state are decreased proportionally to theire probabilities.

Nested Rollout Policy Adaptation 

 Each move is associated to a weight wi 

 During a playout each move is played with a probability: 

exp (wi) / Sk exp (wk)

Nested Rollout Policy Adaptation 

 For each move of the best sequence: wi = wi + 1 

 For each possible move of each state of the best sequence: wj = wj – exp (wj) / Sk exp (wk)

Morpion Solitaire 

#                                        World record [Rosin 2011]

Applications of NRPA 

 3D packing with object orientation.

Applications of NRPA 

 Improvement of some alignments for Multiple Sequence Alignment [Edelkamp & al 2015].

Applications of NRPA 

 Traveling Salesman Problem with Time Windows [Cazenave 2012]. 

 Physical traveling salesman problem.

Applications of NRPA 

 State of the art results for Logistics [Edelkamp & al. 2016].

ENEDIS Agents 

 ENEDIS fleet of vehicles is one of the largest. 

 They plan interventions every day. 

 Monte Carlo Search is 5% better than the 

specialized algorithms they use. 

 Millions of kilometers saved each year 

[Cazenave et al. 2021].

RNA Molecule Design 

Find a sequence that has a given folding [Cazenave et al. 2020].

Network Traffic Engineering 

Provide routing configurations in networks that: 

##   Miminize ressources 

##   Preserve QoS. 

Better than local search [Dang et al. 2021]:

Virtual Network Embedding 

MCTS for 5G network slicing [Elkael 2023]

Snake in the Box 

Find a long path in an hypercube : 

Improved lower bounds [Dang & al. 2023]

###  Morpion Solitaire [Rosin 2011] 

###  CrossWords [Rosin 2011] 

###  Traveling Salesman Problem with Time Windows [Cazenave et al. 2012] 

###  3D Packing with Object Orientation [Edelkamp et al. 2014] 

###  Multiple Sequence Alignment [Edelkamp et al. 2015] 

###  SameGame [Cazenave et al. 2016] 

###  Vehicle Routing Problems [Edelkamp et al. 2016, Cazenave et al. 2020] 

###  Graph Coloring [Cazenave et al. 2020] 

###  RNA Inverse Folding [Cazenave & Fournier 2020] 

###  Network Traffic Engineering [Dang et al. 2021] 

###  Slicing 5G [Elkael et al. 2023] 

###  Snake in the Box [Dang et al. 2023] 

###  … 

Nested Rollout Policy Adaptation

Exercise  

#  Apply NRPA to the Left Move problem. 

#  Write a function playout (state) that plays a playout 

# using Gibbs sampling. 

#  The probability of playing a move is proportional to the 

# exponential of the weight of the move. 

#  weight is a dictionary that contains the weights of the 

# moves. 

#  Write the Adapt function 

#  Write the NRPA function

Exercise  

def randomMove (state, policy):     moves = legalMoves (state)     z = 0.0     for m in moves:         if policy.get (code(state,m)) == None:             policy [code(state,m)] = 0.0         z = z + math.exp (policy [code(state,m)])     stop = random.random () * z     sum = 0.0     for m in moves:         sum = sum + math.exp (policy [code(state,m)])         if (sum >= stop):             return m         def playout (state, policy):     while not terminal (state):         move = randomMove (state, policy)         play (state, move)     return score (state),sequence(state)

Exercise  

def adapt (policy, sequence, alpha = 1.0):     s = []     polp = copy.deepcopy (policy)     for best in sequence:         moves = legalMoves (s)         z = 0.0         for m in moves:             if policy.get (code(s,m)) == None:                 policy [code(s,m)] = 0.0             z = z + math.exp (policy [code(s,m)])         for m in moves:             if polp.get (code(s,m)) == None:                 polp [code(s,m)] = 0.0             polp [code(s,m)] -= alpha * math.exp (policy [code(s,m)]) / z         polp [code(s,best)] += alpha         play (s, best)     return polp

Exercise  

### def NRPA (level, policy):     if level == 0:         return playout ([], policy)     best = -np.inf     seq = []     for i in range (100):         pol = copy.deepcopy (policy)         sc, s = NRPA (level - 1, pol)         if sc > best:             best = sc             seq = s         policy = adapt (policy, seq)     return best, seq

Exercise  

def score (state):     return sum (state) 

def play (state, move):     state.append (move) 

def legalMoves (state):     return [0,1] 

def terminal (state):     return len(state) >= 60 

def sequence (state):     return state 

def code (state, m):     return 2 * len (state) + m 

sc,s = NRPA (1, {}) print (sc, s) sc,s = NRPA (2, {}) print (sc, s)

Selective Policies 

 Prune bad moves during playouts. 

 Modify the legal moves function. 

 Use rules to find bad moves. 

 Different domain specific rules for : 

# – Bus regulation, 

# – SameGame, 

# – Weak Schur numbers.

Bus Regulation 

#  At each stop a regulator can decide to make a bus 

# wait before continuing his route. 

#  Waiting at a stop can reduce the overall 

# passengers waiting time. 

#  The score of a simulation is the sum of all the 

# passengers waiting time. 

#  Optimizing a problem is finding a set of bus 

# stopping times that minimizes the score of the simulation.

Bus Regulation 

 Standard policy: between 1 and 5 minutes 

 Selective policy : waiting time of 1 if there are 

fewer than δ stops before the next bus. 

 Code for a move: 

# – the bus stop, 

# – the time of arrival to the bus stop, 

# – the number of minutes to wait before leaving the 

# stop.

Bus Regulation 

                                           Time                                 No δ                             δ = 3 

                                           0.01                                2,620                            2,147                                            0.02                                2,441                            2,049                                            0.04                                2,329                            2,000                                            0.08                                2,242                            1,959                                            0.16                                2,157                            1,925                                            0.32                                2,107                            1,903                                            0.64                                2,046                            1,868                                            1.28                                1,974                            1,811                                            2.56                                1,892                            1,754                                            5.12                                1,802                            1,703                                            10.24                              1,737                            1,660                                            20.48                              1,698                            1,640                                            40.96                              1,682                            1,629                                            81.92                              1,660                            1,617                                            163.84                            1,632                            1,610

SameGame

SameGame 

 Code of a move = Zobrist hashing. 

 Tabu color strategy = avoid moves of the 

dominant color until there is only one block of the dominant color. 

 Selective policy = allow moves of size two of the tabu color when the number of moves already played is greater than t.

SameGame 

                                    Time                            No tabu                          tabu                                 t > 10 

                                     0.01                             155.83                       352.19                              257.59                                      0.02                             251.28                       707.56                              505.05                                      0.04                             340.18                       927.63                              677.57                                      0.08                             404.27                    1,080.64                              822.44                                      0.16                             466.15                    1,252.14                              939.30                                      0.32                             545.78                    1,375.78                           1,058.54                                      0.64                             647.63                    1,524.37                           1,203.91                                      1.28                             807.20                    1,648.16                           1,356.81                                      2.56                          1,012.42                    1,746.74                           1,497.90                                      5.12                          1,184.77                    1,819.43                           1,605.86                                    10.24                          1,286.25                    1,886.48                           1,712.17                                    20.48                          1,425.55                    1,983.42                           1,879.10                                    40.96                          1,579.67                    2,115.80                           2,100.47                                    81.92                          1,781.40                    2,319.44                           2,384.24                                   163.84                         2,011.25                    2,484.18                           2,636.22

SameGame 

Standard test set of 20 boards: 

NMCS    SP-MCTS       NRPA             web 77,934         78,012       80,030        87,858

Same Game 

 Hybrid Parallelization [Negrevergne 2017]. 

 Root Parallelization for each computer. Leaf Parallelization of the playouts using threads. 

 New record of 83 050. 

 Parallelization for Morpion Solitaire [Nagorko 2019].

Weak Schur Numbers 

#  Find a partition of consecutive numbers that 

# contains as many consecutive numbers as possible 

#  A partition must not contain a number that is the 

# sum of two previous numbers in the same partition. 

#  Partition of size 3 : 

# 1 2 4 8 11 22 3 5 6 7 19 21 23 9 10 12 13 14 15 16 17 18 20

Weak Schur Numbers 

#  Often a good move to put the next number in the 

# same partition as the previous number. 

#  If it is legal to put the next number in the same 

# partition as the previous number then it is the only legal move considered. 

#  Otherwise all legal moves are considered. 

#  The code of a move for the Weak Schur problem 

# takes as input the partition of the move, the integer to assign and the previous number in the partition.

Weak Schur Numbers 

                                           Time                                 ws(9)                        ws-rule(9) 

                                           0.01                                    199                             2,847                                            0.02                                    246                             3,342                                            0.04                                    263                             3,717                                            0.08                                    273                             4,125                                            0.16                                    286                             4,465                                            0.32                                    293                             4,757                                            0.64                                    303                             5,044                                            1.28                                    314                             5,357                                            2.56                                    331                             5,679                                            5.12                                    362                             6,065                                            10.24                                  384                             6,458                                            20.48                                  403                             6,805                                            40.96                                  422                             7,117                                            81.92                                  444                             7,311                                            163.84                                473                             7,538

Selective Policies 

 We have applied selective policies to three 

quite different problems. 

 For each problem selective policies 

improve NRPA. 

 We used only simple policy improvements. 

 Better performance could be obtained 

refining the proposed policies.

Exercise  

#  Apply NRPA to the Weak Schur problem. 

#  Write a class defining the Weak Schur problem. 

#  Write a function that plays a playout using Gibbs sampling. 

#  The probability of playing a move is proportional to the 

# exponential of the weight of the move. 

#  weight is a dictionary that contains the weights associated 

# to the moves. 

#  code (move) returns the integer associated to the move in 

# the weight dictionary.

Weak Schur 

import random import math import numpy as np N = 3 MaxNumber = 10000 class WS (object):     def __init__ (self):         self.partitions = [[] for i in range (N)]         self.possible = np.full((N,MaxNumber),True))         self.next = 1         self.sequence = [] 

    def legalMoves (self):         l = []         for i in range (N):             if self.possible [i] [self.next]:                 l.append (i)         return l 

    def code (self, p):         return N * self.next + p

Weak Schur 

    def terminal (self):         l = self.legalMoves ()         if l == []:             return True         return False 

    def score (self):         return self.next - 1 

    def play (self, p):         for i in range (len (self.partitions [p])):             self.possible [p] [self.next + self.partitions [p] [i]] = False         self.partitions [p].append (self.next)         self.next = self.next + 1         self.sequence.append (p)

Weak Schur 

### class Policy (object):     def __init__ (self):         self.dict = {} 

###     def get (self, code):         w = 0         if code in self.dict:             w = self.dict [code]         return w 

###     def put (self, code, w):         self.dict [code] = w 

Weak Schur 

### def playout (state, policy):     while not state.terminal ():         l = state.legalMoves ()         z = 0         for i in range (len (l)):             z = z + math.exp (policy.get (state.code (l [i])))         stop = random.random () * z         move = 0         z = 0         while True:             z = z + math.exp (policy.get (state.code (l [move])))             if z >= stop:                 break             move = move + 1         state.play (l [move])

Exercise 

 Write the adapt function that modifies the 

weights of the moves according to the best sequence of moves. 

 Weights of the moves of the best sequence are incremented. 

 For each state of the best sequence, weights of all the moves are reduced proportional to their probabilities.

Weak Schur 

### def adapt (sequence, policy):     polp = copy.deepcopy (policy)     s = WS ()     while not s.terminal ():         l = s.legalMoves ()         z = 0         for i in range (len (l)):             z = z + math.exp (policy.get (s.code (l [i])))         move = sequence [len (s.sequence)]         polp.put (s.code (move), polp.get(s.code (move)) + 1)         for i in range (len (l)):             proba = math.exp (policy.get (s.code (l [i]))) / z             polp.put (s.code (l [i]), polp.get(s.code (l [i])) - proba)         s.play (move)     return polp

Exercise 

 Write the multi level NRPA code that 

retains a best sequence per level and recursively calls lower levels. 

 Level zero is a playout with Gibbs sampling.

Weak Schur 

def NRPA (level, policy):     state = WS ()     if level == 0:         playout (state, policy)         return state     pol = copy.deepcopy (policy)     for i in range (100):         ws = NRPA (level - 1, pol)         if ws.score () >= state.score ():             state = ws         pol = adapt (state.sequence, pol)     return state 

ws = NRPA (2, Policy ()) print (ws.partitions) 

Analysis of Nested Rollout Policy Adaptation

Generalized Nested Rollout Policy Adaptation

Generalized Nested Rollout Policy Adaptation

Generalized Nested Rollout Policy Adaptation

Generalized Nested Rollout Policy Adaptation

Generalized Nested Rollout Policy Adaptation

SameGame

TSPTW

TSPTW

GNRPA 

NRPA with a bias. 

Equivalent to the initialization of the weights. 

More convenient to use a bias. 

We can always set the temperature to 1 without a 

loss of generality. 

Good results for SameGame and TSPTW.

GNRPA 

Exercise: 

Apply GNRPA to the Weak Schur problem.

Weak Schur 

### def playout (state, policy):     while not state.terminal ():         l = state.legalMoves ()         z = 0         for i in range (len (l)):             z = z + math.exp (policy.get (state.code (l [i])) + state.beta (l [i]))         stop = random.random () * z         move = 0         z = 0         while True:             z = z + math.exp (policy.get (state.code (l [move])) + state.beta (l [move]))             if z >= stop:                 break             move = move + 1         state.play (l [move])

Weak Schur 

### def adapt (sequence, policy):     polp = copy.deepcopy (policy)     s = WS ()     while not s.terminal ():         l = s.legalMoves ()         z = 0         for i in range (len (l)):             z = z + math.exp (policy.get (s.code (l [i])) + s.beta (l [i]))         move = sequence [len (s.sequence)]         polp.put (s.code (move), polp.get(s.code (move)) + 1)         for i in range (len (l)):             proba = math.exp (policy.get (s.code (l [i])) + s.beta (l [i])) / z             polp.put (s.code (l [i]), polp.get(s.code (l [i])) - proba)         s.play (move)     return polp

Weak Schur 

###     def beta (self, p):         last = len (self.sequence)         if last == 0:             return 0         if p == self.sequence [last – 1]:             return 10         return 0       

Force Explore 

# When a policy has been reinforced a lot, for example in the end of the iterations loop, the playouts are almost deterministic. 

# NRPA very often replays the same playout. 

Force Explore detects when a terminal state has already 

# been evaluated before. 

In this case it randomly chooses a move in the playout, 

# modifies it and performs another playout. 

"Warm-Starting Nested Rollout Policy Adaptation with 

# Optimal Stopping", Dang et al. AAAI 2023.

Force Explore 

Exercise: 

Apply Force Explore to the Weak Schur 

problem.

Force Explore 

First thing is to compute a hascode for states : 

##     def play (self, p): 

##         for i in range (len (self.partitions [p])): 

##             self.possible [p] [self.next + self.partitions [p] [i]] = False 

##         self.h = self.h ^ randomNumber [self.code (p)] 

##         self.partitions [p].append (self.next) 

##         self.next = self.next + 1 

##         self.sequence.append (p)

Force Explore 

Modification of the playout function to force explore : 

def playout (state, policy):     while not terminal (state):         move = randomMove (state, policy)         state = play (state, move)     s = TT.get (state.h, None)     if s != None:         index = random.randint (0, len (state.sequence) – 1)         state1 = WS ()         for i in range (index):             state1 = play (state1, state.sequence [i]) 

    l = state1.legalMoves () 

    move = int(random.random () * len(l)) 

    state1.play (l [move]) 

        state = state1         while not terminal (state):             move = randomMove (state, policy)             state = play (state, move)     TT.add (state.h, 1)     return state

Warm Starting 

# Warm starting performs multiple recursive calls before starting to adapt. 

# The optimal stopping criterion is the one of the secretary problem : 

#       Ri ≤ i * c / (n + 1 – i)       with Ri relative rank of the ith item,       n the total number of items,       c a constant. 

# "Warm-Starting Nested Rollout Policy Adaptation with Optimal Stopping", Dang et al. AAAI 2023.

Warm Starting 

World records for the Snake-in-the-Box.

Warm Starting 

Exercise: 

Apply Warm Starting to the Weak Schur 

problem.

Warm Starting 

def MetaNRPA (level, policy): 

    state = WS () 

    if level == 0: 

        playout (state, policy) 

        return state 

    pol = copy.deepcopy (policy) 

    l = [] 

    startLearning = False 

    c = 2.3 

    for i in range (100): 

        ws = MetaNRPA (level - 1, pol) 

        score = ws.score () 

        if score >= state.score (): 

            state = ws 

        l.append (score) 

        l.sort (reverse=True) 

        index = l.index (score) 

        if index + 1 <= (i + 1)  * c / (100 – i): 

            startLearning = True 

        if startLearning: 

            pol = adapt (state.sequence, pol) 

    return state

Limited Repetitions 

## Stops the iterations at a level when the best sequence is found again. 

Enables to avoid deterministic policies that find the same sequence 

## again and again and waste time. 

## Simple to code. 

## Generalized Nested Rollout Policy Adaptation with Limited Repetitions 

Applications : 

###  TSPTW, 

###  RNA Design, 

###  Weak Schur. 

## "Generalized Nested Rollout Policy Adaptation with Limited Repetitions", Tristan Cazenave. Arxiv 2024.

Limited Repetitions 

Exercise: 

Apply Limited Repetitions to the Weak Schur 

Problem.

Limited Repetitions 

def GNRPALR (level, policy): 

    state = WS () 

    if level == 0: 

        playout (state, policy) 

        return state 

###     pol = copy.deepcopy (policy) 

     while True: 

        ws = GNRPALR (level - 1, pol) 

        score = ws.score () 

        if score > state.score (): 

            state = ws 

        if score == state.score (): 

            return state 

        pol = adapt (state.sequence, pol)

Learning a Prior by Replaying Solutions 

# Generate solved problems. 

# Compute statistics on moves for the generated solved problems. 

Use the logarithm of the statistics of a move as a prior for the 

# move. 

Applications : 

#  Kakuro 

#  Latin Square Completion 

#  RNA Design 

# "Learning a Prior for Monte Carlo Search by Replaying Solutions to Combinatorial Problems", Tristan Cazenave. Arxiv 2024.

Learning a Prior by Replaying Solutions

Learning a Prior by Replaying Solutions

Limited Repetitions

Learning a Prior by Replaying Solutions

Learning a Prior by Replaying Solutions 

Exercise: 

Apply Learning a Prior by Replaying Solutions 

to Kakuro. 

Generate Kakuro problems of size 10 with 11 

possible values. 

Compute statistics on moves. 

Use the statistics as a prior for GNRPA.

Learning a Prior by Replaying Solutions

Bias Weights Learning 

Bias Learning dynamically learns the weight to associate to a bias in GNRPA. 

"Learning the Bias Weights for Generalized Nested Rollout Policy Adaptation", Sentuc et al. LION 2023.

Bias Weights Learning

Bias Weights Learning 

Exercise: Apply Bias Weights Learning to the Weak Schur problem.

Bias Weights Learning 

### def playout (state, policy,w1):     while not state.terminal ():         l = state.legalMoves ()         z = 0         for i in range (len (l)):             z = z + math.exp (policy.get (state.code (l [i])) + w1 * state.beta (l [i]))         stop = random.random () * z         move = 0         z = 0         while True:             z = z + math.exp (policy.get (state.code (l [move])) + w1 * state.beta (l [move]))             if z >= stop:                 break             move = move + 1         state.play (l [move])

Bias Weights Learning 

def adapt (sequence, policy, w1):     polp = copy.deepcopy (policy)     w = w1     s = WS ()     while not s.terminal ():         l = s.legalMoves ()         z = 0         b = 0         for i in range (len (l)):             z = z + math.exp (policy.get (s.code (l [i])) + w1 * s.beta (l [i]))             b = b + s.beta (l [i]) * math.exp (policy.get (s.code (l [i])) + w1 * s.beta (l [i]))         move = sequence [len (s.sequence)]         w = w + s.beta (move) – b / z         polp.put (s.code (move), polp.get(s.code (move)) + 1)         for i in range (len (l)):             proba = math.exp (policy.get (s.code (l [i])) + w1 * s.beta (l [i])) / z             polp.put (s.code (l [i]), polp.get(s.code (l [i])) - proba)         s.play (move)     return (polp,w)

Bias Weights Learning 

def BLGNRPA (level, policy, w): 

    state = WS () 

    if level == 0: 

        playout (state, policy, w) 

        return state 

   pol = copy.deepcopy (policy) 

   w1 = w 

   for i in range (100): 

        ws = BLGNRPA (level - 1, pol, w1) 

        score = ws.score () 

        if score >= state.score (): 

            state = ws 

        (pol, w1) = adapt (state.sequence, pol, w1) 

    return state

Eterna 100 

Find a sequence that has a given folding

Eterna 100 

Human experts have managed to solve the   100 problems of the benchmark 

No program has so far achieved such a   score. 

The best score so far is 95/100 by NEMO:  NEsted MOnte Carlo RNA Puzzle Solver

NEMO 

NEMO uses two sets of heuristics 

General ones that give probabilities to pairs of bases. 

More specific ones that are tailored to puzzle solving.

GNRPA

Other Improvements 

Stabilized GNRPA 

Beam GNRPA 

Zobrist Hashing 

Restarts 

Parallelization

Experimental Results

Experimental Results 

Leaf Parallelization

Experimental Results

Experimental Results 

Root Parallelization

Conclusion 

95/100 problems solved, same as NEMO. 

Less domain knowledge. 

Various improvements of NRPA.

Playout Policy Adaptation

Offline learning of a playout policy 

 Offline learning of playout policies has given good results in Go [Coulom 2007, Huang 2010] and Hex [Huang 2013], learning fixed pattern weights so as to bias the playouts. 

 Patterns are also used to do progressive widening in the UCT tree.

Online learning of a playout policy 

#  The RAVE algorithm [Gelly 2011] performs online learning of moves values in order to bias the choice of moves in the UCT tree. 

#  RAVE has been very successful in Go and Hex. 

#  A development of RAVE is to use the RAVE values to 

# choose moves in the playouts using Pool RAVE [Rimmel 2010]. 

#  Pool RAVE improves slightly on random playouts in Havannah and reaches 62.7% against random playouts in Go.

Online learning of a playout policy 

 Move-Average Sampling Technique (MAST) is a technique used in the GGP program Cadia Player so as to bias the playouts with statistics on moves [Finnsson 2010]. 

 It consists of choosing a move in the playout proportionally to the exponential of its mean. 

 MAST keeps the average result of each action over all simulations. 

Online learning of a playout policy 

 Later improvements of Cadia Player are N-Grams and the last good reply policy [Tak 2012]. 

 They have been applied to GGP so as to improve playouts by learning move sequences. 

 A recent development in GGP is to have multiple playout strategies and to choose the one which is the most adapted to the problem at hand [Swiechowski 2014].

Online learning of a playout policy 

 Playout Policy Adaptation (PPA) also uses Gibbs sampling. 

 The evaluation of an action for PPA is not its mean over all simulations such as in MAST. 

 Instead the value of an action is learned comparing it to the other available actions for the state where it has been played.

Playout Policy learning 

 Start with a uniform policy. 

 Use the policy for the playouts. 

 Adapt the policy for the winner of each playout.

Playout Policy learning 

 Each move is associated to a weight wi. 

 During a playout each move is played with a probability : 

exp (wi) / Sk exp (wk)

Playout Policy learning 

 Online learning : 

 For each move of the winner : 

wi = wi + 1 

 For each possible move of each state of 

the winner : wi = wi – exp (wi) / Sk exp (wk)

Breakthrough 

#  The first player to reach the opposite line has won

Misère Breakthrough 

#  The first player to reach the opposite line has lost

Knightthrough 

#  The first to put a knight on the opposite side has won.

Misère Knightthrough 

#  The first to put a knight on the opposite side has lost.

Atarigo 

 The first to capture has won

Nogo 

 The first to capture has lost

Domineering Misère Domineering 

 The last to play has won / lost.

Experimental results 

###                              Size                  Playouts                                            1,000        10,000 

### Atarigo                  8 x 8             72.2           94.4 Breakthrough             8 x 8             55.2           54.4 Misere Breakthrough      8 x 8             99.2           97.8 Domineering              8 x 8             48.4           58.0 Misere Domineering       8 x 8             76.4           83.4 Go                       8 x 8             23.0            1.2 Knightthrough            8 x 8             64.2           64.6 Misere Knightthrough     8 x 8             99.8          100.0 Nogo                     8 x 8             64.8           46.4 Misere Nogo              8 x 8             80.6           89.4

Playout Policy learning with Move Features 

#  Associate features to the move. 

#  A move and its features are associated to a code. 

#  The algorithm learns the weights of codes instead of simply the weights of moves.

Playout Policy learning with Move Features 

#  Atarigo : four adjacent intersections 

#  Breakthrough : capture in the move code 

#  Misère Breakthrough : same as Breakthrough 

#  Domineering : cells next to the domino played 

#  Misère Domineering : same as Domineering 

#  Knightthrough : capture in the move code 

#  Misère Knighthrough : same as Knighthrough 

#  Nogo : same as Atarigo

Experimental results 

 Each result is the outcome of a 500 games 

match, 250 with White and 250 with Black. 

 UCT with an adaptive policy (PPAF) is 

played against UCT with a random policy. 

 Tests are done for 10,000 playouts. 

 For each game we test size 8x8. 

 We tested 8 different games.

Experimental results                                                     Size                                  Winning % 

###     Atarigo                8 x 8               94.4 % 

###     Breakthrough           8 x 8               81.4 % 

###     Misere Breakthrough    8 x 8              100.0 % 

###     Domineering            8 x 8               80.4 % 

###     Misere Domineering     8 x 8               93.0 % 

###     Knightthrough          8 x 8               84.0 % 

###     Misere Knightthrough   8 x 8              100.0 % 

###     Nogo                   8 x 8               95.4 %

PPAF and Memorization 

 Start a game with an uniform policy. 

 Adapt at each move of the game. 

 Start at each move with the policy of the previous move.

PPAF and Memorization 

#  A nice property of PPAF is that the move played after the algorithm has been run is the most simulated move. 

#  The memorized policy is related to the state after the move played by the algorithm since it is the most simulated move. 

#  When starting with the memorized policy for the next state, this state has already been partially learned

PPAFM versus PPAF uniform 

## Game                                              Score 

## Atarigo                                            66.0% Breakthrough                                  87.4% Domineering                                   58.0% Knightthrough                                 84.6% Misere Breakthrough                      97.2% Misere Domineering                       56.8% Misere Knightthrough                     99.2% Nogo                                              49.4%

PPAFM versus UCT 

## Game                                              Score 

## Atarigo                                            95.4% Breakthrough                                  94.2% Domineering                                   81 .8% Knightthrough                                 96.6% Misere Breakthrough                     100.0% Misere Domineering                       95.8% Misere Knightthrough                    100.0% Nogo                                               91.6%

PPA Adapt Algorithm

 Try PPA for Misere Breakthrough. 

# – The playout function – The adapt function – Combination with UCT 

 Take capture into account (PPAF). 

 Memorize the policy (PPAFM). 

 Compare to UCT. 

Exercise

###     def code (self, move):         direction = 1         if move.y2 > move.y1:             direction = 0         if move.y2 < move.y1:             direction = 2         capture = 0         if self.board [move.x2] [move.y2] != Empty:             capture = 1         if move.color == White:             return 6 * (Dy * move.x1 + move.y1) + 2 * direction + capture         else:             return 6 * Dx * Dy + 6 * (Dy * move.x1 + move.y1) + 2 * direction + capture 

PPAF

def playout (state, policy):     while not state.terminal ():         l = state.legalMoves ()         z = 0         for i in range (len (l)):             z = z + math.exp (policy.get (state.code (l [i])))         stop = random.random () * z         move = 0         z = 0         while True:             z = z + math.exp (policy.get (state.code (l [move])))             if z >= stop:                 break             move = move + 1         state.play (l [move])     return state.score () 

PPAF

def adapt (s, winner, state, policy):     polp = copy.deepcopy (policy)     alpha = 0.32     while not s.terminal ():         l = s.legalMoves ()         move = state.rollout [len (s.rollout)]         if s.turn == winner:             z = 0             for i in range (len (l)):                 z = z + math.exp (policy.get (s.code (l [i])))             polp.put (s.code (move), polp.get(s.code (move)) + alpha)             for i in range (len (l)):                 proba = math.exp (policy.get (s.code (l [i]))) / z                 polp.put (s.code (l [i]), polp.get(s.code (l [i])) - alpha * proba)         s.play (move)     return polp 

PPAF

def PPAF (board, policy):     if board.terminal ():         return board.score ()     t = look (board)     if t != None:         bestValue = -1000000.0         best = 0         moves = board.legalMoves()         for i in range (0, len (moves)):             val = 1000000.0             if t [1] [i] > 0:                 Q = t [2] [i] / t [1] [i]                 if board.turn == Black:                     Q = 1 - Q                 val = Q + 0.4 * sqrt (log (t [0]) / t [1] [i])             if val > bestValue:                 bestValue = val                 best = i 

PPAF

        board.play (moves [best])         res = PPAF (board, policy)         t [0] += 1         t [1] [best] += 1         t [2] [best] += res         return res     else:         add (board)         return playout (board, policy) 

PPAF

def BestMovePPAF (board, n):     global Table     Table = {}     policy = Policy ()     for i in range (n):         b1 = copy.deepcopy (board)         res = PPAF (b1, policy)         b2 = copy.deepcopy (board)         if res == 1:             policy = adapt (b2, White, b1, policy)         else:             policy = adapt (b2, Black, b1, policy)     t = look (board)     moves = board.legalMoves ()     best = moves [0]     bestValue = t [1] [0]     for i in range (1, len(moves)):         if (t [1] [i] > bestValue):             bestValue = t [1] [i]             best = moves [i]     return best 

PPAF

 Modify GRAVE to incorporate a policy and a bias. 

 Use the AMAF statistics of the root node of GRAVE 

to bias the playouts as in GNRPA. 

 Update the Adapt to take the bias into account. 

 Write the main function that calls 

GRAVEPolicyBias and updates the policy. 

Exercise

def GRAVEPolicyBias (board, played, tref, root, policy):     if (board.terminal ()):         return board.score ()     t = look (board)     if t != None:         tr = tref         if t [0] > 50:             tr = t         bestValue = -1000000.0         best = 0         moves = board.legalMoves ()         bestcode = board.code (moves [0])         for i in range (0, len (moves)):             val = 1000000.0             code = board.code (moves [i])             if tr [3] [code] > 0:                 beta = tr [3] [code] / (t [1] [i] + tr [3] [code] + 1e-5 * t [1] [i] * tr [3] [code])                 Q = 1                 if t [1] [i] > 0:                     Q = t [2] [i] / t [1] [i]                     if board.turn == Black: 

GRAVE with Policy and Bias

                AMAF = tr [4] [code] / tr [3] [code]                 if board.turn == Black:                     AMAF = 1 - AMAF                 val = (1.0 - beta) * Q + beta * AMAF             if val > bestValue:                 bestValue = val                 best = i                 bestcode = code         board.play (moves [best])         played.append (bestcode)         res = GRAVEPolicyBias (board, played, tr, root, policy)         t [0] += 1         t [1] [best] += 1         t [2] [best] += res         updateAMAF (t, played, res)         return res     else:         addAMAF (board)         return playoutBias (board, played, root, policy) 

GRAVE with Policy and Bias

### def playoutBias (state, played, root, policy):     while not state.terminal ():         l = state.legalMoves ()         z = 0         for i in range (len (l)):             code = board.code (l [i])             AMAF = 1             if root [3] [code] > 0:                 AMAF = root [4] [code] / root [3] [code]                 if board.turn == Black:                     AMAF = 1 – AMAF             if AMAF > 0:                 z = z + math.exp (policy.get (state.code (l [i])) + math.log (AMAF))         stop = random.random () * z 

Playout AMAF Policy

        move = 0         z = 0         while True:             code = board.code (l [move])             AMAF = 1             if root [3] [code] > 0:                 AMAF = root [4] [code] / root [3] [code]                 if board.turn == Black:                     AMAF = 1 - AMAF             if AMAF > 0:                 z = z + math.exp (policy.get (state.code (l [move])) + math.log(AMAF))             if z >= stop or move == len (l) – 1:                 break             move = move + 1         played.append (state.code(l [move]))         state.play (l [move])     return state.score () 

Playout AMAF Policy

def adaptBias (s, winner, state, policy, root):     polp = copy.deepcopy (policy)     alpha = 0.32     while not s.terminal ():         l = s.legalMoves ()         move = state.rollout [len (s.rollout)]         if s.turn == winner:             z = 0             for i in range (len (l)):                 code = s.code (l [i])                 AMAF = 1                 if root [3] [code] > 0:                     AMAF = root [4] [code] / root [3] [code]                     if board.turn == Black:                         AMAF = 1 – AMAF                 if AMAF > 0:                     z = z + math.exp (policy.get (code) + math.log(AMAF)) 

Adapt with a Bias

###             polp.put (s.code (move), polp.get (s.code (move)) + alpha)             for i in range (len (l)):                 code = s.code (l [i])                 AMAF = 1                 if root [3] [code] > 0:                     AMAF = root [4] [code] / root [3] [code]                     if board.turn == Black:                         AMAF = 1 – AMAF                 proba = 0                 if AMAF > 0:                     proba = math.exp (policy.get (code) + math.log(AMAF)) / z                 polp.put (code, polp.get (code) - alpha * proba)         s.play (move)     return polp 

Adapt with a Bias

def BestMoveGRAVEPolicyBias (board, n):     Table = {}     policy = Policy ()     addAMAF (board)     for i in range (n):         root = look (board)         b1 = copy.deepcopy (board)         res = GRAVEPolicyBias (b1, [], root, root, policy)         b2 = copy.deepcopy (board)         if res == 1:             policy = adaptBias (b2, White, b1, policy, root)         else:             policy = adaptBias (b2, Black, b1, policy, root)     root = look (board)     moves = board.legalMoves ()     best = moves [0]     bestValue = root [1] [0]     for i in range (1, len(moves)):         if (root [1] [i] > bestValue):             bestValue = root [1] [i]             best = moves [i]     return best 

GRAVE with Policy and Bias

Outline 

 Algorithm for solving games 

 GRAVE and PPAF 

 Monte Carlo move ordering 

 Experiments 

 Conclusion

Solving Games 

 Proof-Number Search (PN) 

 PN2 

 Alpha-Beta 

 Iterative Deepening Alpha-Beta 

 Retrograde Analysis

UCT

RAVE 

 A big improvement for Go, Hex and other games is Rapid Action Value Estimation (RAVE) [Gelly and Silver 2007]. 

 RAVE combines the mean of the playouts that start with the move and the mean of the playouts that contain the move (AMAF).

RAVE 

 Parameter βm for move m is : 

βm←pAMAFm /  (pAMAFm + pm + bias × pAMAFm× pm) 

 βm starts at 1 when no playouts and decreases as more playouts are played. 

 Selection of moves in the tree : argmaxm((1.0 − βm) × meanm + βm × AMAFm)

GRAVE 

 Generalized Rapid Action Value 

Estimation (GRAVE) is a simple modification of RAVE. 

 It consists in using the first ancestor node with more than n playouts to compute the RAVE values. 

 It is a big improvement over RAVE for Go, Atarigo, Knightthrough and Domineering [Cazenave 2015].

Playout Policy learning 

 Start with a uniform policy. 

 Use the policy for the playouts. 

 Adapt the policy for the winner of each playout.

Playout Policy learning 

 Each move is associated to a weight wi. 

 During a playout each move is played with a probability : 

exp (wi) / Sk exp (wk)

Playout Policy learning 

 Online learning : 

 For each move of the winner : 

wi = wi + 1 

 For each possible move of each state 

of the winner : wi = wi – exp (wi) / Sk exp (wk)

Monte Carlo Game Solver 

 Use the order of moves of GRAVE when the state is in the GRAVE tree. 

 Use the order of moves of Playout Policy Adaptation when the state is outside the GRAVE tree.

Conclusion 

For the games we solved, Misere Games are more difficult to solve 

## than normal games. 

In Misere Games the player waits and tries to force the opponent to 

## play a losing move. 

This makes the game longer and reduces the number of winning 

## sequences and winning moves. 

Monte Carlo Move Ordering improves much the speed of αβ with 

## transposition table compare to depth first αβ and Iterative Deepening αβ with transposition table but without Monte Carlo Move Ordering. 

## The experimental results show significant improvements for nine different games.

Conclusion    Monte Carlo Search is a simple algorithm that gives 

state of the art results for multiple problems: 

# – Games – Puzzles – Discovery of formulas – RNA Inverse Folding – Snake in the box – Pancake – Logistics – Multiple Sequence Alignement

##  Transformer une position de breakthrough 5x5 en trois matrices 5x5 de 0 et de 1 (Noir/Blanc/Vide). 

#  Faire deux réseaux convolutifs (blanc et noir) avec 76 sorties (75 

## coups possibles + évaluation) et ces trois matrices en entrée. 

##  Utiliser les réseaux dans PUCT pour politique et évaluation. 

##  Faire jouer à PUCT >100 parties contre lui même. 

##  Mémoriser pour chaque position un vecteur de 76 réels entre 0 et 1 (une 

## fréquence pour chaque code de coup entre 0 et 75, code = 3 *(5 * x + y) + 0, 1 ou 2) et un réel (1.0 si blanc a gagné, 0.0 sinon). 

#  Entraîner les deux réseaux convolutifs pour retrouver les fréquences et le résultat de la partie en sortie pour chaque position en entrée. 

##  Itérer. 

Projet Python