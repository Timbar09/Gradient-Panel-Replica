import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
    <div class="h-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
    <div class="px-6 py-4">
      <h2 class="font-bold text-2xl mb-2 text-gray-800">Beautiful Card</h2>
      <p class="text-gray-700 text-base">
        This is a simple card built with Vite and Tailwind CSS. It features a beautiful gradient header and clean styling.
      </p>
    </div>
    <div class="px-6 pt-4 pb-6">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
        Learn More
      </button>
    </div>
  </div>
`
