import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	extends: ["./layers/analytics"],
	/** Project Meta */
	telemetry: false,
	ssr: false,
	future: {
		compatibilityVersion: 4,
	},
	compatibilityDate: "2024-07-11",
	vite: {
		plugins: [tailwindcss()],
	},
	css: ["~/assets/css/main.css"],
	devtools: {
		enabled: true,
	},
	experimental: {
		typedPages: true,
	},
});
