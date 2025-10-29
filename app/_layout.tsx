import { Stack } from 'expo-router';

import './globals.css';

export default function RootLayout() {
  return (
    <>
      {/* It is hidding the info of time, battery etc. on top */}
      {/* <StatusBar hidden={true} /> */}

      <Stack>
        {/* It's hiding the "header" - routes group header (info) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
