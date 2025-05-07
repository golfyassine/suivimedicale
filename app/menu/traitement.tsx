import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function TraitementScreen() {
  const [type, setType] = useState<'Type 1' | 'Type 2'>('Type 1');
  const [traitements, setTraitements] = useState({
    matin: '',
    midi: '',
    soir: '',
  });

  const handleChange = (moment: string, value: string) => {
    setTraitements({ ...traitements, [moment]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Traitements enregistrés', JSON.stringify(traitements, null, 2));
  };

  const handleClear = () => {
    setTraitements({ matin: '', midi: '', soir: '' });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Traitement</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggle,
            type === 'Type 1' ? styles.activeToggle : styles.inactiveToggle,
          ]}
          onPress={() => setType('Type 1')}
        >
          <Text>Type 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggle,
            type === 'Type 2' ? styles.activeToggle : styles.inactiveToggle,
          ]}
          onPress={() => setType('Type 2')}
        >
          <Text>Type 2</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Matin :</Text>
      <TextInput
        placeholder="Ex: Metformine 500mg"
        value={traitements.matin}
        onChangeText={(text) => handleChange('matin', text)}
        style={styles.input}
      />

      <Text style={styles.label}>Midi :</Text>
      <TextInput
        placeholder="Ex: Insuline rapide"
        value={traitements.midi}
        onChangeText={(text) => handleChange('midi', text)}
        style={styles.input}
      />

      <Text style={styles.label}>Soir :</Text>
      <TextInput
        placeholder="Ex: Lantus"
        value={traitements.soir}
        onChangeText={(text) => handleChange('soir', text)}
        style={styles.input}
      />

      <View style={styles.buttonGroup}>
        <Button title="Enregistrer" onPress={handleSubmit} color="#1e90ff" />
        <Button title="Réinitialiser" onPress={handleClear} color="#888" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 10,
  },
  toggle: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    width: 100,
    alignItems: 'center',
  },
  activeToggle: {
    backgroundColor: '#cce5ff',
    borderColor: '#1e90ff',
  },
  inactiveToggle: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  buttonGroup: {
    marginTop: 20,
    gap: 10,
  },
});
