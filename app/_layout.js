import { useEffect } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log('No values stored under key: ' + key);
      }
      return item;
    } catch (error) {
      console.error('SecureStore get item error: ', error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    console.log("User: ", isSignedIn);

    if (isSignedIn) {
      router.replace("../app/(public)/login");
    } else if (!isSignedIn) {
      router.replace("../app/index");
    }
  }, [isSignedIn]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <InitialLayout />
    </ClerkProvider>
  );
}