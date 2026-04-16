tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            colors: {
                earth: {
                    50: '#fff7f2',
                    100: '#ffede0',
                    200: '#ffd6ba',
                    300: '#f9a672',
                    400: '#e87d3a',
                    500: '#cb6015', // Naranja vibrante
                    600: '#b04700', // Óxido
                    700: '#8c3900',
                    800: '#6b2b00',
                    900: '#4a1e00',
                },
                sand: {
                    100: '#f4f5f7',
                    200: '#e1e3e6',
                    300: '#53565a', // Gris base
                    800: '#003057', // Azul naval profundo
                }
            }
        }
    }
}
