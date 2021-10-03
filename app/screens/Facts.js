import * as React from 'react';
import { View, Text } from 'react-native';
import { Box, Center, Heading, NativeBaseProvider,  VStack } from "native-base"

var styles = {
  bg: {
    linearGradient: {
      colors: ['#d9caa0', '#c3b590'],
      start: [0, 0],
      end: [1, 0],
    },
  },
  box: {
    fontSize: 'md',
    fontWeight: 'medium',
    color: 'black',
    textAlign: 'center',
  }
}

function Facts() {
    return (
      <View>
        <Heading textAlign="center" size="lg">Adventurer Wisdom</Heading>
        <VStack space={3} alignItems="flex-start">
          <Box bg={styles.bg} style={styles.box}
            p="7"
            m="1"
            rounded="xl"
            width="300">
            BMI stands for Body Mass Index, and it's calculated using your height and weight
          </Box>
          <Box
            bg={styles.bg} style={styles.box}
            p="7"
            m="1"
            rounded="xl"
            width="300">
            Don't eat and snack when you aren't hungry
          </Box>
          <Box
            bg={styles.bg} style={styles.box}
            p="7"
            m="1"
            rounded="xl"
            width="300">
            Don't spend too much time sitting at a desk or playing video games
          </Box>
        </VStack>

        
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
        <Facts />
      </Center>
    </NativeBaseProvider>
  )
}