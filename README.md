## Nuxt Layers HMR Bug

Steps to reproduce:

1. Clone repo
2. `pnpm i`
3. `pnpm dev`
4. Open `localhost:3000`
5. Open `AnalyticsGrid.vue`, and modify the file html.
6. HMR will not work
7. Change nuxt version to `3.17.7`
8. Repeat steps 2-5
9. HMR works
