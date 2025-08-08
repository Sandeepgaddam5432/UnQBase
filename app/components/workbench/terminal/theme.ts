import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--unqbase-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--unqbase-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--unqbase-elements-terminal-textColor'),
    background: cssVar('--unqbase-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--unqbase-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--unqbase-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--unqbase-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--unqbase-elements-terminal-color-black'),
    red: cssVar('--unqbase-elements-terminal-color-red'),
    green: cssVar('--unqbase-elements-terminal-color-green'),
    yellow: cssVar('--unqbase-elements-terminal-color-yellow'),
    blue: cssVar('--unqbase-elements-terminal-color-blue'),
    magenta: cssVar('--unqbase-elements-terminal-color-magenta'),
    cyan: cssVar('--unqbase-elements-terminal-color-cyan'),
    white: cssVar('--unqbase-elements-terminal-color-white'),
    brightBlack: cssVar('--unqbase-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--unqbase-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--unqbase-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--unqbase-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--unqbase-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--unqbase-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--unqbase-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--unqbase-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
