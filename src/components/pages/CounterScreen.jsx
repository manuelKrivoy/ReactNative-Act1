import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clase 4 : 16/4 </Text>
      <Text style={styles.counterText}>{counter}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "green" }]}
          onPress={() => {
            setCounter(counter + 1);
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={() => {
            setCounter(counter - 1);
          }}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "gray" }]}
          onPress={() => {
            setCounter(0);
          }}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 44,
    marginBottom: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  counterText: {
    fontSize: 35,
    marginBottom: 20,
    backgroundColor: "lightblue",
    borderRadius: 45,
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#000000",
  },
});

export default CounterScreen;
