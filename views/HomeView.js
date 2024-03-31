import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeView({navigation}) {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonsContainers: {
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  buttons: {
    margin: 10,
    color: "#09c"
  }
});