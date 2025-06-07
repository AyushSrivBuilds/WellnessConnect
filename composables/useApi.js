export const useApi = () => {
  const { token } = useAuthStore()
  const config = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    headers: {
      'Content-Type': 'application/json',
      ...(token.value && { Authorization: `Bearer ${token.value}` })
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        // Token expired or invalid
        const authStore = useAuthStore()
        authStore.logout()
      }
    }
  })

  return { api }
}