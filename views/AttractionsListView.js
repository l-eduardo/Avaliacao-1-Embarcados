import { FlatList, ScrollView, View, StyleSheet, Text, Touchable, TouchableOpacity, Image } from "react-native"

const DATA = [
  {
    id: 'a3e41b09-e652-4349-a3a1-57a5fe70ec01',
    name: 'Sam Smith',
    address: 'Avenida Senador Teotônio Vilela, 261',
    startDate: new Date("2024-10-10").getTime(),
    imagePath: 'https://s.yimg.com/ny/api/res/1.2/WH6sdzwRRnOlCPpaLD.htw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/billboard_547/5a63c08c1f45f00d2395043752251069',
    videoUrl: 'youtube.com',
    socialMedia: "https://www.instagram.com/samsmith/",
    phone: '+55 48 9 9999-9999',
    principalTrack: 'Unholy',
    principalTrackUrl: 'https://www.youtube.com/watch?v=Uq9gPaIzbe8&ab_channel=SamSmithVEVO',
  },
  {
    id: '1',
    name: 'Of Monster and Men',
    address: 'Avenida Senador Teotônio Vilela, 261',
    startDate: new Date("2024-10-10").getTime(),
    imagePath: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2014/07/of-monsters-and-men.jpg',
    videoUrl: 'youtube.com',
    socialMedia: "",
    phone: '+55 48 9 9999-9999',
    principalTrack: 'Dirty Paws',
    principalTrackUrl: 'https://www.youtube.com/watch?v=mCHUw7ACS8o&ab_channel=OfMonstersAndMenVEVO',
  },
  {
    id: '2',
    name: 'MC Floripa',
    address: 'Avenida Senador Teotônio Vilela, 261',
    startDate: new Date("2024-10-10").getTime(),
    imagePath: 'https://i.ytimg.com/vi/x71rES_e7S8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzRE5TR6TDV3LclHdcgmDbPxzIaw',
    videoUrl: 'youtube.com',
    socialMedia: "https://www.instagram.com/mc.floripa/",
    phone: '+55 48 9 9999-9999',
    principalTrack: 'Maior que eu so a girafa',
    principalTrackUrl: 'https://www.youtube.com/watch?v=x71rES_e7S8&ab_channel=CR7Monstro',
  },
]


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
