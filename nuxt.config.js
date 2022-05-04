export default {
    target: "static",
    head: {
        title: 'SDA VIDEO',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/fav.png' },
        ],
        script: [

        ]
    },
    css: ['@/assets/css/main.scss'],
    plugins: [

    ],
    components: true,
    buildModules: [
        "@nuxtjs/prismic",
    ],
    loading: {
        color: 'white',
        height: '0px'
    },
    build: {},
    modules: [
        '@nuxtjs/axios',
        '@nuxt/image',

    ],
    prismic: {
        endpoint: "https://districtfive.prismic.io/api/v2",
    },
    image: {
        provider: "prismic",
        prismic: {},
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },
    },
}