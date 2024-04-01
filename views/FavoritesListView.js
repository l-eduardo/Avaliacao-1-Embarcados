import { useState } from "react";
import { FlatList, ScrollView, View, StyleSheet, Text, Touchable, TouchableOpacity, Image } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = require('../assets/attractions.json')

export default async function AttractionsListView({ navigation }){

  async function asyncFilter(array, asyncCallback) {
    const results = await Promise.all(array.map(async artista => {
      var id = artista.id
      return {
        id,
        passed: await asyncCallback(id)
      };
    }));
  
    return results.filter(({ passed }) => passed).map(({ item }) => item);
  }

  const FavoritedItems = async (data) =>
    {
      //var filteredData = data.filter(async element => {return await getValueFunction(element.id)});
      var filteredData = await asyncFilter(data)
      var agrvais2s2 = data.filter((artista) => {
        return filteredData.includes((item) => {
          item.id == '1'
        })
      })
      console.log("FILTERED: " + filteredData)
      return filteredData
    }

  const getValueFunction = async (id) => {
    var value = await AsyncStorage.getItem(id);
    //console.log(value  === '1')
    return value === '1'
  };

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
      data={await FavoritedItems(DATA)}
      renderItem={({item}) => <Item item={item} />}
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
