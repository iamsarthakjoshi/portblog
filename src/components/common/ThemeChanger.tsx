import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const classes = {
  darkModeBtn:
    'z-10 absolute sticky top-1 right-0 border border-gray-500 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline',
  emojis: 'text-xl transform transition-all duration-30 hover:text-2xl',
};

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      className={classes.darkModeBtn}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <span className={classes.emojis}>🌚</span>
      ) : (
        <span className={classes.emojis}>🌞</span>
      )}
    </button>
  );
}
