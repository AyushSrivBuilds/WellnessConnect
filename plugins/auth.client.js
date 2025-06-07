export default defineNuxtPlugin(() => {
  const authStore = useAuthStore()
  
  // Initialize auth from localStorage
  authStore.initializeAuth()
})