import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/Tabs";
import MainContainer from "./navigation/MainContainer";
import InterPage from './Screens/pages/InterPage';
import Loginpage from './Screens/pages/Loginpage';
import Registerpage from './Screens/pages/Registerpage';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inter'>
      <Stack.Screen name ="Inter" component={InterPage}
      options={{
        headerShown: false,
       }}  
      />
      <Stack.Screen name ="Login" component={Loginpage}
      options={{
        headerShown: false,
       }}  
      />
      <Stack.Screen name ="Register" component={Registerpage}
      options={{
        headerShown: false,
       }}  
      />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF2",
  },
});

export default App;
