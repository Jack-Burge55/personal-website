import React from "react";
import SantoPhoto from "../assets/SantoPhoto.jpg";
import SantoProgram from "../assets/SantoProgram.png";
import minimax from "../assets/minimax.png";

const SantoriniPage = () => {
  return (
    <>
      <h1 className="title">The Santorini Story</h1>
      <h2 className="title is-4">Introduction</h2>
      <p className="block">
        If you love puzzles, board games, and some cleverly hidden maths, you'll
        love the board game Santorini, created by Dr. Gordon Hamilton. The game
        was initially released as a purely abstract game in 2004, but was
        re-released as an incredibly popular kickstarter over a decade later in
        a new, Greek mythology cartoon style. The game has a different dynamic
        depending on the number of players, from a 2 player head to head duel to
        teams appearing in a 4 player game.
      </p>
      <p className="block">
        Further, the game can also be played in a variety of ways, the simplest
        being a purely logical and evenly matched duel, or with each player
        taking control of one of 45 mythological figures with unique powers to
        best their opponent. I have, along with a good friend, created house
        variants too, keeping the game continuously fresh.
      </p>
      <p className="block">
        I think this game is great for a few reasons. The art style is great,
        the rules are simple to learn but the strategy is deep, the
        replayability is huge among the different god card match-ups, however my
        favourite thing about this game is the subtle maths and deep strategies
        hidden just under the surface.
      </p>
      <img
        className="photo block"
        src={SantoPhoto}
        alt="The Santorini board game"
        title="A pretty clear win for white in this game"
      />
      <h2 className="title is-4">Rules</h2>
      <p className="block">
        The game takes place on a 5x5 square grid. Each player controls 2
        builders, who each take a square and cannot share a square with any
        other builder. The winner of the game is the first player to place one
        of their builders on a tower 3 blocks tall. One player places both
        builders, then the following player places their two workers after. This
        is the end of setup, and the rest of the game consists of alternating
        turns by the players. On a players turn, they must perform two actions,
        first move a builder and then build up on an adjacent square with the
        moved builder. For the move, the builder must move to an adjacent
        square, up to 8 options. They can climb up to one level in this move, or
        drop down however many required. In the case that both a players
        builders are unable to move, i.e. they are both trapped, that player
        loses the game. Once moved, the builder must build in an adjacent
        square, and not beneath them. A builder is able to build at any height.
        Finally, if a builder builds on a level 3, this is called "doming" the
        tower, and no builder is able to further step on or build on top of
        this. First to the top of a tower wins!
      </p>
      <h2 className="title is-4">God Cards</h2>
      <p className="block">
        While I prefer the base game for the pure logic challenge against a
        friend, a big part of the game is the unique god card the player can
        receive before beginning. For example, playing as Atlas allows the
        player to build a blocking dome at ANY level, not just 3 towers.
        Artemis, the goddess of hunting, is able to move twice before building.
        There's some really in depth cards too, for example play as Medusa to
        turn lower adjacent enemy builders into stone blocks, or as Aphrodite
        enthrall enemy builders and on their turn restrict them from moving away
        from your builders. The expansion has even more fun cards, including
        Tartarus, who secretly selects a square before the game for his pit.
        This can be built on, but if any player steps on this square they
        instantly lose the game. Different match-ups work better than others,
        with some incompatible or heavily favoured to one player.
      </p>
      <h2 className="title is-4">Strategies</h2>
      <h4 className="title is-6">Get on a two</h4>
      <p className="block">
        It might sound obvious, but one of the best forcing moves is being on a
        two tower. From here, you have a constant threat with one builder who
        can win in a single move if the board is set up right.
      </p>
      <h4 className="title is-6 block">Don't rush up</h4>
      <p className="block">
        It might be tempting to alternate between two squares, do a build, then
        move on and build, and alternate up to a 3. While certainly the fastest
        way up, this is easy to sabotage and you can easily get stuck and be
        forced to move down. Instead, consider building up a few squares, and
        have a steadier and more difficult to stop progression to the top.
      </p>
      <h4 className="title is-6 block">Your other builder is your friend</h4>
      <p className="block">
        Domes are effective blockers, but take time and stay totally stationary.
        Having both builders in a row or column adjacent to each other make an
        impenetrable wall the other players builders have to work their way
        around. Use the one builder per square rule to force your opponents
        moves.
      </p>
      <h4 className="title is-6 block">Force your opponent down</h4>
      <p className="block">
        Sometimes, making a threat that is easily cancelled can work in your
        favor. Like a check in chess, this restricts the other players
        progression and can even result in them dropping down in height with a
        builder to prevent your win. Bringing them down is the next best thing
        to climbing up yourself!
      </p>
      <h2 className="title is-4 block">The First Project in Pygame</h2>
      <img
        className="photo block"
        src={SantoProgram}
        alt="A screenshot of my Santorini pygame program"
        title="the same layout as above, as played in my pygame project"
      />
      <p className="block">
        While now a front end developer with JavaScript as my primary language,
        I learnt to code in Python. One of the projects I was really excited to
        create was a basic, two player Santorini in pygame. You can see above
        the program in action. This was a great small program to learn pygame
        and solidify my initial python understanding.
      </p>
      <h2 className="title is-4 block">SantorinAI</h2>
      <p className="block">
        More recently, I started work on creating a playable Santorini AI engine
        with the target of being a better player than I am. In total, I made 3
        different engines for the game. The first was a totally random engine.
        On the computers turn, it would select a random builder it controls with
        at least one available move, then make a random possible move and
        finally make a random build. When pitting this engine against itself,
        games lasted a long time and frequently ended in a win for a side due to
        the other side losing both builders when getting trapped.
      </p>
      <p className="block">
        The second engine I made was very similar to the first, with a single
        vital improvement. I named this engine the greedy height engine, because
        on its turn it would consider all possible moves and pick one at random
        that went to the greatest height possible between the both builders.
        This means that if a builder could move up it would take this move, else
        it would cut losses by moving a builder across or down as few blocks as
        possible. The subsequent build was still random, similar to the random
        engine. This engine is clearly better than the random move engine in
        most cases, and in a competition of a total of 1000 games the greedy
        height engine beat the random engine 994 out of 1000 games!
      </p>
      <p className="block">
        At this point, I felt confident in the logic for building engines, and
        wanted to make a genuinely good player. Also by now I had created
        multiple helper functions in a utility folder, so I wasn't having to
        repeat a lot of the logic. My third and currently best engine is the
        minimax engine. This engine contains the functionality to check a
        certain boards layout and assign it a score from the perspective of a
        player, where the greater the score, the stronger the players position.
        I made this evaluator based off a few different considerations of both
        players (positive for players own builders and negative for opponents
        pieces). These were: Builder heights, adjacent blocks one height higher
        to each builder, adjacent blocks same height as each builder and finally
        whether a builder has won the game by standing on a three height tower.
        From this, I followed a minimax algorithm looking a total of three turns
        ahead (players, opponents, players) and picked the move which gave the
        greatest possible minimum evaluation. I also improved the efficiency of
        the minimax algorithm by including alpha-beta pruning, which ignores
        further computation of possible moves that we can be sure don't matter
        to the eventual choice of moves. I was delighted when this engine beat
        the greedy height engine 999 games out of 1000, as well as beating my
        friend in person.
      </p>
      <img
        className="block"
        src={minimax}
        alt="A screenshot of the minimax code"
        title="The mighty minimax"
      />
      <h2 className="title is-4 block">Implementation on my website</h2>
      <p className="block">
        I finally managed to build a UI for the game in React and put this on my
        page. This now has the three engines implemented and provides a choice
        to the user for their builder colour and which engine they would like to
        play against. The primary challenge here was implementing the React UI
        interface, as most of the actual game logic has already been previously
        written in my previous projects on Santorini.
      </p>
      <h2 className="title is-4 block">Small update</h2>
      <p className="block">
        After having a few attempts against the minimax engine, I noticed it
        would occasionally make some unusual choices, like being a single move
        away from winning but not taking it. I realised this must be from the
        weighting values I had given the engine and that these must be
        sub-optimal for assessing board state and winning the game less often
        than it could. So, I adjusted the code slightly to make the minimax
        engine play against a variant of itself, with a random variation to the
        weightings of +-25% to each of the four values. I also pitted it against
        itself in a best of 3 format, to try to make sure that the best engine
        won. Of course, as the weightings were adjusted randomly this wouldn't
        increase performance straight away, so I had to play multiple rounds of
        best of threes and adjust the weightings to match those of the winners
        each round. Due to the time it takes for an entire game between two
        minimax engines to run, approximately 15-20 seconds per game, this was
        fairly time consuming. However, after over 60 rounds of best of three
        competitions I saw a clear change in weightings. The weighting changes
        were as followed:
      </p>
      <ul className="block">
        <li>Winning the game: 2000 → 3220</li>
        <li>Importance of player height: 500 → 947</li>
        <li>Opportunites to move up: 75 → 28</li>
        <li>Opportunities to move: 5 → 3</li>
      </ul>
      <p className="block">
        These might seem like small adjustments, and they are, however it's
        interesting to see what it is worth considering. Obviously winning
        didn't have the weighting it deserved, I suspect it previously put off
        winning because it valued both builders higher to be more important than
        actually winning the game. The current player height has also doubled in
        importance. This appears to make the engine more aggressive and really
        care about stopping the opponent from getting higher. Finally, the other
        two considerations seem to pale in importance in comparison, but they
        are still good to have so I'll keep them in for now. The question now
        is: Is this new weighted minimax actually any better than the original?
        And the answer is, so far, it seems so! After 40 rounds of best of
        threes between the old and new weightings, the new weightings won 33/40
        games! These new weightings will now be used on the website instead, so
        if you're reading this, you'll be able to try yourself. I've had a go,
        and it definitely feels more aggressive and covers your spaces a lot
        more. This also brings up the possibility of having a more continuous difficulty rating. By changing the weightings of different aspects of the board, we could artifically adjust the difficulty to allow a more fluid scale of engine challenges.
      </p>
      <p className="block">
        Another quick note... While writing this, I was curious to see if there
        is no reason for the aim of winning to not, of course, be much more
        important to the engine. I 10x the weighting of winning and it then beat
        the updated weightings 16/20 times... In retrospect it seems obvious but
        I think I was worried in the pursuit of winning directly it might be
        greedy and a worse player. Apparently not! So, I've updated the
        weightings further to now be the current weightings of:
      </p>
      <ul className="block">
        <li>Winning the game: 13220</li>
        <li>Importance of player height: 947</li>
        <li>Opportunites to move up: 28</li>
        <li>Opportunities to move: 3</li>
      </ul>
      <h2 className="title is-4 block">Next Steps</h2>
      <p className="block">
        Now I have integrated the engines onto this website, the next step is to
        create even more engines that play better than the good but imperfect
        minimax engine. Once any further engine has been created, it will be
        easy to update the page with the new engine after bringing over the
        code.
      </p>
      <p className="block">
        Another goal is to implement the basic god cards into the game, both in
        the UI for the player and also for the engine. Due to the range of
        powers available to even the basic gods (dome at any level, move twice
        before building...) this is a substantial change to the logic and would
        take some time!
      </p>
      <p className="block">
        To see the code to create the engines, you can check my public
        repository{" "}
        <a
          href="https://github.com/Jack-Burge55/santorini-engine"
          target="_blank"
          rel="noreferrer"
          className="textLink"
        >
          here!
        </a>
      </p>
    </>
  );
};
export default SantoriniPage;
