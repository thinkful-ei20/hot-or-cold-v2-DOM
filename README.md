# Challenge: Hot or Cold App

## Table of Contents

- [Notes on New Version](#notes-on-new-version)
- [How to Use](#how-to-use)
- [Requirements](#requirements)

## Notes on New Version

The new version of Hot or Cold:

* `Hot or Cold` now incorporates redux for state management.

## How to Use

In the Hot or Cold guessing game, the computer randomly selects a number between 1 and 100, and the player then tries to guess the number. The player gets feedback for each guess – "hot" if their guess was close, and "cold" if their guess was far. When the user guesses the secret number, the app lets them know, and they'll have the option to start a new game.

## Requirements

* Create a new local React project using Create React App.
* Begin by breaking the UI into separate sections, and creating static, stateless components for each piece.
  * You should be able to see a complete static version of your user interface before working on the interactivity.
* Add state to your components where necessary to store information about the current progress through the game.
  * You might want to think about storing some or all of the following:
    * The current number which the user is trying to guess.
    * The user's most recent guess.
    * A history of the user's guesses.
    * The feedback currently being displayed to the user.
    * The different options for feedback that the user can be given.
* Add interactivity so your components respond to the user making a guess, and update the state accordingly.