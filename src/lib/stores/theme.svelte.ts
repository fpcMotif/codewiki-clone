import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

class ThemeStore {
	current = $state<Theme>('light');

	constructor() {
		if (browser) {
			this.current = document.body.classList.contains('dark-theme')
				? 'dark'
				: 'light';
		}
	}

	get isDark() {
		return this.current === 'dark';
	}

	toggle = () => {
		const newTheme = this.current === 'dark' ? 'light' : 'dark';
		if (browser) {
			document.body.classList.toggle('dark-theme', newTheme === 'dark');
		}
		this.current = newTheme;
	};

	set = (theme: Theme) => {
		this.current = theme;
		if (browser) {
			document.body.classList.toggle('dark-theme', theme === 'dark');
		}
	};
}

export const themeStore = new ThemeStore();

