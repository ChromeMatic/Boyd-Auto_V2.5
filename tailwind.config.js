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
                gray: colors.gray,
                green: colors.green,
                purple: colors.purple,
                black: colors.black,
                yellow: colors.yellow,
                darkMode: '#202124',
                innerDark: '#191919'
            }
        },
        plugins: [],
    }
}