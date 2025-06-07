import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)
  const loading = ref(false)

  const isAuthenticated = computed(() => !!token.value)

  const login = async (credentials) => {
    loading.value = true
    try {
      // Make API call to login
      const response = await $fetch('/api/auth/login', {
        method: 'POST',
        body: credentials
      })
      
      user.value = response.user
      token.value = response.token
      
      // Store in localStorage for persistence
      if (process.client) {
        localStorage.setItem('auth-token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
      }
      
      return response
    } catch (error) {
      throw error
    } finally {
      loading.value = false
    }
  }

  const register = async (userData) => {
    loading.value = true
    try {
      const response = await $fetch('/api/auth/register', {
        method: 'POST',
        body: userData
      })
      
      user.value = response.user
      token.value = response.token
      
      if (process.client) {
        localStorage.setItem('auth-token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
      }
      
      return response
    } catch (error) {
      throw error
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      await $fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      })
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      user.value = null
      token.value = null
      
      if (process.client) {
        localStorage.removeItem('auth-token')
        localStorage.removeItem('user')
      }
      
      await navigateTo('/auth/login')
    }
  }

  const refreshToken = async () => {
    try {
      const response = await $fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      })
      
      token.value = response.token
      
      if (process.client) {
        localStorage.setItem('auth-token', response.token)
      }
      
      return response
    } catch (error) {
      await logout()
      throw error
    }
  }

  const initializeAuth = () => {
    if (process.client) {
      const storedToken = localStorage.getItem('auth-token')
      const storedUser = localStorage.getItem('user')
      
      if (storedToken && storedUser) {
        token.value = storedToken
        user.value = JSON.parse(storedUser)
      }
    }
  }

  return {
    user: readonly(user),
    token: readonly(token),
    loading: readonly(loading),
    isAuthenticated,
    login,
    register,
    logout,
    refreshToken,
    initializeAuth
  }
})