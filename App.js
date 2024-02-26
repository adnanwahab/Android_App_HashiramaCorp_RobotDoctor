import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddNewPaletteModal from './screens/AddNewPaletteModal';


import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 304,
    maxHeight:304,
    backgroundColor: '#CCC',
  },
});


const ComponentOne = () => {
  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentOne</Text>
     </View>
  </>)
}

const ComponentTwo = () => {
  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentTwo</Text>
     </View>
  </>)
}

const ComponentThree = () => {
  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentThree</Text>
     </View>
  </>)
}

const ComponentFour = () => {
  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentFour</Text>
     </View>
  </>)
}

const ComponentFive = () => {
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
     </View>
  </>)
}

const ComponentSeven = () => {
  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentSeven</Text>
     </View>
  </>)
}

const ComponentEight = () => {
  return (<>
    <View style={styles.container}>
      <Text>Hello ComponentEight</Text>
     </View>
  </>)
}

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  let numWords = 'one two three four five six seven eight'.split(' ')

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
      <Stack.Navigator>
        <Stack.Screen name="one" component={HomeScreen} />
        <Stack.Screen name="two" component={ComponentTwo} />
        <Stack.Screen name="three" component={ComponentThree} />
        <Stack.Screen name="four" component={ComponentFour} />

        <Stack.Screen name="five" component={ComponentFive} />
        <Stack.Screen name="six" component={ComponentSix} />
        <Stack.Screen name="seven" component={ComponentSeven} />
        <Stack.Screen name="eight" component={ComponentEight} />

    </Stack.Navigator>
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
