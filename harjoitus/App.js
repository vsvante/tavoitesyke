import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [age, setAge] = useState('');
  const [heartRateLimits, setHeartRateLimits] = useState('');

  const calculateHeartRateLimits = () => {
    if (age !== '') {
      const ageNumber = parseInt(age);
      const lower = Math.round((220 - ageNumber) * 0.65);
      const upper = Math.round((220 - ageNumber) * 0.85);
      setHeartRateLimits(`Hr limits: ${lower}-${upper}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your age to calculate heart rate limits</Text>
      <Text>Age</Text>
      <TextInput
        style={styles.input} value={age} onChangeText={(text) => setAge(text)}
        keyboardType="numeric"/>
      <Button title="Calculate" onPress={calculateHeartRateLimits} />
      <Text>{heartRateLimits}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
  },
});
