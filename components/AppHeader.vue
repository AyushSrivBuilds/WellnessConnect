<template>
  <header class="sticky top-0 z-50 glass border-b border-gray-200/20">
    <nav class="section-padding py-4">
      <div class="container-max flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
            <HeartIcon class="h-6 w-6 text-white" />
          </div>
          <span class="text-xl font-bold text-gray-900">WellnessConnect</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            :class="{ 'text-primary-600': $route.path === item.href }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Auth Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <template v-if="!isAuthenticated">
            <NuxtLink to="/auth/login" class="text-gray-700 hover:text-primary-600 font-medium">
              Login
            </NuxtLink>
            <NuxtLink to="/auth/signup" class="btn-primary">
              Sign Up
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/dashboard" class="text-gray-700 hover:text-primary-600 font-medium">
              Dashboard
            </NuxtLink>
            <button @click="logout" class="text-gray-700 hover:text-primary-600 font-medium">
              Logout
            </button>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-gray-700 hover:text-primary-600"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200/20 pt-4">
        <div class="flex flex-col space-y-4">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            @click="mobileMenuOpen = false"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
          >
            {{ item.name }}
          </NuxtLink>
          <div class="flex flex-col space-y-2 pt-4 border-t border-gray-200">
            <template v-if="!isAuthenticated">
              <NuxtLink to="/auth/login" class="btn-outline text-center">
                Login
              </NuxtLink>
              <NuxtLink to="/auth/signup" class="btn-primary text-center">
                Sign Up
              </NuxtLink>
            </template>
            <template v-else>
              <NuxtLink to="/dashboard" class="btn-outline text-center">
                Dashboard
              </NuxtLink>
              <button @click="logout" class="btn-outline">
                Logout
              </button>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { HeartIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
const isAuthenticated = ref(false) // This would come from auth store

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Find Professionals', href: '/professionals' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const logout = () => {
  // Handle logout logic
  isAuthenticated.value = false
  navigateTo('/auth/login')
}

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>