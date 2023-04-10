const customTailwindColors = {
    colors: {
        'primary-cta-color-main': '#009991',
        'primary-cta-color-hover': '#009991',
        'dropdown-background-color': '#009991',
        'main-background-color': '#009991',
        fortem1neutral: {
            100: '#FFFFFF',
            300: '#F2F4F8',
            400: '#E0E4EB',
            500: '#272C35',
            700: '#161D26',
            900: '#000504',
        },
        fortem1green: {
            100: '#e6fffa',
            200: '#daedcb',
            300: '#99ffeb',
            500: '#11ECC7',
            700: '#38BCA4',
            900: '#16837C',
            hov: '#046C66',
        },
        fortem1orange: {
            100: '#fff6e6',
            200: '#fff3d8',
            300: '#ffe5b3',
            500: '#ffcb66',
            700: '#ffb933',
            900: '#F9A912',
        },
        fortem1high: {
            green: '#11ECC7',
            orange: '#F9A912',
        },
        fortem1warn: {
            500: '#F15B5B',
            900: '#ff271a',
        },
        fortem1feed: {
            100: '#22C55E',
        },
        fortem1typo: {
            100: '#FFFFFF',
            300: '#D9D9D9',
            500: '#494949',
            900: '#000000',
        },
    },
    textColor: {
        'color-contrast': '#FFFFFF',
        'cta-contrast': '#009991',
        'secondary-color': '#009991',
    },
    boxShadow: {
        'lg-updated': '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 10px 15px -3px rgba(0, 0, 0, 0.12), 0px 4px 6px -2px rgba(0, 0, 0, 0.04)',
    },
    borderColor: {
        'divider-color-20': '1px solid #009991',
    },
};

module.exports = {
    // we need it for prod
    purge: ['./src/**/**/*.{js,jsx,ts,tsx}', './node_modules/@openware/react-opendax/**/*.js'],
    content: ['./src/**/*.{html,js,jsx,ts,tsx,svelte}'],
    // darkMode: false, // or 'media' or 'class'
    // important: true,
    theme: {
        extend: {
            ...customTailwindColors,
        },
    },
    variants: {},
    plugins: [],
};
