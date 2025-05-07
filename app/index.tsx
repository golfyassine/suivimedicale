import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Accueil() {
  const userInfo = {
    name: "John Doe",
    age: 30,
    weight: 85,
    height: 1.75,
    currentSugarLevel: 1.2,
    monthlySugarLevels: [1.1, 1.2, 1.3, 1.1, 1.0, 0.9],
  };

  const averageSugarLevel =
    userInfo.monthlySugarLevels.reduce((acc, curr) => acc + curr, 0) /
    userInfo.monthlySugarLevels.length;

  const imc = userInfo.weight / (userInfo.height * userInfo.height);
  const imcStatus =
    imc < 18.5
      ? "Insuffisance pondérale"
      : imc < 25
      ? "IMC normal"
      : imc < 30
      ? "Surpoids"
      : "Obésité";

  return (
    <View style={styles.container}>
      {/* Carte profil */}
      <View style={styles.profileCard}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>{userInfo.name}</Text>
          <Text style={styles.detail}>Âge: {userInfo.age}</Text>
        </View>
      </View>

      {/* Image corps humain au centre */}
      <View style={styles.bodyContainer}>
        <Image
          source={require('@/assets/images/corphumain.png')}
          style={styles.bodyImage}
          resizeMode="contain"
        />

        {/* Infos autour */}
        <View style={styles.infoBoxTopRight}>
          <Text style={styles.infoText}>Taille: {userInfo.height} m</Text>
          <Text style={styles.infoText}>Sucre actuel: {userInfo.currentSugarLevel} g/L</Text>
        </View>

        <View style={styles.infoBoxBottomLeft}>
          <Text style={styles.infoText}>Moyenne sucre: {averageSugarLevel.toFixed(2)} g/L</Text>
        </View>

        {/* Poids avec IMC */}
        <View style={styles.infoBoxBottom}>
          <Text style={styles.infoText}>
            Poids: {userInfo.weight} kg ({imcStatus})
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
    width: '75%',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
    color: '#666',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  bodyImage: {
    width: 220,
    height: 320,
  },
  infoBoxTopRight: {
    position: 'absolute',
    top: 30,
    right: 10,
    backgroundColor: '#e6f2ff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  infoBoxBottomLeft: {
    position: 'absolute',
    bottom: 60,
    left: 10,
    backgroundColor: '#fff0f5',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  infoBoxBottom: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#f5fffa',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
});
