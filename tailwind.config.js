/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            transparent: 'transparent',
            white: '#ffffff',
            background: '#FFFFEC',
            primary: '#584721',
            secondary: '#F1E4C3',
            accent: '#597E52',
        },
        fontFamily: {
            heading: ['Quicksand', 'sans-serif'],
            body: ['Source Code Pro', 'monospace'],
        },
        extend: {
            spacing: {
                inter: '1.2rem',
                intra: '0.5rem',
            },
        },
    },
    plugins: [],
}
