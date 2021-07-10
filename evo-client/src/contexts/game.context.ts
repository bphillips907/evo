import React from 'react';
import { GameState } from "../models/game_state/game_state";
import { Player } from "../models/player";

export interface GameContext {
    players: Player[],
    stateHistory: GameState[]
}

export const GAME_DEFAULT_VALUE = {
  players: [],
  stateHistory: [] // TODO new game state setup factory
};

export const appContext = React.createContext<GameContext>(GAME_DEFAULT_VALUE)
