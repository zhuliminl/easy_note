import { create } from 'zustand';

import {
  Colors_Interface,
  Sizes_Interface,
  BorderRadius_Interface,
  CardShadows_Interface,
  FontSize_Interface,
  FontColors_Interface,
  Colors,
  ColorsDark,
  Sizes,
  BorderRadius,
  CardShadows,
  FontSize,
  FontColors,
  FontColorsDark,
} from '~/theme';

export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

interface ThemeState {
  themeMode: ThemeEnum;
  theme: {
    Colors: Colors_Interface;
    Sizes: Sizes_Interface;
    BorderRadius: BorderRadius_Interface;
    CardShadows: CardShadows_Interface;
    FontSize: FontSize_Interface;
    FontColors: FontColors_Interface;
  };
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  themeMode: ThemeEnum.LIGHT,
  theme: {
    Colors,
    Sizes,
    BorderRadius,
    CardShadows,
    FontSize,
    FontColors,
  },
  toggleTheme: () => {
    set((state) => {
      if (state.themeMode === ThemeEnum.DARK) {
        return {
          themeMode: ThemeEnum.LIGHT,
        };
      }
      if (state.themeMode === ThemeEnum.LIGHT) {
        return {
          themeMode: ThemeEnum.DARK,
        };
      }
      return {
        themeMode: ThemeEnum.LIGHT,
      };
    });
  },
}));

export const useToggleTheme = () => useThemeStore().toggleTheme;
export const useThemeMode = () => useThemeStore().themeMode;

export const useTheme = () => {
  const theme = useThemeStore().theme;
  const themeMode = useThemeMode();
  if (themeMode === ThemeEnum.DARK) {
    return {
      ...theme,
      Colors: ColorsDark,
      FontColors: FontColorsDark,
    };
  }
  return theme;
};
