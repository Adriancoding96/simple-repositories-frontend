/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
    './node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    screens: {
    
    },
    colors: {
   
      },
    },
    extend: {
      spacing: {
  
      },
      borderRadius: {
 
      },
    },
  plugins: [
    require('flowbite/plugin')
  ],
}


