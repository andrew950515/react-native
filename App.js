/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Greeting />
      </View>
    </SafeAreaView>
  );
};

export default App;
