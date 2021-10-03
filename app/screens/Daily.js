import * as React from 'react';
import { View, Text } from 'react-native';
import { Box, Center, Checkbox, Heading, NativeBaseProvider, VStack } from "native-base"

function Daily() {
    return (
      <View>
        <Heading textAlign="center" size="lg">Streak: ### Days</Heading>
        <Heading textAlign="center" size="lg">Daily Tasks</Heading>
        <Box
      bg={{
        linearGradient: {
          colors: ['#d9caa0', '#c3b590'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      rounded="xl"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'black',
        textAlign: 'center',
      }}
    >
    <VStack space={3} alignItems="flex-start">
    <Checkbox value="info" colorScheme="info">
            Take morning medication
          </Checkbox>
          <Checkbox value="info" colorScheme="info">
            Take evening medication
          </Checkbox>
          <Checkbox value="info" colorScheme="info">
            Do stretching exercises
          </Checkbox>
    </VStack>
    </Box>
      </View>
    );
}

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
}

export default () => {
  return (
    <NativeBaseProvider config={config}>
      <Center flex={1} px="3">
        <Daily />
      </Center>
    </NativeBaseProvider>
  )
}