// App.js
import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getApp } from '@react-native-firebase/app'; 

export default function App() {
  useEffect(() => {
    // simple sanity check: should print your appId & projectId
    const app = getApp();
    console.log('Firebase initialized:', app.options.appId, app.options.projectId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello, world 👋</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '700' },
});

