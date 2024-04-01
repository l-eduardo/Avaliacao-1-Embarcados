import {useState, useEffect} from "react";
import {Image, Linking, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Switch} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AttractionsDetailsView({route}){

  const {artist} = route.params

  const handlePhoneClick = () => {
    Linking.openURL(`tel:${artist.phone}`)
  }
  
  const handleSocialMediaClick = () => {
    Linking.canOpenURL(artist.socialMedia).then(supported => {
      if (supported) {
        Linking.openURL(artist.socialMedia);
      } else {
        console.log("Don't know how to open URI: " + artist.socialMedia);
      }
    });
  }
  
  const handleAddressClick = () => {
    const mapUrl = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q="
    })
    
    Linking.openURL(mapUrl + artist.address)
  }

  const handlePrincipalTrackClick = () => {
    Linking.openURL(artist.principalTrackUrl)
  }
  const [switchValue, setSwitchValue] = useState(false);

  const handleTicketClick = () => {
    Linking.openURL(artist.ticketSellUrl)
  }
  
  useEffect(() => {
    async function obterEstadoInicial() {
      const valorArmazenado = await AsyncStorage.getItem(artist.id);
      setSwitchValue(parseInt(valorArmazenado) === 1)
    }
    obterEstadoInicial()
  })

  const dateFormat = () => {
    return new Date(parseInt(artist.showDate)).toLocaleDateString('pt-BR', { hour:'numeric', minute:'numeric', second:'numeric', hour12:false })
  }

  const favoriteSwitchChange = async () => {
    saveValueFunction(!(await getValueFunction()))
    setSwitchValue(await getValueFunction())
  }

  const saveValueFunction = async (newFavoriteState) => {
    await AsyncStorage.setItem(artist.id, newFavoriteState ? '1' : '0');
  };

  const getValueFunction = async () => {
    let value = await AsyncStorage.getItem(artist.id);
    return parseInt(value) === 1
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Image source={{uri: artist.imagePath}} style={styles.image}/>

      <View style={styles.container}>
        <View>
          <Text style={[styles.detailsText, styles.titleText]}>
            {artist.name}
          </Text>
        </View>
        <TouchableOpacity onPress={handleAddressClick} style={styles.spacing}>
          <Text style={styles.font24} >
            {artist.address}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePhoneClick} style={styles.spacing}>
          <Text style={styles.font24}>
            {artist.phone}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSocialMediaClick} style={styles.spacing}>
          <Text style={styles.font24}>
            {artist.socialMedia}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePrincipalTrackClick} style={styles.spacing}>
          <View style={styles.detailTextContainer}>
            <Text style={styles.font24}>
              Faixa principal:
            </Text>
            <Text style={styles.font24}>
              {artist.principalTrack}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.detailTextContainer, styles.spacing]}>
          <Text style={styles.font24}>Data do show: </Text>
          <Text style={[styles.detailsText, styles.font24]}>
            {dateFormat()}
          </Text>
        </View>
        <TouchableOpacity onPress={handleTicketClick} style={styles.spacing}>
          <View style={styles.detailTextContainer}>
            <Text style={styles.font24}>
              Ingresso:
            </Text>
            <Text style={styles.font24}>
              {artist.ticketPrice}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.detailTextContainer, styles.spacing]}>
          <Text style={styles.font24}>Favorite: </Text>
          <Switch
          trackColor={{false: '#767577', true: '#94b3c3'}}
          thumbColor={switchValue ? '#DDAA00' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={favoriteSwitchChange}
          value={switchValue}
          />
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  image: {
    height: 300,
  },
  scrollView: {
    backgroundColor: '#3e3e42',
  },
  textView: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold'
  },
  detailTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  detailsText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
  },
  font24: {
    color: 'white',
    fontSize: 18,
  },
  spacing: {
    marginTop: 20,
    marginHorizontal: 25,
  },
});

