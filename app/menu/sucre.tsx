import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function SucreScreen() {
  const [sucre, setSucre] = useState('');

  const handleConfirm = () => {
    if (!sucre) {
      Alert.alert('Erreur', 'Veuillez entrer un taux de sucre.');
      return;
    }

    Alert.alert('Taux ajouté', `Votre taux de sucre est : ${sucre} mg/dL`);
    setSucre(''); // Reset input
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajoute le taux de sucre</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Taux de sucre (mg/dL)"
        value={sucre}
        onChangeText={setSucre}
      />
      <Button title="Confirmer" onPress={handleConfirm} color="#4169e1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});
