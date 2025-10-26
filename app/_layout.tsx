import { Stack } from 'expo-router';

import './globals.css';

export default function RootLayout() {
  return (
    <Stack>
      {/* It's hiding the "header" - routes group header (info) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
