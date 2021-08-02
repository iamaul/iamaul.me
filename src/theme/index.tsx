import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    fonts: {
        body: 'Inter, system-ui, sans-serif',
        heading: 'Work Sans, system-ui, sans-serif',
    },
    // @ToDo: colors
    shadows: {
        largeSoft: 'rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;', // grey
    },
    styles: {
        global: {
            'html, #__next': {
                height: '100%',
            },
            '#__next': {
                display: 'flex',
                flexDirection: 'column',
            },
            '.body': {
                overflowY: 'scroll',
            },
            html: {
                scrollBehavior: 'smooth',
            },
            '#nprogress': {
                pointerEvents: 'none',
            },
            '#nprogress .bar': {
                background: 'blue.200',
                position: 'fixed',
                zIndex: '1031',
                top: 0,
                left: 0,
                width: '100%',
                height: '2px',
            },
        },
    },
});