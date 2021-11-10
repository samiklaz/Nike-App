import React from 'react'
import {Image, TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'

import Home from './screens/Home'
import {icons, COLORS, FONTS, SIZES} from './constants'


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  }
}

const stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <stack.Navigator
        initialRouteName={'Home'}
      >
        <stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'SHOE',
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              ...FONTS.navTitle
            },
            headerLeft: ({ onPress }) => (
              <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={onPress}
              >
                <Image 
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding}}
                onPress={() => console.log("Header Right on Pressed")}
              >
                <Image 
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30
                  }}
                />
              </TouchableOpacity>
          )
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App