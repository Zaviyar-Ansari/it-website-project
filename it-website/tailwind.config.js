/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6A54F4",
                primary1: "#D8D8D8",
                review1: "#FF0000",
                review2: "#00B974",
            }
        },
    },
    plugins: [],
}