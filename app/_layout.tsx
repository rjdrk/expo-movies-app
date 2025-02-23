import { Appearance } from 'react-native'
import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import '../global.css'
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient();

const RootLayout = () => {
  Appearance.setColorScheme('dark');
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout