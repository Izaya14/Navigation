import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const seiyuuList = [
  {
    name: 'Sakura Ayane',
    birthDate: '29 Januari 1994',
    hobbies: 'Membaca, Menonton Film',
    favorites: 'Sword Art Online, My Hero Academia',
    debut: '2010',
    image: require('../assets/Ayaneru.jpg'),
  },
  {
    name: 'Amamiya Sora',
    birthDate: '28 Agustus 1993',
    hobbies: 'Bernyanyi, Bermain Game',
    favorites: 'Aldnoah.Zero, Konosuba',
    debut: '2012',
    image: require('../assets/Amamiya1.jpg'),
  },
  {
    name: 'Minase Inori',
    birthDate: '2 Desember 1995',
    hobbies: 'Menyanyi, Bermain Piano',
    favorites: 'Re:Zero, Is It Wrong to Try to Pick Up Girls in a Dungeon?',
    debut: '2010',
    image: require('../assets/Inorin.jpg'),
  },
  {
    name: 'Uchida Maaya',
    birthDate: '27 Desember 1989',
    hobbies: 'Menari, Menyanyi',
    favorites: 'Love, Chunibyo & Other Delusions, Akame ga Kill!',
    debut: '2010',
    image: require('../assets/Maaya.jpg'),
  },
  {
    name: 'Uesaka Sumire',
    birthDate: '19 Desember 1991',
    hobbies: 'Menggambar, Bermain Game',
    favorites: 'Kantai Collection, Girls und Panzer',
    debut: '2011',
    image: require('../assets/Sumire.jpg'),
  },
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={seiyuuList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('SeiyuuDetail', { seiyuu: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.phone}>{item.telpon}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: '#555',
  },
});
