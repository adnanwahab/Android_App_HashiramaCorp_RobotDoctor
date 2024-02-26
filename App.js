import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddNewPaletteModal from './screens/AddNewPaletteModal';


import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { WebView } from 'react-native-webview';


const styles = StyleSheet.create({
  chrome : {
    height: 60, // Reduced height for a more compact view
    paddingTop: 10, // Adjust padding to center content vertically within the smaller height
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //height: '100%'
  },
  gridContainer: {
    flex: 1,
    margin: 2,
  },
  itemStyle: {
    flex: 1,
    margin: 5,
    minWidth: 170,
    maxWidth: 223,
    height: 150,
    maxHeight: 150,
    // backgroundColor: '#CCC',
  },
});


const ComponentNine= () => {
  //
  return <WebView source={{ uri: 'https://transmit.tailwindui.com/' }} />;

  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentOne</Text>
     </View>
  </>)
}

const ComponentTen= () => {
  return <WebView source={{ uri: 'https://pocket.tailwindui.com/' }} />;

  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentOne</Text>
     </View>
  </>)
}

const ComponentEleven = () => {
  return <WebView source={{ uri: 'https://syntax.tailwindui.com/' }} />;

  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentOne</Text>
     </View>
  </>)
}


const ComponentTwelve = () => {
  return <WebView source={{ uri: 'https://keynote.tailwindui.com/' }} />;

  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentOne</Text>
     </View>
  </>)
}

const ComponentTwo = () => {
  return <WebView source={{ uri: 'https://primer.tailwindui.com/' }} />;

  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentTwo</Text>
     </View>
  </>)
}

const ComponentThree = () => {

  return <WebView source={{ uri: 'https://commit.tailwindui.com/' }} />;

  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentThree</Text>
     </View>
  </>)
}

const ComponentFour = () => {
  return <WebView source={{ uri: 'https://protocol.tailwindui.com/' }} />;

  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentFour</Text>
      
     </View>
  </>)
}

const ComponentFive = () => {

  return <WebView source={{ uri: 'https://salient.tailwindui.com/' }} />;

  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentFive</Text>
     </View>
  </>)
}

const ComponentSix = () => {
  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentSix</Text>
      <Image
        source={require('./assets/6.webp')}
        style={{width: 200, height: 200}}
      />
     </View>
  </>)
}

const ComponentSeven = () => {
  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentSeven</Text>
      <Image
        source={require('./assets/7.jpeg')}
        style={{width: 200, height: 200}}
      />
     </View>
  </>)
}

const ComponentEight = () => {
  return (<>
    <View style={styles.container}>
    <Text>Hello eight</Text>

      <Image
        source={require('./assets/8.webp')}
        style={{width: 200, height: 200}}
      />
     </View>
  </>)
}

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  let numWords = 'two three four five six seven eight nine ten eleven twelve'.split(' ')

  let content = numWords.map((word, index) => {
    return {
      key: `${index}`,
      title: `Go to Screen ${index + 1}`,
      navigateTo: word,
    }
  });

  return (
    <FlatList
      data={content}
      renderItem={({ item }) => (
        <View style={styles.itemStyle}>
          <Button
            title={item.title}
            onPress={() => navigation.navigate(item.navigateTo)}
          />
        </View>
      )}
      numColumns={2}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.gridContainer}
    />
  );
}


const TableOfContents = () => {
  return (
    <>
    {/* <View style={styles.chrome}>
      <Text>Hello Swarmbotics.AI</Text>
     </View> */}
    <View className="flex-1 justify-center items-center pt-5">
    <Text className="font-bold text-xl pt-5"></Text>
    <Text className="font-bold text-xl pt-5"></Text>

      <Text className="font-bold text-xl pt-5">Hello, Swarmbotics.ai!</Text>
    </View>
        <Stack.Navigator>
          <Stack.Screen name="one" component={HomeScreen} />
          <Stack.Screen name="two" component={ComponentTwo} />
          <Stack.Screen name="three" component={ComponentThree} />
          <Stack.Screen name="four" component={ComponentFour} />

          <Stack.Screen name="five" component={ComponentFive} />
          <Stack.Screen name="six" component={ComponentSix} />
          <Stack.Screen name="seven" component={ComponentSeven} />
          <Stack.Screen name="eight" component={ComponentEight} />
          <Stack.Screen name="nine" component={ComponentNine} />
          <Stack.Screen name="ten" component={ComponentTen} />
          <Stack.Screen name="eleven" component={ComponentEleven} />
          <Stack.Screen name="twelve" component={ComponentTwelve} />

      </Stack.Navigator>
    </>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <TableOfContents />
    </NavigationContainer>
  );
}

export default App;
