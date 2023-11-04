'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const isLight = theme === 'light';

  return (
    <Button variant='ghost' size='icon' onClick={() => setTheme(isLight ? 'dark' : 'light')}>
      <Icons.sun
        className={`h-5 w-5 transition-transform ${
          isLight ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
        }`}
        aria-hidden='true'
      />
      <Icons.moon
        className={`absolute h-5 w-5 transition-transform ${
          isLight ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
        }`}
        aria-hidden='true'
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
