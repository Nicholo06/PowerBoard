import { StyleSheet, View, Pressable, Text } from 'react-native';
import { router } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Removed ParallaxScrollView to avoid tab bar context error

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Powerboard</ThemedText>
        <HelloWave />
      </ThemedView>
      <View style={styles.signUpButtonContainer}>
        <Pressable
          style={[styles.button, styles.signUpButton]}
          onPress={() => router.push('/signup')}
        >
          <Text style={styles.buttonText}>Join for free</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.button, styles.loginButton, { alignSelf: 'center', width: 200, marginTop: 12 }]}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
    marginBottom: 32,
  },
  signUpButtonContainer: {
    marginTop: 24,
    alignSelf: 'center',
    width: 200,
  },
  signUpButton: {
    backgroundColor: '#C3011B',
    borderWidth: 0,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#C3011B',
  },
  loginButtonText: {
    color: '#C3011B',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

