import { Stack } from 'expo-router';

import './globals.css';

export default function RootLayout() {
  return (
    <>
      {/* It is hidding the info of time, battery etc. on top */}
      {/* <StatusBar hidden={true} /> */}

      <Stack screenOptions={{ headerShown: false }}>
        {/* It's hiding the "header" - routes group header (info) */}
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="movie/[id]" />
      </Stack>
    </>
  );
}
