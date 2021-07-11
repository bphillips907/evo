import React from 'react';
import { Game } from '../models/game';
import { GameState } from "../models/game_state/game_state";
import { NewGameStateChange } from '../models/game_state/game_state_recipes/setup/newGameStateChange';
import { Player } from "../models/player";

// FIXME wip
const brad = new Player("Brad")
const mike = new Player("Mike")
const game = Game.newGame(brad, mike);

export interface GameContext {
    stateHistory: GameState[]
}

export const GAME_DEFAULT_VALUE = {
  stateHistory: [new GameState(game, new NewGameStateChange())]
};

export const gameContext = React.createContext<GameContext>(GAME_DEFAULT_VALUE)
