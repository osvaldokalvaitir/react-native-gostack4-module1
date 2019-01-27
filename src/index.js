import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Todo from '~/components/Todo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class App extends Component {
  state = {
    usuario: 'Osvaldo',
    todos: [{ id: 0, text: 'Fazer café' }, { id: 1, text: 'Estudar o Módulo 1' }],
  };

  render() {
    return (
      <View style={styles.container}>
        <Todo title="Fazer café" />
        <Todo title="Estudar o Módulo 1" />
      </View>
    );
  }
}
