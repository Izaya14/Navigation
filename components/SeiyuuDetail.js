import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SeiyuuDetail({ route }) {
  const { seiyuu } = route.params;
  return (
    <View style={styles.container}>
      <Image source={seiyuu.image} style={styles.image} />
      <Text style={styles.title}>{seiyuu.name}</Text>
      <Text style={styles.info}>Tanggal Lahir: {seiyuu.birthDate}</Text>
      <Text style={styles.info}>Hobi: {seiyuu.hobbies}</Text>
      <Text style={styles.info}>Anime/Film Favorit: {seiyuu.favorites}</Text>
      <Text style={styles.info}>Debut: {seiyuu.debut}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
  },
});
