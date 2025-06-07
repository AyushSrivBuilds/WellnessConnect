<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// PWA update prompt
const { $pwa } = useNuxtApp()

onMounted(() => {
  if ($pwa?.needRefresh) {
    // Show update notification
    console.log('New version available!')
  }
  
  if ($pwa?.offlineReady) {
    console.log('App ready to work offline')
  }
})
</script>