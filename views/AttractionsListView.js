import { FlatList, View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from "react-native"
import {GetAllArtist} from "../utils/GetArtistsData";

const DATA = GetAllArtist()

export default function AttractionsListView({ navigation }){
  const Item = ({item}) => ( 
    <TouchableOpacity onPress={() => navigation.navigate("Details", {artist: item})} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.addressText}>{item.address}</Text>
      </View>
      <Image source={{uri: item.imagePath}} style={styles.image}/>
    </TouchableOpacity>
  );

  return (
    <View style={styles.backgroundContainer}> 
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
          style={{direction: 'ltr'}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDAA00',
    marginTop: 25,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#94b3c3'
  },
  textContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  text: {
    marginVertical: 12,
    marginLeft: 20,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  addressText: {
    color: 'white',
    fontSize: 10,
    marginLeft: 20
  },
  image: {
    width: 90,
    height: 120,
    resizeMode: 'cover',
  }
});
