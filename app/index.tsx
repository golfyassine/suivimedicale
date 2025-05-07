import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function Accueil() {
  const user = {
    name: "John Doe",
    age: 30,
    weight: 85,
    height: 1.78,
    currentSugarLevel: 1.2,
    monthlySugarLevels: [1.1, 1.2, 1.3, 1.1, 1.0, 0.9],
  };

  const averageSugar = user.monthlySugarLevels.reduce((a, b) => a + b, 0) / user.monthlySugarLevels.length;

  const bmi = user.weight / (user.height * user.height);
  const bmiStatus =
    bmi < 18.5 ? 'Insuffisance pondérale' :
    bmi < 25 ? 'Poids normal' :
    bmi < 30 ? 'Surpoids' : 'Obésité';
  const bmiColor =
    bmi < 18.5 ? '#00bfff' :
    bmi < 25 ? '#32cd32' :
    bmi < 30 ? '#ffa500' : '#ff4500';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Ligne du haut : Photo + Nom */}
      <View style={styles.topRow}>
        <Image source={require('@/assets/images/profile.png')} style={styles.profileImage} />
        <View style={styles.userCard}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userAge}>Âge : {user.age}</Text>
        </View>
      </View>

      {/* Image du corps humain */}
      <Image source={require('@/assets/images/corphumain.png')} style={styles.bodyImage} resizeMode="contain" />

      {/* Infos */}
      <View style={styles.infoGrid}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Taille</Text>
          <Text style={styles.infoValue}>{user.height} m</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Taux de sucre</Text>
          <Text style={styles.infoValue}>{user.currentSugarLevel} g/L</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Moyenne mensuelle</Text>
          <Text style={styles.infoValue}>{averageSugar.toFixed(2)} g/L</Text>
        </View>
        <View style={[styles.bmiBox, { backgroundColor: bmiColor }]}>
          <Text style={styles.bmiText}>IMC: {bmi.toFixed(1)}</Text>
          <Text style={styles.bmiStatus}>{bmiStatus}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  userCard: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userAge: {
    fontSize: 16,
    color: '#555',
  },
  bodyImage: {
    width: '100%',
    height: 300,
    marginVertical: 20,
  },
  infoGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 10,
  },
  infoBox: {
    backgroundColor: '#e3f2fd',
    padding: 10,
    borderRadius: 8,
    minWidth: '40%',
    alignItems: 'center',
  },
  infoLabel: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
  },
  bmiBox: {
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
    minWidth: '90%',
    alignItems: 'center',
  },
  bmiText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  bmiStatus: {
    fontSize: 16,
    color: '#fff',
  },
});
