/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        "./src/**/*.vue"
    ],
    theme: {
        extend: {
            fontFamily: {
                FT: " 'Anek Malayalam', sans-serif "
            },
            colors: {
                white: colors.white,
                green: colors.green,
                red: colors.red,
                blue: colors.blue,
                purple: colors.purple,
                black: colors.black,
                yellow: colors.yellow,
                darkMode: '#202124',
                innerDark: '#191919',
                lightMode: '#D5CEFF',
                Bpurple: '#441760'
            }
        },
        screens: {
            'xs': '375px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        plugins: [],
    }
}