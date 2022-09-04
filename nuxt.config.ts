import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        css: [
          '~/assets/style/V-header.css',
          '~/assets/style/V-footer.css'
        ],
    },
    
    meta:{
		link: [
			{
				rel:"stylesheet",
				href:"https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css", 
			},
		],
    },

})
