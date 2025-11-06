/** @type {import('tailwindcss').Config} */
export default {
    // IMPORTANTE: O content DEVE APONTAR APENAS PARA AS PASTAS QUE CONTÊM SEU CÓDIGO FONTE.
    // O padrão './**/*.{...}' escaneava a pasta node_modules, causando a lentidão e travamento.
    content: [
        // Se sua estrutura é src/app/
        "./src/app/**/*.{js,ts,jsx,tsx}",

        // Se você tem uma pasta 'components' na raiz de 'src' ou 'app'
        "./src/components/**/*.{js,ts,jsx,tsx}",

        // Se você tiver a pasta 'pages' em um projeto antigo ou usando uma estrutura mista
        "./src/pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};