import React from 'react';
import { SafeAreaView, ScrollView, FlatList, SectionList, Text, View, StyleSheet } from 'react-native';

const flatListData = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
];

const sectionListData = [
  { title: 'Seção 1', data: ['Item A', 'Item B', 'Item C'] },
  { title: 'Seção 2', data: ['Item D', 'Item E', 'Item F'] },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Lista Simples</Text>
        <FlatList
          data={flatListData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.title}</Text>
          )}
        />
        <Text style={styles.header}>Lista Seccionada</Text>
        <SectionList
          sections={sectionListData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E6E6FA', // Cor lilás claro
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#4B0082', // Roxo escuro
  },
  item: {
    fontSize: 16,
    padding: 12,
    backgroundColor: '#D8BFD8', // Lilás médio
    marginVertical: 6,
    borderRadius: 8,
    textAlign: 'center',
    color: '#4B0082',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#BA55D3', // Lilás mais escuro
    padding: 6,
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
  },
});