import React from 'react'
import SantoPhoto from "../assets/SantoPhoto.jpg"
import SantoProgram from "../assets/SantoProgram.png"

const SantoriniPage = () => {
    return(
        <>
        <h1>The Santorini Board Game</h1>
        <h2>Introduction</h2>
        <p>If you love puzzles, board games, and some cleverly hidden maths, you'll love the board game Santorini, created by Dr. Gordon Hamilton. The game was initially released as a purely abstract game in 2004, but was re-released as an incredibly popular kickstarter over a decade later in a new, Greek mythology cartoon style. The game has a different dynamic depending on the number of players, from a 2 player head to head duel to teams appearing in a 4 player game.</p>
        <p>Further, the game can also be played in a variety of ways, the simplest being a purely logical and evenly matched duel, or with each player taking control of one of 45 mythological figures with unique powers to best their opponent. I have, along with a good friend, created house variants too, keeping the game continuously fresh.</p>
        <p>I think this game is great for a few reasons. The art style is great, the rules are simple to learn but the strategy is deep, the replayability is huge among the different god card match-ups, however my favourite thing about this game is the subtle maths and deep strategies hidden just under the surface.</p>
        <img className='santoriniPicture' src={SantoPhoto} alt="The Santorini board game" title="A pretty clear win for white in this game"/>
        <h2>Rules</h2>
        <p>The game takes place on a 5x5 square grid. 
        Each player controls 2 builders, who each take a square and cannot share a square with any other builder. 
        The winner of the game is the first player to place one of their builders on a tower 3 blocks tall. 
        One player places both builders, then the following player places their two workers after. 
        This is the end of setup, and the rest of the game consists of alternating turns by the players. 
        On a players turn, they must perform two actions, first move a builder and then build up on an adjacent square with the moved builder. 
        For the move, the builder must move to an adjacent square, up to 8 options. 
        They can climb up to one level in this move, or drop down however many required.
        In the case that both a players builders are unable to move, i.e. they are both trapped, that player loses the game.
        Once moved, the builder must build in an adjacent square, and not beneath them. 
        A builder is able to build at any height.
        Finally, if a builder builds on a level 3, this is called "doming" the tower, and no builder is able to further step on or build on top of this.
        First to the top of a tower wins!
        </p>
        <h2>God Cards</h2>
        <p>While I prefer the base game for the pure logic challenge against a friend, a big part of the game is the unique god card the player can receive before beginning. 
            For example, playing as Atlas allows the player to build a blocking dome at ANY level, not just 3 towers. 
            Artemis, the goddess of hunting, is able to move twice before building. 
            There's some really in depth cards too, for example play as Medusa to turn lower adjacent enemy builders into stone blocks, or as Aphrodite enthrall enemy builders and on their turn restrict them from moving away from your builders. 
            The expansion has even more fun cards, including Tartarus, who secretly selects a square before the game for his pit. This can be built on, but if any player steps on this square they instantly lose the game. 
            Different match-ups work better than others, with some incompatible or heavily favoured to one player.</p>
        <h2>Strategies</h2>
        <h4>Get on a two</h4>
        <p>It might sound obvious, but one of the best forcing moves is being on a two tower. 
            From here, you have a constant threat with one builder who can win in a single move if the board is set up right.</p>
        <h4>Don't rush up</h4>
        <p>It might be tempting to alternate between two squares, do a build, then move on and build, and alternate up to a 3. 
            While certainly the fastest way up, this is easy to sabotage and you can easily get stuck and be forced to move down. 
            Instead, consider building up a few squares, and have a steadier and more difficult to stop progression to the top.</p>
        <h4>Your other builder is your friend</h4>
        <p>Domes are effective blockers, but take time and stay totally stationary. 
            Having both builders in a row or column adjacent to each other make an impenetrable wall the other players builders have to work their way around. 
            Use the one builder per square rule to force your opponents moves.</p>
        <h4>Force your opponent down</h4>
        <p>Sometimes, making a threat that is easily cancelled can work in your favor. 
            Like a check in chess, this restricts the other players progression and can even result in them dropping down in height with a builder to prevent your win. 
            Bringing them down is the next best thing to climbing up yourself!</p>
        <h2>Program Project</h2>
        <img className='santoriniPicture' src={SantoProgram} alt="A screenshot of my Santorini pygame program" title='the same layout as above, as played in my pygame project'/>
        <p>While now a front end developer with JavaScript as my primary language, I learnt to code in Python. 
            One of the projects I was really excited to create was a basic, two player Santorini in pygame. 
            You can see above the program in action. This was a great small program to learn pygame and solidify my initial python understanding. 
            In the future, I'd love to improve this, perhaps bring it over to JavaScript on this website, add in basic god cards with the cards power, or even explore non local multiplayer!
            If you're interested in seeing the actual code, you can check it out on my <a href="https://github.com/Jack-Burge55/Santorini" target="_blank" className='textLink'> repository on github</a>. 
            And if you want to contribute, please  be my guest!
        </p>
        <h2>SantorinAI</h2>
        <p>One future project I'd really love to do is learn how to and then create a Santorini engine, an AI with different playstyles to play against. 
            For this, I'd have to focus on the simple 2 player no gods variant, but I think there'd be some fascinating discoveries. 
            To the best of my knowledge this game isn't solved, so it would be great to see how the AI would act, and if any new strategies were discovered. Watch this space!</p>
        </>
    )
}
export default SantoriniPage;