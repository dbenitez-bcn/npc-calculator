import {
  type Analytics,
  initializeAnalytics,
  isSupported,
} from 'firebase/analytics'

export default defineNuxtPlugin(async () => {
  let analytics: Analytics | null = null
  if (!import.meta.dev) {
    const firebaseApp = useFirebaseApp()
    if (await isSupported()) {
      analytics = initializeAnalytics(firebaseApp)
    }
  }
  return {
    provide: {
      analytics,
    },
  }
})