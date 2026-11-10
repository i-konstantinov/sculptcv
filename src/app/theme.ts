import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// Brand colors
const PRIMARY = '#F4F5F7'; // text in dark mode, background in light mode
const SECONDARY = '#121417'; // text in light mode, background in dark mode
const ACCENT = '#3B5BFD'; // same in both modes

export const SculptPreset = definePreset(Aura, {
  semantic: {
    // PrimeNG's "primary" is the interactive/accent color (buttons, links, focus).
    primary: {
      50: '#eef2ff',
      100: '#dfe6ff',
      200: '#c3cfff',
      300: '#9aaeff',
      400: '#6e86ff',
      500: ACCENT,
      600: '#2943e0',
      700: '#2236b5',
      800: '#1f3091',
      900: '#1e2e74',
      950: '#141c45',
    },
    colorScheme: {
      light: {
        surface: { 0: PRIMARY },
        primary: {
          color: ACCENT,
          contrastColor: PRIMARY,
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        text: { color: SECONDARY, hoverColor: SECONDARY },
      },
      dark: {
        surface: { 0: PRIMARY, 900: SECONDARY },
        primary: {
          color: ACCENT,
          contrastColor: PRIMARY,
          hoverColor: '{primary.400}',
          activeColor: '{primary.300}',
        },
        text: { color: PRIMARY, hoverColor: PRIMARY },
      },
    },
  },
});
