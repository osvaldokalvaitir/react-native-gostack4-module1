import "./config/ReactotronConfig";

import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

import Todo from "./components/Todo";

console.tron.log("Hello World");

export default class App extends Component {
  state = {
    usuario: "Osvaldo",
    todos: [
      { id: 0, text: "Fazer café" },
      { id: 1, text: "Estudar o Módulo 1" }
    ]
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "Novo todo" }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box}>
          <Text style={styles.boxText}>Oi</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center"
  },

  box: {
    width: 80,
    height: 80,
    backgroundColor: "#F00",
    margin: 10,
    transform: [{ rotateZ: "20deg" }]
  },

  boxText: {
    color: "#FFF"
  }
});
