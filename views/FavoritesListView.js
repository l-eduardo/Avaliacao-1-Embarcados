import {useEffect, useState} from "react";
import {FlatList, View, StyleSheet, Text, TouchableOpacity, Image} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetAllArtist from "../utils/GetArtistsData";

const DATA = GetAllArtist().sort((a, b) => a.startDate > b.startDate ? 1 : -1);

export default function FavoritesListView({navigation}) {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let results = [];
      for (const item of DATA) {
        let value = await AsyncStorage.getItem(item.id) || '0';
        if (value === '1') {
          results.push(item)
        }
      }
      setFavorites(results);
    }
    fetchData();
  }, []);
  
  const Item = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate("Details", {artist: item})} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <Image source={{uri: item.imagePath}} style={styles.image}/>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={favorites}
      renderItem={({item}) => <Item item={item}/>}
      keyExtractor={item => item.id}
      style={{direction: 'ltr'}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 25,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  text: {
    margin: 20,
    fontSize: 24,
    color: 'black',
  },
  image: {
    width: 90,
    height: 120,
    resizeMode: 'cover',
  }
});
