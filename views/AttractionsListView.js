import { FlatList, ScrollView, View, StyleSheet, Text, Touchable, TouchableOpacity, Image } from "react-native"

const DATA = require('../assets/attractions.json')


export default function AttractionsListView({ navigation }){
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
      data={DATA}
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
