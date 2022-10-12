import { Theme } from './theme'

export const Dark: Theme = {
    name: 'NovelAI Dark',
    fonts: {
        default: `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", \
            "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
        code: `"Source Code Pro", Menlo, Monaco, Consolas, "Courier New", monospace`,
        field: `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", \
            "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
        headings: `"Eczar"`,
        selectedHeadings: `Eczar`,
        selectedDefault: `Source Sans Pro`,
    },
    colors: {
        bg0: '#0E0F21',
        bg1: '#13152C',
        bg2: '#191B31',
        bg3: '#22253F',
        textHeadings: '#F5F3C2',
        textMain: '#FFFFFF',
        textHeadingsOptions: ['#F5F3C2', '#EC56A7', '#75CF67', '#9773FF'],
        textMainOptions: ['#FFFFFF', '#E7FFE9', '#FFF9C8', '#A5C9FF'],
        textDisabled: '#FFFFFFA0',
        textPlaceholder: '#FFFFFF77',
        warning: '#FF7878',
        textHighlight: 'rgba(255, 120, 120, 0.4)',
        textPrompt: '#F5F3C2',
        textUser: '#9CDCFF',
        textEdit: '#F4C7FF',
        textAI: '#FFFFFF',
    },
    breakpoints: {
        mobile: '1200px',
        desktop: '1600px',
    },
    transitions: {
        interactive: '0.08s ease-in-out',
    },
    global: '',
}
