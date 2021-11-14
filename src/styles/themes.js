
export const light = {
    background: '#EBF4F8',
    titles: '#000000',
    text: '#000000',
    accentText: '#FFFFFF',
    accent: '#16c426',
    softAccent: '#48c558',
}

export const dark = {
    background: '#1C2025',
    titles: '#f2f2f2',
    text: '#f2f2f2',
    accentText: '#000000',
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