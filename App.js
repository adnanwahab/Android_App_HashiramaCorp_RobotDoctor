import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

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
});


// const MainStack = createStackNavigator();
// const RootStack = createStackNavigator();


// 0. Speech + Action Tree for botparty 
// 1. Hospital Administrator - see all patients, doctors, nurses, and medbots
// 2. StarCraft Mode 
// 3. Segmentation Map
// 4. Call Of Duty Shopping -> AirDrop 
// 5. Map w/ segmentation
// 6. observable is organizing worlds information - FMA:B -> edward seeing the truth (like kapil gupta)
// 7. Zed Vision -> whatever cool AI shader stuff you can think of lol
// 8. Look up Foxglove
// 9. Robotic Doctor Face + Voice 
// 10. Karaoke Last

// 11. Make App that takes a youtube Link and then parses it and turns it into a picture book
// only need like 50% accuracy

// const MainStackScreen = () => {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen name="Home" component={Home} />
//       <MainStack.Screen
//         name="ColorPalette"
//         component={ColorPalette}
//         options={({ route }) => ({ title: route.params.paletteName })}
//       />
//     </MainStack.Navigator>
//   );
// };

// const ColorsAreCool = () => {
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator mode="modal">
//         <RootStack.Screen
//           name="Main"
//           component={MainStackScreen}
//           options={{ headerShown: false }}
//         />
//         <RootStack.Screen name="AddNewPalette" component={AddNewPaletteModal} />
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// };

// import ComponentOne from './screens/ComponentOne';
// import ComponentTwo from './screens/ComponentTwo';
// import ComponentThree from './screens/ComponentThree';
// import ComponentFour from './screens/ComponentFour';
// import ComponentFive from './screens/ComponentFive';
// import ComponentSix from './screens/ComponentSix';
// import ComponentSeven from './screens/ComponentSeven';
// import ComponentEight from './screens/ComponentEight';

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

// const NavigationButtons = () => {
//   const navigation = useNavigation(); // Use the hook to get navigation object

//   return (
//     <>
//     <Button title="Go to Component One" onPress={() => navigation.navigate('ComponentOne')} />
// <Button title="Go to Component Two" onPress={() => navigation.navigate('ComponentTwo')} />
// <Button title="Go to Component Three" onPress={() => navigation.navigate('ComponentThree')} />
// <Button title="Go to Component Four" onPress={() => navigation.navigate('ComponentFour')} />
// <Button title="Go to Component Five" onPress={() => navigation.navigate('ComponentFive')} />
// <Button title="Go to Component Six" onPress={() => navigation.navigate('ComponentSix')} />
// <Button title="Go to Component Seven" onPress={() => navigation.navigate('ComponentSeven')} />
// <Button title="Go to Component Eight" onPress={() => navigation.navigate('ComponentEight')} />
// </>
//   )
// }


// const App = () => {



//   return (
//     <View style={styles.container}>
//       <Text>Hello Swarmbotics AI</Text>
//       <NavigationContainer>
// <RootStack.Navigator mode="modal">
//   <RootStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
//   <RootStack.Screen name="AddNewPalette" component={AddNewPaletteModal} />
//   {/* Define navigation to your components here */}
//   <RootStack.Screen name="ComponentOne" component={ComponentOne} />
//   <RootStack.Screen name="ComponentTwo" component={ComponentTwo} />
//   <RootStack.Screen name="ComponentThree" component={ComponentThree} />
//   <RootStack.Screen name="ComponentFour" component={ComponentFour} />
//   <RootStack.Screen name="ComponentFive" component={ComponentFive} />
//   <RootStack.Screen name="ComponentSix" component={ComponentSix} />
//   <RootStack.Screen name="ComponentSeven" component={ComponentSeven} />
//   <RootStack.Screen name="ComponentEight" component={ComponentEight} />
// </RootStack.Navigator>
// </NavigationContainer>
// <NavigationButtons />
//      </View>
//   )
// }

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  let numViews = 8;
  let numWords = 'one two three four five six seven eight'.split(' ')


  let content = numWords.map((word, index) => {
    return (<Button
      title={`Go to Screen ${index + 1}`}
      onPress={() => navigation.navigate(word)}
      />)
  })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {content}
    </View>
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


//main thread
//bridge 
//js - business logic? 



export default App;


// import { NavigationContainer } from '@react-navigation/native';
// import { StyleSheet, Text, View } from 'react-native';




// const App = () => {
//   return (

//     <NavigationContainer>
//     <View style={styles.container}>
//       <Text>Hello world</Text>
//      </View>

//      <Text>Hmm</Text>

//       {/* Rest of the app code */}
      
//       </NavigationContainer>
//   );
// };

// export default App;










// import { StatusBar } from 'expo-status-bar';




// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>{window.innerWidth}124</Text>
//       <Text>Open up App.js to start working on your app!!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

