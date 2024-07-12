import React from "react";
import SantoPhoto from "../assets/SantoPhoto.jpg";
import SantoProgram from "../assets/SantoProgram.png";

const SantoriniPage = () => {
  return (
    <>
      <h1 className="title">The Santorini Board Game</h1>
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
      <h2 className="title is-4 block">Program Project</h2>
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
        and solidify my initial python understanding. In the future, I'd love to
        improve this, perhaps bring it over to JavaScript on this website, add
        in basic god cards with the cards power, or even explore non local
        multiplayer! If you're interested in seeing the actual code, you can
        check it out on my{" "}
        <a
          href="https://github.com/Jack-Burge55/Santorini"
          target="_blank"
          rel="noreferrer"
          className="textLink"
        >
          {" "}
          repository on github
        </a>
        . And if you want to contribute, please be my guest!
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
        repeat a lot of the logic. My third and currently best engine was the
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
      <p className="block">
        I'd like to come back to this in the future and add more to this
        project, including more engines, a choice for which engine to play and a
        UI for a visitor to easily play against the engine on a web page. If
        you're interested and would like to see the code I've mentioned above,
        please check out the repository for this project{" "}
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
