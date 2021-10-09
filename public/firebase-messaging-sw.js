/* eslint-disable */
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js')

const vapidKey =
  'BCxSCPUXSDbzXu9F57rJ8gAPCOGHCRcinjSH3GO5k11rRgp0ClGDwvcK2Q_o_gdm8eUMWDt-56MCSbI1fytmGAY'
const firebaseConfig = {
  apiKey: 'AIzaSyAnasHbfFJIKGGnTwqb0Qkg-Gg8JEek2uc',
  authDomain: 'blyzenko-f4b23.firebaseapp.com',
  projectId: 'blyzenko-f4b23',
  storageBucket: 'blyzenko-f4b23.appspot.com',
  messagingSenderId: '1058048266846',
  appId: '1:1058048266846:web:58d72344e2a753789c5acf',
  measurementId: 'G-9RVHK0ZV7V'
}

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
