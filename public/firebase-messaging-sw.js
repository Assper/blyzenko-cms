/* eslint-disable */
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js')
importScripts('./env.js')

const firebaseConfig = REACT_APP_FIREBASE

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig)
  } catch (e) {
    console.error('sw error', e)
  }
}

if (firebase.apps.length) {
  const handler = (payload) => {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
      body: payload.notification.body
    }

    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    )
  }

  const messaging = firebase.messaging()
  messaging.onBackgroundMessage(handler)
}
