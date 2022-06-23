import { defineStore } from 'pinia';


export const ThemeStore = defineStore({
    id: 'theme',
    state: () => ({
        isDark: false
    }),
    actions: {
        changeTheme() {
            this.isDark = !this.isDark;
        }
    }
})