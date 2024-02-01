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
        spacing: {
            inter: '1.2rem',
            intra: '0.5rem',
        },
        fontSize: {
            h1: '1.9rem',
            h2: '1.6rem',
            normal: '1rem',
        },
        borderRadius: {},
        fontFamily: {
            heading: ['Quicksand', 'sans-serif'],
            body: ['Source Code Pro', 'monospace'],
        },
        borderWidth: {},
    },
    plugins: [],
}
