export const light = {
    dark: false,
    background: '#EBF4F8',
    titles: '#000000',
    text: '#000000',
    textAccent: '#FFFFFF',
    accent: '#16c426',
    softAccent: '#48c558',
}

export const dark = {
    dark: true,
    background: '#1C2025',
    titles: '#f2f2f2',
    text: '#f2f2f2',
    textAccent: '#1C2025',
    accent: '#16c426',
    softAccent: '#48c558',
}


const themes = {
    light,
    dark,
}

export default function getTheme(theme) {
    return themes[theme]
}