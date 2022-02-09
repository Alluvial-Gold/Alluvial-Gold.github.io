export enum COLOURS {
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  BLUE = "blue",
  PURPLE = "purple"
}

export const ICON = '🦎';

export const EMOJIS = {
  [COLOURS.RED]: '🦎',
  [COLOURS.ORANGE]: '🐢',
  [COLOURS.YELLOW]: '🦕',
  [COLOURS.GREEN]: '🦖',
  [COLOURS.BLUE]: '🐍',
  [COLOURS.PURPLE]: '🐊',
}

export interface MastermindSettings {
  isColourblindMode: boolean;
}