# :hammer_and_wrench: NYC Bike Repair Station Map

At the height of the COVID-19 pandemic in NYC I was inspired to create a resource to facilitate access to free-to-use public bike repair stations scattered across the city, especially as many local bike stores and community organizations were forced to close their doors or dramatically restrict their services. At a time when just using public transportation felt unsafe, I wanted to help make biking more accessible and sustainable.

This project is a re-implementation of a previous low / no code **Crowdsourced Map of NYC Bike Repair Stations** project of mine, this time built as a full-fledged SPA with Astro + Vue.

As a portfolio project, I tried to use a wide range of tools, packages and concepts to demonstrate my familiarity&mdash;not necessarily as an endorsement of their suitability for this specific use case!

## This Project Uses...
- [**Astro**](https://astro.build/) as an incredibly intuitive static site generator while making use of Astro's concept of ['Component Islands'](https://docs.astro.build/en/concepts/islands/) to power client-side interactive components.

  
- [**Vue3**](https://vuejs.org/) for authoring UI components:
    - The new Vue Composition API for simple state & utility function sharing across components.
    - [VueUse](https://vueuse.org/)'s usePreferredDark composition utility to style the app's map in accordance to the user's preferred color mode.
    - [HeadlessUI](https://headlessui.com/)'s Modal component.
    - [Vue-Leaflet](https://github.com/vue-leaflet/vue-leaflet) for interactive mapping.
    - [TailwindCSS](https://tailwindcss.com/) as a CSS framework, including super-simple light/dark-mode support.
     
- **Netlify** for building and hosting.
  
- **Airtable** as a light-weight database and headless CMS
    - Airtable's native form features are leveraged to allow community-sourced submissions and updates.
    - Airtable automations are leveraged to trigger a Netlify build any time that records marked for publication are added or their underlying data changes via Webhook.
