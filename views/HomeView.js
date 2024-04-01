import { Button, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function HomeView({navigation}) {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/background.jpeg')} resizeMode="cover" style={styles.background}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')}></Image>
          </View>
          <View style={styles.buttonsContainers}>
            <Button
              style={styles.buttons}
              title="Atrações"
              color={styles.buttons.color}
              onPress={() => navigation.navigate("Atracoes")}
            />
          </View>
          <View style={styles.buttonsContainers}>
            <Button
            style={styles.buttons}
            title="Favoritos"
            color={styles.buttons.color}
            />
      </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    paddingBottom: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonsContainers: {
    paddingHorizontal: 50,
    paddingVertical: 10
  },
  buttons: {
    margin: 10,
    color: "#DDAA00"
  }
});