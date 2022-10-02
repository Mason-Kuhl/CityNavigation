import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const art = require('./assets/art.png');
const mile = require('./assets/mile.png');
const pier = require('./assets/pier.png');
const water = require('./assets/water.png');
const willis = require('./assets/willis.png');

function ArtScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Image source={art} style={styles.cityImg} />
    </View>
  );
}

function MileScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Image source={mile} style={styles.cityImg} />
    </View>
  );
}

function PierScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Image source={pier} style={styles.cityImg} />
    </View>
  );
}

function WaterScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Image source={water} style={styles.cityImg} />
    </View>
  );
}

function WillisScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Image source={willis} style={styles.cityImg} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtScreen} />
        <Drawer.Screen name="Magnificient Mile" component={MileScreen} />
        <Drawer.Screen name="Navy Pier" component={PierScreen} />
        <Drawer.Screen name="Water Tower" component={WaterScreen} />
        <Drawer.Screen name="Willis Tower" component={WillisScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityImg: {
    width: 320,
    height: 480,
  }
});
