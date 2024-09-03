import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculateHeartRateLimits = () => {
    const ageNumber = parseInt(age);

    if (isNaN(ageNumber) || ageNumber <= 0) {
      Alert.alert('Please enter a valid age');
      return;
    }

    const maxHeartRate = 220 - ageNumber;
    const lower = maxHeartRate * 0.65;
    const upper = maxHeartRate * 0.85;

    setLowerLimit(lower.toFixed(0));
    setUpperLimit(upper.toFixed(0));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <Button title="Calculate" onPress={calculateHeartRateLimits} />

      {lowerLimit && upperLimit && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Heart Rate Limits: {lowerLimit} - {upperLimit}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
