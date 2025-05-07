import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Accueil() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    age: 30,
    weight: 75,
    height: 1.78,
    currentSugarLevel: 1.2,
    monthlySugarLevels: [1.1, 1.2, 1.3, 1.1, 1.0, 0.9],
  });

  const averageSugarLevel = userInfo.monthlySugarLevels.length
    ? userInfo.monthlySugarLevels.reduce((acc, curr) => acc + curr, 0) / userInfo.monthlySugarLevels.length
    : 0;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profil de {userInfo.name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Âge : {userInfo.age} ans</Text>
        <Text style={styles.infoText}>Poids : {userInfo.weight} kg</Text>
        <Text style={styles.infoText}>Taille : {userInfo.height} m</Text>
        <Text style={styles.infoText}>Taux de sucre actuel : {userInfo.currentSugarLevel} g/L</Text>
        <Text style={styles.infoText}>Moyenne mensuelle : {averageSugarLevel.toFixed(2)} g/L</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#444',
  },
});
