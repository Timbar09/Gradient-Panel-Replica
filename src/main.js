import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="max-w-md w-full">
    <div class="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50">
      <div class="text-white">
        <h2 class="text-3xl font-bold mb-4">Challenge Card</h2>
        <p class="text-lg mb-6 opacity-90">
          This is a simple card component built with Vite and Tailwind CSS featuring a beautiful gradient background.
        </p>
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold uppercase tracking-wide">Frontend Challenge</span>
          <button class="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 hover:shadow-lg">
            View More
          </button>
        </div>
      </div>
    </div>
  </div>
`
