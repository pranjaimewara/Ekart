import { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

const checkAndroidPermission = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
  } catch (error) {
    console.error('Permission Error:', error);
  }
};

const RemoteNotification = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      const setupAndroidNotification = async () => {
        await checkAndroidPermission();

        // Delete old channels
        PushNotification.getChannels(channel_ids => {
          channel_ids.forEach(id => {
            PushNotification.deleteChannel(id);
          });
        });

        // Request permission & get FCM token
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          const fcmToken = await messaging().getToken();
          console.log('✅ Android FCM Token:', fcmToken);
        } else {
          console.warn('🚫 Android Notification permissions not granted');
        }

        // Foreground message handler
        const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
          const { notification, messageId } = remoteMessage;
          const channelId = messageId || 'default-channel-id';

          PushNotification.createChannel(
            {
              channelId,
              channelName: 'FCM Channel',
              channelDescription: 'A channel to categorize FCM notifications',
              importance: 4,
              vibrate: true,
            },
            created => console.log(`📣 Channel '${channelId}' created: ${created}`)
          );

          PushNotification.localNotification({
            channelId,
            title: notification?.title || 'Notification',
            message: notification?.body || 'You have a new message',
          });
        });

        // Push Notification Configuration
        PushNotification.configure({
          onRegister: function (token) {
            console.log('🔐 Android Push Token:', token);
          },
          onNotification: function (notification) {
            console.log('📩 Android Notification received:', notification);
          },
          popInitialNotification: true,
          requestPermissions: false,
        });

        return () => unsubscribeForeground();
      };

      setupAndroidNotification();
    }
  }, []);

  return null;
};

export default RemoteNotification;