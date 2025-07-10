// App.tsx ou main.tsx
import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { theme } from '../theme';
import type { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProviderSC theme={theme}>
            {children}
        </ThemeProviderSC>
    );
}