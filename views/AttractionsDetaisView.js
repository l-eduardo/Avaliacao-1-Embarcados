import {Image, Linking, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Switch} from "react-native";

export default function AttractionsDetailsView({route, navigation}){
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

  return (
    <ScrollView style={styles.scrollView}>
      <Image source={{uri: artist.imagePath}} style={{ width: 400, height: 300 }}/>

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
            {artist.startDate}
          </Text>
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
  scrollView: {
    backgroundColor: '#eee',
  },
  textView: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 48,
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
  },
  font24: {
    fontSize: 18,
  },
  spacing: {
    marginTop: 20,
    marginHorizontal: 25,
  },
});

