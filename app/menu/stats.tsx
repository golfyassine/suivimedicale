import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
  datasets: [
    {
      data: [110, 130, 120, 140, 125, 135, 150],
      color: () => '#1e90ff', // Ligne bleue
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#e0f7ff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

export default function StatsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Graphe du taux de sucre</Text>
      <LineChart
        data={data}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.graph}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f8ff',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  graph: {
    borderRadius: 12,
    alignSelf: 'center',
  },
});
