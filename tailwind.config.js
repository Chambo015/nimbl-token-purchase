// eslint-disable-next-line @typescript-eslint/no-var-requires
const {fontFamily} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            screens: {
                "2xl": "1540px",
            },
            fontFamily: {
                batman: ["BatmanForever", ...fontFamily.sans],
                graphik: ["Graphik", ...fontFamily.sans],
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "20px",
                xl: 0,
            },
        },
    },
    plugins: [],
};
