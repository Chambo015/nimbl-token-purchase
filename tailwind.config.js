// eslint-disable-next-line @typescript-eslint/no-var-requires
const {fontFamily} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            fontFamily: {
                batman: ["BatmanForever", ...fontFamily.sans],
                graphik: ["Graphik", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
