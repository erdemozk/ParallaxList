import React from 'react';
import { SafeAreaView } from 'react-native';

import ParallaxList from './src/views/ParallaxList';

const movieGenresList = require('./assets/movieGenresList.json');

const App = () => {
  return (
    <SafeAreaView>
      <ParallaxList data={movieGenresList}/>
    </SafeAreaView>
  );
};

export default App;