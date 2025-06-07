<template>
  <footer class="bg-gray-900 text-white">
    <div class="section-padding py-16">
      <div class="container-max">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <HeartIcon class="h-6 w-6 text-white" />
              </div>
              <span class="text-xl font-bold">WellnessConnect</span>
            </div>
            <p class="text-gray-300 max-w-md mb-6">
              Connecting you with certified wellness professionals to help you achieve your health and wellness goals. 
              Find the perfect yoga instructor, wellness coach, or nutritionist near you.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="sr-only">Instagram</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988c6.62 0 11.987-5.367 11.987-11.988C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.323 17.49c.875.807 2.026 1.297 3.323 1.297h7.104c1.297 0 2.448-.49 3.323-1.297l-1.803-1.799c-.875.807-2.026 1.297-3.323 1.297H8.449z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-3">
              <li><NuxtLink to="/professionals" class="text-gray-300 hover:text-white transition-colors">Find Professionals</NuxtLink></li>
              <li><NuxtLink to="/how-it-works" class="text-gray-300 hover:text-white transition-colors">How It Works</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors">About Us</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-300 hover:text-white transition-colors">Contact</NuxtLink></li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Support</h3>
            <ul class="space-y-3">
              <li><NuxtLink to="/help" class="text-gray-300 hover:text-white transition-colors">Help Center</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="text-gray-300 hover:text-white transition-colors">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="text-gray-300 hover:text-white transition-colors">Terms of Service</NuxtLink></li>
              <li><NuxtLink to="/careers" class="text-gray-300 hover:text-white transition-colors">Careers</NuxtLink></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} WellnessConnect. All rights reserved.
          </p>
          <div class="mt-4 md:mt-0">
            <p class="text-gray-400 text-sm">
              Made with ❤️ for wellness enthusiasts
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { HeartIcon } from '@heroicons/vue/24/outline'
</script>