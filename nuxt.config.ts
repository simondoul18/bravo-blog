// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app : {
        head: {
            "title": "OnDaQ Blog",
            "meta": [
                {"name": "viewport","content": "width=device-width, initial-scale=1, shrink-to-fit=no"},
                {"charset": "utf-8"}
            ],
            "link": [
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Muli:300,400,700|Playfair+Display:400,700,900"},
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"},
                {rel: "stylesheet", href: "/fonts/icomoon/style.css"},
                {rel: "stylesheet", href: "/css/bootstrap.min.css"},
                {rel: "stylesheet", href: "/css/magnific-popup.css"},
                {rel: "stylesheet", href: "/css/jquery-ui.css"},
                {rel: "stylesheet", href: "/css/owl.carousel.min.css"},
                {rel: "stylesheet", href: "/css/owl.theme.default.min.css"},
                {rel: "stylesheet", href: "/css/bootstrap-datepicker.css"},
                {rel: "stylesheet", href: "/fonts/flaticon/font/flaticon.css"},
                {rel: "stylesheet", href: "/css/aos.css"},
                {rel: "stylesheet", href: "/css/style.css"}
            ],
            "style": [],
            "script": [
                {src: "/js/jquery-3.3.1.min.js"},
                {src: "/js/jquery-migrate-3.0.1.min.js", body: true},
                {src: "/js/jquery-ui.js", body: true},
                {src: "/js/popper.min.js", body: true},
                {src: "/js/bootstrap.min.js", body: true},
                {src: "/js/owl.carousel.min.js", body: true},
                {src: "/js/jquery.stellar.min.js", body: true},
                {src: "/js/jquery.countdown.min.js", body: true},
                {src: "/js/jquery.magnific-popup.min.js", body: true},
                {src: "/js/bootstrap-datepicker.min.js", body: true},
                {src: "/js/aos.js", body: true},
                {src: "/js/main.js", body: true}
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                { children: 'JavaScript is required for OnDaQ.' }
            ]
        }
    },
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL,
            baseURL: 'https://bravo.test/api/',
        }
    },
    modules: [
        '@pinia/nuxt',
    ],
    // buildDir:"../../../public/assets/blog",
})
