import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';
import React from 'react';

import { View, StyleSheet } from 'react-native';

import Todo from '~/components/Todo.android';

const bgColor = '#969696';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Todo title="Fazer café" />
    <Todo title="Estudar o Módulo 1" />
  </View>
);

export default App;
