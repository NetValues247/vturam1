
export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public : {
            apiLocalBaseUrl : "https://akfemtopup.com.ng/vtupal/apis",
            apiProductionBaseUrl : "https://akfemtopup.com.ng/vtupal/apis",
        }
    },
    nitro : {
      preset : "node-server"
    },
    css: [
        '@/assets/css/main.css',
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    modules: [
      [
        '@pinia/nuxt',
        {
          autoImports: [
            'defineStore',
            ['defineStore', 'definePiniaStore'],
          ],
        },
      ]
    ],
    
    imports: {
      dirs: [
        "composables",
        'composables/**',
        "stores/**"
      ]
    }

})
