# Community-Sourced NYC Bike Repair Station Map

This project is a revamp of a previous endeavor to create a community-sourced map of bike repair stations in NYC. The goal was to apply and showcase my evolving web development skills, particularly within the Vue ecosystem.

## 🛠 Technologies Used
- **Static Site Generator:** Astro
- **UI Framework:** Vue 3
- **CSS Framework:** TailwindCSS
- **Hosting:** Netlify
- **Database & CMS:** Airtable
- **Mapping Library:** Vue-Leaflet

## 🚀 Features
- **Astro:** Utilized for its intuitive static site generation, leveraging 'Component Islands' for client-side interactivity.
- **Vue 3:** 
  - Composition API for state and utility function sharing.
  - VueUse's `usePreferredDark` utility for light/dark mode styling. (I also had a chance to have [my first PR on an open source project](https://github.com/vueuse/vueuse/pull/2236) merged!)
  - HeadlessUI's Modal component for dialog handling.
  - Vue-Leaflet for interactive mapping.
- **TailwindCSS:** Enabled rapid styling and design iteration.
- **Netlify:** Provided seamless build and hosting solutions.
- **Airtable:** 
  - Served as a lightweight database and headless CMS.
  - Native form features for community-sourced submissions and updates.
  - Automations to trigger Netlify builds on data changes via Webhook.

## 💡 Learning Moments
- **Vue 3 Composition API:** This project offered me my first opportunity to transition from the earlier Options API to the Composition API, allowing me to simplify state management with composables.
- **TailwindCSS:** I also used the TailwindCSS utility library for the first-time, and I really appreciated the balance between enabling more rapid development and maintaining design freedom.
