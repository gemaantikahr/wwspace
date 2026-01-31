/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    amber: '#f3a82d',
                    charcoal: '#18181b', // zinc-900
                    offwhite: '#f8fafc', // slate-50
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                '2xl': '1rem',
            }
        },
    },
    plugins: [],
}
