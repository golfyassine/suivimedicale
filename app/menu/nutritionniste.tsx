import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function MedecinScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Merci d'utiliser notre application !</Text>
      <Text style={styles.text}>
        Nous espérons qu'elle vous aide à mieux suivre votre santé au quotidien.{"\n\n"}
        Si vous souhaitez parler à un médecin, n'hésitez pas à nous contacter :
      </Text>
      <Text style={styles.phone}>[numéro de téléphone]</Text>
      <Text style={styles.footer}>
        Nos spécialistes sont disponibles tous les jours de 9h à 17h pour répondre à vos questions.
        Prenez soin de vous !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  phone: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: 10,
  },
  footer: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
});
