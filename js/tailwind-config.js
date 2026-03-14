tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#000000",
                "background-light": "#FAFAFA",
                "background-dark": "#000000",
                surface: "#F2F2F2",
                muted: "#999999",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                heading: ["Clash Display", "sans-serif"],
                body: ["Inter", "sans-serif"],
                mono: ["Space Mono", "monospace"],
            },
            borderRadius: {
                DEFAULT: "0px",
                lg: "0px",
                xl: "0px",
                full: "0px",
            },
            cursor: {
                crosshair: "crosshair",
            },
        },
    },
};
