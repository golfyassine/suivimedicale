import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const plats = [
  {
    id: '1',
    nom: 'Salade quinoa et légumes',
    description: 'Riche en fibres et faible en sucre. Parfait pour le déjeuner.',
    moment: 'Déjeuner',
  },
  {
    id: '2',
    nom: 'Filet de poulet grillé',
    description: 'Source de protéines maigres. À accompagner de légumes vapeur.',
    moment: 'Dîner',
  },
  {
    id: '3',
    nom: 'Yaourt nature et amandes',
    description: 'Collation saine à IG bas pour le matin ou l’après-midi.',
    moment: 'Collation',
  },
  {
    id: '4',
    nom: 'Smoothie avocat-épinard',
    description: 'Riche en bons lipides et vitamines, sans sucre ajouté.',
    moment: 'Petit déjeuner',
  },
];

export default function PlatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggestions de plats</Text>
      {plats.length === 0 ? (
        <Text style={styles.noData}>Aucun plat disponible</Text> // Message si la liste est vide
      ) : (
        <FlatList
          data={plats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.nom}>{item.nom}</Text>
              <Text style={styles.moment}>⏰ {item.moment}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
    justifyContent: 'center', // Centre le contenu verticalement
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  noData: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000', // Ombre pour une meilleure visibilité
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  nom: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  moment: {
    fontStyle: 'italic',
    marginBottom: 5,
    color: '#1e90ff',
  },
  description: {
    fontSize: 14,
  },
});
