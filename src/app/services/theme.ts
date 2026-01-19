import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    theme = signal<Theme>('system');

    constructor() {
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            this.theme.set(savedTheme);
        }

        // Apply theme changes
        effect(() => {
            const currentTheme = this.theme();
            localStorage.setItem('theme', currentTheme);
            this.applyTheme(currentTheme);
        });
    }

    setTheme(newTheme: Theme) {
        this.theme.set(newTheme);
    }

    private applyTheme(theme: Theme) {
        const root = window.document.documentElement;
        const isDark = theme === 'dark' ||
            (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }
}
